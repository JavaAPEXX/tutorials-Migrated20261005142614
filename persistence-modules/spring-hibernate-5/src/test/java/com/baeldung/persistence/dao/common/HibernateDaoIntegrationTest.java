package com.baeldung.persistence.dao.common;

import com.baeldung.persistence.model.Foo;
import com.baeldung.spring.PersistenceConfig;
import org.apache.commons.lang3.RandomStringUtils;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.AnnotationConfigContextLoader;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = { PersistenceConfig.class }, loader = AnnotationConfigContextLoader.class)
public class HibernateDaoIntegrationTest {

    @Autowired
    private SessionFactory sessionFactory;

    private Session session;

    @BeforeEach
    public final void before() {
        session = sessionFactory.openSession();
    }

    @AfterEach
    public final void after() {
        session.close();
    }

    @Test
    public final void whenContextIsBootstrapped_thenNoExceptions() {
        //
    }

    @Test
    public final void whenPersistEntity_thenSuccess() {
        session.persist(new Foo(RandomStringUtils.randomAlphabetic(5).toUpperCase()));
    }

}
