package com.baeldung.jersey.server;

import static com.baeldung.jersey.server.http.EmbeddedHttpServer.BASE_URI;
import static org.junit.Assert.assertEquals;

import org.glassfish.grizzly.http.server.HttpServer;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.baeldung.jersey.server.http.EmbeddedHttpServer;

import jakarta.ws.rs.client.ClientBuilder;
import jakarta.ws.rs.client.WebTarget;

public class ItemsUnitTest {

    private HttpServer server;
    private WebTarget target;

    @BeforeEach
    public void setUp() {
        server = EmbeddedHttpServer.startServer(BASE_URI);
        target = ClientBuilder.newClient().target(BASE_URI.toString());
    }

    @AfterEach
    public void tearDown() {
        server.stop();
    }

    @Test
    public void givenCookieParameter_whenGet_thenReturnsExpectedText() {
        String paramValue = "1";
        String responseText = target.path("items/cookie").request().cookie("cookieParamToRead", paramValue).get(String.class);
        assertEquals("Cookie parameter value is [" + paramValue + "]", responseText);
    }

    @Test
    public void givenHeaderParameter_whenGet_thenReturnsExpectedText() {
        String paramValue = "2";
        String responseText = target.path("items/header").request().header("headerParamToRead", paramValue).get(String.class);
        assertEquals("Header parameter value is [" + paramValue + "]", responseText);
    }

    @Test
    public void givenPathParameter_whenGet_thenReturnsExpectedText() {
        String paramValue = "3";
        String responseText = target.path("items/path/" + paramValue).request().get(String.class);
        assertEquals("Path parameter value is [" + paramValue + "]", responseText);
    }
}
