package com.baeldung.javaee.security;

import javax.inject.Inject;
import javax.security.enterprise.SecurityContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.HttpConstraint;
import jakarta.servlet.annotation.ServletSecurity;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.security.Principal;

@WebServlet("/admin")
@ServletSecurity(value = @HttpConstraint(rolesAllowed = {"admin_role"}))
public class AdminServlet extends HttpServlet {

    @Inject
    SecurityContext securityContext;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.getWriter().append("getCallerPrincipal :" + securityContext.getCallerPrincipal() + "\n");
        response.getWriter().append("CustomPrincipal :" + securityContext.getPrincipalsByType(CustomPrincipal.class) + "\n");
        response.getWriter().append("Principal :" + securityContext.getPrincipalsByType(Principal.class) + "\n");
    }
}