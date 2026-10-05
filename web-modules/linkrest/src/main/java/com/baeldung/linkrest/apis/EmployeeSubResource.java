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
import com.baeldung.cayenne.Employee;
import com.nhl.link.rest.DataResponse;
import com.nhl.link.rest.LinkRest;
import com.nhl.link.rest.SimpleResponse;

@Produces(MediaType.APPLICATION_JSON)
public class EmployeeSubResource {

    private Configuration config;

    private int departmentId;

    public EmployeeSubResource(int departmentId, Configuration config) {
        this.departmentId = departmentId;
        this.config = config;
    }

    public EmployeeSubResource() {
    }

    @GET
    public DataResponse<Employee> getAll(@Context UriInfo uriInfo) {
        return LinkRest.select(Employee.class, config).toManyParent(Department.class, departmentId, Department.EMPLOYEES).uri(uriInfo).get();
    }

    @GET
    @Path("{id}")
    public DataResponse<Employee> getOne(@PathParam("id") int id, @Context UriInfo uriInfo) {
        return LinkRest.select(Employee.class, config).toManyParent(Department.class, departmentId, Department.EMPLOYEES).byId(id).uri(uriInfo).getOne();
    }

    @POST
    public SimpleResponse create(String data) {

        return LinkRest.create(Employee.class, config).toManyParent(Department.class, departmentId, Department.EMPLOYEES).sync(data);
    }

    @PUT
    public SimpleResponse createOrUpdate(String data) {
        return LinkRest.create(Employee.class, config).toManyParent(Department.class, departmentId, Department.EMPLOYEES).sync(data);
    }

    @DELETE
    @Path("{id}")
    public SimpleResponse delete(@PathParam("id") int id) {
        return LinkRest.delete(Employee.class, config).toManyParent(Department.class, departmentId, Department.EMPLOYEES).id(id).delete();

    }

}
