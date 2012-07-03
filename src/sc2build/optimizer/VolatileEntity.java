package sc2build.optimizer;

import java.util.Arrays;

class VolatileEntity extends Entity{
	public int value[];
	public int idle;
	public boolean eventualError;
	public String currentError;
	public VolatileEntity(Entity e){
		super(e);
	}
	@Override
	public String toString() {
		return "VolatileEntity [value=" + Arrays.toString(value) + ", idle="
				+ idle + ", eventualError=" + eventualError + ", currentError="
				+ currentError + "; "+super.toString()+"]";
	}
	
	
}