package com.baeldung.springsecurity.controller;

import jakarta.mvc.annotation.Controller;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

@Path("/auth/login")
@Controller
public class LoginController {

    @GET
    public String login() {
        return "login.jsp";
    }
}
