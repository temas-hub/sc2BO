package sc2build.data;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import sc2build.optimizer.Entity;

public enum Faction {

	TERRAN("Terran"), PROTOSS("Protoss"), ZERG("Zerg");

	private static EntityLoader loader = null;

	public static void initLoader(String filePath) {
		loader = new EntityLoader();
		loader.init(filePath);
	}

	private List<Entity> entities;
	private Map<String,Entity> entityByName;

	public List<Entity> getEnities() {
		if (this.entities == null) {
			this.entities = getLoader().load(this.name);
			this.entityByName = new HashMap<String, Entity>();
			for(Entity i:entities){
				i.init();
			}
			for(Entity i:entities){
				this.entityByName.put(i.name,i);
			}
		}
		return this.entities;
	}

	private final String name;

	private Faction(String name) {
		this.name = name;
	}

	public String getName() {
		return this.name;
	}

	static EntityLoader getLoader() {
		if (loader == null) {
			loader = new EntityLoader();
			loader.init("./WebContent/js/data.js");
		}
		return loader;
	}

	public Entity getEntityByName(String name) {
		getEnities();
		return entityByName.get(name);
	}
	
	public boolean isGayserCosts(Entity entity)
	{
		boolean found = false;
		if (entity.costs != null)
		{
			
			for (Cost cc : entity.costs)
			{
				if (cc.name == "Gas Geyser")
				{
					found = true;
				}
			}
		}
		return found;
	}
}