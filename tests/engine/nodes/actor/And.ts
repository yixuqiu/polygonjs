import {AttribClass} from '../../../../src/core/geometry/Constant';
import {CoreObject} from '../../../../src/core/geometry/Object';
import {CoreSleep} from '../../../../src/core/Sleep';
import {ActorConnectionPointType} from '../../../../src/engine/nodes/utils/io/connections/Actor';
import {RendererUtils} from '../../../helpers/RendererUtils';

QUnit.test('actor/And', async (assert) => {
	const scene = window.scene;
	const perspective_camera1 = window.perspective_camera1;
	const geo1 = window.geo1;
	const box1 = geo1.createNode('box');
	const plane1 = geo1.createNode('plane');
	const copy1 = geo1.createNode('copy');
	const attributeCreate1 = geo1.createNode('attribCreate');
	const hierarchy1 = geo1.createNode('hierarchy');
	const actor1 = geo1.createNode('actor');

	attributeCreate1.setAttribClass(AttribClass.OBJECT);
	attributeCreate1.p.name.set('selected');

	attributeCreate1.setInput(0, box1);
	copy1.setInput(0, attributeCreate1);
	copy1.setInput(1, plane1);
	hierarchy1.setInput(0, copy1);
	actor1.setInput(0, hierarchy1);
	actor1.flags.display.set(true);

	const onManualTrigger1 = actor1.createNode('onManualTrigger');
	const setObjectPosition1 = actor1.createNode('setObjectPosition');
	const floatToVec3_1 = actor1.createNode('floatToVec3');
	const twoWaySwitch1 = actor1.createNode('twoWaySwitch');
	const and1 = actor1.createNode('and');
	const getChildrenAttributes1 = actor1.createNode('getChildrenAttributes');

	twoWaySwitch1.params.get('ifTrue')!.set(1);
	getChildrenAttributes1.p.attribName.set('selected');
	getChildrenAttributes1.setAttribType(ActorConnectionPointType.BOOLEAN);

	setObjectPosition1.setInput(ActorConnectionPointType.TRIGGER, onManualTrigger1);
	setObjectPosition1.setInput('position', floatToVec3_1);
	floatToVec3_1.setInput(1, twoWaySwitch1);
	twoWaySwitch1.setInput(0, and1);
	and1.setInput(0, getChildrenAttributes1);

	const container = await actor1.compute();
	const object = container.coreContent()!.threejsObjects()[0];

	// wait to make sure objects are mounted to the scene
	await CoreSleep.sleep(150);

	await RendererUtils.withViewer({cameraNode: perspective_camera1}, async (args) => {
		scene.play();
		assert.equal(scene.time(), 0);
		assert.equal(object.position.y, 0);
		await CoreSleep.sleep(500);
		assert.in_delta(scene.time(), 0.5, 0.25, 'time is 0.5 sec');
		assert.equal(object.position.y, 0);

		onManualTrigger1.p.trigger.pressButton();
		await CoreSleep.sleep(500);
		assert.in_delta(scene.time(), 1.0, 0.25, 'time is 1 sec');
		assert.equal(object.position.y, 0, 'object still at 0');

		new CoreObject(object.children[0], 0).setAttribValue('selected', 1);
		onManualTrigger1.p.trigger.pressButton();
		await CoreSleep.sleep(500);
		assert.equal(object.position.y, 0, 'object still at 0');

		new CoreObject(object.children[1], 0).setAttribValue('selected', 1);
		onManualTrigger1.p.trigger.pressButton();
		await CoreSleep.sleep(500);
		assert.equal(object.position.y, 0, 'object still at 0');

		new CoreObject(object.children[2], 0).setAttribValue('selected', 1);
		onManualTrigger1.p.trigger.pressButton();
		await CoreSleep.sleep(500);
		assert.equal(object.position.y, 0, 'object still at 0');

		new CoreObject(object.children[3], 0).setAttribValue('selected', 1);
		onManualTrigger1.p.trigger.pressButton();
		await CoreSleep.sleep(500);
		assert.equal(object.position.y, 1, 'object moved');

		new CoreObject(object.children[0], 0).setAttribValue('selected', 0);
		onManualTrigger1.p.trigger.pressButton();
		await CoreSleep.sleep(500);
		assert.equal(object.position.y, 0, 'object moved back');
	});
});
