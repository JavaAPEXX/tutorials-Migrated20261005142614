package com.baeldung.openliberty.person.resource;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import com.baeldung.openliberty.person.dao.PersonDao;
import com.baeldung.openliberty.person.model.Person;

@RequestScoped
@Path("persons")
public class PersonResource {

    @Inject
    private PersonDao personDao;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Person> getAllPersons() {
        return Arrays.asList(new Person(1, "normanlewis", "normanlewis@email.com"));
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Transactional
    public Response addPerson(Person person) {
        personDao.createPerson(person);
        String respMessage = "Person #" + person.getId() + " created successfully.";
        return Response.status(Response.Status.CREATED).entity(respMessage).build();
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
    public Person getPerson(@PathParam("id") int id) {
        Person person = personDao.readPerson(id);
        return person;
    }
}
