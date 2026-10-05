package com.baeldung.ejbspringcomparison.ejb.stateless;

import jakarta.ejb.Remote;

@Remote
public interface FinderEJBRemote {

    String search(String keyword);
}
