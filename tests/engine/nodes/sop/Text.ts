import {TEXT_TYPE, TEXT_TYPES} from '../../../../src/engine/nodes/sop/Text';

type Callback = () => void;
interface ConsoleHistory {
	log: any[];
	warn: any[];
	error: any[];
}
async function checkConsolePrints(callback: Callback) {
	// Save original console methods
	var originalConsole = {
		log: console.log,
		warn: console.warn,
		error: console.error,
	};

	const consoleHistory: ConsoleHistory = {
		log: [],
		warn: [],
		error: [],
	};

	console.log = function () {
		consoleHistory.log.push(arguments);
		// originalConsole.log.apply(window.console, arguments as any);
	};
	console.warn = function () {
		consoleHistory.warn.push(arguments);
		originalConsole.warn.apply(window.console, arguments as any);
	};
	console.error = function () {
		consoleHistory.error.push(arguments);
		originalConsole.error.apply(window.console, arguments as any);
	};
	await callback();
	console.log = originalConsole.log;
	console.warn = originalConsole.warn;
	console.error = originalConsole.error;
	return consoleHistory;
}

QUnit.test('text simple', async (assert) => {
	const geo1 = window.geo1;

	const text1 = geo1.createNode('text');

	let container = await text1.compute();
	let core_group = container.coreContent();
	let geometry = core_group?.objectsWithGeo()[0]?.geometry;

	assert.ok(geometry);
	assert.equal(container.pointsCount(), 3324);

	text1.p.text.set('this is a test');
	container = await text1.compute();
	core_group = container.coreContent();
	geometry = core_group?.objectsWithGeo()[0]?.geometry;

	assert.ok(geometry);
	assert.equal(container.pointsCount(), 3792);
});

QUnit.test('text prints no warning', async (assert) => {
	const geo1 = window.geo1;

	const consoleHistory = await checkConsolePrints(async () => {
		console.log('callback start');
		const text1 = geo1.createNode('text');
		const transform1 = geo1.createNode('transform');
		const transform2 = geo1.createNode('transform');
		transform1.setInput(0, text1);
		transform2.setInput(0, transform1);

		let container = await transform2.compute();
		let core_group = container.coreContent();
		let geometry = core_group?.objectsWithGeo()[0]?.geometry;

		assert.ok(geometry);
		assert.equal(container.pointsCount(), 3324);

		text1.p.text.set('this is a test');
		container = await transform2.compute();
		core_group = container.coreContent();
		geometry = core_group?.objectsWithGeo()[0]?.geometry;

		assert.ok(geometry);
		assert.equal(container.pointsCount(), 3792);
		console.log('callback end');
	});
	assert.equal(consoleHistory.log[0][0], 'callback start');
	assert.equal(consoleHistory.log[1][0], 'callback end');
	assert.equal(consoleHistory.log.length, 2);
	assert.equal(consoleHistory.warn.length, 0);
	assert.equal(consoleHistory.error.length, 0);
});

QUnit.test('text with json font', async (assert) => {
	const geo1 = window.geo1;

	const text1 = geo1.createNode('text');
	text1.p.font.set('/fonts/droid_sans_regular.typeface.json');

	let container = await text1.compute();
	assert.equal(container.pointsCount(), 3324);
});

QUnit.test('text with ttf font', async (assert) => {
	const geo1 = window.geo1;

	const text1 = geo1.createNode('text');
	text1.p.font.set('/fonts/SourceCodePro-Regular.ttf');

	let container = await text1.compute();
	assert.equal(container.pointsCount(), 3204);
});

QUnit.test('text with a non existing font', async (assert) => {
	const geo1 = window.geo1;

	const text1 = geo1.createNode('text');
	text1.p.font.set('/fonts/doesnotexist.ttf');

	let container = await text1.compute();
	assert.ok(container, 'container exists');
	assert.equal(text1.states.error.message(), 'count not load font (/fonts/doesnotexist.ttf)');
	assert.equal(container.pointsCount(), 0);
});

QUnit.test('text with multiline', async (assert) => {
	const geo1 = window.geo1;

	const text1 = geo1.createNode('text');
	text1.p.text.set('line1line2');

	let container = await text1.compute();
	assert.more_than_or_equal(container.size().y, 1);
	assert.less_than_or_equal(container.size().y, 1.2);

	text1.p.text.set('line1\nline2');

	container = await text1.compute();
	assert.more_than_or_equal(container.size().y, 2.5);
	assert.less_than_or_equal(container.size().y, 3.5);
});

QUnit.test('text as different types', async (assert) => {
	const scene = window.scene;
	const geo1 = window.geo1;
	geo1.flags.display.set(false); // cancels geo node displayNodeController

	const text1 = geo1.createNode('text');
	text1.p.text.set('some text to test');
	await scene.root().processQueue();
	let container;

	text1.p.type.set(TEXT_TYPES.indexOf(TEXT_TYPE.MESH));
	assert.ok(text1.isDirty());
	container = await text1.compute();
	assert.notOk(text1.isDirty());
	assert.equal(container.pointsCount(), 4776);

	text1.p.type.set(TEXT_TYPES.indexOf(TEXT_TYPE.FLAT));
	assert.ok(text1.isDirty());
	container = await text1.compute();
	assert.notOk(text1.isDirty());
	assert.equal(container.pointsCount(), 3773);

	text1.p.type.set(TEXT_TYPES.indexOf(TEXT_TYPE.LINE));
	assert.ok(text1.isDirty());
	container = await text1.compute();
	assert.notOk(text1.isDirty());
	assert.equal(container.pointsCount(), 3792);

	text1.p.type.set(TEXT_TYPES.indexOf(TEXT_TYPE.STROKE));
	assert.ok(text1.isDirty());
	container = await text1.compute();
	assert.notOk(text1.isDirty());
	assert.equal(container.pointsCount(), 22746);
});

QUnit.test('text can recover from generation errors', async (assert) => {
	const scene = window.scene;
	const geo1 = window.geo1;
	geo1.flags.display.set(false); // cancels geo node displayNodeController

	const text1 = geo1.createNode('text');
	await scene.root().processQueue();
	let container;

	text1.p.font.set('/fonts/Absolute.ttf');

	text1.p.text.set('test');
	container = await text1.compute();
	assert.notOk(text1.states.error.active());
	assert.equal(container.pointsCount(), 4200);

	text1.p.text.set('test!!');
	container = await text1.compute();
	assert.ok(text1.states.error.active());
	assert.equal(text1.states.error.message(), 'failed to generate geometry. Try to remove some characters');
	assert.equal(container.pointsCount(), 0);

	text1.p.text.set('test');
	container = await text1.compute();
	assert.notOk(text1.states.error.active());
	assert.equal(container.pointsCount(), 4200);
});
