package com.baeldung.linkrest.apis;

import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Configuration;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.UriInfo;

import com.baeldung.cayenne.Department;
import com.nhl.link.rest.DataResponse;
import com.nhl.link.rest.LinkRest;
import com.nhl.link.rest.SimpleResponse;

@Path("department")
@Produces(MediaType.APPLICATION_JSON)
public class DepartmentResource {

    @Context
    private Configuration config;

    @GET
    public DataResponse<Department> getAll(@Context UriInfo uriInfo) {
        return LinkRest.select(Department.class, config).uri(uriInfo).get();
    }

    @GET
    @Path("{id}")
    public DataResponse<Department> getOne(@PathParam("id") int id, @Context UriInfo uriInfo) {
        return LinkRest.select(Department.class, config).byId(id).uri(uriInfo).getOne();
    }

    @POST
    public SimpleResponse create(String data) {
        return LinkRest.create(Department.class, config).sync(data);
    }

    @PUT
    public SimpleResponse createOrUpdate(String data) {
        return LinkRest.createOrUpdate(Department.class, config).sync(data);
    }

    @Path("{id}/employees")
    public EmployeeSubResource getEmployees(@PathParam("id") int id, @Context UriInfo uriInfo) {
        return new EmployeeSubResource(id, config);
    }

    @DELETE
    @Path("{id}")
    public SimpleResponse delete(@PathParam("id") int id) {
        return LinkRest.delete(Department.class, config).id(id).delete();
    }
}
