package com.baeldung.oauth2.authorization.server.api;

import com.baeldung.oauth2.authorization.server.PEMKeyUtils;
import com.nimbusds.jose.jwk.JWK;
import org.eclipse.microprofile.config.Config;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.Arrays;

@Path("jwk")
@ApplicationScoped
public class JWKEndpoint {

    @Inject
    private Config config;

    @GET
    public Response getKey(@QueryParam("format") String format) throws Exception {
        if (format != null && !Arrays.asList("jwk", "pem").contains(format)) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Public Key Format should be : jwk or pem").build();
        }
        String verificationkey = config.getValue("verificationkey", String.class);
        String pemEncodedRSAPublicKey = PEMKeyUtils.readKeyAsString(verificationkey);
        if (format == null || "jwk".equals(format)) {
            JWK jwk = JWK.parseFromPEMEncodedObjects(pemEncodedRSAPublicKey);
            return Response.ok(jwk.toJSONString()).type(MediaType.APPLICATION_JSON).build();
        } else if ("pem".equals(format)) {
            return Response.ok(pemEncodedRSAPublicKey).build();
        }
        return null;
    }
}
