import lodash_max from 'lodash/max';
import lodash_min from 'lodash/min';
import lodash_sortBy from 'lodash/sortBy';
import lodash_uniq from 'lodash/uniq';
import lodash_isNumber from 'lodash/isNumber';
import {Vector3} from 'three/src/math/Vector3';
import {TypedSopNode} from './_Base';
import {CoreGroup} from 'src/core/geometry/Group';

import {NodeParamsConfig, ParamConfig} from 'src/engine/nodes/utils/params/ParamsConfig';
class AttribRemapSopParamsConfig extends NodeParamsConfig {
	name = ParamConfig.STRING();
	ramp = ParamConfig.RAMP();
	change_name = ParamConfig.BOOLEAN(0);
	new_name = ParamConfig.STRING('', {visible_if: {change_name: 1}});
}
const ParamsConfig = new AttribRemapSopParamsConfig();

export class AttribRemapSopNode extends TypedSopNode<AttribRemapSopParamsConfig> {
	params_config = ParamsConfig;
	static type() {
		return 'attrib_remap';
	}

	initialize_node() {
		this.io.inputs.set_count(1);
	}

	cook(input_contents: CoreGroup[]) {
		const core_group = input_contents[0];
		this._remap_attribute(core_group);
		this.set_core_group(core_group);
	}

	_remap_attribute(core_group: CoreGroup) {
		const points = core_group.points();
		if (points.length === 0) {
			return;
		}
		if (this.pv.name === '') {
			return;
		}

		const attrib_size = points[0].attrib_size(this.pv.name);
		const values = points.map((point) => point.attrib_value(this.pv.name));
		let min: NumericAttribValue, max: NumericAttribValue;
		let normalized_values: NumericAttribValue[] = new Array(points.length);
		switch (attrib_size) {
			case 1:
				if (this.pv.only_integer_values) {
					const sorted_values = lodash_uniq(lodash_sortBy(values));
					const index_by_value: Dictionary<number> = {};
					sorted_values.forEach((sorted_value, i) => (index_by_value[sorted_value] = i));
					normalized_values = values.map((value) => index_by_value[value]);
				} else {
					min = lodash_min(values);
					max = lodash_max(values);
					//this._save_min_max(group, min, max)
					if (lodash_isNumber(min) && lodash_isNumber(max)) {
						for (let i = 0; i < values.length; i++) {
							const value = values[i];
							const normalized_value = max > min ? (value - min) / (max - min) : 1;
							normalized_values[i] = normalized_value;
						}
					}
				}
				break;

			case 3:
				min = new Vector3(
					lodash_min(values.map((v) => v.x)),
					lodash_min(values.map((v) => v.y)),
					lodash_min(values.map((v) => v.z))
				);
				max = new Vector3(
					lodash_max(values.map((v) => v.x)),
					lodash_max(values.map((v) => v.y)),
					lodash_max(values.map((v) => v.z))
				);
				//this._save_min_max(group, min, max)
				if (min instanceof Vector3 && max instanceof Vector3) {
					for (let i = 0; i < values.length; i++) {
						const value = values[i];
						const normalized_value = new Vector3(
							(value.x - min.x) / (max.x - min.x),
							(value.y - min.y) / (max.y - min.y),
							(value.z - min.z) / (max.z - min.z)
						);
						normalized_values[i] = normalized_value;
					}
				}
				break;
		}

		let target_name = this.pv.name;
		if (this.pv.change_name) {
			target_name = this.pv.new_name;
			if (!core_group.has_attrib(target_name)) {
				core_group.add_numeric_vertex_attrib(target_name, attrib_size, 0);
			}
		}

		normalized_values.forEach((normalized_value, i) => {
			const point = points[i];
			point.set_attrib_value(target_name, normalized_value);
		});
	}
}

// TODO: they should be saved as a detail, not per object
// _save_min_max: (group, min, max)->
// 	group.traverse (object)=>
// 		object_wrapper = new Core.Geometry.Object(object)
// 		object_wrapper.add_attribute("#{@_param_name}_min", min)
// 		object_wrapper.add_attribute("#{@_param_name}_max", max)
