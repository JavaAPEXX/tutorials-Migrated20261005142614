package com.baeldung.maven.plugins;

import static org.junit.Assert.assertNull;

import org.junit.jupiter.api.Test;

import com.baeldung.maven.plugins.Data;

public class DataUnitTest {
    @Test
    public void whenDataObjectIsNotCreated_thenItIsNull() {
        Data data = null;
        assertNull(data);
    }
}
