package com.baeldung.scheduling;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:springScheduled-config.xml")
public class SchedulingWithXmlConfigIntegrationTest {

    @Test
    public void testXmlBasedScheduling() throws InterruptedException {
        Thread.sleep(5000);
    }
}
