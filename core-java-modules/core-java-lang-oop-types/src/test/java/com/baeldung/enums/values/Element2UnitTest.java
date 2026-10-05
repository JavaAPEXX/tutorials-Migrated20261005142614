package com.baeldung.enums.values;

import org.junit.jupiter.api.AfterEach;
import org.junit.AfterClass;
import org.junit.jupiter.api.BeforeEach;
import org.junit.BeforeClass;
import org.junit.jupiter.api.Test;
import static org.junit.Assert.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 *
 * @author chris
 */
public class Element2UnitTest {
    private static final Logger LOGGER = LoggerFactory.getLogger(Element2UnitTest.class);
    
    public Element2UnitTest() {
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
        for (Element2 e2 : Element2.values()) {
            // FIX: Skip UNKNOWN element, as it's not meant to be looked up by its own label in this test
            if (e2 == Element2.UNKNOWN) { 
                continue;
            }
            assertSame(e2, Element2.valueOfLabel(e2.label));
        }
    }

    @Test
    public void whenLocatebyUnknownLabel_thenReturnUNKNOWN() {
        // New test to ensure an unknown label returns the UNKNOWN constant
        assertSame(Element2.UNKNOWN, Element2.valueOfLabel("Unobtainium"));
        // Test for null label, which should also return UNKNOWN
        assertSame(Element2.UNKNOWN, Element2.valueOfLabel(null));
    }

    /**
     * Test of toString method, of class Element2.
     */
    @Test
    public void whenCallingToString_thenReturnLabel() {
        for (Element2 e2 : Element2.values()) {
            assertEquals(e2.label, e2.toString());
        }
    }
}
