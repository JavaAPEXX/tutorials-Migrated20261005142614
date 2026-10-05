package com.baeldung.interview;

import org.junit.jupiter.api.Test;

import static org.junit.Assert.assertEquals;

public class StringReverseUnitTest {
    @Test
    public void whenUsingInbuildMethods_thenStringReversed() {
        String reversed = new StringBuilder("baeldung").reverse().toString();
        assertEquals("gnudleab", reversed);
    }
}
