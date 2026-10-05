package com.baeldung.wicket.examples;

import org.apache.wicket.util.tester.WicketTester;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class HomePageIntegrationTest {
    private WicketTester tester;

    @BeforeEach
    public void setUp() {
        tester = new WicketTester(new HelloWorldApplication());
    }

    @Test
    public void whenPageInvoked_thanRenderedOK() {
        //start and render the test page
        tester.startPage(HelloWorld.class);

        //assert rendered page class
        tester.assertRenderedPage(HelloWorld.class);
    }
}
