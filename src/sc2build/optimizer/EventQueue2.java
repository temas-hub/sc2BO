package sc2build.optimizer;

import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedList;

public class EventQueue2 extends LinkedList<Event> implements Comparator<Event> {

	@Override
	public int compare(Event o1, Event o2) {
		return o1.time-o2.time;
	}
	
	@Override
	public boolean add(Event arg0) {
		boolean rz= super.add(arg0);
		Collections.sort(this,this);
		return rz;
	}
}
