package com.baeldung.ignore;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

public class IgnoreMethodUnitTest {

    @Ignore("This test method not ready yet")
    @Test
    public void whenMethodIsIgnored_thenTestsDoNotRun() {

    }
}
