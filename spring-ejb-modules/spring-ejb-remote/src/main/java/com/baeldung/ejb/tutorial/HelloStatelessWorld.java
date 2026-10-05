package com.baeldung.ejb.tutorial;

import jakarta.ejb.Remote;

@Remote
public interface HelloStatelessWorld {
    
    String getHelloWorld();
    
}
