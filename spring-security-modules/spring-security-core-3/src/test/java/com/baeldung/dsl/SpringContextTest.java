package com.baeldung.dsl;


import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.baeldung.dsl.CustomConfigurerApplication;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = CustomConfigurerApplication.class)
public class SpringContextTest {

    @Test
    public void whenSpringContextIsBootstrapped_thenNoExceptions() {
    }
}
