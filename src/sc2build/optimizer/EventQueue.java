package sc2build.optimizer;

import java.util.Arrays;
import java.util.Comparator;

import sc2build.optimizer.SC2Planner.Event;

public class EventQueue implements Comparator<Event> {
	Event[] eventsArray;
	//EventQueue2 cross = new EventQueue2();
	int start = 0;
	int end = 0;

	public EventQueue(int size) {
		eventsArray = new Event[size];
	}

	public EventQueue() {
		this(100);
	};

	public void add(Event event) {
		//cross.add(event);
		int rz = Arrays.binarySearch(eventsArray, start, end, event, this);
		if (rz < 0)
			rz = -rz - 1;
		//Event[] orig = eventsArray;
		//int origStart = start;
		//int origEnd = end;
		if(rz==end && end<eventsArray.length) {
			end++;
			eventsArray[rz] = event;
		/*}else if(rz==start-1){
			start--;
			eventsArray[rz] = event;
			int off = rz;
			while (eventsArray[off] == event && off + 1 < end
					&& eventsArray[off + 1].time == event.time) {
				eventsArray[off] = eventsArray[off + 1];
				eventsArray[off + 1] = event;
				off++;
			}*/
		}else 
		if (end >= eventsArray.length) {
			Event[] rzA = new Event[(end-start) * 2];
			System.arraycopy(eventsArray, start, rzA, 0, rz - start);// 92-75 =
																		// 17
			rzA[rz - start] = event; // 92-75 = 17
			System.arraycopy(eventsArray, rz, rzA, rz - start + 1, end - rz);// 100
																				// -
																				// 92
																				// =
																				// 8
			int off = rz - start;
			this.eventsArray = rzA;
			end = end - start + 1;
			start = 0;
			while (eventsArray[off] == event && off + 1 < end
					&& eventsArray[off + 1].time == event.time) {
				eventsArray[off] = eventsArray[off + 1];
				eventsArray[off + 1] = event;
				off++;
			}
		} else {
			System.arraycopy(eventsArray, rz, eventsArray, rz + 1, end - rz);
			eventsArray[rz] = event;
			end++;
			int off = rz;
			while (eventsArray[off] == event && off + 1 < end
					&& eventsArray[off + 1].time == event.time) {
				eventsArray[off] = eventsArray[off + 1];
				eventsArray[off + 1] = event;
				off++;
			}
		}
		/*
		  for(int i=start;i<end;i++) if(eventsArray[i]==null) throw new
		  NullPointerException("missing "+i);
		 
		Object[] my = toArray();
		Object[] his = cross.toArray();
		for (int i = 0; i < his.length; i++)
			if (my[i] != his[i]) {
				cross.remove(event);
				this.end = origEnd;
				this.start = origStart;
				this.eventsArray = orig;
				throw new IllegalStateException("not same : " + my[i] + " ; "
						+ his[i]);
			}
			*/
	}

	@Override
	public int compare(final Event arg0, final Event arg1) {
		return arg0.time - arg1.time;
	}

	public Event pop() {
		if (start >= end)
			return null;
		//Event crozz = cross.pop();
		Event rz = eventsArray[start++];
		//if (crozz != rz)
		//	throw new IllegalStateException("not same : " + crozz + " ; " + rz);
		return rz;
	}

	public boolean isEmpty() {
		return end >= start;
	}

	public Event[] toArray() {
		Event[] rz = new Event[end - start];
		System.arraycopy(this.eventsArray, start, rz, 0, end - start);
		return rz;
	}
}
