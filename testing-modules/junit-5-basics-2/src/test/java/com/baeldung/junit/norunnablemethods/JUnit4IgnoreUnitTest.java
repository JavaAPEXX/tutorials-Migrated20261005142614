package com.baeldung.junit.norunnablemethods;

import org.junit.Assert;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

public class JUnit4IgnoreUnitTest {
    
    @Disabled
    @Test
    public void whenMethodIsIgnored_thenTestsDoNotRun() {
        Assert.assertTrue(true);
    }
}