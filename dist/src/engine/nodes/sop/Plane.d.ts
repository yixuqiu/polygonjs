import { Vector2 } from 'three/src/math/Vector2';
import { PlaneBufferGeometry } from 'three/src/geometries/PlaneGeometry';
import { TypedSopNode } from './_Base';
import { CoreGroup } from '../../../core/geometry/Group';
import { NodeParamsConfig } from '../utils/params/ParamsConfig';
declare class PlaneSopParamsConfig extends NodeParamsConfig {
    size: import("../utils/params/ParamsConfig").ParamTemplate<import("../../poly/ParamType").ParamType.VECTOR2>;
    use_segments_count: import("../utils/params/ParamsConfig").ParamTemplate<import("../../poly/ParamType").ParamType.BOOLEAN>;
    step_size: import("../utils/params/ParamsConfig").ParamTemplate<import("../../poly/ParamType").ParamType.FLOAT>;
    segments: import("../utils/params/ParamsConfig").ParamTemplate<import("../../poly/ParamType").ParamType.VECTOR2>;
    direction: import("../utils/params/ParamsConfig").ParamTemplate<import("../../poly/ParamType").ParamType.VECTOR3>;
    center: import("../utils/params/ParamsConfig").ParamTemplate<import("../../poly/ParamType").ParamType.VECTOR3>;
}
export declare class PlaneSopNode extends TypedSopNode<PlaneSopParamsConfig> {
    params_config: PlaneSopParamsConfig;
    static type(): string;
    private _core_transform;
    static displayed_input_names(): string[];
    initialize_node(): void;
    cook(input_contents: CoreGroup[]): void;
    _cook_without_input(): void;
    _cook_with_input(core_group: CoreGroup): void;
    _create_plane(size: Vector2): PlaneBufferGeometry;
}
export {};
