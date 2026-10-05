package com.baeldung.ex.beancreationexception.cause5;

import org.springframework.stereotype.Component;

@Component
public class BeanA implements IBeanA {

    public BeanA(final String name) {
        System.out.println(name);
    }

}