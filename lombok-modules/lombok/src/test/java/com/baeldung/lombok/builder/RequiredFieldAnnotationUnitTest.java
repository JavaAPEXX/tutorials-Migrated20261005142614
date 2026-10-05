package com.baeldung.lombok.builder;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class RequiredFieldAnnotationUnitTest {
    RequiredFieldAnnotation requiredFieldTest;

    @BeforeEach
    public void setUp() {
        requiredFieldTest = RequiredFieldAnnotation.builder("NameField").description("Field Description").build();
    }

    @Test
    public void givenBuilderWithRequiredParameter_thenParameterIsPresent() {
        assertEquals("NameField", requiredFieldTest.getName());
    }

}