package sc2build.optimizer;

import java.util.LinkedList;
import java.util.List;

import org.junit.Test;

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
		
		System.out.println();
	}
}
