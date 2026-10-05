package com.baeldung.msf4j.msf4jintro;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;

@Path("/")
public class SimpleService {

    @GET
    public String index() {
        return "Default content";
    }

    @GET
    @Path("/say/{name}")
    public String say(@PathParam("name") String name) {
        return "Hello " + name;
    }

}
