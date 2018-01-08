package ch.bbw.loa;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;

public class CBI {
	
	public void request() throws ClientProtocolException, IOException {
		
		HttpClient client = new DefaultHttpClient();
		HttpGet request = new HttpGet("https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/DigginUrGraveIRL?api_key=RGAPI-369d2249-cbaa-46e0-a9b2-60786c26302c");
		HttpResponse response = client.execute(request);
		BufferedReader rd = new BufferedReader (new InputStreamReader(response.getEntity().getContent()));
		String line = "";
		while ((line = rd.readLine()) != null) {
			System.out.println(line);
		}
	}
}
