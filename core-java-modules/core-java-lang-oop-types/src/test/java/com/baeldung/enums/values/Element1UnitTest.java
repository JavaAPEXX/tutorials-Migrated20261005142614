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
public class Element1UnitTest {
    
    public Element1UnitTest() {
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
    public void whenAccessingToString_thenItShouldEqualName() {
        for (Element1 e1 : Element1.values()) {
            assertEquals(e1.name(), e1.toString());
        }
    }
    
    @Test
    public void whenCallingValueOf_thenReturnTheCorrectEnum() {
        for (Element1 e1 : Element1.values()) {
            assertSame(e1, Element1.valueOf(e1.name()));
        }
    }
}
