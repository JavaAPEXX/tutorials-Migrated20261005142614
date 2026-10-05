package com.apache.baeldung;

import org.junit.jupiter.api.Test;

import com.baeldung.camel.apache.main.App;

public class SpringContextTest {

	@Test
    public final void testMain() throws Exception {
        App.main(null);
	}
}
