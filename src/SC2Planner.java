import java.util.*;

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
	enum Faction
	{
		TERRAN,
		PROTOS,
		ZERG
	}
	
	class Cost
	{
		String entity;
		int amount;
	}
	
	class Entity
	{
		String name;
		String section;
		String kind;
		Integer start;
		String style;
		int[] value;
		List<Entity> products;
		List<Entity> need;
		
		Entity adding;
		Entity addsto;
		List<String> conditions;
		List<Cost> costs;
		
		String error;
		String multi;
		
		int cap;
	}
	
	class Event
	{
	}
	
	/*class Value
	{
		public List<Integer> value = new ArrayList<Integer>();
	}*/
	
	class Category
	{
		public List<Integer> value = new ArrayList<Integer>();
	}
	
	SC2Planner sc;
	List<Event> events;
	int currentTime;
	private String factionName;
	private ArrayList<Integer> entities;
	private ArrayList<Integer> entitiesByKey;
	private ArrayList<Integer> build;
	private ArrayList<Integer> delays;
	private ArrayList<Integer> food;
	private ArrayList<Integer> eventualError;
	private int currentPosition;
	
	int sum(int[] d)
	{
		int b = d[0];
		for ( int c = 1; c < d.length; c = c + 1)
		{
			b = b + d[c];
		}
		return b;
	}
	int max(int[] d)
	{
		int b = d[0];
		for ( int c = 1; c < d.length; c = c + 1)
		{
			b = Math.max(b, d[c]);
		}
		return b;
	}
	
	int maxIndexOf(int[] b)
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
	
	int minIndexOf(int[] b)
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
	
	void init (Faction faction)
	{
		if (faction == null)
		{
			throw new IllegalStateException("Error: no faction: ");
		}
		this.factionName = faction.name();
		this.entities = new ArrayList<Integer>();
		this.entitiesByKey = new ArrayList<Integer>();
		this.build = new ArrayList<Integer>();
		this.delays = new ArrayList<Integer>();
		this.food = new ArrayList<Integer>();
		this.eventualError = new ArrayList<Integer>();
		this.currentPosition = -1;
		for ( int a = 0; a < faction.values().length; a++)
		{
			entity = faction.entities[a];
			this.entities[entity.name] = entity;
			this.entitiesByKey[entity.save] = entity;
			this.initEntity(entity);
		}
		this.stopAtTime = -1;
		this.readBuild();
		this.updateCenter(false, false, 0, false);
		this.updateBuild(false);
	}
	
	void reset(Entity a)
	{
		a.value = int[] {a.start};
		a.idle = a.start;
	}
	
	void initEntity (Entity a)
	{
		if (a.start == null)
		{
			a.start = 0;
		}
		if (a.autocheck == null)
		{
			a.autocheck = false;
		}
		if (a.time == null)
		{
			a.time = 0;
		}
		if (a.products != null)
		{
			for ( var b = 0; b < a.products.length; b++)
			{
				if (a.products[b].name == null)
				{
					a.products[b].name = a.name;
				}
				if (a.products[b].amount == null)
				{
					a.products[b].amount = 1;
				}
			}
		}
		else
		{
			Entity ent = new Entity();
			ent.name = a.name,;
			ent.amount = 1;
			a.products = new ArrayList<Entity>();
			a.products.add(ent);
		}
		this.reset(a);
	}
	
	public String exportBuild()
	{
		str = "";
		for ( var b = 0; b < this.build.length; b++)
		{
			var a = this.build[b];
			if (a.style != "nonumber" && this.food[b] != null && this.food[b] != "")
			{
				str += this.food[b] + " : " + this.build[b].name + "\n"
			}
		}
		return str;
	}
	
	public void insertIntoBuild (Entity b, int a)
	{
		this.stopAtTime = -1;
		
		if (this.currentPosition >= 0
				&& this.build[this.currentPosition].adding != null
				&& this.build[this.currentPosition].adding == b.name)
		{
			this.build.splice(this.currentPosition, 1,
					this.entities[this.build[this.currentPosition].addsto]);
			this.delays.splice(this.currentPosition, 1, 0);
		} 
		else
		{
			this.currentPosition += 1;
			this.build.splice(this.currentPosition, 0, b);
			this.delays.splice(this.currentPosition, 0, 0);
		}
		
		this.updateCenter(true, false, this.currentPosition, false);
		//this.updateBuild(true)
	}
	
	public void setPosition (int a)
	{
		this.currentPosition = a;
		this.stopAtTime = -1;
		this.updateCenter(false, false, 0, true)
	}
	
	
	String errorDoing (Entity entity, int index, boolean c)
	{
		if (entity.style == "single" && entity.value[index] > 0)
		{
			return "Already researched / built.";
		}
		if (entity.conditions != null)
		{
			for ( var h in entity.conditions)
			{
				if (max(this.entities[entity.conditions[h]].value) <= 0)
				{
					return entity.conditions[h] + " needed.";
				}
			}
		}
		if (entity.need)
		{
			for ( var h = 0; h < entity.need.length; h++)
			{
				if (this.entities[entity.need[h].name].idle <= 0)
				{
					return entity.need[h].error;
				}
			}
		}
		var d = (entity.name == "Slow Mineral Patch");
		var b = (entity.name == "Slow Gold Mineral Patch");
		var a = (entity.name == "Fast Mineral Patch");
		var l = (this.entities["Slow Gold Mineral Patch"].idle > 0);
		var k = (this.entities["Fast Mineral Patch"].idle > 0);
		var i = (this.entities["Fast Gold Mineral Patch"].idle > 0);
		if ((d && (l || k || i)) || (b && (k || i)) || (a && i))
		{
			return "Faster patch available.";
		}
		if (entity.name == "Slow Gas Patch"
				&& this.entities["Fast Gas Patch"].idle > 0)
		{
			return "Faster patch available.";
		}
		var f = 0;
		if (entity.costs)
		{
			for ( var h in entity.costs)
			{
				if (c)
				{
					if (entity.costs[h].name == "Minerals"
							&& this.entities["Mineral Drone"]
							&& this.entities["Mineral Drone"].value[0] > 0)
					{
						continue;
					}
					if (entity.costs[h].name == "Minerals"
							&& this.entities["Mineral Probe"]
							&& this.entities["Mineral Probe"].value[0] > 0)
					{
						continue;
					}
					if (entity.costs[h].name == "Minerals"
							&& this.entities["Mineral SCV"]
							&& this.entities["Mineral SCV"].value[0] > 0)
					{
						continue;
					}
					if (entity.costs[h].name == "Gas" && this.entities["Gas Drone"]
							&& this.entities["Gas Drone"].value[0] > 0)
					{
						continue;
					}
					if (entity.costs[h].name == "Gas" && this.entities["Gas Probe"]
							&& this.entities["Gas Probe"].value[0] > 0)
					{
						continue;
					}
					if (entity.costs[h].name == "Gas" && this.entities["Gas SCV"]
							&& this.entities["Gas SCV"].value[0] > 0)
					{
						continue;
					}
					if (entity.costs[h].name == "Larva")
					{
						continue;
					}
					if (entity.costs[h].name == "Energy"
							&& this.entities["Energy Spawner"].value[0] > 0)
					{
						continue;
					}
				}
				if (entity.costs[h].name == "Energy" && entity.name == "Chronoboost"
						&& this.chronoboost > 0)
				{
					if (max(this.entities.Energy.value) < entity.costs[h].amount
							- this.chronoboost * 11.25 / 1000)
					{
						return entity.costs[h].error;
					}
				} else
				{
					if (max(this.entities[entity.costs[h].name].value) < entity.costs[h].amount)
					{
						return entity.costs[h].error;
					}
				}
				if (entity.atmost && entity.costs[h].name == entity.atmost.name)
				{
					f = entity.costs[h].amount;
				}
			}
		}
		if (entity.atmost)
		{
			if (entity.atmost.amount)
			{
				if (this.entities[entity.atmost.name].value[index] - f > entity.atmost.amount)
				{
					return entity.atmost.error;
				}
			}
			if (entity.atmost.as)
			{
				if (this.entities[entity.atmost.name].value[index] - f > max(this.entities[entity.atmost.as].value))
				{
					return entity.atmost.error;
				}
			}
		}
		return null;
	}
	
	void autoCheck (Entity b, int index)
	{
		String error = this.errorDoing(b, a, false);
		if (error)
		{
			Event event = new Event();
			event.event = "check";
			
			event.name = b.name;
			event.actInd = a;
			event.active = false;
			
			if (b.name == "Larva Spawner")
			{
				event.time = parseInt((this.currentTime + 100));
			}
			else
			{
				event.time = parseInt((this.currentTime + parseInt(3 * b.time / 4))),
			}
			this.events.push(event);
			this.events = this.events.sort(new Comparator<Event>()
			{
				public int compare(Event o1, Event o2);
				{
					return o1.time - o2.time;
				}
			});
		}
		else
		{
			this.startDoing(b, b.time, a, false)
		}
	}
	
	void startDoing (Entity d, int addedTime, int actInd, boolean isActive)
	{
		if (d.costs != null)
		{
			for (Cost f : d.costs)
			{
				Entity l = this.entities[f.name];
				int a = f.amount;
				int c = maxIndexOf(l.value);
				l.value[c] -= a;
				l.idle -= a;
				if (a < 0 && l.autocheck)
				{
					if (l.multi.equals(d.name))
					{
						var g = i;
						if (l.value[g] != 0)
						{
							l.value[g] = 0;
						}
					}
					else
					{
						g = 0;
					}
					for ( var k = 0; k < -a; k++)
					{
						this.autoCheck(l, l.value[g] - (-a) + k);
					}
				}
			}
		}
		if (d.need != null)
		{
			for (Entity f : d.need)
			{
				this.entities[f.name].idle -= 1;
			}
		}
		if (d.name == "Chronoboost")
		{
			this.chronoboost += 1000;
		}
		if (b)
		{
			this.activeEvents += 1;
		}
		Event event = new Event();
		event.event = "execute";
		event.time = parseInt((this.currentTime + addedTime));
		event.name = b.name;
		event.actInd = i;
		event.active = isActive;
		
		this.events = this.events.sort(new Comparator<Event>()
		{
			public int compare(Event o1, Event o2);
			{
				return o1.time - o2.time;
			}
		});
	}
	
	void finishDoing (Entity g, int index, boolean resetActiveEvents)
	{
		autocheckNeedError = false;
		if (g.need != null && g.autocheck)
		{
			for (Entity a : g.need)
			{
				if (this.entities[a.name].idle < 0)
				{
					autocheckNeedError = true;
				}
			}
		}
		if (g.products && !autocheckNeedError)
		{
			for (Entity a : g.products)
			{
				Entity f = this.entities[a.name];
				int amount = a.amount;
				if (f.multi.equals(g.name))
				{
					useIndex = index;
					if (f.value[useIndex] != 0)
					{
						f.value[useIndex] = 0;
					}
				}
				else
				{
					useIndex = minIndexOf(f.value)
				}
				if (f.cap != 0 && f.value[useIndex] + amount > f.cap)
				{
					amount = f.cap - f.value[useIndex]
				}
				f.value[useIndex] += amount;
				f.idle += amount;
				if (f.autocheck)
				{
					for ( var b = 0; b < amount; b++)
					{
						this.autoCheck(f, f.value[useIndex] - amount + b)
					}
				}
			}
		}
		if (g.need)
		{
			for ( var a in g.need)
			{
				this.entities[g.need[a].name].idle += 1;
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
	void updateCenter (Entity l, boolean notInit, int position, int j)
	{
		if (!notInit)
		{
			this.updateCenter(l, true, position, j);
		}
		if (l)
		{
			for ( var k = a; k < this.build.length; k++)
			{
				this.eventualError[k] = null;
			}
		}
		this.currentTime = 100;
		this.chronoboost = 0;
		this.chronoTarget = new ArrayList<Integer>();
		this.chronoAmount = new ArrayList<Integer>();
		this.chronoFinished = new ArrayList<Integer>();
		this.activeEvents = 0;
		var r = 20000;
		if (!notInit)
		{
			this.category = new ArrayList<Category>();
			this.category.add(new Category());
			this.category.add(new Category());
			this.category.add(new Category());
			this.category.add(new Category());
			this.category.add(new Category());
			this.category.add(new Category());
			
			/*this.category.pause = new ArrayList<Integer>();
			this.category.worker = new ArrayList<Integer>();
			this.category.special = new ArrayList<Integer>();
			this.category.building = new ArrayList<Integer>();
			this.category.upgrade = new ArrayList<Integer>();
			this.category.unit = new ArrayList<Integer>();*/
		}
		this.events = new ArrayList<Integer>();
		for (Entity k : this.entities)
		{
			action = this.entities[k];
			this.reset(action);
		}
		for (Entity k : this.entities)
		{
			action = this.entities[k];
			if (action.autocheck && action.name != "Fast Mineral Patch"
					&& action.name != "Slow Mineral Patch")
			{
				for ( var q = 0; q < action.value[0]; q++)
				{
					this.autoCheck(action, 0);
				}
			}
		}
		for ( var k = 0; k < 16; k++)
		{
			Event event = new Event();
			event.event = "check";
			event.time = parseInt(10 + ((k + 1) / 2) * 100);
			event.name = "Fast Mineral Patch";
			event.actInd = 0;
			this.events.add(event);
		}
		for ( var k = 0; k < 8; k++)
		{
			Event event = new Event();
			event.event = "check";
			event.time = parseInt(1002 + k * 100);
			event.name = "Slow Mineral Patch";
			event.actInd = 0;
			this.events.add(event);
		}
		this.events = this.events.sort(new Comparator<Event>()
		{
			int compare(Event o1, Event o2);
			{
				return o1.time - o2.time;
			}
		});
		for ( var k = 0; k < this.build.length; k++)
		{
			if (notInit
					&& ((this.stopAtTime != -1 && this.currentTime > this.stopAtTime) || (this.stopAtTime == -1 && k > this.currentPosition)))
			{
				break;
			}
			action = this.build[k];
			boolean proceed = true;
			this.isDelayed = false;
			if (!this.eventualError[k])
			{
				do
				{
					if (proceed)
					{
						e = this.events.pop();
						if (this.stopAtTime != -1)
						{
							if (this.currentTime <= this.stopAtTime
									&& e.time > this.stopAtTime)
							{
								this.currentTime = this.stopAtTime;
								this.updateClock();
								this.updateAmounts();
								if (this.currentPosition == -2)
								{
									this.currentPosition = k - 1;
									this.updateBuild(true);
								}
							}
						}
						this.currentTime = e.time;
						if (e.event == "execute")
						{
							this.finishDoing(this.entities[e.name], e.actInd,
									e.active);
						}
						if (e.event == "check")
						{
							this.autoCheck(this.entities[e.name], e.actInd);
						}
						if (e.event == "start")
						{
							n = null;
							break;
						}
					}
					proceed = this.errorDoing(action, maxIndexOf(action.value), false) != null;
					eventualError = this.errorDoing(action,maxIndexOf(action.value), true);
					
					if (!proceed && k > 0 && this.delays[k - 1] > 0)
					{
						if (!this.isDelayed)
						{
							Event event = new Event();
							event.event = "start";
							event.time = parseInt((this.currentTime + this.delays[k - 1] * 100));
							event.name = action.name;
							this.events.add(event);
							
							this.events = this.events.sort(new Comparator<Event>()
									{
										int compare(Event o1, Event o2);
										{
											return o1.time - o2.time;
										}
									});
							this.isDelayed = true;
						}
						proceed = true;
					}
				} while (n && (this.activeEvents > 0 || !eventualError));
				actionTime = action.time;
				if (this.chronoboost > 0 && action.name != "Chronoboost"
						&& action.need && action.need.length > 0)
				{
					this.chronoAmount[this.chronoTarget.length] = this.chronoboost;
					this.chronoTarget[this.chronoTarget.length] = action.need[0].name;
					this.chronoboost = 0;
				}
				for ( var m in this.chronoTarget)
				{
					if (action.need && action.need.length > 0
							&& action.need[0].name == this.chronoTarget[m])
					{
						if (this.chronoFinished[m]
								&& this.currentTime < this.chronoFinished[m])
						{
							continue
						}
						if (this.chronoFinished[m])
						{
							this.chronoAmount[m] = Math
									.max(
											this.chronoAmount[m]
													- (this.currentTime - this.chronoFinished[m])
													/ 2, 0)
						}
						if (actionTime < this.chronoAmount[m] * 3)
						{
							var o = parseInt(actionTime * 1 / 3);
							actionTime = actionTime - o;
							this.chronoAmount[m] = this.chronoAmount[m] - o;
							this.chronoFinished[m] = this.currentTime
									+ actionTime
						} else
						{
							actionTime = actionTime - this.chronoAmount[m];
							delete this.chronoTarget[m];
							delete this.chronoAmount[m];
							if (this.chronoFinished[m])
							{
								delete this.chronoFinished[m]
							}
						}
						break
					}
				}
				if (!(notInit && ((this.stopAtTime != -1 && this.currentTime > this.stopAtTime) || (this.stopAtTime == -1 && k > this.currentPosition))))
				{
					if (!n)
					{
						if (!notInit)
						{
							this.food[k] = this.entities.Food.value[0]
						}
						this.startDoing(action, actionTime, action.value[0],
								true)
					} else
					{
						this.eventualError[k] = n;
						this.updateCenter(false, false, a, j);
						this.food[k] = "";
						return;
					}
				}
			} else
			{
				actionTime = action.time;
				n = this.eventualError[k];
			}
			/*if (!b && !j && action.name != "Chronoboost")
			{
				$("#action_" + k).remove();
				actionDiv = $("<div></div>");
				actionDiv.attr("id", "action_" + k);
				actionDiv.css("left", parseInt((this.currentTime * 0.05))
						+ "px");
				if (action.style == "instant" || action.style == "action")
				{
					actionDiv.css("width", "150px");
					actionDiv.addClass("action_event")
				} else
				{
					if (action.section == "pause")
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
					}
				}
				if (action.section != "pause")
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
				}
				var h = 0;
				var d = null;
				if (k > 0 && this.delays[k - 1] > 0)
				{
					h = this.delays[k - 1];
					d = $("#action_" + (k - 1));
					pauseHighlight = $("#actionHighlight_" + (k - 1));
					pauseHighlight.attr("startTime", this.currentTime - 100
							* this.delays[k - 1]);
					pauseHighlight.attr("endTime", this.currentTime)
				}
				this.insertAction(action, actionDiv, h, d, actionTime);
				highlightDiv = $("<div></div>").addClass("highlight").attr(
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
				actionDiv.append(highlightDiv);
				if (n)
				{
					highlightDiv.addClass("disabled");
					highlightDiv.removeClass("highlight");
					highlightDiv.attr("error", n)
				} else
				{
					highlightDiv.addClass("highlight");
					highlightDiv.removeClass("disabled");
					highlightDiv.attr("error", "")
				}
			}
			r = Math.max(r, this.currentTime + action.time, this.stopAtTime);
			if (!b && !j && action.name == "Chronoboost")
			{
				$("#action_" + k).remove();
				$("#chrono_action_" + k).remove()
			}
			if (!b && this.stopAtTime == -1 && k == this.currentPosition)
			{
				this.updateClock();
				this.updateAmounts()
			}*/
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
		}
		if (!b)
		{
			r = Math.max(r, this.currentTime, this.stopAtTime);
			$(".section").css("width", (parseInt(r * 0.05) + 300) + "px");
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
		if (!notInit)
		{
			while (this.stopAtTime != -1 && this.currentTime <= this.stopAtTime
					&& this.events.length > 0)
			{
				if (this.currentPosition == -2)
				{
					this.currentPosition = this.build.length - 1;
					this.updateBuild(true)
				}
				e = this.events.pop();
				if (e.time > this.stopAtTime)
				{
					this.currentTime = this.stopAtTime;
					//this.updateClock();
					//this.updateAmounts();
					break
				}
				this.currentTime = e.time;
				if (e.event == "execute")
				{
					this.finishDoing(this.entities[e.name], e.actInd, e.active)
				}
				if (e.event == "check")
				{
					this.autoCheck(this.entities[e.name], e.actInd)
				}
			}
		}
		else
		{
			while (this.activeEvents > 0)
			{
				e = this.events.pop();
				this.currentTime = e.time;
				if (e.event == "execute")
				{
					this.finishDoing(this.entities[e.name], e.actInd, e.active)
				}
				if (e.event == "check")
				{
					this.autoCheck(this.entities[e.name], e.actInd)
				}
			}
			for ( var k in this.entities)
			{
				var g = this.entities[k];
				n = this.errorDoing(g, maxIndexOf(g.value), true);
				if (n)
				{
					g.eventualError = true;
					g.currentError = n
				} else
				{
					g.eventualError = false;
					g.currentError = ""
				}
			}
		}
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
	/*void updateClock()
	{
		var b = addZeros((parseInt(this.currentTime / 100) % 60), 2);
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
		}
	}*/
	/*void updateAmounts()
	{
		for ( var c in this.entities)
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
		}
	};*/
	void insertAction (Entity g, String c, int m, String b, int d)
	{
		int k = this.currentTime + d;
		if (g.style == "action" || g.style == "instant")
		{
			k = this.currentTime + Math.max(d, 2500);
		}
		var a = this.category[g.section].length;
		var j = this.currentTime - m * 100;
		for ( var h = 0; h < this.category[g.section].length; h++)
		{
			if (j >= this.category[g.section][h])
			{
				this.category[g.section][h] = k;
				a = h;
				break;
			}
		}
		if (a == this.category[g.section].length)
		{
			this.category[g.section].push(k);
		}
		sectionId = g.section + "_" + a;
		/*sectionDiv = $("#" + sectionId);
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
			var f = k + g.time - d;
			this.category[g.section][a] = f;
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
		if (args.length != 1) throw new IllegalArgumentException("Zerg, Terran or Protoss should be defined");
		
		SC2Planner sc = new SC2Planner();
		sc.init(Faction.valueOf(args[0]));	
	}
}
