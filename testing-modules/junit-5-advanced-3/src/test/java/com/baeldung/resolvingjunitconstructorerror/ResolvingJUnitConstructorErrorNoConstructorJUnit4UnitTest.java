package com.baeldung.resolvingjunitconstructorerror;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.Assert.assertEquals;

public class ResolvingJUnitConstructorErrorNoConstructorJUnit4UnitTest {

    private ResolvingJUnitConstructorError service;
    private int input;

    @BeforeEach
    public void setUp() {
        service = new ResolvingJUnitConstructorError();
        input = 2;
    }

    @Test
    public void givenNumber_whenSquare_thenReturnsCorrectResult() {
        assertEquals(input * input, service.square(input));
    }
}
