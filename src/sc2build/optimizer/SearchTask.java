package sc2build.optimizer;

import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.ListIterator;
import java.util.Random;
import java.util.concurrent.RecursiveTask;

import sc2build.data.Faction;
import sc2build.data.Section;
import sc2build.optimizer.BuildOptimizer.Node;

public class SearchTask extends RecursiveTask<List<Node>> {

	private static final Collection Node = null;
	private static final Random r = new Random(); 
	private Node root;
	private List<Entity> requriedTargets;
	private HashSet<Entity> usableEntities;
	private Faction race;
	private SC2Planner planner;
	BuildOptimizer bo;
	private int level;

	public SearchTask(BuildOptimizer bo, Faction race, Node root, List<Entity> requriedTargets,HashSet<Entity> usableEntities) {
		this.bo = bo;
		this.race = race;
		this.root = root;
		this.requriedTargets = requriedTargets;
		this.usableEntities = usableEntities;
		this.level = 1;
	}

	@Override
	protected List<Node> compute() {
		if(planner==null) {
			planner = new SC2Planner();
			planner.init(race);
		}
		List<SearchTask> next = new LinkedList<>();
		for (Entity entity : race.getEnities())
		{
			if (entity.section != Section.resource && entity.name!=("Chronoboost") &&
					entity.name!=("Go out with Probe") &&
					entity.name!=("Return Probe") &&
					entity.name!=("Go out with SCV") &&
					entity.name!=("Return SCV") &&
					entity.name!=("Go out with Drone") &&
					entity.name!=("Return Drone") &&
					(usableEntities.contains(entity) || entity.section == Section.worker || 
					entity.section == Section.special) && 
					this.isAllowedToAdd(root, entity))
			{
				List<Entity> stillRequired = new LinkedList<Entity>(requriedTargets);
				stillRequired.remove(entity);
				Node n2 = this.putEntity(root, entity, stillRequired);
				if(stillRequired.isEmpty()){
					LinkedList<Node> rz = new LinkedList<Node>();
					rz.add(n2);
					return rz; 
				}
				if(!n2.isLeafNode()){
					SearchTask st = new SearchTask(bo, race, n2, stillRequired, usableEntities);
					st.level = level +1;
					next.add(st);
				}
			}
		}
		if(!next.isEmpty()){
			int ri = r.nextInt(next.size()); 
			int i=0;
			for (Iterator<SearchTask> iterator = next.iterator(); iterator
					.hasNext();) {
				SearchTask st = iterator.next();
				if(i==ri){
					st.planner = this.planner;
					st.invoke();
				} else {
					st.fork();
				}
				i++; 
			}
		}
		planner = null;
		List<Node> minRz = null;
		Node currentBest=null;
		for (SearchTask i : next) {
			List<Node> thatRz = i.join();
			if (thatRz != null) {
				
				for(sc2build.optimizer.BuildOptimizer.Node j: thatRz){
					if(currentBest==null || currentBest.getAccumTime()>j.getAccumTime()) currentBest = j;
				}
				
				
				if (minRz == null)
					minRz = thatRz;
				else
					minRz.addAll(thatRz);
			}
		}
		if(minRz!=null){
			Iterator<sc2build.optimizer.BuildOptimizer.Node> iterator = minRz.iterator();
			while(iterator.hasNext()){
				if(iterator.next().getAccumTime()>bo.getBestBuildOffset()+currentBest.getAccumTime()){
					iterator.remove();
				}
			}
		}

		return minRz;
	}
	
	private boolean isAllowedToAdd(Node node, Entity entity)
	{
		//this.planner.clearBuilds();
		LinkedList<Entity> build = new LinkedList<Entity>();
		node.fillBuild(build);
		build.add(entity);
		planner.setBuild(build);
		planner.updateCenter(false, true, 0, false);
		VolatileEntity ve = planner.getVolatile(entity);
		return !ve.eventualError; 
	}
	
	
	private Node putEntity(Node parent, Entity entity, List<Entity> requried)
	{
		int time = planner.getCurrentTime();
		
		Node node = new Node(parent, entity, time, planner.getResultMinerals(),planner.getResultFood(),planner.getResultGas() );
		//parent.addNode(node);
		boolean buildIsDone = requried.isEmpty();
		Node currentMinNode = bo.currentMinSuspect;
		if (node.getAccumTime() > BuildOptimizer.TIME_THRESHOLD || level+1> BuildOptimizer.LEVEL_THRESHOLD || 
				(currentMinNode != null && node.getAccumTime() > currentMinNode.getAccumTime()+bo.getBestBuildOffset()) ||  
				(bo.workersCount > 0 && node.getWorkersCount() > bo.workersCount) ||
				(bo.workersMovements > 0 && node.getWorkersMovements() > bo.workersMovements) ||
				(bo.reqFoodAmount < 0 && (bo.reqFoodAmount + node.getFoodAmount()) > 8) ||
				buildIsDone)
		{
			if (buildIsDone)
			{
				if(currentMinNode==null || currentMinNode.getAccumTime()>node.getAccumTime()){
					bo.currentMinSuspect = node;
				}
			}
			node.setLeafNode(true);
		}
		return node;
	}
}
