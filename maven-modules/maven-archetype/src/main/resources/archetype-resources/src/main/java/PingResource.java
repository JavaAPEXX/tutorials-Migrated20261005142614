package ${package};

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.UriBuilder;

@Path("ping")
public class PingResource {

    @GET
    public Response get() {
        return Response.ok("${greeting-msg}").build();
    }

}