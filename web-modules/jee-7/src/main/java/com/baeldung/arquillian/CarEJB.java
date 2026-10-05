package com.baeldung.arquillian;

import java.util.ArrayList;
import java.util.List;

import jakarta.ejb.Stateless;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;

@Stateless
public class CarEJB {
    @PersistenceContext(unitName = "defaultPersistenceUnit")
    private EntityManager em;

    public Car saveCar(final Car car) {
        em.persist(car);
        return car;
    }

    @SuppressWarnings("unchecked")
    public List<Car> findAllCars() {
        final Query query = em.createQuery("SELECT b FROM Car b ORDER BY b.name ASC");
        List<Car> entries = query.getResultList();
        if (entries == null) {
            entries = new ArrayList<>();
        }
        return entries;
    }

    public void deleteCar(Car car) {
        car = em.merge(car);
        em.remove(car);
    }
}