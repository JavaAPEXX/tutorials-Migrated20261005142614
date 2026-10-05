package com.baeldung.neuroph;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.neuroph.core.NeuralNetwork;

import neuroph.NeurophXOR;

public class XORIntegrationTest {
    private NeuralNetwork ann = null;

    private void print(String input, double output, double actual) {
        System.out.println("Testing: " + input + " Expected: " + actual + " Result: " + output);
    }

    @BeforeEach
    public void annInit() {
        ann = NeurophXOR.trainNeuralNetwork(NeurophXOR.assembleNeuralNetwork());
    }

    @Test
    public void leftDisjunctTest() {
        ann.setInput(0, 1);
        ann.calculate();
        print("0, 1", ann.getOutput()[0], 1.0);
        assertEquals(ann.getOutput()[0], 1.0, 0.0);
    }

    @Test
    public void rightDisjunctTest() {
        ann.setInput(1, 0);
        ann.calculate();
        print("1, 0", ann.getOutput()[0], 1.0);
        assertEquals(ann.getOutput()[0], 1.0, 0.0);
    }

    @Test
    public void bothFalseConjunctTest() {
        ann.setInput(0, 0);
        ann.calculate();
        print("0, 0", ann.getOutput()[0], 0.0);
        assertEquals(ann.getOutput()[0], 0.0, 0.0);
    }

    @Test
    public void bothTrueConjunctTest() {
        ann.setInput(1, 1);
        ann.calculate();
        print("1, 1", ann.getOutput()[0], 0.0);
        assertEquals(ann.getOutput()[0], 0.0, 0.0);
    }

    @AfterEach
    public void annClose() {
        ann = null;
    }
}