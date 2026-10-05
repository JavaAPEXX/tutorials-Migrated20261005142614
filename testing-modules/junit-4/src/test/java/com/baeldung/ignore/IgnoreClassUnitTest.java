package com.baeldung.ignore;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

@Ignore("Class not ready for tests")
public class IgnoreClassUnitTest {

    @Test
    public void whenDoTest_thenAssert() {

    }
}
