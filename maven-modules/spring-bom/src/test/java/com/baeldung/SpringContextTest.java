package com.baeldung;

import org.junit.jupiter.api.Test;

import com.baeldung.spring.bom.HelloWorldApp;

public class SpringContextTest {

	@Test
    public final void testMain() throws Exception {
		HelloWorldApp.main(null);
	}
}
