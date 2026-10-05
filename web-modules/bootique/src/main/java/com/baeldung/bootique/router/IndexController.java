package com.baeldung.bootique.router;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

@Path("/")
public class IndexController {

    @GET
    public String index() {
        return "Hello, baeldung!";
    }

}
