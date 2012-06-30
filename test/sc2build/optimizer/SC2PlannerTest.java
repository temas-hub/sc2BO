package sc2build.optimizer;

import static org.junit.Assert.*;

import org.junit.Test;

import sc2build.optimizer.SC2Planner.Entity;
import sc2build.optimizer.SC2Planner.Faction;

public class SC2PlannerTest {

	@Test
	public void testAssimilator() {
		SC2Planner sc2 = new SC2Planner();
		sc2.init(Faction.PROTOSS);
		assertEquals(0,sc2.getEntityByName("Slow Gas Patch").value[0]);
		Entity asm2 = sc2.getEntityByName("Assimilator");
		sc2.insertIntoBuild(asm2);
		sc2.updateCenter(false, true, 0, false);
		assertFalse(asm2.eventualError);
		assertEquals(0,sc2.activeEvents);
		assertEquals(1,sc2.getEntityByName("Slow Gas Patch").value[0]);
		assertEquals(1,asm2.value[0]);
	}

}
