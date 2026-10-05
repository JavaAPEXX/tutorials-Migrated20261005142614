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
import java.io.IOException;

@WebServlet(urlPatterns = "/callback")
public class CallbackServlet extends AbstractServlet {

    @Inject
    private Config config;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String clientId = config.getValue("client.clientId", String.class);
        String clientSecret = config.getValue("client.clientSecret", String.class);

        //Error:
        String error = request.getParameter("error");
        if (error != null) {
            request.setAttribute("error", error);
            dispatch("/", request, response);
            return;
        }
        String localState = (String) request.getSession().getAttribute("CLIENT_LOCAL_STATE");
        if (!localState.equals(request.getParameter("state"))) {
            request.setAttribute("error", "The state attribute doesn't match !!");
            dispatch("/", request, response);
            return;
        }

        String code = request.getParameter("code");

        Client client = ClientBuilder.newClient();
        WebTarget target = client.target(config.getValue("provider.tokenUri", String.class));

        Form form = new Form();
        form.param("grant_type", "authorization_code");
        form.param("code", code);
        form.param("redirect_uri", config.getValue("client.redirectUri", String.class));

        try {
            JsonObject tokenResponse = target.request(MediaType.APPLICATION_JSON_TYPE)
                    .header(HttpHeaders.AUTHORIZATION, getAuthorizationHeaderValue(clientId, clientSecret))
                    .post(Entity.entity(form, MediaType.APPLICATION_FORM_URLENCODED_TYPE), JsonObject.class);
            request.getSession().setAttribute("tokenResponse", tokenResponse);
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
            request.setAttribute("error", ex.getMessage());
        }
        dispatch("/", request, response);
    }
}
