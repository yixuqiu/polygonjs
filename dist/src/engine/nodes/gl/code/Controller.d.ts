import { BaseNodeType, TypedNode } from '../../_Base';
import { BaseGlShaderAssembler } from './assemblers/_Base';
import { GlobalsBaseController } from './globals/_Base';
import { OutputGlNode } from '../Output';
import { GlobalsGlNode } from '../Globals';
import { GlNodeChildrenMap } from '../../../poly/registers/Gl';
import { BaseGlNodeType } from '../_Base';
export declare class AssemblerControllerNode extends TypedNode<any, BaseNodeType, any> {
    create_node<K extends keyof GlNodeChildrenMap>(type: K): GlNodeChildrenMap[K];
    children(): BaseGlNodeType[];
    nodes_by_type<K extends keyof GlNodeChildrenMap>(type: K): GlNodeChildrenMap[K][];
    assembler_controller: GlAssemblerController<BaseGlShaderAssembler>;
}
declare type BaseGlShaderAssemblerConstructor<A extends BaseGlShaderAssembler> = new (...args: any[]) => A;
export declare class GlAssemblerController<A extends BaseGlShaderAssembler> {
    private node;
    protected _assembler: A;
    private _globals_handler;
    private _compile_required;
    private _deleted_params_data;
    constructor(node: AssemblerControllerNode, assembler_class: BaseGlShaderAssemblerConstructor<A>);
    set_assembler_globals_handler(globals_handler: GlobalsBaseController): void;
    get assembler(): A;
    get globals_handler(): GlobalsBaseController | undefined;
    add_output_params(output_child: OutputGlNode): void;
    add_globals_params(globals_node: GlobalsGlNode): void;
    allow_attribute_exports(): boolean;
    on_create(): void;
    set_compilation_required(new_state?: boolean): void;
    set_compilation_required_and_dirty(trigger_node?: BaseGlNodeType): void;
    compile_required(): boolean;
    post_compile(): Promise<void>;
    assign_uniform_values(): Promise<void>;
    create_spare_parameters(): void;
}
export {};
