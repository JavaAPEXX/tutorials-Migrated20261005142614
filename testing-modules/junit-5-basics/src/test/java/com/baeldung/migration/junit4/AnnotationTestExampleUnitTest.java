package com.baeldung.migration.junit4;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.experimental.categories.Category;

import com.baeldung.migration.junit4.categories.Annotations;
import com.baeldung.migration.junit4.categories.JUnit4UnitTest;

@Category(value = { Annotations.class, JUnit4UnitTest.class })
public class AnnotationTestExampleUnitTest {
    @Test(expected = Exception.class)
    public void shouldRaiseAnException() throws Exception {
        throw new Exception("This is my expected exception");
    }

    @Test(timeout = 1)
    @Disabled
    public void shouldFailBecauseTimeout() throws InterruptedException {
        Thread.sleep(10);
    }

}
