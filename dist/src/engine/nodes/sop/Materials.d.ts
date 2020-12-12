import { ParamLessBaseNetworkSopNode } from './_Base';
import { NodeContext, NetworkNodeType } from '../../poly/NodeContext';
import { MatNodeChildrenMap } from '../../poly/registers/nodes/Mat';
import { BaseMatNodeType } from '../mat/_Base';
import { ParamsInitData } from '../utils/io/IOController';
export declare class MaterialsSopNode extends ParamLessBaseNetworkSopNode {
    static type(): NetworkNodeType;
    protected _children_controller_context: NodeContext;
    create_node<K extends keyof MatNodeChildrenMap>(type: K, params_init_value_overrides?: ParamsInitData): MatNodeChildrenMap[K];
    createNode<K extends valueof<MatNodeChildrenMap>>(node_class: Constructor<K>, params_init_value_overrides?: ParamsInitData): K;
    children(): BaseMatNodeType[];
    nodes_by_type<K extends keyof MatNodeChildrenMap>(type: K): MatNodeChildrenMap[K][];
}