package com.baeldung.examples.olingo2;

import org.apache.olingo.odata2.api.ODataServiceFactory;
import org.apache.olingo.odata2.core.rest.ODataRootLocator;
import org.apache.olingo.odata2.core.rest.app.ODataApplication;
import org.glassfish.jersey.server.ResourceConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.EntityTransaction;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerRequestFilter;
import jakarta.ws.rs.container.ContainerResponseContext;
import jakarta.ws.rs.container.ContainerResponseFilter;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.ext.Provider;

@Component
@ApplicationPath("/odata")
public class JerseyConfig extends ResourceConfig {


    public JerseyConfig(CarsODataJPAServiceFactory serviceFactory, EntityManagerFactory emf) {

        ODataApplication app = new ODataApplication();

        app
          .getClasses()
          .forEach( c -> {
              // Avoid using the default RootLocator, as we want
              // a Spring Managed one
              if ( !ODataRootLocator.class.isAssignableFrom(c)) {
                  register(c);
              }
          });

        register(new CarsRootLocator(serviceFactory));
        register( new EntityManagerFilter(emf));
    }

    /**
     * This filter handles the EntityManager transaction lifecycle.
     * @author Philippe
     *
     */
    @Provider
    public static class EntityManagerFilter implements ContainerRequestFilter, ContainerResponseFilter {

        private static final Logger log = LoggerFactory.getLogger(EntityManagerFilter.class);
        public static final String EM_REQUEST_ATTRIBUTE = EntityManagerFilter.class.getName() + "_ENTITY_MANAGER";

        private final EntityManagerFactory emf;

        @Context
        private HttpServletRequest httpRequest;

        public EntityManagerFilter(EntityManagerFactory emf) {
            this.emf = emf;
        }

        @Override
        public void filter(ContainerRequestContext ctx) {
            log.info("[I60] >>> filter");
            EntityManager em = this.emf.createEntityManager();
            httpRequest.setAttribute(EM_REQUEST_ATTRIBUTE, em);

            // Start a new transaction unless we have a simple GET
            if (!"GET".equalsIgnoreCase(ctx.getMethod())) {
                em.getTransaction()
                    .begin();
            }
        }

        @Override
        public void filter(ContainerRequestContext requestContext, ContainerResponseContext responseContext) {

            log.info("[I68] <<< filter");
            EntityManager em = (EntityManager) httpRequest.getAttribute(EM_REQUEST_ATTRIBUTE);

            if (!"GET".equalsIgnoreCase(requestContext.getMethod())) {
                EntityTransaction t = em.getTransaction();
                if (t.isActive()) {
                    if (!t.getRollbackOnly()) {
                        t.commit();
                    }
                }
            }

            em.close();

        }

    }

    @Path("/")
    public static class CarsRootLocator extends ODataRootLocator {

        private CarsODataJPAServiceFactory serviceFactory;

        public CarsRootLocator(CarsODataJPAServiceFactory serviceFactory) {
            this.serviceFactory = serviceFactory;
        }

        @Override
        public ODataServiceFactory getServiceFactory() {
            return this.serviceFactory;
        }

    }

}
