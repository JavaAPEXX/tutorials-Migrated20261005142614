package com.baeldung.ejbspringcomparison.ejb.singleton;

import jakarta.ejb.Remote;

@Remote
public interface CounterEJBRemote {
    int count();
    String getName();
    void setName(String name);
}
