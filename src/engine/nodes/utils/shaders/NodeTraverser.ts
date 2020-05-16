import lodash_compact from 'lodash/compact';
import lodash_uniq from 'lodash/uniq';
import {CoreGraph} from '../../../../core/graph/CoreGraph';
import {MapUtils} from '../../../../core/MapUtils';
import {ShaderName} from './ShaderName';
import {TypedNode} from '../../_Base';
import {NodeContext, NetworkChildNodeType} from '../../../poly/NodeContext';
import {NodeTypeMap} from '../../../containers/utils/ContainerMap';

type NumberByString = Map<string, number>;
type BooleanByString = Map<string, boolean>;
type BooleanByStringByShaderName = Map<ShaderName, BooleanByString>;
type StringArrayByString = Map<string, string[]>;
type InputNamesByShaderNameMethod<NC extends NodeContext> = (
	root_node: NodeTypeMap[NC],
	shader_name: ShaderName
) => string[];
export class TypedNodeTraverser<NC extends NodeContext> {
	private _leaves_graph_id: BooleanByStringByShaderName = new Map();
	private _graph_ids_by_shader_name: BooleanByStringByShaderName = new Map();
	private _outputs_by_graph_id: StringArrayByString = new Map();
	private _depth_by_graph_id: NumberByString = new Map();
	private _graph_id_by_depth: Map<number, string[]> = new Map();
	private _graph: CoreGraph;
	private _shader_name!: ShaderName;

	constructor(
		private _gl_parent_node: TypedNode<NC, any>,
		private _shader_names: ShaderName[],
		private _input_names_for_shader_name_method: InputNamesByShaderNameMethod<NC>
	) {
		this._graph = this._gl_parent_node.scene.graph;
	}

	private reset() {
		this._leaves_graph_id.clear();
		this._graph_ids_by_shader_name.clear();
		this._outputs_by_graph_id.clear();
		this._depth_by_graph_id.clear();
		this._graph_id_by_depth.clear();

		this._shader_names.forEach((shader_name) => {
			this._graph_ids_by_shader_name.set(shader_name, new Map());
		});
	}

	shader_names() {
		return this._shader_names;
	}
	input_names_for_shader_name(root_node: NodeTypeMap[NC], shader_name: ShaderName) {
		return this._input_names_for_shader_name_method(root_node, shader_name);
	}

	traverse(root_nodes: NodeTypeMap[NC][]) {
		this.reset();

		for (let shader_name of this.shader_names()) {
			this._leaves_graph_id.set(shader_name, new Map());
		}

		for (let shader_name of this.shader_names()) {
			this._shader_name = shader_name;
			for (let root_node of root_nodes) {
				this.find_leaves_from_root_node(root_node);
				this.set_nodes_depth();
			}
		}

		// graph_ids.forEach((graph_id) => {
		this._depth_by_graph_id.forEach((depth: number, graph_id: string) => {
			if (depth != null) {
				// this._graph_id_by_depth.set(depth, this._graph_id_by_depth.get(depth) || []);
				// this._graph_id_by_depth.get(depth)?.push(graph_id);
				MapUtils.push_on_array_at_entry(this._graph_id_by_depth, depth, graph_id);
			}
		});
	}

	leaves_from_nodes(nodes: NodeTypeMap[NC][]) {
		this._shader_name = ShaderName.LEAVES_FROM_NODES_SHADER;
		this._graph_ids_by_shader_name.set(this._shader_name, new Map());
		this._leaves_graph_id.set(this._shader_name, new Map());
		for (let node of nodes) {
			this.find_leaves(node);
		}

		const node_ids: string[] = [];
		this._leaves_graph_id.get(this._shader_name)?.forEach((value: boolean, key: string) => {
			node_ids.push(key);
		});
		return this._graph.nodes_from_ids(node_ids) as NodeTypeMap[NC][];
	}

	nodes_for_shader_name(shader_name: ShaderName) {
		const depths: number[] = [];
		this._graph_id_by_depth.forEach((value: string[], key: number) => {
			depths.push(key);
		});
		depths.sort((a, b) => a - b);
		const nodes: NodeTypeMap[NC][] = [];
		depths.forEach((depth) => {
			const graph_ids_for_depth = this._graph_id_by_depth.get(depth);
			if (graph_ids_for_depth) {
				graph_ids_for_depth.forEach((graph_id: string) => {
					const is_present = this._graph_ids_by_shader_name.get(shader_name)?.get(graph_id);
					if (is_present) {
						const node = this._graph.node_from_id(graph_id) as NodeTypeMap[NC];
						nodes.push(node);
					}
				});
			}
		});

		return nodes;
	}
	sorted_nodes() {
		const depths: number[] = [];
		this._graph_id_by_depth.forEach((ids: string[], depth: number) => {
			depths.push(depth);
		});
		depths.sort((a, b) => a - b);
		const nodes: NodeTypeMap[NC][] = [];
		depths.forEach((depth) => {
			const graph_ids_for_depth = this._graph_id_by_depth.get(depth);
			if (graph_ids_for_depth) {
				for (let graph_id of graph_ids_for_depth) {
					const node = this._graph.node_from_id(graph_id) as NodeTypeMap[NC];
					if (node) {
						nodes.push(node);
					}
				}
			}
		});

		return nodes;
	}
	private find_leaves_from_root_node(root_node: NodeTypeMap[NC]) {
		// if(this._shader_name == ShaderName.VERTEX){
		// this._leaves_graph_id[this._shader_name] = {}
		this._graph_ids_by_shader_name.get(this._shader_name)?.set(root_node.graph_node_id, true);

		const input_names = this.input_names_for_shader_name(root_node, this._shader_name);
		if (input_names) {
			for (let input_name of input_names) {
				// if (root_node.type == 'output') {
				const input = root_node.io.inputs.named_input(input_name) as NodeTypeMap[NC];
				if (input) {
					MapUtils.push_on_array_at_entry(
						this._outputs_by_graph_id,
						input.graph_node_id,
						root_node.graph_node_id
					);
					this.find_leaves(input);
				}
				// TODO: typescript - GL - check that I dont need to consider the Attrib as a special case
				// } else {
				// 	// if attribute
				// 	const input = root_node.io.inputs.connected_named_input();
				// 	if (input) {
				// 		this.find_leaves(input);
				// 	}
				// }
			}
		}
		// const position_input = this._output.named_input('position')
		// const normal_input = this._output.named_input('normal')
		// const instancePosition_input = this._output.named_input('instancePosition')
		// if(position_input){ this.find_leaves(position_input) }
		// if(normal_input){ this.find_leaves(normal_input) }
		// if(instancePosition_input){ this.find_leaves(instancePosition_input) }
		// }
		// if(this._shader_name == ShaderName.FRAGMENT){
		// 	this._leaves_graph_id[this._shader_name] = {}
		// 	FRAGMENT_INPUT_NAMES.forEach(name=>{
		// 		const input = this._output.named_input(name)
		// 		if(input){
		// 			this.find_leaves(input)
		// 		}
		// 	})
		// 	// const color_input = this._output.named_input('color')
		// 	// const alpha_input = this._output.named_input('alpha')
		// 	// if(color_input){ this.find_leaves(color_input) }
		// 	// if(alpha_input){ this.find_leaves(alpha_input) }
		// }

		this._outputs_by_graph_id.forEach((outputs: string[], graph_id: string) => {
			this._outputs_by_graph_id.set(graph_id, lodash_uniq(outputs));
		});
	}

	private find_leaves(node: NodeTypeMap[NC]) {
		this._graph_ids_by_shader_name.get(this._shader_name)?.set(node.graph_node_id, true);

		// const inputs = node.io.inputs.inputs() as (NodeTypeMap[NC] | null)[];
		const inputs = this._find_inputs_or_children(node) as NodeTypeMap[NC][];
		const compact_inputs: NodeTypeMap[NC][] = lodash_compact(inputs);
		const input_graph_ids = lodash_uniq(compact_inputs.map((n) => n.graph_node_id));
		const unique_inputs = input_graph_ids.map((graph_id) =>
			this._graph.node_from_id(graph_id)
		) as NodeTypeMap[NC][];
		if (unique_inputs.length > 0) {
			for (let input of unique_inputs) {
				MapUtils.push_on_array_at_entry(this._outputs_by_graph_id, input.graph_node_id, node.graph_node_id);

				this.find_leaves(input);
			}
		} else {
			this._leaves_graph_id.get(this._shader_name)!.set(node.graph_node_id, true);
		}
	}

	private _find_inputs_or_children(node: NodeTypeMap[NC]) {
		// return node.io.inputs.inputs();
		if (node.type == NetworkChildNodeType.INPUT) {
			return node.parent?.io.inputs.inputs() || [];
		} else {
			if (node.children_allowed()) {
				const output_node = node.children_controller?.output_node();
				return [output_node];
			} else {
				return node.io.inputs.inputs();
			}
		}
	}

	private set_nodes_depth() {
		this._leaves_graph_id.forEach((booleans_by_graph_id, shader_name) => {
			booleans_by_graph_id.forEach((boolean, graph_id) => {
				this.set_node_depth(graph_id);
			});
		});
		// const leave_ids = Object.keys(this._leaves_graph_id[this._shader_name]);
		// leave_ids.forEach((graph_id) => {
		// 	this.set_node_depth(graph_id);
		// });
	}

	private set_node_depth(graph_id: string, depth: number = 0) {
		const current_depth = this._depth_by_graph_id.get(graph_id);
		if (current_depth != null) {
			this._depth_by_graph_id.set(graph_id, Math.max(current_depth, depth));
		} else {
			this._depth_by_graph_id.set(graph_id, depth);
		}

		// const node = this._graph.node_from_id(graph_id);

		const output_ids = this._outputs_by_graph_id.get(graph_id);
		if (output_ids) {
			output_ids.forEach((output_id) => {
				this.set_node_depth(output_id, depth + 1);
			});
		}
	}
}
