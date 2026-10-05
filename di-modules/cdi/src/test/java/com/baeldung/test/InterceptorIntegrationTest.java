package com.baeldung.test;

import org.jboss.weld.environment.se.Weld;
import org.jboss.weld.environment.se.WeldContainer;
import org.junit.jupiter.api.AfterEach;
import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.baeldung.interceptor.AuditedInterceptor;
import com.baeldung.service.SuperService;

public class InterceptorIntegrationTest {
    Weld weld;
    WeldContainer container;

    @BeforeEach
    public void init() {
        weld = new Weld();
        container = weld.initialize();
    }

    @AfterEach
    public void shutdown() {
        weld.shutdown();
    }

    @Test
    public void givenTheService_whenMethodAndInterceptorExecuted_thenOK() {
        SuperService superService = container.select(SuperService.class).get();
        String code = "123456";
        superService.deliverService(code);

        Assert.assertTrue(AuditedInterceptor.calledBefore);
        Assert.assertTrue(AuditedInterceptor.calledAfter);
    }

}
