import type {QUnit} from '../../../helpers/QUnit';
import {CoreSleep} from '../../../../src/core/Sleep';
import {JsConnectionPointType} from '../../../../src/engine/nodes/utils/io/connections/Js';
import {RendererUtils} from '../../../helpers/RendererUtils';
export function testenginenodesjsSetMaterialOpacity(qUnit: QUnit) {

qUnit.test('js/setMaterialOpacity', async (assert) => {
	const MAT = window.MAT;
	const scene = window.scene;
	const perspective_camera1 = window.perspective_camera1;
	const geo1 = window.geo1;
	const box1 = geo1.createNode('box');
	const material1 = geo1.createNode('material');
	const actor1 = geo1.createNode('actor');

	const meshBasic1 = MAT.createNode('meshBasic');
	const material = await meshBasic1.material();

	material1.p.material.setNode(meshBasic1);
	material1.setInput(0, box1);
	actor1.setInput(0, material1);
	actor1.flags.display.set(true);

	const onManualTrigger1 = actor1.createNode('onManualTrigger');
	const setMaterialOpacity1 = actor1.createNode('setMaterialOpacity');

	setMaterialOpacity1.setInput(JsConnectionPointType.TRIGGER, onManualTrigger1);
	setMaterialOpacity1.p.float.set(0.5);

	// wait to make sure objects are mounted to the scene
	await CoreSleep.sleep(150);

	await RendererUtils.withViewer({cameraNode: perspective_camera1}, async (args) => {
		scene.play();
		assert.equal(scene.time(), 0);
		assert.equal(material.opacity, 1);
		await CoreSleep.sleep(500);
		assert.in_delta(scene.time(), 0.5, 0.25, 'time is 0.5 sec');
		assert.equal(material.opacity, 1, 'opacity unchanged');

		onManualTrigger1.p.trigger.pressButton();
		await CoreSleep.sleep(100);
		assert.equal(material.opacity, 0.5, 'opacity changed');
	});
});

}