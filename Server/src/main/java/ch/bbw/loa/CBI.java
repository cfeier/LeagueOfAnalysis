package ch.bbw.loa;

import ch.bbw.riot.CBI_RA;

import java.io.IOException;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.http.client.ClientProtocolException;

import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

@Path("/cbi")
public class CBI {
	
	@GET
	@Path("lore/{champion}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getLore(@PathParam("champion") String champ) throws ClientProtocolException, IOException{
		CBI_RA cbi = new CBI_RA();
		return Response.status(201).entity(cbi.getChampionLore(champ)).build();
	}
}
