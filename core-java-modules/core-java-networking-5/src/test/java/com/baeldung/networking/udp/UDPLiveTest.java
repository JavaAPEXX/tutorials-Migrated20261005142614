package com.baeldung.networking.udp;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;

import java.io.IOException;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class UDPLiveTest {
    private EchoClient client;

    @BeforeEach
    public void setup() throws IOException {
        new EchoServer().start();
        client = new EchoClient();
    }

    @Test
    public void whenCanSendAndReceivePacket_thenCorrect1() {
        String echo = client.sendEcho("hello server");
        assertEquals("hello server", echo);
        echo = client.sendEcho("server is working");
        assertFalse("hello server".equals(echo));
    }

    @AfterEach
    public void tearDown() {
        stopEchoServer();
        client.close();
    }

    private void stopEchoServer() {
        client.sendEcho("end");
    }
}
