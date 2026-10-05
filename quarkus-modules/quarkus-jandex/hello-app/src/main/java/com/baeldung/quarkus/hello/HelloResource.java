package com.baeldung.quarkus.hello;

import com.baeldung.quarkus.hello.service.HelloService;

import javax.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/hello")
public class HelloResource {

    @Inject
    HelloService service;

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        StringBuilder sb = new StringBuilder();
        sb.append("Those are saying hello:\n=======================\n\n");
        service.sendHello(s -> sb.append(" - ").append(s).append("\n"));
        return sb.toString();
    }

}
