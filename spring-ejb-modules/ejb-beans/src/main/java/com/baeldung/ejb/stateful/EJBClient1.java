package com.baeldung.ejb.stateful;

import jakarta.ejb.EJB;

public class EJBClient1 {

    @EJB
    public StatefulEJB statefulEJB;


}