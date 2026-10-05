package com.baeldung.junit4vstestng;

import org.junit.jupiter.api.AfterEach;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.BeforeClass;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

public class SummationServiceIntegrationTest {
    private static List<Integer> numbers;

    @BeforeClass
    public static void initialize() {
        numbers = new ArrayList<>();
    }

    @AfterClass
    public static void tearDown() {
        numbers = null;
    }

    @BeforeEach
    public void runBeforeEachTest() {
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
    }

    @AfterEach
    public void runAfterEachTest() {
        numbers.clear();
    }

    @Test
    public void givenNumbers_sumEquals_thenCorrect() {
        int sum = numbers.stream()
            .reduce(0, Integer::sum);
        Assert.assertEquals(6, sum);
    }

    @Disabled
    @Test
    public void givenEmptyList_sumEqualsZero_thenCorrect() {
        int sum = numbers.stream()
            .reduce(0, Integer::sum);
        Assert.assertEquals(6, sum);
    }

    @Test(expected = ArithmeticException.class)
    public void givenNumber_whenThrowsException_thenCorrect() {
        int i = 1 / 0;
    }
}
