package com.baeldung.securitymanager;

import java.net.URI;
import java.security.AccessControlException;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class SecurityManagerUnitTest {

    private static final String TESTING_SECURITY_POLICY = "file:src/test/resources/testing.policy";

    @BeforeEach
    public void setUp() {
        System.setProperty("java.security.policy", TESTING_SECURITY_POLICY);
        System.setSecurityManager(new SecurityManager());
    }

    @AfterEach
    public void tearDown() {
        System.setSecurityManager(null);
    }

    @Test(expected = AccessControlException.class)
    public void whenSecurityManagerIsActive_thenNetworkIsNotAccessibleByDefault() throws Exception {
        new URI("http://www.google.com").toURL().openConnection().connect();
    }

    @Test(expected = AccessControlException.class)
    public void whenUnauthorizedClassTriesToAccessProtectedOperation_thenAnExceptionIsThrown() {
        new Service().operation();
    }
}
