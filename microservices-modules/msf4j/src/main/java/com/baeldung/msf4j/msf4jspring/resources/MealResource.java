package com.baeldung.msf4j.msf4jspring.resources;

import java.util.Collections;
import java.util.Map;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.wso2.msf4j.template.MustacheTemplateEngine;

import com.baeldung.msf4j.msf4jspring.services.MealService;

@Component
@Path("/meal")
public class MealResource {

    @Autowired
    private MealService mealService;

    @GET
    @Path("/")
    public Response all() {
        Map map = Collections.singletonMap("meals", mealService.findAll());
        String html = MustacheTemplateEngine.instance()
            .render("meals.mustache", map);
        return Response.ok()
            .type(MediaType.TEXT_HTML)
            .entity(html)
            .build();
    }

    @GET
    @Path("/{id}")
    @Produces({ "text/xml" })
    public Response meal(@PathParam("id") int id) {
        return Response.ok()
            .entity(mealService.find(id))
            .build();
    }

}
