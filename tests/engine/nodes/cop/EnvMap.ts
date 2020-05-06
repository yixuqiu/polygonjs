import {Poly} from '../../../../src/engine/Poly';
import {Vector2} from 'three/src/math/Vector2';

QUnit.test('COP env_map simple', async (assert) => {
	// create a renderer first
	const canvas = document.createElement('canvas');
	document.body.appendChild(canvas);
	const size = new Vector2(canvas.width, canvas.height);
	const viewer = window.perspective_camera1.render_controller.create_renderer(canvas, size);
	const renderer = await Poly.instance().renderers_controller.wait_for_renderer();
	assert.ok(renderer);

	// start test
	const COP = window.COP;
	const file1 = COP.create_node('file');
	const env_map1 = COP.create_node('env_map');

	env_map1.set_input(0, file1);

	file1.p.url.set('/examples/textures/piz_compressed.exr');

	let container = await env_map1.request_container();
	assert.ok(!env_map1.states.error.active);
	let texture = container.core_content();
	assert.equal(texture.image.width, 768);
	assert.equal(texture.image.height, 768);


	// remove viewer
	viewer.dispose()
	document.body.removeChild(canvas);
});
