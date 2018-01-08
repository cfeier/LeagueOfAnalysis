package ch.bbw.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;


public class RequestUtil {
	
	public int getSummonerID(String summonerName) throws ClientProtocolException, IOException {
		HttpClient client = new DefaultHttpClient();
		HttpGet request = new HttpGet("https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + summonerName + "?api_key=" + ConstantUtil.API_KEY);
		HttpResponse response = client.execute(request);
		BufferedReader rd = new BufferedReader (new InputStreamReader(response.getEntity().getContent()));
		String line = "";
		while ((line = rd.readLine()) != null) {
			String id = line.substring(line.lastIndexOf("\"id\":") + 5, 14);
			System.out.println("Summoner id:" + id);
			return Integer.parseInt(id);
		}
		rd.close();
		return 0;
	}
}
