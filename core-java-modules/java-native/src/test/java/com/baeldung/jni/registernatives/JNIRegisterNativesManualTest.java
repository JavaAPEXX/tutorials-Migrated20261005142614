package com.baeldung.jni.registernatives;

import com.baeldung.jni.RegisterNativesHelloWorldJNI;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

public class JNIRegisterNativesManualTest {
    @BeforeEach
    public void setup() {
        System.loadLibrary("native");
    }

    @Test
    public void whenRegisteredNativeHelloWorld_thenOutputIsAsExpected() {
        RegisterNativesHelloWorldJNI helloWorld = new RegisterNativesHelloWorldJNI();
        helloWorld.register();

        String helloFromNative = helloWorld.sayHello();

        assertNotNull(helloFromNative);
        assertTrue("Hello from registered native C++ !!".equals(helloFromNative));
    }
}
