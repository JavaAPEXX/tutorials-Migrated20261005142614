/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.baeldung.enums.values;

import org.junit.jupiter.api.AfterEach;
import org.junit.AfterClass;
import org.junit.jupiter.api.BeforeEach;
import org.junit.BeforeClass;
import org.junit.jupiter.api.Test;
import static org.junit.Assert.*;

/**
 *
 * @author chris
 */
public class Element3UnitTest {
    
    public Element3UnitTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @BeforeEach
    public void setUp() {
    }
    
    @AfterEach
    public void tearDown() {
    }

    @Test
    public void whenLocatebyLabel_thenReturnCorrectValue() {
        for (Element3 e3 : Element3.values()) {
            assertSame(e3, Element3.valueOfLabel(e3.label));
        }
    }

    /**
     * Test of toString method, of class Element3.
     */
    @Test
    public void whenCallingToString_thenReturnLabel() {
        for (Element3 e3 : Element3.values()) {
            assertEquals(e3.label, e3.toString());
        }
    }
    
}
