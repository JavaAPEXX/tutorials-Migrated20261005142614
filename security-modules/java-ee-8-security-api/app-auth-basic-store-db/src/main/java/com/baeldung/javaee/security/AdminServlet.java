package com.baeldung.javaee.security;

import jakarta.servlet.annotation.HttpConstraint;
import jakarta.servlet.annotation.ServletSecurity;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/admin")
@ServletSecurity(value = @HttpConstraint(rolesAllowed = {"admin_role"}))
public class AdminServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.getWriter().append("User :" + request.getUserPrincipal().getName() + "\n");
        response.getWriter().append("User in Role user_role :" + request.isUserInRole("user_role") + "\n");
        response.getWriter().append("User in Role admin_role :" + request.isUserInRole("admin_role"));
    }
}