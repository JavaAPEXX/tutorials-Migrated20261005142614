package com.baeldung.ejb.tutorial;

import jakarta.ejb.Remote;

@Remote
public interface HelloStatefulWorld {

    int howManyTimes();
    String getHelloWorld();
    
}
