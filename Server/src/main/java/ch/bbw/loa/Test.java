package ch.bbw.loa;

import java.io.IOException;

import org.apache.http.client.ClientProtocolException;

import ch.bbw.util.RequestUtil;
import ch.bbw.riot.CBI_RA;

public class Test {

	
	public static void main(String[] args) throws ClientProtocolException, IOException{
		testUtilRequests();
		testRiotRequests();
	}

	private static void testRiotRequests() throws ClientProtocolException, IOException {
		CBI_RA cbiRa = new CBI_RA();
		//cbi.request();
		System.out.println(cbiRa.getChampionLore("Jax"));
		System.out.println(cbiRa.getChampionDifficulty("Jax"));
		
	}

	private static void testUtilRequests() throws ClientProtocolException, IOException {
		RequestUtil rU = new RequestUtil();
		
		//rU.getSummonerID("Arclight_Yorìck");
		
	}
}
