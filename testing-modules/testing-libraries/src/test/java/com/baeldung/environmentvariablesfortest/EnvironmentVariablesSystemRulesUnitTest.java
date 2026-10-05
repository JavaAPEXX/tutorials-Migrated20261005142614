package com.baeldung.environmentvariablesfortest;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.Rule;
import org.junit.jupiter.api.Test;
import org.junit.contrib.java.lang.system.EnvironmentVariables;

public class EnvironmentVariablesSystemRulesUnitTest {
    @Rule
    public EnvironmentVariables environmentVariablesRule = new EnvironmentVariables();

    @BeforeEach
    public void before() {
        environmentVariablesRule.set("system rules", "works");
    }

    @Test
    public void givenEnvironmentVariable_thenCanReadIt() {
        assertThat(System.getenv("system rules")).isEqualTo("works");
    }
}
