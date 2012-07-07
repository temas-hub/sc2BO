package sc2build.optimizer;

import java.util.List;

import junit.framework.Assert;

import org.junit.Test;

import sc2build.data.EntityLoader;

public class LoadTest
{
	@Test
	public void testLoad()
	{
		EntityLoader loader = new EntityLoader();
		loader.init("./WebContent/js/data.js");
		
		List<Entity> entities = loader.load("Protoss");
		Assert.assertTrue(entities.size() > 0);
		
		boolean found = false;
		for (Entity entity : entities)
		{
			if (entity.name.equals("Probe"))
			{
				found = true;
				Assert.assertTrue(entity.need.length > 0);
				Assert.assertTrue(entity.products.length > 0);
				Assert.assertTrue(entity.costs.length > 0);
				Assert.assertTrue(entity.time > 0);
			}
		}
		Assert.assertTrue(found);
	}
}
