package com.baeldung.r;


import org.junit.Assert;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

/**
 * Test for {@link FastRMean}.
 * 
 * @author Donato Rimenti
 */
@Disabled
public class FastRMeanUnitTest {

    /**
     * Object to test.
     */
    private FastRMean fastrMean = new FastRMean();

    /**
     * Test for {@link FastRMeanUnitTest#mean(int[])}.
     */
    @Test
    public void givenValues_whenMean_thenCorrect() {
        int[] input = { 1, 2, 3, 4, 5 };
        double result = fastrMean.mean(input);
        Assert.assertEquals(3.0, result, 0.000001);
    }
}