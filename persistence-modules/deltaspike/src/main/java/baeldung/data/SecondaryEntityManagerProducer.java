package baeldung.data;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.context.RequestScoped;
import javax.enterprise.inject.Produces;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@ApplicationScoped
public class SecondaryEntityManagerProducer {

    @PersistenceContext(unitName = "secondary") private EntityManager entityManager;

    @Produces
    @RequestScoped
    @SecondaryPersistenceUnit
    public EntityManager create() {
        return entityManager;
    }

}