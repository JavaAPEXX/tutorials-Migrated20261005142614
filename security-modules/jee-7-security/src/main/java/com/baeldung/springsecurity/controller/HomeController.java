package com.baeldung.springsecurity.controller;

import jakarta.mvc.annotation.Controller;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

@Path("/home")
@Controller
public class HomeController {

    @GET
    public String home() {
        return "home.jsp";
    }

    @GET
    @Path("/user")
    public String admin() {
        return "user.jsp";
    }

    @GET
    @Path("/admin")
    public String user() {
        return "admin.jsp";
    }

}
