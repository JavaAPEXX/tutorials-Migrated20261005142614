package com.baeldung.oauth2.resource.server.secure;

import org.eclipse.microprofile.jwt.JsonWebToken;

import jakarta.annotation.security.RolesAllowed;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;
import java.util.UUID;

@Path("/resource")
@RequestScoped
public class ProtectedResource {

    @Inject
    private JsonWebToken principal;

    @GET
    @RolesAllowed("resource.read")
    @Path("/read")
    public Response read() {
        //DoStaff
        return Response.ok("Hello, " + principal.getName()).build();
    }

    @POST
    @RolesAllowed("resource.write")
    @Path("/write")
    public Response write() {
        //DoStaff
        return Response.ok("Hello, " + principal.getName())
                .header("location", UUID.randomUUID().toString())
                .build();
    }
}
