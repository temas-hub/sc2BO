package sc2build.optimizer;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import sc2build.data.AtMost;
import sc2build.data.Cost;
import sc2build.data.Section;

public class Entity
{
	public String name;
	public String icon;
	public Section section;
	public Integer start;
	public String style;
	//public int[] value;
	public List<Entity> products = null;
	public List<NeedEntity> need = null;
	
	public String adding;
	public String addsto;
	public List<String> conditions = null;
	public List<Cost> costs = null;
	
	public String multi;
	
	public Integer cap;
	public boolean autocheck;
	public Integer time;
	public Integer amount;
	public String save;
	//public int idle;
	public AtMost atmost = null;
	//public boolean eventualError;
	//public String currentError;
	@Override
	public String toString() {
		return "Entity [name=" + name + ", section=" + section + ", start="
				+ start + ", style=" + style +", adding=" + adding + ", addsto="
				+ addsto +   ", multi=" + multi + ", cap=" + cap
				+ ", autocheck=" + autocheck + ", time=" + time
				+ ", amount=" + amount + ", save=" + save + ", atmost=" + atmost+ "]";
	}
	
	public Entity() {
		// TODO Auto-generated constructor stub
	}
	
	public Entity(Entity other) {
		this.name = other.name;
		this.icon = other.icon;
		this.section = other.section;
		this.start = other.start;
		this.style = other.style;
		this.products = other.products;
		this.need = other.need;
		this.adding = other.adding;
		this.addsto = other.addsto;
		this.conditions = other.conditions;
		this.costs = other.costs;
		this.multi = other.multi;
		this.cap = other.cap;
		this.autocheck = other.autocheck;
		this.time = other.time;
		this.amount = other.amount;
		this.save = other.save;
		this.atmost = other.atmost;
	}
	
	
	public void init(){
		Entity a = this;
		if (a.start == null)
		{
			a.start = 0;
		}
		//if (a.autocheck == null)
		//{
		//	a.autocheck = false;
		//}
		if (a.time==null)
		{
			a.time = 0;
		}
		if (a.products != null)
		{
			for ( Entity b : a.products)
			{
				if (b.name == null)
				{
					b.name = a.name;
				}
				if (b.amount==null)
				{
					b.amount = 1;
				}
			}
		}
		else
		{
			Entity ent = new Entity();
			ent.name = a.name;
			ent.amount = 1;
			a.products = new ArrayList<Entity>();
			a.products.add(ent);
		}
	}
}