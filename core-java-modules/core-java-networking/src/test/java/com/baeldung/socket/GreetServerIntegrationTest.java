package com.baeldung.socket;

import static org.junit.Assert.assertEquals;

import java.io.IOException;
import java.net.ServerSocket;
import java.util.concurrent.Executors;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.BeforeClass;
import org.junit.jupiter.api.Test;

public class GreetServerIntegrationTest {

    private GreetClient client;

    private static int port;

    @BeforeClass
    public static void start() throws InterruptedException, IOException {
        
        // Take an available port
        ServerSocket s = new ServerSocket(0);
        port = s.getLocalPort();
        s.close();
        
        Executors.newSingleThreadExecutor()
            .submit(() -> new GreetServer().start(port));
        Thread.sleep(2000);
    }

    @BeforeEach
    public void init() {
        client = new GreetClient();
        client.startConnection("127.0.0.1", port);

    }

    @Test
    public void givenGreetingClient_whenServerRespondsWhenStarted_thenCorrect() {
        String response = client.sendMessage("hello server");
        assertEquals("hello client", response);
    }

    @AfterEach
    public void finish() {
        client.stopConnection();
    }
}
