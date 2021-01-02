QUnit.test('blend simple', async (assert) => {
	const geo1 = window.geo1;

	const box1 = geo1.createNode('box');
	const box2 = geo1.createNode('box');
	const transform1 = geo1.createNode('transform');
	transform1.setInput(0, box2);
	transform1.p.t.y.set(5);
	const blend1 = geo1.createNode('blend');
	blend1.setInput(0, box1);
	blend1.setInput(1, transform1);
	blend1.p.attribName.set('position');

	let container = await blend1.requestContainer();
	// const core_group = container.coreContent()!;
	// const {geometry} = core_group.objects()[0];

	assert.equal(container.pointsCount(), 24);
	assert.equal(container.boundingBox().min.y, 2);

	blend1.p.blend.set(0.75);
	container = await blend1.requestContainer();
	assert.equal(container.boundingBox().min.y, 3.25);
});
