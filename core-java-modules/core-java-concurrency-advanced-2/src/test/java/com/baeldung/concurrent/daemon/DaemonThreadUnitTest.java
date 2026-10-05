package com.baeldung.concurrent.daemon;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

public class DaemonThreadUnitTest {

    @Test
    @Disabled
    public void whenCallIsDaemon_thenCorrect() {
        NewThread daemonThread = new NewThread();
        daemonThread.setDaemon(true);
        daemonThread.start();
        assertTrue(daemonThread.isDaemon());

        NewThread userThread = new NewThread();
        userThread.start();
        assertFalse(userThread.isDaemon());
    }

    @Test(expected = IllegalThreadStateException.class)
    @Disabled
    public void givenUserThread_whenSetDaemonWhileRunning_thenIllegalThreadStateException() {
        NewThread daemonThread = new NewThread();
        daemonThread.start();
        daemonThread.setDaemon(true);
    }
}
