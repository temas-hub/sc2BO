package sc2build.optimizer;

class VolatileEntity extends Entity{
	public int value[];
	public int idle;
	public boolean eventualError;
	public String currentError;
	public VolatileEntity(Entity e){
		super(e);
	}
}