package sc2build.optimizer.data;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class LoadData
{
	public static void main(String[] args) throws IOException, JSONException
	{
		StringBuilder sb = new StringBuilder();
		
		BufferedReader br = new BufferedReader(new FileReader("./js/data.js"));
		
		String line = null;
		
		while ((line = br.readLine()) != null)
		{
			sb.append(line);
		}
		
		String dataJson = sb.toString();
		
		JSONArray obj = new JSONArray(dataJson);
		
		JSONObject root = obj.getJSONObject(0);
		
		System.out.println(root.length());
	}
}
