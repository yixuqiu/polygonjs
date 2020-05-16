import {TypedJsNode} from './_Base';
import {
	JS_CONNECTION_POINT_TYPES,
	// GlConnectionPoint,
	JsConnectionPointType,
	JsConnectionPointInitValueMap,
	JsConnectionPointTypeToParamTypeMap,
} from '../utils/io/connections/Js';
import lodash_isArray from 'lodash/isArray';

import {NodeParamsConfig, ParamConfig} from '../utils/params/ParamsConfig';
import {ParamType} from '../../poly/ParamType';
import {UniformJsDefinition} from './utils/JsDefinition';
import {ParamConfigsController} from '../utils/code/controllers/ParamConfigsController';
import {LinesController} from './code/utils/LinesController';
import {JsParamConfig} from './code/utils/ParamConfig';
class ParamJsParamsConfig extends NodeParamsConfig {
	name = ParamConfig.STRING('');
	type = ParamConfig.INTEGER(JS_CONNECTION_POINT_TYPES.indexOf(JsConnectionPointType.FLOAT), {
		menu: {
			entries: JS_CONNECTION_POINT_TYPES.map((name, i) => {
				return {name: name, value: i};
			}),
		},
	});
	as_color = ParamConfig.BOOLEAN(0, {
		visible_if: {type: JS_CONNECTION_POINT_TYPES.indexOf(JsConnectionPointType.VEC3)},
	});
}
const ParamsConfig = new ParamJsParamsConfig();

export class ParamJsNode extends TypedJsNode<ParamJsParamsConfig> {
	params_config = ParamsConfig;
	static type() {
		return 'param';
	}
	protected _allow_inputs_created_from_params: boolean = false;
	private _on_create_set_name_if_none_bound = this._on_create_set_name_if_none.bind(this);
	initialize_node() {
		this.add_post_dirty_hook('_set_mat_to_recompile', this._set_function_node_to_recompile.bind(this));
		this.lifecycle.add_on_create_hook(this._on_create_set_name_if_none_bound);
		this.io.connection_points.initialize_node();

		this.io.connection_points.set_expected_input_types_function(() => []);
		this.io.connection_points.set_expected_output_types_function(() => [JS_CONNECTION_POINT_TYPES[this.pv.type]]);
	}

	set_lines(lines_controller: LinesController) {
		const definitions = [];

		const gl_type = JS_CONNECTION_POINT_TYPES[this.pv.type];
		const var_name = this.uniform_name();

		definitions.push(new UniformJsDefinition(this, gl_type, var_name));
		lines_controller.add_definitions(this, definitions);
	}
	set_param_configs() {
		const gl_type = JS_CONNECTION_POINT_TYPES[this.pv.type];
		const default_value = JsConnectionPointInitValueMap[gl_type];
		let param_type = JsConnectionPointTypeToParamTypeMap[gl_type];

		this._param_configs_controller = this._param_configs_controller || new ParamConfigsController();
		this._param_configs_controller.reset();

		if (
			param_type == ParamType.VECTOR3 &&
			this.p.as_color.value &&
			lodash_isArray(default_value) &&
			default_value.length == 3
		) {
			const param_config = new JsParamConfig(ParamType.COLOR, this.pv.name, default_value, this.uniform_name());
			this._param_configs_controller.push(param_config);
		} else {
			const param_config = new JsParamConfig(param_type, this.pv.name, default_value, this.uniform_name());
			this._param_configs_controller.push(param_config);
		}
	}
	uniform_name() {
		const output_connection_point = this.io.outputs.named_output_connection_points[0];
		const var_name = this.js_var_name(output_connection_point.name);
		return var_name;
	}
	set_gl_type(type: JsConnectionPointType) {
		const index = JS_CONNECTION_POINT_TYPES.indexOf(type);
		this.p.type.set(index);
	}

	//
	//
	// HOOKS
	//
	//
	private _on_create_set_name_if_none() {
		if (this.pv.name == '') {
			this.p.name.set(this.name);
		}
	}
}
