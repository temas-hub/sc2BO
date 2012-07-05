package sc2build.optimizer;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.TreeMap;

import sc2build.data.Cost;
import sc2build.data.Faction;
import sc2build.data.Section;


/*
 * Created on 11.06.2012
 *
 * Copyright 2003-2012 Eclipse SP LLC. All rights reserved. 
 * */

/**
 * @author Zhdanov Artem
 *
 */
public class SC2Planner
{
	public SC2Planner()
	{
		
	}
	
	class Category
	{
		public int[] value = new int[50];
	}
	
	EventQueue events;
	int currentTime;
	private Faction factionName;
	private Map<String, VolatileEntity> entities = new HashMap<String, VolatileEntity>();
	private Map<String, VolatileEntity> entitiesByKey = new HashMap<String, VolatileEntity>();
	private List<VolatileEntity> build;
	private List<Integer> delays;
	private List<String> food;
	private List<String> eventualError;
	private int currentPosition;
	private int stopAtTime;
	private int chronoboost;
	public int activeEvents;
	private ArrayList<String> chronoTarget;
	private ArrayList<Integer> chronoAmount;
	private ArrayList<Integer> chronoFinished;
	private Map<Section, Category> category = new HashMap<Section, Category>();
	private boolean isDelayed;
	private VolatileEntity entitiy_Energy;
	private VolatileEntity entitiy_Energy_Spawner;
	private VolatileEntity entitiy_Gas_SCV;
	private VolatileEntity entitiy_Gas_Probe;
	private VolatileEntity entitiy_Gas_Drone;
	private VolatileEntity entitiy_Mineral_SCV;
	private VolatileEntity entitiy_Mineral_Probe;
	private VolatileEntity entitiy_Mineral_Drone;
	private VolatileEntity entitiy_Slow_Gold_Mineral_Patch;
	private VolatileEntity entitiy_Fast_Mineral_Patch;
	private VolatileEntity entitiy_Fast_Gold_Mineral_Patch;
	private VolatileEntity entitiy_Fast_Gas_Patch;
	private VolatileEntity entitiy_Food;
	private VolatileEntity entitiy_Slow_Mineral_Patch;
	
	static int sum(final int[] d)
	{
		int b = d[0];
		for ( int c = 1; c < d.length; c = c + 1)
		{
			b = b + d[c];
		}
		return b;
	}
	static int max(final int[] d)
	{
		int b = d[0];
		for ( int c = 1; c < d.length; c = c + 1)
		{
			final int dd = d[c];
			if(dd>b) b = dd;
		}
		return b;
	}
	
	static int maxIndexOf(final int[] b)
	{
		int c = 0;
		if (b.length == 0)
		{
			return -1;
		}
		for ( int a = 1; a < b.length; a = a + 1)
		{
			if (b[a] > b[c])
			{
				c = a;
			}
		}
		return c;
	}
	
	static int minIndexOf(final int[] b)
	{
		int c = 0;
		if (b.length == 0)
		{
			return -1;
		}
		for ( int a = 1; a < b.length; a++)
		{
			if (b[a] < b[c])
			{
				c = a;
			}
		}
		return c;
	}
	
	String addZeros(String b, int a)
	{
		StringBuilder c = new StringBuilder("" + b);
		while (c.length() < a)
		{
			c.insert(0, "0");
		}
		return c.toString();
	}
	
	String fixString(String a)
	{
		return a.replace("[ :]", "");
	}
	
	void reset()
	{
		this.init(this.factionName);
	}
	
	public void init (Faction faction)
	{
		if (faction == null)
		{
			throw new IllegalStateException("Error: no faction: ");
		}
		this.factionName = faction;
		//this.entities = new ArrayList<Integer>();
		//this.entitiesByKey = new ArrayList<Integer>();
		this.build = new ArrayList<VolatileEntity>();
		this.delays = new ArrayList<Integer>();
		this.food = new ArrayList<String>();
		this.eventualError = new ArrayList<String>();
		this.currentPosition = -1;
		List<Entity> entities = faction.getEnities();
		for (Entity entity : entities)
		{
			VolatileEntity ve = new VolatileEntity(entity);
			this.entities.put(entity.name, ve);
			if (entity.save != null)
			{
				this.entitiesByKey.put(entity.save, ve);
			}
		}
		entitiy_Energy = this.entities.get("Energy");
		entitiy_Energy_Spawner = this.entities.get("Energy Spawner");
		entitiy_Gas_SCV = this.entities.get("Gas SCV");
		entitiy_Gas_Probe = this.entities.get("Gas Probe");
		entitiy_Gas_Drone = this.entities.get("Gas Drone");
		entitiy_Mineral_SCV = this.entities.get("Mineral SCV");
		entitiy_Mineral_Probe = this.entities.get("Mineral Probe");
		entitiy_Mineral_Drone = this.entities.get("Mineral Drone");
		entitiy_Slow_Gold_Mineral_Patch = this.entities.get("Slow Gold Mineral Patch");
		entitiy_Fast_Mineral_Patch = this.entities.get("Fast Mineral Patch");
		entitiy_Fast_Gold_Mineral_Patch = this.entities.get("Fast Gold Mineral Patch");
		entitiy_Fast_Gas_Patch = this.entities.get("Fast Gas Patch");
		entitiy_Food = this.entities.get("Food");
		entitiy_Slow_Mineral_Patch = this.entities.get("Slow Mineral Patch");
		
		this.stopAtTime = -1;
		//this.readBuild();
		this.updateCenter(false, false, 0, false);
		//this.updateBuild(false);
	}
	
	public Faction getFactionName() {
		return factionName;
	}
	void reset(VolatileEntity a)
	{
		a.value = new int[] {a.start};
		a.idle = a.start;
	}
	
	void initEntity (VolatileEntity a)
	{
		
		this.reset(a);
	}
	
	public String exportBuild()
	{
		String str = "";
		for (int b = 0; b < this.build.size(); b++)
		{
			Entity a = this.build.get(b);
			if (a.style != "nonumber" && this.food.get(b) != null && this.food.get(b) != "")
			{
				str += this.food.get(b) + " : " + this.build.get(b).name + "\n";
			}
		}
		return str;
	}
	
	public void insertIntoBuild (Entity be, int a)
	{
		VolatileEntity b = this.entities.get(be.name);
		this.stopAtTime = -1;
		
		if (b.section == Section.pause)
		{
			if (this.currentPosition >= 0
					&& this.build.get(this.currentPosition).section == Section.pause)
			{
				this.delays.set(this.currentPosition, this.delays.get(this.currentPosition) + a);
			} 
			else
			{
				if (this.currentPosition < (this.build.size() - 1)
						&& this.build.get(this.currentPosition + 1).section == Section.pause)
				{
					this.delays.set(this.currentPosition, this.delays.get(this.currentPosition + 1) + a);
				}
				else
				{
					this.currentPosition += 1;
					this.build.add(this.currentPosition, b);
					this.delays.add(this.currentPosition, a);
				}
			}
		} 
		else
		{
			if (this.currentPosition >= 0
					&& this.build.get(this.currentPosition).adding != null
					&& this.build.get(this.currentPosition).adding == b.name)
			{
				this.build.set(this.currentPosition, this.entities.get(this.build.get(this.currentPosition).addsto));
				this.delays.set(this.currentPosition, 0);
			} 
			else
			{
				this.currentPosition += 1;
				this.build.add(this.currentPosition, b);
				this.delays.add(this.currentPosition, 0);
			}
		}
		
		this.updateCenter(true, false, this.currentPosition, false);
		//this.updateBuild(true)
	}
	
	public void setPosition (int a)
	{
		this.currentPosition = a;
		this.stopAtTime = -1;
		this.updateCenter(false, false, 0, true);
	}
	
	
	String errorDoing (VolatileEntity entity, int index, boolean c)
	{
		if (entity.style=="single" && entity.value[index] > 0)
		{
			return "Already researched / built.";
		}
		if (entity.conditions != null)
		{
			for (String condition : entity.conditions)
			{
				if (max(this.entities.get(condition).value) <= 0)
				{
					return condition/* + " needed."*/;
				}
			}
		}
		if (entity.need != null)
		{
			for (NeedEntity need : entity.need)
			{
				if (this.entities.get(need.name).idle <= 0)
				{
					return need.error;
				}
			}
		}
		boolean d = (entity.name==("Slow Mineral Patch"));
		boolean b = (entity.name==("Slow Gold Mineral Patch"));
		boolean a = (entity.name==("Fast Mineral Patch"));
		boolean l = (this.entitiy_Slow_Gold_Mineral_Patch.idle > 0);
		boolean k = (this.entitiy_Fast_Mineral_Patch.idle > 0);
		boolean i = (this.entitiy_Fast_Gold_Mineral_Patch.idle > 0);
		if ((d && (l || k || i)) || (b && (k || i)) || (a && i))
		{
			return "Faster patch available.";
		}
		if (entity.name==("Slow Gas Patch")
				&& this.entitiy_Fast_Gas_Patch.idle > 0)
		{
			return "Faster patch available.";
		}
		int f = 0;
		if (entity.costs!=null)
		{
			for (Cost cost : entity.costs)
			{
				if (c)
				{
					if (cost.name==("Minerals")
							&& this.entitiy_Mineral_Drone!=null
							&& this.entitiy_Mineral_Drone.value[0] > 0)
					{
						continue;
					}
					if (cost.name==("Minerals")
							&& this.entitiy_Mineral_Probe!=null
							&& this.entitiy_Mineral_Probe.value[0] > 0)
					{
						continue;
					}
					if (cost.name==("Minerals")
							&& this.entitiy_Mineral_SCV!=null
							&& this.entitiy_Mineral_SCV.value[0] > 0)
					{
						continue;
					}
					if (cost.name==("Gas") && this.entitiy_Gas_Drone!=null
							&& this.entitiy_Gas_Drone.value[0] > 0)
					{
						continue;
					}
					if (cost.name==("Gas") && this.entitiy_Gas_Probe!=null
							&& this.entitiy_Gas_Probe.value[0] > 0)
					{
						continue;
					}
					if (cost.name==("Gas") && this.entitiy_Gas_SCV!=null
							&& this.entitiy_Gas_SCV.value[0] > 0)
					{
						continue;
					}
					if (cost.name==("Larva"))
					{
						continue;
					}
					if (cost.name==("Energy")
							&& this.entitiy_Energy_Spawner.value[0] > 0)
					{
						continue;
					}
				}
				if (cost.name==("Energy") && entity.name==("Chronoboost")
						&& this.chronoboost > 0)
				{
					if (max(this.entitiy_Energy.value) < cost.amount
							- this.chronoboost * 11.25 / 1000)
					{
						return cost.error;
					}
				} else
				{
					if (max(this.entities.get(cost.name).value) < cost.amount)
					{
						return cost.error;
					}
				}
				if (entity.atmost != null && cost.name == entity.atmost.name)
				{
					f = cost.amount;
				}
			}
		}
		if (entity.atmost != null)
		{
			VolatileEntity v = this.entities.get(entity.atmost.name);
			if (entity.atmost.amount!=null && entity.atmost.amount > 0)
			{
				if (v.value.length>index && (v.value[index] - f > entity.atmost.amount))
				{
					return entity.atmost.error;
				}
			}
			if (entity.atmost.as != null && entity.atmost.as!="")
			{
				if (v.value.length>index && (v.value[index] - f > max(this.entities.get(entity.atmost.as).value)))
				{
					return entity.atmost.error;
				}
			}
		}
		return null;
	}
	
	private static final HashSet<String> nonTernminalError = new HashSet<String>(
			Arrays.asList("All armories busy.", "All baneling nests busy.",
					"All barracks busy.", "All carriers busy.",
					"All command centers busy.", "All cybernetics cores busy.",
					"All engineering bays busy.",
					"All evolution chambers busy.", "All factories busy.",
					"All fleet beacons busy.", "All forges busy.",
					"All fusion cores busy.", "All gateways busy",
					"All gateways busy.", "All ghost academies busy.",
					"All hatcheries busy.", "All hatcheries spawning larvaes",
					"All hydralisk dens busy.", "All infestation pits busy.",
					"All nexus busy.", "All nexuses busy.",
					"All nydus networks busy.", "All reactors busy.",
					"All roach warrens busy.", "All robotic bays busy.",
					"All robotics facilities busy.",
					"All spawning pools busy.", "All spires busy.",
					"All stargates busy.", "All starports busy.",
					"All tech labs busy.", "All tech labss busy.",
					"All templar archives busy.",
					"All twilight councils busy.",
					"All ultralisk cavern busy.", "All warpgates busy.",
					"Not enough energy", "Not enough energy.",
					"Not enough food available.", "Not enough food.",
					"Not enough high templars.", "Not enough minerals.",
					"Not enough mules.", "Not enough psi.",
					"Not enough supplies.", "Not enough supply depots.",
					"Not enough vespene gas.", "Too many larvaes."));

	public List<VolatileEntity> getPossibleSteps() {
		if (build.isEmpty())
			throw new IllegalStateException();
		VolatileEntity last = this.build.get(this.build.size() - 1);
		LinkedList<VolatileEntity> e = new LinkedList<>();
		for (VolatileEntity ee : this.entities.values()) {
			if (ee.eventualError == false) {
				// OK;
			} else if (nonTernminalError.contains(ee.eventualError)) {
				// OK
			} else {
				continue;
			}
			if (ee.addsto == last.name)
				continue;
			if ((ee.name == "2 x Gas Probe" || ee.name == "3 x Gas Probe" || ee.name == "Gas Probe")
					&& (last.name == "Mineral Probe"
							|| last.name == "2 x Mineral Probe" || last.name == "3 x Mineral Probe"))
				continue;
			if ((last.name == "2 x Gas Probe" || last.name == "3 x Gas Probe" || last.name == "Gas Probe")
					&& (ee.name == "Mineral Probe"
							|| ee.name == "2 x Mineral Probe" || ee.name == "3 x Mineral Probe"))
				continue;
			e.add(ee);
		}
		return e;
	}
	
	void autoCheck (VolatileEntity b, int index)
	{
		String error = this.errorDoing(b, index, false);
		if (error != null && error.length() > 0)
		{
			Event event = new Event();
			event.event = "check";
			
			//event.name = b.name;
			event.entityUnderName = b;
			event.actInd = index;
			event.active = false;
			
			if (b.name == "Larva Spawner")
			{
				event.time = (this.currentTime + 100);
			}
			else
			{
				event.time = this.currentTime + (int)(3 * b.time / 4);
			}
			this.events.add(event);
			/*Collections.sort(this.events, new Comparator<Event>()
			{
				public int compare(Event o1, Event o2)
				{
					return o1.time - o2.time;
				}
			});*/
		}
		else
		{
			this.startDoing(b, b.time, index, false);
		}
	}
	
	void startDoing (VolatileEntity d, int addedTime, int actInd, boolean isActive)
	{
		if (d.costs != null)
		{
			for (Cost f : d.costs)
			{
				VolatileEntity l = this.entities.get(f.name);
				int a = f.amount;
				int c = maxIndexOf(l.value);
				l.value[c] -= a;
				l.idle -= a;
				if (a < 0 && l.autocheck)
				{
					int g = 0;
					if (l.multi==d.name)
					{
						g = actInd;
						if (l.value.length<=g)
						{
							int [] n = new int[g+1];
							n[g] = 0;
							System.arraycopy(l.value, 0, n, 0, l.value.length);
							l.value = n;
						}
					}
					else
					{
						g = 0;
					}
					for (int k = 0; k < -a; k++)
					{
						this.autoCheck(l, l.value[g] - (-a) + k);
					}
				}
			}
		}
		if (d.need != null)
		{
			for (NeedEntity f : d.need)
			{
				this.entities.get(f.name).idle -= 1;
			}
		}
		if (d.name == "Chronoboost")
		{
			this.chronoboost += 1000;
		}
		if (isActive)
		{
			this.activeEvents += 1;
		}
		Event event = new Event();
		event.event = "execute";
		event.time = this.currentTime + addedTime;
		//event.name = d.name;
		event.entityUnderName = d;
		event.actInd = actInd;
		event.active = isActive;
		this.events.add(event);
		/*Collections.sort(this.events, new Comparator<Event>()
		{
			public int compare(Event o1, Event o2)
			{
				return o1.time - o2.time;
			}
		});*/
	}
	
	void finishDoing (VolatileEntity g, int index, boolean resetActiveEvents)
	{
		boolean autocheckNeedError = false;
		if (g.need != null && g.autocheck)
		{
			for (NeedEntity a : g.need)
			{
				if (this.entities.get(a.name).idle < 0)
				{
					autocheckNeedError = true;
				}
			}
		}
		if (g.products != null && !autocheckNeedError)
		{
			for (Entity a : g.products)
			{
				VolatileEntity f = this.entities.get(a.name);
				int amount = a.amount;
				int useIndex = 0;
				if (f.multi== g.name)
				{
					useIndex = index;
					/*if (f.value[useIndex] != 0)
					{
						f.value[useIndex] = 0;
					}*/
					if (f.value.length <= useIndex)
					{
						int[] n = new int[useIndex+1];
						System.arraycopy(f.value, 0, n, 0, f.value.length);
						f.value = n;
 						f.value[useIndex] = 0;
					}
				}
				else
				{
					useIndex = minIndexOf(f.value);
				}
				if (f.cap != null && f.cap>0 && f.value[useIndex] + amount > f.cap)
				{
					amount = f.cap - f.value[useIndex];
				}
				f.value[useIndex] += amount;
				f.idle += amount;
				if (f.autocheck)
				{
					for (int b = 0; b < amount; b++)
					{
						this.autoCheck(f, f.value[useIndex] - amount + b);
					}
				}
			}
		}
		if (g.need != null)
		{
			for (NeedEntity a : g.need)
			{
				this.entities.get(a.name).idle += 1;
			}
		}
		if (resetActiveEvents)
		{
			this.activeEvents -= 1;
		}
		if (g.autocheck)
		{
			this.autoCheck(g, index);
		}
	}
	void updateCenter (boolean initError, boolean notInit, int position, boolean j)
	{
		if (!notInit)
		{
			this.updateCenter(initError, true, position, j);
		}
		if (initError)
		{
			for (int k = position; k < this.build.size(); k++)
			{
				this.eventualError.add(k, null);
			}
		}
		this.currentTime = 100;
		this.chronoboost = 0;
		this.chronoTarget = new ArrayList<String>(500);
		this.chronoAmount = new ArrayList<Integer>(500);
		this.chronoFinished = new ArrayList<Integer>(500);
		this.activeEvents = 0;
		//int r = 20000;
		
		if (!notInit)
		{
			this.category = new HashMap<Section, SC2Planner.Category>();
			this.category.put(Section.pause, new Category());
			this.category.put(Section.worker, new Category());
			this.category.put(Section.special, new Category());
			this.category.put(Section.building, new Category());
			this.category.put(Section.upgrade, new Category());
			this.category.put(Section.unit, new Category());
		}
		this.events = new EventQueue();
		for (VolatileEntity action : this.entities.values())
		{
			this.reset(action);
		}
		for (VolatileEntity action : this.entities.values())
		{			
			if (action.autocheck && action.name!=("Fast Mineral Patch")
					&& action.name!=("Slow Mineral Patch"))
			{
				for (int q = 0; q < action.value[0]; q++)
				{
					this.autoCheck(action, 0);
				}
			}
		}
		for (int k = 0; k < 16; k++)
		{
			Event event = new Event();
			event.event = "check";
			event.time = (int)(10 + ((k + 1) / 2) * 100);
			//event.name = "Fast Mineral Patch";
			event.entityUnderName = entitiy_Fast_Mineral_Patch;
			event.actInd = 0;
			this.events.add(event);
		}
		for (int k = 0; k < 8; k++)
		{
			Event event = new Event();
			event.event = "check";
			event.time = (int)(1002 + k * 100);
			//event.name = "Slow Mineral Patch";
			event.entityUnderName = entitiy_Slow_Mineral_Patch;
			event.actInd = 0;
			this.events.add(event);
		}
		/*Collections.sort(this.events, new Comparator<Event>()
		{
			public int compare(Event o1, Event o2)
			{
				return o1.time - o2.time;
			}
		});*/
		//assertEvents();
		//dumpState(this);
		for (int k = 0; k < this.build.size(); k++)
		{
			if (notInit
					&& ((this.stopAtTime != -1 && this.currentTime > this.stopAtTime) || (this.stopAtTime == -1 && k > this.currentPosition)))
			{
				break;
			}
			VolatileEntity action = this.build.get(k);
			String proceedMessage = null;
			this.isDelayed = false;
			int actionTime = 0;
			if (!(this.eventualError.size()>k && this.eventualError.get(k) != null))
			{
				String evError = null;
				do
				{
					if (proceedMessage != null)
					{
						Event e = this.events.pop();
						//System.out.println(action+" waits for "+e);
						if (this.stopAtTime != -1)
						{
							if (this.currentTime <= this.stopAtTime
									&& e.time > this.stopAtTime)
							{
								this.currentTime = this.stopAtTime;
								//this.updateClock();
								//this.updateAmounts();
								if (this.currentPosition == -2)
								{
									this.currentPosition = k - 1;
									//this.updateBuild(true);
								}
							}
						}
						this.currentTime = e.time;
						if (e.event==("execute"))
						{
							//this.entities.get(e.name)
							this.finishDoing(e.entityUnderName, e.actInd,
									e.active);
						}
						if (e.event==("check"))
						{
							//this.entities.get(e.name)
							this.autoCheck(e.entityUnderName, e.actInd);
						}
						if (e.event==("start"))
						{
							proceedMessage = null;
							break;
						}
					}
					proceedMessage = this.errorDoing(action, maxIndexOf(action.value), false);
					evError = this.errorDoing(action,maxIndexOf(action.value), true);
					
					if ((proceedMessage == null || proceedMessage.length() == 0) && k > 0 && this.delays.get(k - 1) > 0)
					{
						if (!this.isDelayed)
						{
							Event event = new Event();
							event.event = "start";
							event.time = this.currentTime + this.delays.get(k - 1) * 100;
							//event.name = action.name;
							event.entityUnderName = action;
							this.events.add(event);
							
							/*Collections.sort(this.events, new Comparator<Event>()
							{
								public int compare(Event o1, Event o2)
								{
									return o1.time - o2.time;
								}
							});*/
							this.isDelayed = true;
						}
						proceedMessage = "Delaying.";
					}
				} while (proceedMessage != null && proceedMessage.length() > 0 && (this.activeEvents > 0 || evError == null));
				actionTime = action.time;
				//assertEvents();
				int chronoTargetSize = 0;
				if (this.chronoboost > 0 && action.name=="Chronoboost"
						&& action.need != null)
				{
					this.chronoAmount.set(chronoTargetSize, this.chronoboost);
					this.chronoTarget.add(action.need.get(0).name);
					chronoTargetSize++;
					this.chronoboost = 0;
				}
				for (int m = 0; m < this.chronoTarget.size(); m++)
				{
					if (chronoTarget.get(m) == null) continue;
					
					if (action.need != null 
							&& action.need.get(0).name==(chronoTarget.get(m)))
					{
						if (this.chronoFinished.size() > m && this.chronoFinished.get(m) != null
								&& this.currentTime < this.chronoFinished.get(m))
						{
							continue;
						}
						if (this.chronoFinished.size() > m && this.chronoFinished.get(m) != null)
						{
							this.chronoAmount.set(m, Math.max(
											this.chronoAmount.get(m)
													- (this.currentTime - this.chronoFinished.get(m))
													/ 2, 0));
						}
						if (actionTime < this.chronoAmount.get(m) * 3)
						{
							int o = (int)(actionTime * 1 / 3);
							actionTime = actionTime - o;
							this.chronoAmount.set(m, this.chronoAmount.get(m) - o);
							this.chronoFinished.set(m, this.currentTime + actionTime);
						} else
						{
							actionTime = actionTime - this.chronoAmount.get(m);
							this.chronoTarget.set(m, null);
							this.chronoAmount.set(m, null);
							if (this.chronoFinished.get(m) != null)
							{
								this.chronoFinished.set(m, null);
							}
						}
						break;
					}
				}
				if (!(notInit && ((this.stopAtTime != -1 && this.currentTime > this.stopAtTime) || (this.stopAtTime == -1 && k > this.currentPosition))))
				{
					if (proceedMessage == null)
					{
						if (!notInit)
						{
							String f = String.valueOf(this.entitiy_Food.value[0]);
							if(k==this.food.size()) 
								this.food.add(f); 
							else
								this.food.set(k, f);
						}
						this.startDoing(action, actionTime, action.value[0], true);
					}
					else
					{
						this.eventualError.set(k,  proceedMessage);
						this.updateCenter(false, false, position, j);
						if(this.food.size()==k)
							this.food.add(k, ""); 
						else
							this.food.set(k, "");
						return;
					}
				}
			}
			else
			{
				actionTime = action.time;
				proceedMessage = this.eventualError.size()<=k ? null : this.eventualError.get(k);
			}
			
			final boolean b = notInit;

			if (!b && !j && action.name!=("Chronoboost"))
			{
				//$("#action_" + k).remove();
				//actionDiv = $("<div></div>");
				//actionDiv.attr("id", "action_" + k);
				//actionDiv.css("left", parseInt((this.currentTime * 0.05))
				//		+ "px");
				if (action.style==("instant") || action.style==("action"))
				{
					//actionDiv.css("width", "150px");
					//actionDiv.addClass("action_event")
				} else
				{
					/*if (action.section == "pause")
					{
						actionDiv.css("width",
								(parseInt(this.delays[k] * 100 * 0.05) - 1)
										+ "px");
						actionDiv.addClass("pause")
					} else
					{
						actionDiv.css("width",
								(parseInt(actionTime * 0.05) - 1) + "px");
						actionDiv.addClass("action")
					}*/
				}
				/*if (action.section != Section.pause)
				{
					actionDiv.append($("<img></img>").attr("id",
							"actionImage_" + k).attr("src",
							"images/" + action.icon + ".png"));
					actionText = $("<p></p>").attr("id", "actionText_" + k);
					if (action.style != "notext"
							&& (actionTime > 1200 || (action.style == "instant" || action.style == "action")))
					{
						actionText.html(action.name)
					} else
					{
						actionText.html("")
					}
					actionDiv.append(actionText)
				}*/

					{
					}

				int h = 0;
				//var d = null;
				if (k > 0 && delays.get(k-1) > 0)
				{
					h = delays.get(k-1);
					//d = $("#action_" + (k - 1));
					//pauseHighlight = $("#actionHighlight_" + (k - 1));
					//pauseHighlight.attr("startTime", this.currentTime - 100
					//		* this.delays[k - 1]);
					//pauseHighlight.attr("endTime", this.currentTime)
				}
				this.insertAction(action, h, actionTime);	
				/*highlightDiv = $("<div></div>").addClass("highlight").attr(
						"id", "actionHighlight_" + k).attr("positionId", k)
						.bind(
								"click",
								function(c)
								{
									sc.removeOrder(c, $(this)
											.attr("positionId"), true, false)
								}).bind("mouseover", function(c)
						{
							sc.highlight($(this).attr("positionId"), 0)
						}).bind("mouseout", function(c)
						{
							sc.lowlight($(this).attr("positionId"))
						}).css("width",
								(parseInt(actionDiv.css("width")) + 2) + "px")
						.css("top", "-1px").css("left", "-1px").css("height",
								"26px").attr("startTime", this.currentTime)
						.attr("endTime", this.currentTime + actionTime);
				if (action.section == "pause")
				{
					highlightDiv.attr("endTime", this.currentTime
							+ this.delays[k] * 100)
				}
				actionDiv.append(highlightDiv);*/
				/*if (n)
				{
					highlightDiv.addClass("disabled");
					highlightDiv.removeClass("highlight");
					highlightDiv.attr("error", n)
				} else
				{
					highlightDiv.addClass("highlight");
					highlightDiv.removeClass("disabled");
					highlightDiv.attr("error", "")
				}*/
			}
			//r = Math.max(r, this.currentTime + action.time, this.stopAtTime);
			if (!b && !j && action.name==("Chronoboost"))
			{
				//$("#action_" + k).remove();
				//$("#chrono_action_" + k).remove()
			}
			if (!b && this.stopAtTime == -1 && k == this.currentPosition)
			{
				this.updateClock();
				this.updateAmounts();;
			}
		}
		/*if (!b && !j)
		{
			k = this.build.length;
			while (true)
			{
				actionDiv = $("#action_" + k);
				if (!actionDiv.length)
				{
					break
				}
				$("#chrono_" + actionDiv.attr("id")).remove();
				actionDiv.remove();
				k++
			}
			totalHeight = 29;
			for ( var q in this.category)
			{
				k = this.category[q].length;
				while (true)
				{
					sectionDiv = $("#" + q + "_" + k);
					if (!sectionDiv.length)
					{
						break
					}
					sectionDiv.remove();
					k++
				}
				category = $("#" + q);
				if (category.length)
				{
					totalHeight += category.height()
				}
			}
			totalHeight = Math.max(totalHeight, 680);
			$("#timeLine").css("height", totalHeight + "px")
		}*/
		/*if (!b)
		{
			r = Math.max(r, this.currentTime, this.stopAtTime);
			//$(".section").css("width", (parseInt(r * 0.05) + 300) + "px");
			timeSteps = Math.max((r / 2000) + 2, 7);
			for ( var k = 0; k < timeSteps; k++)
			{
				if (!$("#time_" + k).length)
				{
					var p = addZeros(((k + 1) % 3) * 20, 2);
					var f = addZeros(parseInt((k + 1) / 3), 2);
					$("#time").append(
							$("<div></div>").css("left", (k + 1) * 100 + "px")
									.addClass("time").attr("id", "time_" + k)
									.append(
											$("<span></span>")
													.html(f + ":" + p)
													.addClass("time_text")))
				}
			}
		}*/
		//dumpState(this);
		if (!notInit)
		{
			//assertEvents();
			while (this.stopAtTime != -1 && this.currentTime <= this.stopAtTime
					&& !this.events.isEmpty())
			{
				if (this.currentPosition == -2)
				{
					this.currentPosition = this.build.size() - 1;
					//this.updateBuild(true);
				}
				Event e = this.events.pop();
				if (e.time > this.stopAtTime)
				{
					this.currentTime = this.stopAtTime;
					this.updateClock();
					this.updateAmounts();
					break;
				}
				this.currentTime = e.time;
				if (e.event==("execute"))
				{
					//this.entities.get(e.name)
					this.finishDoing(e.entityUnderName, e.actInd, e.active);
				}
				if (e.event==("check"))
				{
					//this.entities.get(e.name)
					this.autoCheck(e.entityUnderName, e.actInd);
				}
			}
		}
		else
		{
			//assertEvents();
			while (this.activeEvents > 0)
			{
				Event e = this.events.pop();
				this.currentTime = e.time;
				if (e.event==("execute"))
				{
					//this.entities.get(e.name)
					this.finishDoing(e.entityUnderName, e.actInd, e.active);
				}
				if (e.event==("check"))
				{
					//this.entities.get(e.name)
					this.autoCheck(e.entityUnderName, e.actInd);
				}
			}
			//assertEvents();
			for (VolatileEntity g : this.entities.values())
			{
				String n = this.errorDoing(g, maxIndexOf(g.value), true);
				if (n != null)
				{
					g.eventualError = true;
					g.currentError = n;
				} else
				{
					g.eventualError = false;
					g.currentError = "";
				}
			}
			//assertEvents();
		}
		//dumpState(this);
	}
	/*this.highlight = function(c, b)
	{
		ah = $("#actionHighlight_" + c);
		oh = $("#orderHighlight_" + c);
		if (ah.length)
		{
			if (ah.is(".disabled"))
			{
				ah.css("opacity", "0.8")
			} else
			{
				ah.css("opacity", "0.4")
			}
		}
		if (b == 0)
		{
			var a = $("#center_window");
			this.showInfo(this.build[c], ah.attr("error"), Math.max(ah.parent()
					.position().left
					- a.scrollLeft(), 0), ah.parent().parent().position().top
					- a.scrollTop() + 230, ah.attr("startTime"), ah
					.attr("endTime"))
		} else
		{
			var d = $("#build_window");
			if (ah)
			{
				this.showInfo(this.build[c], ah.attr("error"), 120 + Math.max(
						oh.parent().position().left - d.scrollLeft(), 0), 170,
						ah.attr("startTime"), ah.attr("endTime"))
			} else
			{
				this.showInfo(this.build[c], "", 120 + Math.max(
						oh.parent().position.left() - d.scrollLeft(), 0), 170,
						null, null)
			}
		}
		if (oh.length)
		{
			if (oh.is(".disabled_order"))
			{
				oh.css("opacity", "0.8")
			} else
			{
				oh.css("opacity", "0.2")
			}
		}
	};
	this.lowlight = function(a)
	{
		ah = $("#actionHighlight_" + a);
		if (ah.length)
		{
			if (ah.is(".disabled"))
			{
				ah.css("opacity", "0.7")
			} else
			{
				ah.css("opacity", "0")
			}
		}
		oh = $("#orderHighlight_" + a);
		if (oh.length)
		{
			if (oh.is(".disabled_order"))
			{
				oh.css("opacity", "0.7")
			} else
			{
				oh.css("opacity", "0")
			}
		}
		this.hideInfo()
	};*/
	void updateClock()
	{
		/*var b = addZeros((parseInt(this.currentTime / 100) % 60), 2);
		var a = addZeros(parseInt((this.currentTime / 100) / 60), 2);
		$("#clock").html(a + ":" + b);
		$("#timeLine").css("left", parseInt(this.currentTime * 0.05) + "px");
		centerDiv = $("#center_window");
		minimum = this.currentTime * 0.05 - 590;
		maximum = this.currentTime * 0.05 - 100;
		if (centerDiv.scrollLeft() < minimum)
		{
			centerDiv.scrollLeft(minimum)
		}
		if (centerDiv.scrollLeft() > maximum)
		{
			centerDiv.scrollLeft(maximum)
		}*/
	}
	void updateAmounts()
	{
		/*for ( var c in this.entities)
		{
			var a = this.entities[c];
			if (a.kind != "hidden")
			{
				amountParagraph = $("#entity_amount_" + fixString(c));
				if (a.style == "supply")
				{
					amountParagraph.html(this.entities.Food.value[0] + " / "
							+ a.value[0])
				} else
				{
					if (a.style == "action" || a.style == "pause"
							|| (sum(a.value) == 0 && a.kind != "resource"))
					{
						amountParagraph.html("");
						amountParagraph.css("visibility", "hidden")
					} else
					{
						amountParagraph.css("visibility", "visible");
						if (a.style == "single")
						{
							amountParagraph
									.html('<img src="images/icons/check.png" alt="" width="14px"/>')
						} else
						{
							amountParagraph.html(a.value[0]);
							for ( var b = 1; b < a.value.length; b++)
							{
								amountParagraph.html(amountParagraph.html()
										+ " / " + a.value[b])
							}
						}
					}
				}
				if (a.kind != "resource")
				{
					overlayButton = $("#entity_" + fixString(c));
					error = this.errorDoing(a, maxIndexOf(a.value), false);
					if (error && a.eventualError
							&& !(a.style == "single" && a.value[0] == 1))
					{
						overlayButton.addClass("disabled");
						overlayButton.removeClass("highlight");
						overlayButton.css("opacity", 0.7);
						overlayButton.unbind("mouseenter mouseleave")
					} else
					{
						overlayButton.addClass("highlight");
						overlayButton.removeClass("disabled");
						overlayButton.css("opacity", 0);
						overlayButton.hover(function()
						{
							$(this).css("opacity", 0.2)
						}, function()
						{
							$(this).css("opacity", 0)
						});
						if (error)
						{
							a.currentError = error
						} else
						{
							a.currentError = ""
						}
					}
				}
			}
		}*/
	};
	void insertAction (Entity g, int m, int d)
	{
		int k = this.currentTime + d;
		if (g.style==("action") || g.style==("instant"))
		{
			k = this.currentTime + Math.max(d, 2500);
		}
		Category cat = this.category.get(g.section);
		int a = cat.value.length;
		int j = this.currentTime - m * 100;
		
		for (int h = 0; h < cat.value.length; h++)
		{
			if (j >= cat.value[h])
			{
				cat.value[h] = k;
				a = h;
				break;
			}
		}
		if (a == cat.value.length)
		{
			int[] newArr = new int[cat.value.length + 1];
			System.arraycopy(cat.value, 0, newArr, 0, cat.value.length);
			cat.value[cat.value.length - 1] = k;
		}
		/*String sectionId = g.section + "_" + a;
		sectionDiv = $("#" + sectionId);
		if (!sectionDiv.length)
		{
			sectionDiv = $("<div></div>").addClass("section").attr("id",
					sectionId);
			$("#" + g.section).append(sectionDiv)
		}
		if (m > 0)
		{
			sectionDiv.append(b)
		}
		sectionDiv.append(c);
		$("#chrono_" + c.attr("id")).remove();*/
		if (g.time != d)
		{
			int f = k + g.time - d;
			cat.value[a] = f;
			/*sectionDiv.append($("<div></div>").css("left",
					parseInt((k * 0.05) - 1) + "px").css("zIndex", 0).css(
					"width", parseInt(((g.time - d) * 0.05)) + "px").addClass(
					"action").attr("id", "chrono_" + c.attr("id")).css(
					"opacity", "0.5").css("height", "24px").css("border",
					"1px solid #004").css("backgroundImage",
					"url(images/chronolines.png)"))*/
		}
	}
	/*this.startUp()
	/*}
	$(document).ready(function()
	{
		sc = new StarcraftBuilder();
		$(window).bind("hashchange", function()
		{
			sc = new StarcraftBuilder();
			sc.startUp()
		})
	});*/
			
	public static void main(String args[])
	{
		//if (args.length != 1) throw new IllegalArgumentException("Zerg, Terran or Protoss should be defined");
		
		SC2Planner sc = new SC2Planner();
		//sc.init(Faction.valueOf(args[0]));
		sc.init(Faction.PROTOSS);
		//sc.stopAtTime = 1000000;
		sc.setBuild(Arrays.asList(sc.entities.get("Assimilator")
		,sc.entities.get("Gas Probe")
		,sc.entities.get("Gas Probe")
		,sc.entities.get("Gas Probe")
		,sc.entities.get("Probe")
		,sc.entities.get("Probe")
		,sc.entities.get("Probe")
		,sc.entities.get("Pylon")
		,sc.entities.get("Probe")
		,sc.entities.get("Probe")
		,sc.entities.get("Probe")
		,sc.entities.get("Gateway")
		,sc.entities.get("Zealot")
		,sc.entities.get("Zealot")
		
		,sc.entities.get("Pylon")
		,sc.entities.get("Cybernetics Core")
		,sc.entities.get("Stalker")
		,sc.entities.get("Stalker")
		,sc.entities.get("Zealot")));
		sc.updateCenter(false, true, 0, false);
		sc.dumpState();
	}
	public void setBuildS(Collection<VolatileEntity>a){
		for(VolatileEntity i:a){
			insertIntoBuild(i);
		}
	}
	public void setBuild(Collection<VolatileEntity>a) {
		clearBuilds();
		for(VolatileEntity i:a){
			this.stopAtTime = -1;
			
			if (i.section == Section.pause)
			{
				if (this.currentPosition >= 0
						&& this.build.get(this.currentPosition).section == Section.pause)
				{
					this.delays.set(this.currentPosition, this.delays.get(this.currentPosition) + 0);
				} 
				else
				{
					if (this.currentPosition < (this.build.size() - 1)
							&& this.build.get(this.currentPosition + 1).section == Section.pause)
					{
						this.delays.set(this.currentPosition, this.delays.get(this.currentPosition + 1) + 0);
					}
					else
					{
						this.currentPosition += 1;
						this.build.add(this.currentPosition, i);
						this.delays.add(this.currentPosition, 0);
						this.food.add(this.currentPosition,"");
						this.eventualError.add(this.currentPosition,null);
					}
				}
			} 
			else
			{
				if (this.currentPosition >= 0
						&& this.build.get(this.currentPosition).adding != null
						&& this.build.get(this.currentPosition).adding == i.name)
				{
					this.build.set(this.currentPosition, this.entities.get(this.build.get(this.currentPosition).addsto));
					this.delays.set(this.currentPosition, 0);
				} 
				else
				{
					this.currentPosition += 1;
					this.build.add(this.currentPosition, i);
					this.delays.add(this.currentPosition, 0);
					this.food.add(this.currentPosition,"");
					this.eventualError.add(this.currentPosition,null);
				}
			}
			//this.updateCenter(true, false, this.currentPosition, false);
			//this.updateBuild(true)
		}
		this.updateCenter(true, false, this.currentPosition, false);
	}
	public void dumpState() {
		SC2Planner sc  = this;
		sc.assertEvents();
		System.out.println("delays");
		for(int i : sc.delays){
			System.out.println(i);
		}
		System.out.println("food");
		for(String i : sc.food){
			System.out.println(i);
		}
		System.out.println("Events");
		//sc.updateCenter(true, false, 0, false);
		for(Object i :sc.events.toArray()){
			System.out.println(i);
		}
		System.out.println("BUILD::");
		for(Entity i :sc.build){
			System.out.println(i);
		}
		for(Entry<Section, Category> i:new TreeMap<Section, Category>(sc.category).entrySet()){
			System.out.println("cat:"+i.getKey());
			for(int j : i.getValue().value){
				System.out.print(" "+j);
			}
			System.out.println();
		}
		
		for(Entry<String, VolatileEntity> a : new TreeMap<String, VolatileEntity>(sc.entities).entrySet()){
			if(a.getValue().value!=null && a.getValue().value.length>0 && a.getValue().value[0]!=0){
				System.out.println(a);
			}
		}
	}
	
	private void assertEvents() {
		
		int actualActive = 0;
		for(Object i : events.toArray()){
			if(((Event)i).active) actualActive++;
		}
		if(actualActive!=this.activeEvents){
			throw new IllegalStateException(" active "+actualActive+" but should be "+activeEvents);
		}
	}
	public void insertIntoBuild(Entity entity)
	{
		this.insertIntoBuild(entity,0);
	}
	
	public boolean isSuccessfull()
	{
		for(VolatileEntity i: entities.values())
		{
			if(i.eventualError)
			{
				return false;
			}
		}
		return true;
	}
	
	public void clearBuilds()
	{
		//SC2Planner.loader.init();
		this.reset();
		this.currentTime = 0;
		/*this.build.clear();
		this.delays.clear();
		this.food.clear();
		
		this.currentPosition = -1;*/
	}
	
	public int getCurrentTime()
	{
		return this.currentTime;
	}
	
	
	public void setBuild(LinkedList<Entity> build2) {
		LinkedList<VolatileEntity> e = new LinkedList<>();
		for(Entity i: build2){
			e.add(this.entities.get(i.name));
		}
		setBuild(e);
	}
	public VolatileEntity getVolatile(Entity entity) {
		return this.entities.get(entity.name);
	}
	public VolatileEntity getEntityByName(String name) {
		return this.entities.get(name);
	}
	
	
	public int getResultMinerals(){
		return getResult("Minerals");
	}
	
	private int getResult(String string) {
		VolatileEntity volatileEntity = this.entities.get(string);
		if(volatileEntity.value==null || volatileEntity.value.length!=1)
			return 0;
		return volatileEntity.value[0];
	}
	public int getResultGas(){
		return getResult("Gas");
	}

	public int getResultFood(){
		return getResult("Food");
	}
	public boolean isFailed() {
		for(String i : eventualError){
			if(i!=null) return true;
		}
		return false;
		//VolatileEntity ve = getVolatile(build.get(build.size()-1));
		//return ve.eventualError;
	}
}
