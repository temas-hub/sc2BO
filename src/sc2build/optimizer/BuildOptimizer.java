package sc2build.optimizer;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.Deque;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

import sc2build.data.Cost;
import sc2build.data.Faction;
import sc2build.data.Section;

public class BuildOptimizer {
	public static final int TIME_THRESHOLD = 60 * 20 * 100; // 20 min
	public static final int LEVEL_THRESHOLD = 100;

	public static class Node {
		final Entity entity;

		private int time, minerals, food, gas;
		private Node parent;
		// private List<Node> children = new LinkedList<BuildOptimizer.Node>();

		private boolean leafNode = false;

		public Node(Node parent, Entity entity, int time, int minerals,
				int food, int gas) {
			this.minerals = minerals;
			this.food = food;
			this.gas = gas;
			this.setParent(parent);
			this.setTime(time);
			this.entity = entity;
		}
		
		

		public int getFood() {
			return food;
		}

		public int getGas() {
			return gas;
		}

		public int getMinerals() {
			return minerals;
		}

		public void fillBuild(Deque<Entity> build) {
			if (this.entity == null) {
				return;
			}
			build.addFirst(this.entity);
			if (this.parent != null) {
				this.parent.fillBuild(build);
			}
		}

		public Node getParent() {
			return parent;
		}

		public void setParent(Node parent) {
			this.parent = parent;
		}

		public int getTime() {
			return time;
		}

		public void setTime(int time) {
			this.time = time;
		}

		public void setLeafNode(boolean isFailed) {
			this.leafNode = isFailed;
		}

		public boolean isLeafNode() {
			return leafNode;
		}

		public int getAccumTime() {
			// return (this.parent == null ? 0 : this.parent.getAccumTime()) +
			// this.time;
			return this.time;
		}

		public boolean isBuildDone(List<Entity> requried) {
			List<Entity> entitiesToDone = new ArrayList<Entity>(requried);
			Node node = this;
			do {
				entitiesToDone.remove(node.entity);
			} while ((node = node.parent).entity != null);

			return entitiesToDone.isEmpty();
		}

		public int getWorkersCount() {
			int count = 0;
			Node node = this;
			do {
				if (node.entity.section == Section.worker) {
					count++;
				}
			} while ((node = node.parent).entity != null);
			return count;
		}

		public int getFoodAmount() {
			int count = 0;
			Node node = this;
			do {
				if (node.entity.section == Section.building) {
					if (node.entity.products != null) {
						for (Entity prod : node.entity.products) {
							if (prod.name == "Supply" && prod.amount > 0) {
								count += prod.amount;
							}
						}
					}
				}
			} while ((node = node.parent).entity != null);
			// TODO: add initial nexus food count
			return count;
		}

		public Entity getEntity() {
			return this.entity;
		}

		public boolean isWith(String e) {
			if (this.entity != null && this.entity.name == e)
				return true;
			if (this.parent != null)
				return this.parent.isWith(e);
			return false;
		}

		public void dump() {
			if (this.parent != null)
				this.parent.dump();
			if (this.entity != null)
				System.out.println(time((time - this.entity.time)) + " ... "
						+ time(time) + " : " + this.entity);
		}

		public String store() {
			return "[Name=" + (this.entity == null ? "Root" : this.entity.name)
					+ ";time=" + this.time + ";leaf=" + this.isLeafNode() + "]";
		}

		@Override
		public String toString() {
			return "Node [entity=" + (entity==null ? null : entity.name) + ", time=" + time(time) + ", minerals="
					+ minerals + ", food=" + food + ", gas=" + gas
					+ ", leafNode=" + leafNode + "]";
		}

		public int getWorkersMovements() {
			int count = 0;
			Node node = this;
			do {
				if (node.entity.style == "instant") {
					count++;
				}
			} while ((node = node.parent).entity != null);
			return count;
		}
	}

	// private List<Node> curentLevelNodes = new LinkedList<Node>();
	public List<Node> minNode = null;
	public volatile Node currentMinSuspect = null;
	// int level = 0;
	int workersCount;
	int reqFoodAmount;
	int workersMovements;
	private Faction faction;
	ConcurrentLinkedQueue<SearchTask> notesToCaclulate;

	// ExecutorService workers;

	public BuildOptimizer(Faction faction, int workersCount) {
		this.faction = faction;
		this.workersCount = workersCount;
		this.workersMovements = 2;
	}

	public static String time(int time) {
		int minutues = time / 60 / 100;
		int seconds = (time - minutues * 60 * 100) / 100;
		int ms = time - seconds * 100 - minutues * 60 * 100;
		return minutues + ":" + (seconds < 10 ? ("0" + seconds) : seconds)
				+ "." + ms;
	}

	private void fillNodes(Node node, Deque<Node> nodes) {
		if (node.entity == null) {
			return;
		}
		nodes.addFirst(node);
		if (node.parent != null) {
			this.fillNodes(node.parent, nodes);
		}
	}

	private String dump(Node node) {
		LinkedList<Node> nodes = new LinkedList<Node>();
		this.fillNodes(node, nodes);

		StringBuilder sb = new StringBuilder();
		for (Node item : nodes) {
			sb.append(item.store());
			sb.append("/");
		}
		if (sb.length() > 0) {
			sb.setLength(sb.length() - 1);
		}

		return sb.toString();
	}

	public void printBuild(Node node) {
		LinkedList<Entity> build = new LinkedList<Entity>();
		node.fillBuild(build);

		for (Entity item : build) {
			System.out.print(item.name);
			System.out.print("-");
		}
	}

	private void collectRequiredFor(Faction race, Collection<Entity> targets,
			Set<Entity> comulatedResult) {
		Set<Entity> currentResult = new HashSet<Entity>();
		for (Entity target : targets) {
			if (target.conditions != null) {
				for (String cond : target.conditions) {
					currentResult.add(race.getEntityByName(cond));
				}
			}
			if (target.costs != null) {
				boolean reqsGas = false;
				for (Cost cc : target.costs) {
					if (cc.name == "Gas") {
						reqsGas = true;
						break;
					}
				}
				if (reqsGas) {
					for (Entity ent : race.getEnities()) {
						if (race.isGayserCosts(ent)) {
							currentResult.add(ent);
						}
					}
				}
			}
		}
		if (currentResult.size() > 0) {
			comulatedResult.addAll(currentResult);
			this.collectRequiredFor(race, currentResult, comulatedResult);
		}
	}

	private Collection<Entity> collectRequired(Faction race, Entity target) {
		Set<Entity> result = new HashSet<Entity>();
		this.collectRequiredFor(race, Collections.singleton(target), result);
		return result;
	}

	public void buildRaceTree(Faction race, List<Entity> requriedTargets)
			throws InterruptedException, ExecutionException {
		Node root = new Node(null, null, 0, 0, 0, 0);
		List<Entity> required = new LinkedList<Entity>();

		this.reqFoodAmount = 0;
		for (Entity reqEnt : new HashSet<Entity>(requriedTargets)) {
			required.addAll(this.collectRequired(race, reqEnt));
		}
		for (Entity requriedTarg : requriedTargets) {
			if (requriedTarg.costs != null) {
				for (Cost cc : requriedTarg.costs) {
					if (cc.name == "Food" && cc.amount < 0) {
						this.reqFoodAmount += cc.amount;
					}
				}
			}
			required.add(requriedTarg);
		}

		for (Entity i : requriedTargets) {
			System.out.println("rq:" + i);
		}
		HashSet<Entity> usableObjects = new HashSet<Entity>(required);
		for (Entity i : usableObjects) {
			System.out.println("use:" + i);
		}

		List<CaclulatorThread> workers = new LinkedList<CaclulatorThread>();
		AtomicInteger ai = new AtomicInteger();
		synchronized (this) {
			this.currentMinSuspect = null;
			this.minNode = null;
			int poolSize = 4;
			this.notesToCaclulate = new java.util.concurrent.ConcurrentLinkedQueue<SearchTask>();
			this.notesToCaclulate.add(new SearchTask(this, race, root,
					requriedTargets, usableObjects));
			for (int i = 0; i < poolSize; i++) {
				CaclulatorThread caclulatorThread = new CaclulatorThread(this,
						notesToCaclulate, faction, ai );
				caclulatorThread.setPriority(Thread.MIN_PRIORITY+1);
				caclulatorThread.start();
				workers.add(caclulatorThread);
				;
			}
		}
		for (CaclulatorThread i : workers) {
			i.join(TimeUnit.MINUTES.toMillis(30));
			if (i.isAlive()) {
				i.interrupt();
				i.join(TimeUnit.SECONDS.toMillis(5));
			}
		}

		if (this.minNode != null)
			Collections.sort(this.minNode, new Comparator<Node>() {

				@Override
				public int compare(Node o1, Node o2) {
					if (o1.getAccumTime() < o2.getAccumTime())
						return -1;
					if (o1.getAccumTime() > o2.getAccumTime())
						return 1;
					if (o1.getFood() > o2.getFood())
						return -1;
					if (o1.getFood() < o2.getFood())
						return -1;

					if (o1.getMinerals() < o2.getMinerals())
						return -1;
					if (o1.getMinerals() > o2.getMinerals())
						return -1;
					return 0;
				}
			});

		//
	}

	/*
	 * private List<ThreadWork> shareWork(Race race, List<Node>
	 * curentLevelNodes, List<Entity> required, int count) { List<Node>
	 * pastLevelNodes = new ArrayList<>(BuildOptimizer.this.curentLevelNodes);
	 * this.curentLevelNodes.clear();
	 * 
	 * int shareSize = curentLevelNodes.size() / count; List<ThreadWork> result
	 * = new LinkedList<>(); int index = 0; for (int i = 0; i < count; i++) {
	 * ThreadWork work = new ThreadWork(race, index, index + shareSize,
	 * pastLevelNodes, required); result.add(work); index = index + shareSize +
	 * 1; } return result; }
	 * 
	 * private class ThreadWork extends Thread { private final int beginIndex;
	 * private final int endIndex; private final Race race; private final
	 * List<Node> pastLevelNodes; private final List<Entity> required;
	 * 
	 * public ThreadWork (Race race, int beginIndex, int endIndex, List<Node>
	 * pastLevelNodes, List<Entity> required) { this.beginIndex = beginIndex;
	 * this.endIndex = endIndex; this.race = race; this.pastLevelNodes =
	 * pastLevelNodes; this.required = required; }
	 * 
	 * @Override public void run() { int parentNodeSize =
	 * this.pastLevelNodes.size();
	 * 
	 * for (int i = this.beginIndex; i <= this.endIndex && i < parentNodeSize;
	 * i++) { Node node = pastLevelNodes.get(i); //parentNodeSize--; for (Entity
	 * entity : race.entities) { if (entity.section != Section.resource &&
	 * !entity.name.equals("Chronoboost") &&
	 * BuildOptimizer.this.isAllowedToAdd(node, entity)) {
	 * BuildOptimizer.this.putEntity(node, entity, this.required); } } }
	 * 
	 * } }
	 */

	/*
	 * 
	 * public void storeInFile() { String fileName = "c:/temp/" + this.level +
	 * "_" + System.currentTimeMillis() + ".txt"; File parent = (new
	 * File(fileName)).getParentFile(); if (!parent.exists()) { parent.mkdirs();
	 * } try { BufferedWriter bw = new BufferedWriter(new FileWriter(fileName));
	 * for (Node n : this.curentLevelNodes) { String str = this.dump(n);
	 * bw.append(str); bw.newLine(); } bw.flush(); bw.close(); } catch
	 * (IOException e) { throw new RuntimeException(e); } }
	 */

	public List<Node> getMinNode() {
		return this.minNode;
	}

	public Node getBestBuild() {
		if (this.minNode == null || this.minNode.isEmpty())
			return null;
		return this.minNode.get(0);
	}

	public int getBestBuildOffset() {
		// allow for builds with 5 second diference from best one
		return 500;
	}

	public void dump() {
		for (Node i : this.minNode) {
			System.out.println("Build " + i.getAccumTime());
			i.dump();
		}

	}
}
