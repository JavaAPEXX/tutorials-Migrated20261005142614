package com.baeldung.oauth2.client;

import org.eclipse.microprofile.config.Config;

import javax.inject.Inject;
import javax.json.JsonObject;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.ws.rs.client.Client;
import jakarta.ws.rs.client.ClientBuilder;
import jakarta.ws.rs.client.Entity;
import jakarta.ws.rs.client.WebTarget;
import jakarta.ws.rs.core.Form;
import jakarta.ws.rs.core.HttpHeaders;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.io.IOException;

@WebServlet(urlPatterns = "/refreshtoken")
public class RefreshTokenServlet extends AbstractServlet {

    @Inject
    private Config config;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String clientId = config.getValue("client.clientId", String.class);
        String clientSecret = config.getValue("client.clientSecret", String.class);

        JsonObject actualTokenResponse = (JsonObject) request.getSession().getAttribute("tokenResponse");
        Client client = ClientBuilder.newClient();
        WebTarget target = client.target(config.getValue("provider.tokenUri", String.class));

        Form form = new Form();
        form.param("grant_type", "refresh_token");
        form.param("refresh_token", actualTokenResponse.getString("refresh_token"));

        String scope = request.getParameter("scope");
        if (scope != null && !scope.isEmpty()) {
            form.param("scope", scope);
        }

        Response jaxrsResponse = target.request(MediaType.APPLICATION_JSON_TYPE)
                .header(HttpHeaders.AUTHORIZATION, getAuthorizationHeaderValue(clientId, clientSecret))
                .post(Entity.entity(form, MediaType.APPLICATION_FORM_URLENCODED_TYPE), Response.class);
        JsonObject tokenResponse = jaxrsResponse.readEntity(JsonObject.class);
        if (jaxrsResponse.getStatus() == 200) {
            request.getSession().setAttribute("tokenResponse", tokenResponse);
        } else {
            request.setAttribute("error", tokenResponse.getString("error_description", "error!"));
        }
        dispatch("/", request, response);
    }
}
