QUnit.test('tube simple', async (assert) => {
	const geo1 = window.geo1;

	const tube1 = geo1.createNode('tube');

	let container = await tube1.requestContainer();
	const core_group = container.coreContent()!;
	const {geometry} = core_group.objectsWithGeo()[0];

	assert.ok(geometry);
	assert.equal(container.pointsCount(), 76);
});
