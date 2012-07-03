package sc2build.optimizer;


public class Event
{
	protected int time;
	public String event;
	//public String name;
	public VolatileEntity entityUnderName;
	public int actInd;
	public boolean active;
	@Override
	public String toString() {
		return "Event [time=" + time + ", event=" + event + ", name="
				+ entityUnderName.name + ", actInd=" + actInd + ", active=" + active + "]";
	}
	
	public Event() {
		// TODO Auto-generated constructor stub
	}

	public Event(int time) {
		super();
		this.time = time;
	}
	
	
	
	
}