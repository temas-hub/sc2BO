package sc2build.optimizer;

import static org.junit.Assert.*;

import java.util.Arrays;

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
	
	@Test
	public void test2Zealots() {
		SC2Planner sc2 = new SC2Planner();
		sc2.init(Faction.PROTOSS);
		assertEquals(0,sc2.getEntityByName("Zealot").value[0]);
		sc2.setBuild(Arrays.asList(sc2.getEntityByName("Pylon"),sc2.getEntityByName("Gateway"),sc2.getEntityByName("Zealot"),sc2.getEntityByName("Zealot")));
		sc2.updateCenter(false, true, 0, false);
		//sc2.dumpState(sc2);
		assertFalse(sc2.getEntityByName("Zealot").eventualError);
		assertEquals(0,sc2.activeEvents);
		assertEquals(2,sc2.getEntityByName("Zealot").value[0]);
		assertEquals((3*60+10)*100+308,sc2.currentTime);
	}

}
