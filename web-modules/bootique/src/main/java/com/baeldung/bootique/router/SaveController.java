package com.baeldung.bootique.router;

import com.baeldung.bootique.service.HelloService;
import com.google.inject.Inject;

import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;

@Path("/save")
public class SaveController {

    @Inject
    HelloService helloService;

    @POST
    public String save() {
        return "Data Saved!";
    }

}
