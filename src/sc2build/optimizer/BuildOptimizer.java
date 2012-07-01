package sc2build.optimizer;

import java.util.ArrayList;
import java.util.Deque;
import java.util.LinkedList;
import java.util.List;

import sc2build.optimizer.SC2Planner.Entity;
import sc2build.optimizer.SC2Planner.Race;

public class BuildOptimizer
{
	private static final int TIME_THRESHOLD =  60 * 50 * 100; // 2 min
	private static final int LEVEL_THRESHOLD = 4;
	
	public static class Node
	{
		private final Entity entity;
		
		private int time;
		private Node parent;
		private List<Node> children = new LinkedList<>();
		
		private boolean leafNode = false; 
		
		public Node(Node parent, Entity entity, int time)
		{
			this.setParent(parent);
			this.setTime(time);
			this.entity = entity;
		}
		
		public void addNode(Node node)
		{
			this.children.add(node);
		}
		
		public List<Node> getChildren()
		{
			return this.children;
		}

		public Node getParent()
		{
			return parent;
		}

		public void setParent(Node parent)
		{
			this.parent = parent;
		}

		public int getTime()
		{
			return time;
		}

		public void setTime(int time)
		{
			this.time = time;
		}
		
		public void setLeafNode(boolean isFailed)
		{
			this.leafNode = isFailed;
		}
		
		public boolean isLeafNode()
		{
			return leafNode;
		}

		public int getAccumTime()
		{
			//return (this.parent == null ? 0 : this.parent.getAccumTime()) + this.time;
			return this.time;
		}
		
		public boolean isBuildDone(List<Entity> requried)
		{
			List<Entity> entitiesToDone = new ArrayList<>(requried);
			Node node = this;
			do
			{
				entitiesToDone.remove(node.entity);
			}
			while ((node = node.parent).entity != null);
			
			return entitiesToDone.isEmpty();
		}

		public Entity getEntity()
		{
			return this.entity;
		}

		public boolean isWith(String e){
			if(this.entity!=null && this.entity.name==e) return true;
			if(this.parent!=null) 
				return this.parent.isWith(e);
			return false;
		}
		public void dump()
		{
			if(this.parent!=null)this.parent.dump();
			System.out.println(time+" : "+ this.entity);
		}
		
		public String store()
		{
			return "[Name="+ (this.entity == null ? "Root" : this.entity.name) + ";time=" + this.time + ";leaf=" + this.isLeafNode() +"]"; 
		}
		
		@Override
		public String toString()
		{
			return this.entity == null ? "Root" : this.entity.name;
		}
	}

	private List<Node> curentLevelNodes = new LinkedList<>();
	private int minTime = Integer.MAX_VALUE;
	private Node minNode = null;
	private int level = 0;
	private SC2Planner planner;
	
	public BuildOptimizer(SC2Planner planner)
	{
		this.planner = planner;
	}

	private void fillBuild(Node node, Deque<Entity> build)
	{
		if (node.entity == null)
		{
			return;
		}
		build.addFirst(node.entity);
		if (node.parent != null)
		{
			this.fillBuild(node.parent, build);
		}
	}
	
	private void fillNodes(Node node, Deque<Node> nodes)
	{
		if (node.entity == null)
		{
			return;
		}
		nodes.addFirst(node);
		if (node.parent != null)
		{
			this.fillNodes(node.parent, nodes);
		}
	}
	
	private String dump(Node node)
	{
		LinkedList<Node> nodes = new LinkedList<>();
		this.fillNodes(node, nodes);
		
		StringBuilder sb = new StringBuilder();
		for (Node item : nodes)
		{
			sb.append(item.store());
			sb.append("/");
		}
		sb.setLength(sb.length() - 1);
		
		return sb.toString();
	}
	
	public void printBuild(Node node)
	{
		LinkedList<Entity> build = new LinkedList<>();
		this.fillBuild(node, build);
		
		for (Entity item : build)
		{
			System.out.print(item.name);
			System.out.print("-");
		}
	}
	
	private void putEntity(Node parent, Entity entity, List<Entity> requried)
	{
		int time = this.planner.getCurrentTime();
		
		Node node = new Node(parent, entity, time);
		parent.addNode(node);
		boolean buildIsDone = node.isBuildDone(requried);
		if (node.getAccumTime() > TIME_THRESHOLD || 
				(this.minNode != null && node.getAccumTime() > this.minTime) ||  
				buildIsDone)
		{
			if (buildIsDone)
			{
				this.calcMinTime(node);
			}
			node.setLeafNode(true);
		}
		else
		{
			this.curentLevelNodes.add(node);
		}
	}
	
	private void calcMinTime(Node node)
	{
		if (node.getAccumTime() < this.minTime)
		{
			this.minTime = node.getAccumTime();
			this.minNode  = node;
		}
	}

	public void buildRaceTree(Race race, List<Entity> requried)
	{
		Node root = new Node(null, null, 0);
		this.curentLevelNodes.clear();
		this.curentLevelNodes.add(root);
		this.buildNewLevel(race, requried);
	}
	
	
	/*private List<ThreadWork> shareWork(Race race, List<Node> curentLevelNodes, List<Entity> required, int count)
	{
		List<Node> pastLevelNodes = new ArrayList<>(BuildOptimizer.this.curentLevelNodes);
		this.curentLevelNodes.clear();
		
		int shareSize = curentLevelNodes.size() / count;
		List<ThreadWork> result = new LinkedList<>();
		int index = 0;
		for (int i = 0; i < count; i++)
		{
			ThreadWork work = new ThreadWork(race, index, index + shareSize, pastLevelNodes, required);
			result.add(work);
			index = index + shareSize + 1;
		}
		return result;
	}
	
	private class ThreadWork extends Thread
	{
		private final int beginIndex;
		private final int endIndex;
		private final Race race;
		private final List<Node> pastLevelNodes;
		private final List<Entity> required;
		
		public ThreadWork (Race race, int beginIndex, int endIndex, List<Node> pastLevelNodes, List<Entity> required)
		{
			this.beginIndex = beginIndex;
			this.endIndex = endIndex;
			this.race = race;
			this.pastLevelNodes = pastLevelNodes;
			this.required = required;
		}
		
		@Override
		public void run()
		{
			int parentNodeSize = this.pastLevelNodes.size();
			
			for (int i = this.beginIndex; i <= this.endIndex && i < parentNodeSize; i++)
			{
				Node node = pastLevelNodes.get(i);
				//parentNodeSize--;
				for (Entity entity : race.entities)
				{
					if (entity.section != Section.resource && !entity.name.equals("Chronoboost") && BuildOptimizer.this.isAllowedToAdd(node, entity))
					{
						BuildOptimizer.this.putEntity(node, entity, this.required);
					}
				}
			}
			
		}
	}*/
	
	private void buildNewLevel(Race race, List<Entity> requried)
	{
		if (this.curentLevelNodes.size() == 0) return;
		if (++this.level > LEVEL_THRESHOLD) return;	
		
		List<Node> pastLevelNodes = new LinkedList<>(this.curentLevelNodes);
		this.curentLevelNodes.clear();
		int parentNodeSize = pastLevelNodes.size();
		
		for (Node node : pastLevelNodes)
		{
			parentNodeSize--;
			for (Entity entity : race.entities)
			{
				if (entity.section != Section.resource && !entity.name.equals("Chronoboost") && this.isAllowedToAdd(node, entity))
				{
					this.putEntity(node, entity, requried);
					node.dump();
				}
			}
		}
		this.buildNewLevel(race, requried);
	}

	private boolean isAllowedToAdd(Node node, Entity entity)
	{
		//this.planner.clearBuilds();
		LinkedList<Entity> build = new LinkedList<>();
		this.fillBuild(node, build);
		build.add(entity);
		this.planner.setBuild(build);
		this.planner.updateCenter(false, true, 0, false);
		return !entity.eventualError; 
	}
	
	public Node getMinNode()
	{
		return this.minNode;
	}
}
