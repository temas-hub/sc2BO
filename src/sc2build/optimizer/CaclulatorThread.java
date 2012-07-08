package sc2build.optimizer;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

import com.sun.java.swing.plaf.windows.WindowsTreeUI.CollapsedIcon;

import sc2build.data.Faction;
import sc2build.optimizer.BuildOptimizer.Node;

public class CaclulatorThread extends Thread {
	private BuildOptimizer bo;
	private ConcurrentLinkedQueue<SearchTask> tasks;
	private SC2Planner planner;
	private AtomicInteger ai;

	public CaclulatorThread(BuildOptimizer bo,
			ConcurrentLinkedQueue<SearchTask> tasks, Faction faction, AtomicInteger ai) {
		super();
		this.bo = bo;
		this.tasks = tasks;
		this.ai = ai;
		this.planner = new SC2Planner();
		this.planner.init(faction);
	}

	@Override
	public void run() {
		int lastSeenLevel = 0;
		Node myLastSuspect = null;
		long lastTimestamp = System.currentTimeMillis();
		long lastQueueSize = tasks.size();
		long lastOrder = 0;
		int order =0;
		while (true) {
			SearchTask poll = tasks.poll();
			if (poll == null) {
				try {
					Thread.sleep(100);
				} catch (InterruptedException e) {

				}
				if (tasks.peek() == null)
					break;
				else
					continue;
			}
			order++;
			int globalStep = ai.incrementAndGet();
			if (poll.level > lastSeenLevel || order%5000==0) {
				long currentSize = tasks.size();
				long currentTime = System.currentTimeMillis();
				long TPS = (currentTime-lastTimestamp)== 0 ? 0 : ((order-lastOrder)*1000/(currentTime-lastTimestamp));
				// (order-lastOrder) / (ct-lt ) = currentSize / timeLeft
				long estimatedTime = (order-lastOrder) == 0 ? 0 : (currentSize * (currentTime-lastTimestamp) /(order-lastOrder)); 
				System.out.println(new Date() +":"+this+ " found level " + poll.level
						+ " current suspect:" + myLastSuspect+" queue:"+currentSize+" order:"+order+" TPS:"+TPS+ " time left "+TimeUnit.MILLISECONDS.toMinutes(estimatedTime));
				lastSeenLevel = poll.level;
				myLastSuspect = bo.currentMinSuspect;
				lastOrder = order;
				lastTimestamp = currentTime;
				lastQueueSize = currentSize;
				//stat();
			}
			if(globalStep%50000==0) {
				System.out.println(new Date() +":"+this+ " processed " + globalStep+" total; optimizing");
				optimize();
				System.gc();
			}
			if(myLastSuspect!=null && myLastSuspect.getAccumTime()+bo.getBestBuildOffset()<poll.root.getAccumTime())
				continue;

			Node rz = poll.compute(planner);
			if (rz != null) {
				synchronized (bo) {
					if (bo.currentMinSuspect == null) {
						bo.currentMinSuspect = rz;
						bo.minNode = new LinkedList<Node>();
						bo.minNode.add(rz);
						System.out.println(new Date()+":"+this+" first suspect so far  at level "+poll.level+":");
						rz.dump();
					} else {
						boolean shouldDump = false;
						if (bo.currentMinSuspect.getAccumTime() > rz
								.getAccumTime()) {
							bo.currentMinSuspect = rz;
							shouldDump = true;;
						}
						bo.minNode.add(rz);
						int treshold = bo.getBestBuildOffset()
								+ bo.currentMinSuspect.getAccumTime();
						Iterator<sc2build.optimizer.BuildOptimizer.Node> iterator = bo.minNode
								.iterator();
						while (iterator.hasNext()) {
							if (iterator.next().getAccumTime() > treshold) {
								iterator.remove();
							}
						}
						if(shouldDump){
							System.out.println(new Date()+":"+this+" new best suspect so far of "+bo.minNode.size()+" at level "+poll.level+":");
							rz.dump();
						}
					}
					myLastSuspect = bo.currentMinSuspect;

				}
			}
		}

	}

	private void optimize() {
		synchronized (bo) {
			SearchTask last = null;
			ArrayList<SearchTask> a = new ArrayList<SearchTask>(tasks);
			SearchTask.optimze(a);
			
		}
	}

	private void stat() {
		synchronized (bo) {
		final HashMap<Entity,AtomicInteger> he = new HashMap<Entity, AtomicInteger>();
		int total =0;
		for(SearchTask i: tasks){
			AtomicInteger atomicInteger = he.get(i.root.entity);
			if(atomicInteger==null) he.put(i.root.entity,atomicInteger = new AtomicInteger());
			atomicInteger.incrementAndGet();
			total++;
		}
		ArrayList<Entity> el = new ArrayList<Entity>(he.keySet());
		Collections.sort(el, new Comparator<Entity>() {

			@Override
			public int compare(Entity o1, Entity o2) {
				return he.get(o2).get()- he.get(o1).get();
			}
			
		});	
		
		for(Entity i : el.subList(0, Math.min(10,el.size()))){
			System.out.println(" "+(he.get(i).get()*100/total)+"% : "+i);
		}
		}
	}

}
