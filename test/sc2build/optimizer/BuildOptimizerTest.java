package sc2build.optimizer;

import java.util.LinkedList;
import java.util.List;

import junit.framework.Assert;

import org.junit.Test;

import sc2build.optimizer.BuildOptimizer.Node;
import sc2build.optimizer.SC2Planner.Entity;
import sc2build.optimizer.SC2Planner.Faction;

public class BuildOptimizerTest
{
	@Test
	public void test3ZealotsTree()
	{
		SC2Planner planner = new SC2Planner();
		planner.init(Faction.PROTOSS);
		
		Entity zealot = planner.getEntities().get("Zealot");
		
		List<Entity> req = new LinkedList<>();
		req.add(zealot);
		req.add(zealot);
		
		BuildOptimizer bo = new BuildOptimizer();
		bo.buildRaceTree(planner.getRace(Faction.PROTOSS.getName()), req);
		
		Node node = bo.getMinNode();
		Assert.assertEquals("Zealot", node.getEntity().name);
		node = node.getParent();
		Assert.assertEquals("Zealot", node.getEntity().name);
		node = node.getParent();
		Assert.assertNull(node.getEntity());
	}
	
	@Test
	public void test3StalkerRushTree()
	{
		SC2Planner planner = new SC2Planner();
		planner.init(Faction.PROTOSS);
		
		Entity stalker = planner.getEntities().get("Stalker");
		
		List<Entity> req = new LinkedList<>();
		req.add(stalker);
		req.add(stalker);
		req.add(stalker);
		
		BuildOptimizer bo = new BuildOptimizer(planner);
		bo.buildRaceTree(planner.getRace(Faction.PROTOSS.getName()), req);
		
		bo.getMinNode().dump();
	}
}
