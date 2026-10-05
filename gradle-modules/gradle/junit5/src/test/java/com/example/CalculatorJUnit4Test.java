package com.example;

import static org.junit.Assert.assertEquals;

import org.junit.jupiter.api.Test;

public class CalculatorJUnit4Test {
    @Test
    public void testAdd() {
        assertEquals(42, Integer.sum(19, 23));
    }
}
