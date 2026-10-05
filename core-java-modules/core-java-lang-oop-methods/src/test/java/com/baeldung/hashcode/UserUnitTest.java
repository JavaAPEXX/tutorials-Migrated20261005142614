package com.baeldung.hashcode;

import com.baeldung.hashcode.standard.User;
import org.junit.jupiter.api.AfterEach;
import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class UserUnitTest {

    private User user;
    private User comparisonUser;

    @BeforeEach
    public void setUpUserInstances() {
        this.user = new User(1L, "test", "test@domain.com");
        this.comparisonUser = this.user;
    }

    @AfterEach
    public void tearDownUserInstances() {
        user = null;
        comparisonUser = null;
    }

    @Test
    public void equals_EqualUserInstance_TrueAssertion() {
        Assert.assertTrue(user.equals(comparisonUser));
    }

    @Test
    public void hashCode_UserHash_TrueAssertion() {
        Assert.assertEquals(1792276941, user.hashCode());
    }
}