package sc2build.optimizer;

import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.TreeSet;
import java.util.concurrent.ExecutionException;

import junit.framework.Assert;

import org.junit.Test;

import sc2build.data.Faction;
import sc2build.optimizer.BuildOptimizer.Node;

public class BuildOptimizerTest
{
	private static class Bean
	{
		private int time;
	}
	
	@Test
	public void test2ZealotsTree() throws InterruptedException, ExecutionException
	{
		//SC2Planner planner = new SC2Planner();
		//planner.init(Faction.PROTOSS);
		
		Entity zealot = Faction.PROTOSS.getEntityByName("Zealot");
		
		List<Entity> req = new LinkedList<Entity>();
		req.add(zealot);
		req.add(zealot);
		
		BuildOptimizer bo = new BuildOptimizer(Faction.PROTOSS, 10);
		bo.buildRaceTree(Faction.PROTOSS, req);
		//bo.storeInFile();
		Node node = bo.getBestBuild();
		Assert.assertNotNull(node);
		node.dump();
		Assert.assertEquals("Zealot", node.getEntity().name);
		node = node.getParent();
		Assert.assertEquals("Zealot", node.getEntity().name);
		node = node.getParent();
		Assert.assertEquals("Probe", node.getEntity().name);
		node = node.getParent();
		Assert.assertEquals("Probe", node.getEntity().name);
		node = node.getParent();
		Assert.assertEquals("Gateway", node.getEntity().name);
		node = node.getParent();
		Assert.assertEquals("Gateway", node.getEntity().name);
		node = node.getParent();
		Assert.assertEquals("Pylon", node.getEntity().name);
		node = node.getParent();
		Assert.assertEquals("Probe", node.getEntity().name);
		node = node.getParent();
		Assert.assertNull(node.getEntity());
	}
	
	@Test
	public void test3StalkerRushTree() throws InterruptedException, ExecutionException
	{
		//SC2Planner planner = new SC2Planner();
		//planner.init(Faction.PROTOSS);
		
		Entity stalker = Faction.PROTOSS.getEntityByName("Stalker");
		
		List<Entity> req = new LinkedList<Entity>();
		req.add(stalker);
		req.add(stalker);
		req.add(stalker);
		
		BuildOptimizer bo = new BuildOptimizer(Faction.PROTOSS, 9);
		bo.buildRaceTree(Faction.PROTOSS, req);
		Assert.assertNotNull(bo.getMinNode());
		bo.dump();
	}
	
	@Test
	public void treeSetTest()
	{
		TreeSet<Bean> set = new TreeSet<Bean>(new Comparator<Bean>() {
			@Override
			public int compare(Bean o1, Bean o2) {
				return o1.time - o2.time;
			}
		});
		
		Bean bean = new Bean();
		bean.time = 1;
		
		Bean bean2 = new Bean();
		bean.time = 1;
		set.add(bean);
		set.add(bean2);
		Assert.assertEquals(2, set.size());
	}
	
	@Test
	public void testWrite() throws Exception
	{
		
		BuildOptimizer bo = new BuildOptimizer(Faction.PROTOSS, -1);
		bo.buildRaceTree(Faction.PROTOSS, Collections.<Entity>emptyList());
	}
	
	@Test
	public void test1Marine() throws InterruptedException, ExecutionException
	{
		//SC2Planner planner = new SC2Planner();
		//planner.init(Faction.TERRAN);
		
		Entity zealot = Faction.TERRAN.getEntityByName("Marine");
		
		List<Entity> req = new LinkedList<Entity>();
		req.add(zealot);
		
		BuildOptimizer bo = new BuildOptimizer(Faction.TERRAN, 10);
		bo.buildRaceTree(Faction.TERRAN, req);
		//bo.storeInFile();
		Node node = bo.getBestBuild();
		Assert.assertNotNull(node);
		Assert.assertEquals("Marine", node.getEntity().name);
		node = node.getParent();
		Assert.assertEquals("Barracks", node.getEntity().name);
		node = node.getParent();
		Assert.assertEquals("Supply Depot", node.getEntity().name);
		node = node.getParent();
		Assert.assertNull(node.getEntity());
	}
	

}
