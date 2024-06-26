import type {QUnit} from '../../../helpers/QUnit';
import {CoreSleep} from '../../../../src/core/Sleep';
import {JsConnectionPointType} from '../../../../src/engine/nodes/utils/io/connections/Js';
import {triggerKeyup} from '../../../helpers/EventsHelper';
import {RendererUtils} from '../../../helpers/RendererUtils';
export function testenginenodesjsOnKeyup(qUnit: QUnit) {

qUnit.test('js/onKeyup', async (assert) => {
	const scene = window.scene;
	const perspective_camera1 = window.perspective_camera1;

	perspective_camera1.p.t.set([0, 0, 5]);

	const geo1 = window.geo1;
	const box1 = geo1.createNode('box');
	const actor1 = geo1.createNode('actor');

	actor1.setInput(0, box1);
	actor1.flags.display.set(true);

	const onKeydown1 = actor1.createNode('onKeyup');
	const setObjectPosition1 = actor1.createNode('setObjectPosition');

	setObjectPosition1.setInput(JsConnectionPointType.TRIGGER, onKeydown1);
	onKeydown1.p.keyCodes.set('keyE');

	setObjectPosition1.p.position.set([0, 0, 1]);

	const container = await actor1.compute();
	const object = container.coreContent()!.threejsObjects()[0];

	// wait to make sure objects are mounted to the scene
	await CoreSleep.sleep(150);

	await RendererUtils.withViewer({cameraNode: perspective_camera1}, async (args) => {
		const {viewer} = args;
		const canvas = viewer.canvas();
		scene.play();
		assert.equal(scene.time(), 0);

		assert.deepEqual(object.position.toArray(), [0, 0, 0]);

		triggerKeyup(canvas, {code: 'keyA'});
		await CoreSleep.sleep(200);
		assert.deepEqual(object.position.toArray(), [0, 0, 0], 'no moved');

		triggerKeyup(canvas, {code: 'keyE'});
		await CoreSleep.sleep(200);
		assert.deepEqual(object.position.toArray(), [0, 0, 1], 'moved');
	});
});

}