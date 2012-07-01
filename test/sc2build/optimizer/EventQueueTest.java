package sc2build.optimizer;

import static org.junit.Assert.*;

import org.junit.Test;

import sc2build.optimizer.SC2Planner.Event;

public class EventQueueTest {

	@Test
	public void testDirect() {
		EventQueue ez = new EventQueue();
		ez.add(new Event(1));
		ez.add(new Event(2));
		ez.add(new Event(3));
		assertEquals(1,ez.pop().time);
		assertEquals(2,ez.pop().time);
		assertEquals(3,ez.pop().time);
		assertTrue(ez.isEmpty());
	}

	@Test
	public void testReverse() {
		EventQueue ez = new EventQueue();
		ez.add(new Event(3));
		ez.add(new Event(2));
		ez.add(new Event(1));
		assertEquals(1,ez.pop().time);
		assertEquals(2,ez.pop().time);
		assertEquals(3,ez.pop().time);
		assertTrue(ez.isEmpty());
	}
	@Test
	public void testDisorder() {
		EventQueue ez = new EventQueue();
		ez.add(new Event(2));
		ez.add(new Event(1));
		ez.add(new Event(3));
		assertEquals(1,ez.pop().time);
		assertEquals(2,ez.pop().time);
		assertEquals(3,ez.pop().time);
		assertTrue(ez.isEmpty());
	}
	
	@Test
	public void testDirect1() {
		EventQueue ez = new EventQueue(1);
		ez.add(new Event(1));
		ez.add(new Event(2));
		ez.add(new Event(3));
		assertEquals(1,ez.pop().time);
		assertEquals(2,ez.pop().time);
		assertEquals(3,ez.pop().time);
		assertTrue(ez.isEmpty());
	}

	@Test
	public void testReverse1() {
		EventQueue ez = new EventQueue(1);
		ez.add(new Event(3));
		ez.add(new Event(2));
		ez.add(new Event(1));
		assertEquals(1,ez.pop().time);
		assertEquals(2,ez.pop().time);
		assertEquals(3,ez.pop().time);
		assertTrue(ez.isEmpty());
	}
	@Test
	public void testDisorder1() {
		EventQueue ez = new EventQueue(1);
		ez.add(new Event(2));
		ez.add(new Event(1));
		ez.add(new Event(3));
		assertEquals(1,ez.pop().time);
		assertEquals(2,ez.pop().time);
		assertEquals(3,ez.pop().time);
		assertTrue(ez.isEmpty());
	}
}
