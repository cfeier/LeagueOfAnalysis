package ch.bbw.riot;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.json.JSONArray;
import org.json.JSONObject;

import ch.bbw.util.ConstantUtil;
import ch.bbw.util.RequestUtil;

public class CBI_RA {
	
	RequestUtil requestUtil = new RequestUtil();
	
	public void request() throws ClientProtocolException, IOException {
		
		requestUtil.getSummonerID(ConstantUtil.TEST_SUMMONER_NAME);
		
		HttpClient client = new DefaultHttpClient();
		HttpGet request = new HttpGet("");
		HttpResponse response = client.execute(request);
		BufferedReader rd = new BufferedReader (new InputStreamReader(response.getEntity().getContent()));
		String line = "";
		while ((line = rd.readLine()) != null) {
			System.out.println(line);
		}
	}
	
	public String getChampionLore(String championName) throws ClientProtocolException, IOException {
		HttpClient client = new DefaultHttpClient();
		HttpGet request = new HttpGet("https://euw1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&tags=lore&dataById=false&api_key=" + ConstantUtil.API_KEY);
		HttpResponse response = client.execute(request);
		BufferedReader rd = new BufferedReader (new InputStreamReader(response.getEntity().getContent()));
		String line = rd.readLine();
		JSONObject data = new JSONObject(line).getJSONObject("data");
		
		
		for (Object key : data.keySet()) {
	        //based on you key types
	        String keyStr = (String)key;
	        JSONObject keyvalue = (JSONObject)data.get(keyStr);
	        if(keyvalue.get("name").equals(championName)) {
	        	return keyvalue.getString("lore");
	        }
	        
	    }
		rd.close();
		return "";
	}
	
	
	public String getChampionDifficulty(String championName) throws ClientProtocolException, IOException {
		HttpClient client = new DefaultHttpClient();
		HttpGet request = new HttpGet("https://euw1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&tags=info&dataById=false&api_key=" + ConstantUtil.API_KEY);
		HttpResponse response = client.execute(request);
		BufferedReader rd = new BufferedReader (new InputStreamReader(response.getEntity().getContent()));
		String line = rd.readLine();
		JSONObject data = new JSONObject(line).getJSONObject("data");
		
		
		for (Object key : data.keySet()) {
	        //based on you key types
	        String keyStr = (String)key;
	        JSONObject keyvalue = (JSONObject)data.get(keyStr);
	        System.out.println("1");
	        if(keyvalue.get("info").equals(championName)) {
		        System.out.println("2");
	        	return keyvalue.get("difficulty").toString();
	        }
	        
	    }
		rd.close();
		return "";
	}
}
