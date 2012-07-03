package sc2build.optimizer;

import org.junit.Test;

import sc2build.data.Faction;


public class SimpleBuildTest
{
	@Test
	public void threeZealotsTest()
	{
		SC2Planner planner = new SC2Planner();
		planner.init(Faction.PROTOSS);
		
		Entity zealot = planner.getEntityByName("Zealot");
		
		planner.insertIntoBuild(zealot, 0);
	}
}
