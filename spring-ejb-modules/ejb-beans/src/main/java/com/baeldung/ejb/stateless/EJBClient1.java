package com.baeldung.ejb.stateless;

import jakarta.ejb.EJB;

public class EJBClient1 {

    @EJB
    public StatelessEJB statelessEJB;

}