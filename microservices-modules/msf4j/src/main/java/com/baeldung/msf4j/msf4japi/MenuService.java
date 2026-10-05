package com.baeldung.msf4j.msf4japi;

import java.util.ArrayList;
import java.util.List;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Response;

import com.google.gson.Gson;

@Path("/menu")
public class MenuService {

    private List<Meal> meals = new ArrayList<>();
    
    public MenuService() {
        meals.add(new Meal("Java beans",42.0f));
    }
    
    @GET
    @Path("/")
    @Produces({ "application/json" })
    public Response index() {
        return Response.ok()
            .entity(meals)
            .build();
    }

    @GET
    @Path("/{id}")
    @Produces({ "application/json" })
    public Response meal(@PathParam("id") int id) {
        return Response.ok()
            .entity(meals.get(id))
            .build();
    }
    

    @POST
    @Path("/")
    @Consumes("application/json")
    @Produces({ "application/json" })
    public Response create(Meal meal) {
        meals.add(meal);
        return Response.ok()
            .entity(meal)
            .build();
    }

    @PUT
    @Path("/{id}")
    @Consumes("application/json")
    @Produces({ "application/json" })
    public Response update(@PathParam("id") int id, Meal meal) {
        meals.set(id, meal);
        return Response.ok()
            .entity(meal)
            .build();
    }

    @DELETE
    @Path("/{id}")
    @Produces({ "application/json" })
    public Response delete(@PathParam("id") int id) {
        Meal meal = meals.get(id);
        meals.remove(id);
        return Response.ok()
            .entity(meal)
            .build();
    }
}
