package com.baeldung.repository;

import com.baeldung.model.User;
import com.baeldung.repository.UserRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;

/**
 * 
 * This test requires:
 * * mongodb instance running on the environment
 *
 */
public class BaseQueryLiveTest {

    @Autowired
    protected UserRepository userRepository;

    @Autowired
    protected MongoOperations mongoOps;

    @BeforeEach
    public void testSetup() {
        if (!mongoOps.collectionExists(User.class)) {
            mongoOps.createCollection(User.class);
        }
    }

    @AfterEach
    public void tearDown() {
        mongoOps.dropCollection(User.class);
    }
}