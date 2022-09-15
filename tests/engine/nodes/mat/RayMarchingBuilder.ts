import {SpotLightRayMarchingUniformElement} from './../../../../src/engine/scene/utils/SceneTraverser';
import {UniformName} from './../../../../src/engine/scene/utils/UniformsController';
import {Vector3} from 'three';
import {CoreSleep} from './../../../../src/core/Sleep';
import {GlConnectionPointType} from '../../../../src/engine/nodes/utils/io/connections/Gl';

import BasicDefaultVertex from './templates/raymarching/default.vert.glsl';
import BasicDefaultFragment from './templates/raymarching/default.frag.glsl';
import GlobalsNotNeededVertex from './templates/raymarching/globalsNotNeeded.vert.glsl';
import GlobalsNotNeededFragment from './templates/raymarching/globalsNotNeeded.frag.glsl';
import BasicMinimalVertex from './templates/raymarching/minimal.vert.glsl';
import BasicMinimalFragment from './templates/raymarching/minimal.frag.glsl';
import BasicPositionVertex from './templates/raymarching/position.vert.glsl';
import BasicPositionFragment from './templates/raymarching/position.frag.glsl';
import SimpleVertexVertex from './templates/raymarching/simple_vertex.vert.glsl';
import SimpleVertexFragment from './templates/raymarching/simple_vertex.frag.glsl';
import CameraPositionVertex from './templates/raymarching/cameraPosition.vert.glsl';
import CameraPositionFragment from './templates/raymarching/cameraPosition.frag.glsl';
import ReflectionVertex from './templates/raymarching/reflection.vert.glsl';
import ReflectionFragment from './templates/raymarching/reflection.frag.glsl';
import RefractionVertex from './templates/raymarching/refraction.vert.glsl';
import RefractionFragment from './templates/raymarching/refraction.frag.glsl';
import RefractionSplitRGBFragment from './templates/raymarching/refraction_splitRGB.frag.glsl';
import {RAYMARCHING_UNIFORMS} from '../../../../src/engine/nodes/gl/gl/raymarching/uniforms';
import {SceneJsonImporter} from '../../../../src/engine/io/json/import/Scene';
import {SceneJsonExporter} from '../../../../src/engine/io/json/export/Scene';
import {RayMarchingBuilderMatNode} from '../../../../src/engine/nodes/mat/RayMarchingBuilder';
import {FloatParam} from '../../../../src/engine/params/Float';
import {Vector3Param} from '../../../../src/engine/params/Vector3';
import {AssemblersUtils} from '../../../helpers/AssemblersUtils';
import {ShaderMaterialWithCustomMaterials} from '../../../../src/core/geometry/Material';
import {RendererUtils} from '../../../helpers/RendererUtils';
import {MaterialUserDataUniforms} from '../../../../src/engine/nodes/gl/code/assemblers/materials/OnBeforeCompile';
import {GLSLHelper} from '../../../helpers/GLSLHelper';

const TEST_SHADER_LIB = {
	default: {vert: BasicDefaultVertex, frag: BasicDefaultFragment},
	globalsNotNeeded: {vert: GlobalsNotNeededVertex, frag: GlobalsNotNeededFragment},
	minimal: {vert: BasicMinimalVertex, frag: BasicMinimalFragment},
	position: {vert: BasicPositionVertex, frag: BasicPositionFragment},
	simpleVertex: {vert: SimpleVertexVertex, frag: SimpleVertexFragment},
	cameraPosition: {vert: CameraPositionVertex, frag: CameraPositionFragment},
	reflection: {vert: ReflectionVertex, frag: ReflectionFragment},
	refraction: {vert: RefractionVertex, frag: RefractionFragment, fragSplitRGB: RefractionSplitRGBFragment},
};

const ALL_UNIFORMS_WITHOUT_ENV = [
	...Object.keys(RAYMARCHING_UNIFORMS).concat([
		'spotLightsRayMarching',
		'directionalLightsRayMarching',
		'hemisphereLightsRayMarching',
		'pointLightsRayMarching',
	]),
	'alphaMap',
	'alphaTest',
	'ambientLightColor',
	'aoMap',
	'aoMapIntensity',
	'bumpMap',
	'bumpScale',
	'diffuse',
	'directionalLightShadows',
	'directionalLights',
	'directionalShadowMap',
	'directionalShadowMatrix',
	'displacementBias',
	'displacementMap',
	'displacementScale',
	'emissive',
	'emissiveMap',
	'envMap',
	'envMapIntensity',
	'flipEnvMap',
	'fogColor',
	'fogDensity',
	'fogFar',
	'fogNear',
	'hemisphereLights',
	'ior',
	'lightMap',
	'lightMapIntensity',
	'lightProbe',
	'ltc_1',
	'ltc_2',
	'map',
	'metalness',
	'metalnessMap',
	'normalMap',
	'normalScale',
	'opacity',
	'pointLightShadows',
	'pointLights',
	'pointShadowMap',
	'pointShadowMatrix',
	'rectAreaLights',
	'reflectivity',
	'refractionRatio',
	'roughness',
	'roughnessMap',
	'spotLightMap',
	'spotLightMatrix',
	'spotLightShadows',
	'spotLights',
	'spotShadowMap',
	'uv2Transform',
	'uvTransform',
];

const ALL_UNIFORMS = [...ALL_UNIFORMS_WITHOUT_ENV, 'v_POLY_texture_envTexture1'];

export function onCreateHook(node: RayMarchingBuilderMatNode) {
	const globals = node.createNode('globals');
	const output = node.createNode('output');

	const sdfContext = node.createNode('SDFContext');
	const sdfMaterial = node.createNode('SDFMaterial');
	const sdfSphere = node.createNode('SDFSphere');
	const constant = node.createNode('constant');

	output.setInput(0, sdfContext);
	sdfContext.setInput(0, sdfSphere);
	sdfContext.setInput(1, sdfMaterial);
	sdfSphere.setInput('position', globals, 'position');
	sdfMaterial.setInput('color', constant);

	constant.setGlType(GlConnectionPointType.VEC3);
	constant.p.asColor.set(1);
	constant.p.color.set([1, 1, 1]);
	sdfMaterial.p.useEnvMap.set(1);

	globals.uiData.setPosition(-300, -0);
	output.uiData.setPosition(300, 0);

	sdfContext.uiData.setPosition(100, 0);
	sdfSphere.uiData.setPosition(-100, 0);
	sdfMaterial.uiData.setPosition(-100, 200);
	constant.uiData.setPosition(-300, 200);

	return {globals, output, sdfSphere, sdfMaterial, constant};
}

QUnit.test('mat/rayMarchingBuilder simple', async (assert) => {
	const {renderer} = await RendererUtils.waitForRenderer(window.scene);
	const MAT = window.MAT;
	// const debug = MAT.createNode('test')
	const rayMarchingBuilder1 = MAT.createNode('rayMarchingBuilder');
	const {globals, sdfSphere} = onCreateHook(rayMarchingBuilder1);
	const material = rayMarchingBuilder1.material as ShaderMaterialWithCustomMaterials;

	await RendererUtils.compile(rayMarchingBuilder1, renderer);
	assert.equal(GLSLHelper.compress(material.vertexShader), GLSLHelper.compress(TEST_SHADER_LIB.default.vert));
	assert.equal(GLSLHelper.compress(material.fragmentShader), GLSLHelper.compress(TEST_SHADER_LIB.default.frag));
	assert.deepEqual(Object.keys(MaterialUserDataUniforms.getUniforms(material)!).sort(), ALL_UNIFORMS.sort());

	sdfSphere.setInput('radius', globals, 'time');
	await RendererUtils.compile(rayMarchingBuilder1, renderer);
	assert.equal(GLSLHelper.compress(material.vertexShader), GLSLHelper.compress(TEST_SHADER_LIB.minimal.vert));
	assert.equal(GLSLHelper.compress(material.fragmentShader), GLSLHelper.compress(TEST_SHADER_LIB.minimal.frag));

	const floatToVec31 = rayMarchingBuilder1.createNode('floatToVec3');
	floatToVec31.setInput(0, globals, 'time');
	await RendererUtils.compile(rayMarchingBuilder1, renderer);
	assert.equal(GLSLHelper.compress(material.vertexShader), GLSLHelper.compress(TEST_SHADER_LIB.position.vert));
	assert.equal(GLSLHelper.compress(material.fragmentShader), GLSLHelper.compress(TEST_SHADER_LIB.position.frag));

	RendererUtils.dispose();
});

QUnit.test('mat/rayMarchingBuilder vertex shader remains simple', async (assert) => {
	const {renderer} = await RendererUtils.waitForRenderer(window.scene);
	const MAT = window.MAT;
	// const debug = MAT.createNode('test')
	const rayMarchingBuilder1 = MAT.createNode('rayMarchingBuilder');
	const {sdfSphere, sdfMaterial, constant} = onCreateHook(rayMarchingBuilder1);
	const multScalar1 = rayMarchingBuilder1.createNode('multScalar');
	sdfMaterial.setInput('color', multScalar1);
	multScalar1.setInput(0, constant);
	multScalar1.setInput(1, sdfSphere);
	const material = rayMarchingBuilder1.material as ShaderMaterialWithCustomMaterials;

	await RendererUtils.compile(rayMarchingBuilder1, renderer);
	assert.equal(GLSLHelper.compress(material.vertexShader), GLSLHelper.compress(TEST_SHADER_LIB.simpleVertex.vert));
	assert.equal(GLSLHelper.compress(material.fragmentShader), GLSLHelper.compress(TEST_SHADER_LIB.simpleVertex.frag));
	assert.deepEqual(Object.keys(MaterialUserDataUniforms.getUniforms(material)!).sort(), ALL_UNIFORMS.sort());
});
QUnit.test(
	'mat/rayMarchingBuilder SDF functions are still valid without being connected to globals',
	async (assert) => {
		const {renderer} = await RendererUtils.waitForRenderer(window.scene);
		const MAT = window.MAT;
		// const debug = MAT.createNode('test')
		const rayMarchingBuilder1 = MAT.createNode('rayMarchingBuilder');
		const {sdfSphere} = onCreateHook(rayMarchingBuilder1);
		sdfSphere.setInput(0, null);
		const material = rayMarchingBuilder1.material as ShaderMaterialWithCustomMaterials;

		await RendererUtils.compile(rayMarchingBuilder1, renderer);
		assert.equal(
			GLSLHelper.compress(material.vertexShader),
			GLSLHelper.compress(TEST_SHADER_LIB.globalsNotNeeded.vert)
		);
		assert.equal(
			GLSLHelper.compress(material.fragmentShader),
			GLSLHelper.compress(TEST_SHADER_LIB.globalsNotNeeded.frag)
		);
		assert.deepEqual(Object.keys(MaterialUserDataUniforms.getUniforms(material)!).sort(), ALL_UNIFORMS.sort());
	}
);

QUnit.test('mat/rayMarchingBuilder uses cameraPosition for fresnel on envMap', async (assert) => {
	const {renderer} = await RendererUtils.waitForRenderer(window.scene);
	const MAT = window.MAT;
	// const debug = MAT.createNode('test')
	const rayMarchingBuilder1 = MAT.createNode('rayMarchingBuilder');

	const globals = rayMarchingBuilder1.createNode('globals');
	const output = rayMarchingBuilder1.createNode('output');
	const sdfGradient1 = rayMarchingBuilder1.createNode('SDFGradient');
	const sdfGradientSubnetInput = sdfGradient1.createNode('subnetInput');
	const sdfGradientSubnetOutput = sdfGradient1.createNode('subnetOutput');
	const sdfSphere = sdfGradient1.createNode('SDFSphere');
	sdfSphere.setInput(0, sdfGradientSubnetInput);
	sdfGradientSubnetOutput.setInput(0, sdfSphere);

	const sdfContext = rayMarchingBuilder1.createNode('SDFContext');
	const sdfMaterial = rayMarchingBuilder1.createNode('SDFMaterial');

	const constant = rayMarchingBuilder1.createNode('constant');

	output.setInput(0, sdfContext);
	sdfContext.setInput(0, sdfGradient1);
	sdfContext.setInput(1, sdfMaterial);
	sdfGradient1.setInput('position', globals, 'position');
	sdfMaterial.setInput('color', constant);

	constant.setGlType(GlConnectionPointType.VEC3);
	constant.p.asColor.set(1);
	constant.p.color.set([1, 1, 1]);

	//
	const normalize1 = rayMarchingBuilder1.createNode('normalize');
	const dot1 = rayMarchingBuilder1.createNode('dot');
	const complement1 = rayMarchingBuilder1.createNode('complement');
	const pow1 = rayMarchingBuilder1.createNode('pow');
	const abs1 = rayMarchingBuilder1.createNode('abs');

	sdfMaterial.p.useEnvMap.set(1);
	sdfMaterial.setInput('envMapIntensity', abs1);
	abs1.setInput(0, pow1);
	pow1.setInput(0, complement1);
	complement1.setInput(0, dot1);
	dot1.setInput(0, sdfGradient1, 'gradient');
	dot1.setInput(1, normalize1);
	normalize1.setInput(0, globals, 'cameraPosition');

	// add inputs to the SDFMaterial, to make sure those are properly parsed
	const envMapTint = rayMarchingBuilder1.createNode('constant');
	envMapTint.setName('envMapTint');
	envMapTint.setGlType(GlConnectionPointType.VEC3);
	sdfMaterial.setInput('envMapTint', envMapTint);
	const envMapFresnel = rayMarchingBuilder1.createNode('constant');
	envMapFresnel.setName('envMapFresnel');
	sdfMaterial.setInput('envMapFresnel', envMapFresnel);
	const envMapFresnelPower = rayMarchingBuilder1.createNode('constant');
	envMapFresnelPower.setName('envMapFresnelPower');
	sdfMaterial.setInput('envMapFresnelPower', envMapFresnelPower);

	const material = rayMarchingBuilder1.material as ShaderMaterialWithCustomMaterials;

	await RendererUtils.compile(rayMarchingBuilder1, renderer);
	assert.equal(GLSLHelper.compress(material.vertexShader), GLSLHelper.compress(TEST_SHADER_LIB.cameraPosition.vert));
	assert.equal(
		GLSLHelper.compress(material.fragmentShader),
		GLSLHelper.compress(TEST_SHADER_LIB.cameraPosition.frag)
	);
	assert.deepEqual(Object.keys(MaterialUserDataUniforms.getUniforms(material)!).sort(), ALL_UNIFORMS.sort());
});

QUnit.test('mat/rayMarchingBuilder with raymarched reflections', async (assert) => {
	const {renderer} = await RendererUtils.waitForRenderer(window.scene);
	const MAT = window.MAT;
	// const debug = MAT.createNode('test')
	const rayMarchingBuilder1 = MAT.createNode('rayMarchingBuilder');

	const globals = rayMarchingBuilder1.createNode('globals');
	const output = rayMarchingBuilder1.createNode('output');
	const sdfGradient1 = rayMarchingBuilder1.createNode('SDFGradient');
	const sdfGradientSubnetInput = sdfGradient1.createNode('subnetInput');
	const sdfGradientSubnetOutput = sdfGradient1.createNode('subnetOutput');
	const sdfSphere = sdfGradient1.createNode('SDFSphere');
	sdfSphere.setInput(0, sdfGradientSubnetInput);
	sdfGradientSubnetOutput.setInput(0, sdfSphere);

	const sdfContext = rayMarchingBuilder1.createNode('SDFContext');
	const sdfMaterial = rayMarchingBuilder1.createNode('SDFMaterial');

	const constant = rayMarchingBuilder1.createNode('constant');

	output.setInput(0, sdfContext);
	sdfContext.setInput(0, sdfGradient1);
	sdfContext.setInput(1, sdfMaterial);
	sdfGradient1.setInput('position', globals, 'position');
	sdfMaterial.setInput('color', constant);
	sdfMaterial.p.useReflection.set(1);

	constant.setGlType(GlConnectionPointType.VEC3);
	constant.p.asColor.set(1);
	constant.p.color.set([1, 1, 1]);

	// add inputs to the SDFMaterial, to make sure those are properly parsed
	const reflectivity = rayMarchingBuilder1.createNode('constant');
	reflectivity.setName('reflectivity');
	reflectivity.setGlType(GlConnectionPointType.FLOAT);
	reflectivity.p.float.set(0.74);
	sdfMaterial.setInput('reflectivity', reflectivity);
	const reflectionTint = rayMarchingBuilder1.createNode('constant');
	reflectionTint.p.int.set(11);
	reflectionTint.setGlType(GlConnectionPointType.VEC3);
	reflectionTint.setName('reflectionTint');
	sdfMaterial.setInput('reflectionTint', reflectionTint);
	const reflectionBiasMult = rayMarchingBuilder1.createNode('constant');
	reflectionBiasMult.p.int.set(4);
	reflectionBiasMult.setGlType(GlConnectionPointType.FLOAT);
	reflectionBiasMult.setName('reflectionBiasMult');
	sdfMaterial.setInput('reflectionBiasMult', reflectionBiasMult);

	const material = rayMarchingBuilder1.material as ShaderMaterialWithCustomMaterials;

	await RendererUtils.compile(rayMarchingBuilder1, renderer);
	assert.equal(GLSLHelper.compress(material.vertexShader), GLSLHelper.compress(TEST_SHADER_LIB.reflection.vert));
	assert.equal(GLSLHelper.compress(material.fragmentShader), GLSLHelper.compress(TEST_SHADER_LIB.reflection.frag));
	assert.deepEqual(Object.keys(MaterialUserDataUniforms.getUniforms(material)!).sort(), ALL_UNIFORMS.sort());
});

QUnit.test('mat/rayMarchingBuilder with raymarched refractions', async (assert) => {
	const {renderer} = await RendererUtils.waitForRenderer(window.scene);
	const MAT = window.MAT;
	// const debug = MAT.createNode('test')
	const rayMarchingBuilder1 = MAT.createNode('rayMarchingBuilder');

	const globals = rayMarchingBuilder1.createNode('globals');
	const output = rayMarchingBuilder1.createNode('output');
	const sdfGradient1 = rayMarchingBuilder1.createNode('SDFGradient');
	const sdfGradientSubnetInput = sdfGradient1.createNode('subnetInput');
	const sdfGradientSubnetOutput = sdfGradient1.createNode('subnetOutput');
	const sdfSphere = sdfGradient1.createNode('SDFSphere');
	sdfSphere.setInput(0, sdfGradientSubnetInput);
	sdfGradientSubnetOutput.setInput(0, sdfSphere);

	const sdfContext = rayMarchingBuilder1.createNode('SDFContext');
	const sdfMaterial = rayMarchingBuilder1.createNode('SDFMaterial');

	const constant = rayMarchingBuilder1.createNode('constant');

	output.setInput(0, sdfContext);
	sdfContext.setInput(0, sdfGradient1);
	sdfContext.setInput(1, sdfMaterial);
	sdfGradient1.setInput('position', globals, 'position');
	sdfMaterial.setInput('color', constant);
	sdfMaterial.p.useRefraction.set(1);

	constant.setGlType(GlConnectionPointType.VEC3);
	constant.p.asColor.set(1);
	constant.p.color.set([1, 1, 1]);

	// add inputs to the SDFMaterial, to make sure those are properly parsed

	const refractionTint = rayMarchingBuilder1.createNode('constant');
	refractionTint.p.int.set(11);
	refractionTint.setGlType(GlConnectionPointType.VEC3);
	refractionTint.setName('refractionTint');
	sdfMaterial.setInput('refractionTint', refractionTint);
	const ior = rayMarchingBuilder1.createNode('constant');
	ior.setName('ior');
	ior.setGlType(GlConnectionPointType.FLOAT);
	ior.p.float.set(1.45);
	sdfMaterial.setInput('ior', ior);
	const iorOffset = rayMarchingBuilder1.createNode('constant');
	iorOffset.setName('iorOffset');
	iorOffset.setGlType(GlConnectionPointType.VEC3);
	iorOffset.p.vec3.set([-0.01, 0, 0.01]);
	sdfMaterial.setInput('iorOffset', iorOffset);
	const transmission = rayMarchingBuilder1.createNode('constant');
	transmission.setName('transmission');
	transmission.setGlType(GlConnectionPointType.FLOAT);
	transmission.p.float.set(0.7);
	sdfMaterial.setInput('transmission', transmission);
	const absorbtion = rayMarchingBuilder1.createNode('constant');
	absorbtion.setName('absorbtion');
	absorbtion.setGlType(GlConnectionPointType.FLOAT);
	absorbtion.p.float.set(0.7);
	sdfMaterial.setInput('absorbtion', absorbtion);
	const refractionBiasMult = rayMarchingBuilder1.createNode('constant');
	refractionBiasMult.p.int.set(4);
	refractionBiasMult.setGlType(GlConnectionPointType.FLOAT);
	refractionBiasMult.setName('refractionBiasMult');
	sdfMaterial.setInput('refractionBiasMult', refractionBiasMult);

	const material = rayMarchingBuilder1.material as ShaderMaterialWithCustomMaterials;

	// without splitRGB
	await RendererUtils.compile(rayMarchingBuilder1, renderer);
	assert.equal(GLSLHelper.compress(material.vertexShader), GLSLHelper.compress(TEST_SHADER_LIB.refraction.vert));
	assert.equal(GLSLHelper.compress(material.fragmentShader), GLSLHelper.compress(TEST_SHADER_LIB.refraction.frag));
	assert.deepEqual(Object.keys(MaterialUserDataUniforms.getUniforms(material)!).sort(), ALL_UNIFORMS.sort());

	// with splitRGB
	sdfMaterial.p.splitRGB.set(1);
	await RendererUtils.compile(rayMarchingBuilder1, renderer);
	assert.equal(GLSLHelper.compress(material.vertexShader), GLSLHelper.compress(TEST_SHADER_LIB.refraction.vert));
	assert.equal(
		GLSLHelper.compress(material.fragmentShader),
		GLSLHelper.compress(TEST_SHADER_LIB.refraction.fragSplitRGB)
	);
	assert.deepEqual(Object.keys(MaterialUserDataUniforms.getUniforms(material)!).sort(), ALL_UNIFORMS.sort());
});

QUnit.test(
	'mat/rayMarchingBuilder can be time dependent if only the materials have time dependency',
	async (assert) => {
		const {renderer} = await RendererUtils.waitForRenderer(window.scene);
		const scene = window.scene;
		const MAT = window.MAT;
		// const debug = MAT.createNode('test')
		const rayMarchingBuilder1 = MAT.createNode('rayMarchingBuilder');

		const globals = rayMarchingBuilder1.createNode('globals');
		const output = rayMarchingBuilder1.createNode('output');
		const sdfGradient1 = rayMarchingBuilder1.createNode('SDFGradient');
		const sdfGradientSubnetInput = sdfGradient1.createNode('subnetInput');
		const sdfGradientSubnetOutput = sdfGradient1.createNode('subnetOutput');
		const sdfSphere = sdfGradient1.createNode('SDFSphere');
		sdfSphere.setInput(0, sdfGradientSubnetInput);
		sdfGradientSubnetOutput.setInput(0, sdfSphere);

		const sdfContext = rayMarchingBuilder1.createNode('SDFContext');
		const sdfMaterial = rayMarchingBuilder1.createNode('SDFMaterial');

		output.setInput(0, sdfContext);
		sdfContext.setInput(0, sdfGradient1);
		sdfContext.setInput(1, sdfMaterial);

		const color = rayMarchingBuilder1.createNode('constant');
		color.setGlType(GlConnectionPointType.VEC3);
		sdfMaterial.setInput('color', color);

		await RendererUtils.compile(rayMarchingBuilder1, renderer);
		const material = rayMarchingBuilder1.material as ShaderMaterialWithCustomMaterials;

		scene.timeController.setTime(17);
		assert.notOk(material.uniforms['time'], 'no time uniform');

		sdfMaterial.setInput('envMapIntensity', globals, 'time');
		await RendererUtils.compile(rayMarchingBuilder1, renderer);
		scene.timeController.setTime(18);
		assert.equal(material.uniforms['time'].value, 18);
	}
);
QUnit.test('mat/rayMarchingBuilder multiple objects share the same spotLightRayMarching uniforms', async (assert) => {
	const scene = window.scene;
	// const geo1 = window.geo1;

	const perspective_camera1 = window.perspective_camera1;
	perspective_camera1.p.t.set([1, 1, 5]);
	// const {renderer} = await RendererUtils.waitForRenderer(window.scene);
	const MAT = window.MAT;
	// const debug = MAT.createNode('test')
	const rayMarchingBuilder1 = MAT.createNode('rayMarchingBuilder');
	const rayMarchingBuilder1Nodes = onCreateHook(rayMarchingBuilder1);
	rayMarchingBuilder1Nodes.sdfSphere.p.radius.set(0.1);
	const rayMarchingBuilder2 = MAT.createNode('rayMarchingBuilder');
	onCreateHook(rayMarchingBuilder2);
	const material1 = rayMarchingBuilder1.material as ShaderMaterialWithCustomMaterials;
	const material2 = rayMarchingBuilder2.material as ShaderMaterialWithCustomMaterials;

	function createBox(materialNode: RayMarchingBuilderMatNode, pos: Vector3) {
		const geo = scene.root().createNode('geo');
		const box1 = geo.createNode('box');
		const material1 = geo.createNode('material');
		material1.setInput(0, box1);
		material1.p.material.setNode(materialNode);
		material1.flags.display.set(true);
	}
	function getMaterialSpotLightRayMarchingUniform(material: ShaderMaterialWithCustomMaterials) {
		const uniform = material.uniforms[UniformName.SPOTLIGHTS_RAYMARCHING];
		return uniform.value.map((u: SpotLightRayMarchingUniformElement) => u.worldPos.toArray());
	}
	createBox(rayMarchingBuilder1, new Vector3(0, 0, 0));
	createBox(rayMarchingBuilder2, new Vector3(2, 0, 0));

	await RendererUtils.withViewer({cameraNode: perspective_camera1}, async (args) => {
		scene.play();
		await CoreSleep.sleep(50);
		assert.deepEqual(getMaterialSpotLightRayMarchingUniform(material1), []);
		assert.deepEqual(getMaterialSpotLightRayMarchingUniform(material2), []);

		const spotLight1 = scene.root().createNode('spotLight');
		spotLight1.p.t.set([2, 0, 0]);
		spotLight1.p.color.set([1, 0, 0]);
		await CoreSleep.sleep(50);
		assert.deepEqual(getMaterialSpotLightRayMarchingUniform(material1), [[2, 0, 0.01]]);
		assert.deepEqual(getMaterialSpotLightRayMarchingUniform(material2), [[2, 0, 0.01]]);

		const spotLight2 = scene.root().createNode('spotLight');
		spotLight2.p.t.set([0, 4, 0]);
		spotLight2.p.color.set([0, 0, 1]);
		await CoreSleep.sleep(50);
		assert.deepEqual(getMaterialSpotLightRayMarchingUniform(material1), [
			[2, 0, 0.01],
			[0, 4, 0.01],
		]);
		assert.deepEqual(getMaterialSpotLightRayMarchingUniform(material2), [
			[2, 0, 0.01],
			[0, 4, 0.01],
		]);

		scene.root().removeNode(spotLight1);
		await CoreSleep.sleep(50);
		// it's probably ok that the uniforms do not get resized down,
		// since threejs still sets the number of spotlights to iterate
		assert.deepEqual(getMaterialSpotLightRayMarchingUniform(material1), [
			[0, 4, 0.01],
			[0, 4, 0.01],
		]);
		assert.deepEqual(getMaterialSpotLightRayMarchingUniform(material2), [
			[0, 4, 0.01],
			[0, 4, 0.01],
		]);
	});
});

QUnit.test('mat/rayMarchingBuilder persisted_config', async (assert) => {
	const {renderer} = await RendererUtils.waitForRenderer(window.scene);
	const MAT = window.MAT;
	const rayMarchingBuilder1 = MAT.createNode('rayMarchingBuilder');
	const {sdfSphere, sdfMaterial} = onCreateHook(rayMarchingBuilder1);
	const param1 = rayMarchingBuilder1.createNode('param');
	param1.setGlType(GlConnectionPointType.FLOAT);
	param1.p.name.set('float_param');
	const param2 = rayMarchingBuilder1.createNode('param');
	param2.setGlType(GlConnectionPointType.VEC3);
	param2.p.name.set('vec3_param');

	sdfSphere.setInput('radius', param1);
	sdfMaterial.setInput('color', param2);

	await RendererUtils.compile(rayMarchingBuilder1, renderer);
	const rayMarching1Material = rayMarchingBuilder1.material as ShaderMaterialWithCustomMaterials;

	const scene = window.scene;
	const data = new SceneJsonExporter(scene).data();
	await AssemblersUtils.withUnregisteredAssembler(rayMarchingBuilder1.usedAssembler(), async () => {
		// console.log('************ LOAD **************');
		const scene2 = await SceneJsonImporter.loadData(data);
		await scene2.waitForCooksCompleted();

		const rayMarchingBuilder2 = scene2.node(rayMarchingBuilder1.path()) as RayMarchingBuilderMatNode;
		assert.notOk(rayMarchingBuilder2.assemblerController());
		assert.ok(rayMarchingBuilder2.persisted_config);
		const float_param = rayMarchingBuilder2.params.get('float_param') as FloatParam;
		const vec3_param = rayMarchingBuilder2.params.get('vec3_param') as Vector3Param;
		assert.ok(float_param);
		assert.ok(vec3_param);
		const material = rayMarchingBuilder2.material as ShaderMaterialWithCustomMaterials;
		await RendererUtils.compile(rayMarchingBuilder2, renderer);
		assert.equal(
			GLSLHelper.compress(material.fragmentShader),
			GLSLHelper.compress(rayMarching1Material.fragmentShader)
		);
		assert.equal(
			GLSLHelper.compress(material.vertexShader),
			GLSLHelper.compress(rayMarching1Material.vertexShader)
		);

		// float param callback
		assert.equal(MaterialUserDataUniforms.getUniforms(material)!.v_POLY_param_float_param.value, 0);
		float_param.set(2);
		assert.equal(MaterialUserDataUniforms.getUniforms(material)!.v_POLY_param_float_param.value, 2);
		float_param.set(4);
		assert.equal(MaterialUserDataUniforms.getUniforms(material)!.v_POLY_param_float_param.value, 4);

		// vector3 param callback
		assert.deepEqual(
			MaterialUserDataUniforms.getUniforms(material)!.v_POLY_param_vec3_param.value.toArray(),
			[0, 0, 0]
		);
		vec3_param.set([1, 2, 3]);
		assert.deepEqual(
			MaterialUserDataUniforms.getUniforms(material)!.v_POLY_param_vec3_param.value.toArray(),
			[1, 2, 3]
		);
		vec3_param.set([5, 6, 7]);
		assert.deepEqual(
			MaterialUserDataUniforms.getUniforms(material)!.v_POLY_param_vec3_param.value.toArray(),
			[5, 6, 7]
		);
	});

	RendererUtils.dispose();
});