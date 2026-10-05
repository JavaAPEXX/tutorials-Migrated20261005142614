package com.baeldung.java9.language;

import com.baeldung.java9.language.PrivateInterface;
import org.junit.jupiter.api.Test;

public class PrivateInterfaceUnitTest {

    @Test
    public void test() {
        PrivateInterface piClass = new PrivateInterface() {
        };
        piClass.check();
    }

}
