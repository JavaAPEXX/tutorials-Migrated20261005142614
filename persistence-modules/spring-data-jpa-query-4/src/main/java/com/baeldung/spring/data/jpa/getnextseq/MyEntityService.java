package com.baeldung.spring.data.jpa.getnextseq;

import java.math.BigInteger;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import org.springframework.stereotype.Service;

@Service
public class MyEntityService {

    @PersistenceContext
    private EntityManager entityManager;

    public Long getNextSequenceValue(String sequenceName) {
        BigInteger nextValue = (BigInteger) entityManager.createNativeQuery("SELECT NEXTVAL(:sequenceName)")
            .setParameter("sequenceName", sequenceName)
            .getSingleResult();
        return nextValue.longValue();
    }
}
