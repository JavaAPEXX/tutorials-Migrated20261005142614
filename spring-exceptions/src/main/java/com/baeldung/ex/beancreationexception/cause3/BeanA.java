package com.baeldung.ex.beancreationexception.cause3;

import org.springframework.stereotype.Component;

@Component
public class BeanA {

    public BeanA() {
        throw new NullPointerException();
    }
}