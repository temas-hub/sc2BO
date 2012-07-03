package sc2build.data;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import java.io.BufferedReader;

import java.io.FileReader;
import java.io.IOException;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import sc2build.optimizer.Entity;
import sc2build.optimizer.NeedEntity;


public class EntityLoader
{
	private final static Map<String, List<Entity>> data = new HashMap<String, List<Entity>>();
	
	public JSONArray loadData(String filePath) throws IOException, JSONException
	{
		StringBuilder sb = new StringBuilder();
		
		BufferedReader br = new BufferedReader(new FileReader(filePath));
		
		String line = null;
		
		while ((line = br.readLine()) != null)
		{
			sb.append(line);
		}
		
		String dataJson = sb.toString();
		
		JSONArray arr = new JSONArray(dataJson);
		
		return arr;
	}
	
	public List<Entity> load(String name)
	{
		return EntityLoader.data.get(name);
	}
	

	public void init(String filePath)
	{
		try
		{
			JSONArray arr = this.loadData(filePath);
			for (int i = 0; i < arr.length(); i++)
			{
				JSONObject raceEntity = arr.getJSONObject(i);
				ArrayList<Entity> entities = new ArrayList<Entity>();
				String raceName = raceEntity.getString("name");
				JSONArray entitiesArray = raceEntity.getJSONArray("entities");
				for (int j = 0; j < entitiesArray.length(); j++)
				{
					JSONObject entityObj = entitiesArray.getJSONObject(j);
					Entity ent = new Entity();
					this.loadEntity(ent, entityObj);
					entities.add(ent);
				}
				
				EntityLoader.data.put(raceName, entities);
			}
			
		}
		catch (Exception e)
		{
			throw new RuntimeException(e);
		}
	}

	private void loadEntity(Entity ent, JSONObject obj) throws JSONException
	{
		if (ent == null || obj == null) return;
		
		ent.name = obj.getString("name");
		ent.adding = obj.getString("adding");
		//ent.currentError = obj.getString("currentError");
		ent.multi = obj.getString("multi");
		ent.save =  obj.getString("save");
		ent.style = obj.getString("style");
		ent.icon = obj.getString("icon");
		String sectionStr = obj.getString("section");
		if (sectionStr!=null && sectionStr.length() > 0)
		{
			ent.section = Section.valueOf(sectionStr);
		}
		
		ent.autocheck = obj.getBoolean("autocheck");
		ent.time = obj.getInt("time");
		ent.start = obj.getInt("start");
		ent.amount = obj.getInt("amount");
		ent.cap = obj.getInt("cap");
		//ent.eventualError = obj.getBoolean("eventualError");
		//ent.idle = obj.getInt("idle");
		
		ent.addsto = obj.getString("addsto");
		
		JSONObject atMostObj = obj.getJSONObject("atmost");
		if (atMostObj != null)
		{
			ent.atmost = new AtMost();
			ent.atmost.amount = atMostObj.getInt("amount"); 
			ent.atmost.as = atMostObj.getString("as");
			ent.atmost.error = atMostObj.getString("error");
			ent.atmost.name = atMostObj.getString("name");
		}
		
		JSONArray condArr = obj.getJSONArray("conditions");
		if (condArr != null)
		{
			ent.conditions = new ArrayList<String>();
			for (int i=0; i < condArr.length(); i++)
			{
				ent.conditions.add(condArr.getString(i));
			}
		}
		
			
		JSONArray costArr = obj.getJSONArray("costs");
		if (costArr != null)
		{
			ent.costs = new ArrayList<Cost>();
			for (int i=0; i < costArr.length(); i++)
			{
				Cost cost = new Cost();
				JSONObject costObj = costArr.getJSONObject(i);
				cost.amount = costObj.getInt("amount");
				cost.name = costObj.getString("name");
				cost.error = costObj.getString("error");
				ent.costs.add(cost);
			}
		}
		
		JSONArray needArr = obj.getJSONArray("need");
		if (needArr != null)
		{
			ent.need = new ArrayList<NeedEntity>();
			for (int i=0; i < needArr.length(); i++)
			{
				NeedEntity needEntity = new NeedEntity();
				JSONObject needObj = needArr.getJSONObject(i);
				needEntity.error = needObj.getString("error");
				needEntity.name = needObj.getString("name");
				ent.need.add(needEntity);
			}
		}
		
		JSONArray productArr = obj.getJSONArray("products");
		if (productArr != null)
		{
			ent.products = new ArrayList<Entity>();
			for (int i=0; i < productArr.length(); i++)
			{
				Entity prodEntity = new Entity();
				this.loadEntity(prodEntity, productArr.getJSONObject(i));
				ent.products.add(prodEntity);
			}
		}
		
		//ent.value = new int[0];
	}

}
