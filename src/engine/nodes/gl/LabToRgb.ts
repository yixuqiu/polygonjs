import {TypedGlNode} from './_Base';
import {ThreeToGl} from '../../../../src/core/ThreeToGl';

import ColorGlslLib from './gl/color.glsl';
import {ConnectionPointType} from '../utils/connections/ConnectionPointType';
import {TypedNamedConnectionPoint} from '../utils/connections/NamedConnectionPoint';
import {ShadersCollectionController} from './code/utils/ShadersCollectionController';
import {FunctionGLDefinition} from './utils/GLDefinition';

const OUTPUT_NAME = 'rgb';
import {NodeParamsConfig, ParamConfig} from '../utils/params/ParamsConfig';
class LabToRgbGlParamsConfig extends NodeParamsConfig {
	lab = ParamConfig.VECTOR3([1, 1, 1]);
}
const ParamsConfig = new LabToRgbGlParamsConfig();
export class LabToRgbGlNode extends TypedGlNode<LabToRgbGlParamsConfig> {
	params_config = ParamsConfig;
	static type() {
		return 'lab_to_rgb';
	}

	initialize_node() {
		super.initialize_node();

		this.io.outputs.set_named_output_connection_points([
			new TypedNamedConnectionPoint(OUTPUT_NAME, ConnectionPointType.VEC3),
		]);
	}

	set_lines(shaders_collection_controller: ShadersCollectionController) {
		const function_declaration_lines = [];
		const body_lines = [];

		function_declaration_lines.push(new FunctionGLDefinition(this, ConnectionPointType.VEC3, ColorGlslLib));

		const value = ThreeToGl.vector3(this.variable_for_input(this.p.lab.name));

		const rgb = this.gl_var_name(OUTPUT_NAME);
		body_lines.push(`vec3 ${rgb} = labToRgb(${value})`);
		shaders_collection_controller.add_definitions(this, function_declaration_lines);
		shaders_collection_controller.add_body_lines(this, body_lines);
	}
}
