package com.baeldung.ejb.tutorial;

import jakarta.annotation.Resource;
import jakarta.ejb.SessionContext;
import jakarta.ejb.Stateless;

@Stateless(name = "HelloWorld")
public class HelloWorldBean implements HelloWorld {

    @Resource
    private SessionContext context;

    @Override
    public String getHelloWorld() {
        return "Welcome to EJB Tutorial!";
    }

    
}
