package sc2build.optimizer;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;

import sc2build.data.Faction;
import sc2build.data.Section;
import sc2build.optimizer.BuildOptimizer.Node;

public class SearchTask {

	Node root;
	private List<Entity> requriedTargets;
	private HashSet<Entity> usableEntities;
	private List<? extends Entity> stepEntities;
	private Faction race;
	BuildOptimizer bo;
	int level;

	public SearchTask(BuildOptimizer bo,  Faction race, Node root, List<Entity> requriedTargets,HashSet<Entity> usableEntities) {
		this.bo = bo;
		this.race = race;
		this.root = root;
		this.requriedTargets = requriedTargets;
		this.usableEntities = usableEntities;
		this.level = 1;
	}

	public Node compute(SC2Planner planner) {
		if(stepEntities==null) stepEntities = race.getEnities();
		for (Entity entity : stepEntities)
		{
			//boolean plannerOK = true;
			//String oldError = entity instanceof VolatileEntity ? ((VolatileEntity)entity).currentError : null;
			if (entity.section != Section.resource && entity.name!=("Chronoboost") &&
					entity.name!=("Go out with Probe") &&
					entity.name!=("Return Probe") &&
					entity.name!=("Go out with SCV") &&
					entity.name!=("Return SCV") &&
					entity.name!=("Go out with Drone") &&
					entity.name!=("Return Drone") &&
					(usableEntities.contains(entity) || entity.section == Section.worker || 
					entity.section == Section.special) && 
					(this.isAllowedToAdd(planner, root, entity)))
			{
				;
				List<Entity> stillRequired = new LinkedList<Entity>(requriedTargets);
				stillRequired.remove(entity);
				Node n2 = this.putEntity(planner, root, entity, stillRequired);
				if(stillRequired.isEmpty()){
					return n2; 
				}
				if(!n2.isLeafNode()){
					SearchTask st = new SearchTask(bo, race, n2, stillRequired, usableEntities);
					st.stepEntities = planner.getPossibleSteps();
					//System.out.println("allow after"+entity +" : "+st.stepEntities.toString().replaceAll("\\]", "]\n\t"));
					st.level = level +1;
					bo.notesToCaclulate.add(st);
				}
			}
			//if (!plannerOK && root.entity != null) {
			//	planner.dumpState();
			//}
		}
		
		return null;
	}
	
	private boolean isAllowedToAdd(SC2Planner planner,Node node, Entity entity)
	{
		//this.planner.clearBuilds();
		LinkedList<Entity> build = new LinkedList<Entity>();
		node.fillBuild(build);
		build.add(entity);
		planner.setBuild(build);
		planner.updateCenter(false, true, 0, false);
		
		return !planner.isFailed(); 
	}
	
	
	private Node putEntity(SC2Planner planner,Node parent, Entity entity, List<Entity> requried)
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
			node.setLeafNode(true);
		}
		return node;
	}

}
