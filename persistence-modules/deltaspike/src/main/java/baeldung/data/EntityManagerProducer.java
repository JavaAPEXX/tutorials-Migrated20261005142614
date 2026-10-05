package baeldung.data;

import javax.enterprise.context.RequestScoped;
import javax.enterprise.inject.Produces;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

public class EntityManagerProducer {

    @PersistenceContext(unitName = "primary") private EntityManager entityManager;

    @RequestScoped
    @Produces
    public EntityManager create() {
        return entityManager;
    }

}