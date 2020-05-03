import { BaseNodeType } from '../../_Base';
import { NodeContext } from '../../../poly/NodeContext';
import { CoreNodeSelection } from '../../../../core/NodeSelection';
export declare class HierarchyChildrenController {
    protected node: BaseNodeType;
    private _context;
    private _children;
    private _children_by_type;
    private _children_and_grandchildren_by_context;
    private _is_dependent_on_children;
    private _children_node;
    private _selection;
    get selection(): CoreNodeSelection;
    constructor(node: BaseNodeType, _context: NodeContext);
    get context(): NodeContext;
    init(dependent?: boolean): void;
    set_child_name(node: BaseNodeType, new_name: string): void;
    node_context_signature(): string;
    available_children_classes(): Dictionary<typeof import("../../_Base").BaseNodeClass>;
    is_valid_child_type(node_type: string): boolean;
    create_node(node_type: string): BaseNodeType;
    add_node(child_node: BaseNodeType): BaseNodeType;
    remove_node(child_node: BaseNodeType): void;
    _add_to_nodes_by_type(node: BaseNodeType): void;
    _remove_from_nodes_by_type(node: BaseNodeType): void;
    add_to_children_and_grandchildren_by_context(node: BaseNodeType): void;
    remove_from_children_and_grandchildren_by_context(node: BaseNodeType): void;
    nodes_by_type(type: string): BaseNodeType[];
    child_by_name(name: string): BaseNodeType;
    has_children_and_grandchildren_with_context(context: NodeContext): boolean;
    children(): BaseNodeType[];
    children_names(): string[];
    traverse_children(callback: (arg0: BaseNodeType) => void): void;
}
