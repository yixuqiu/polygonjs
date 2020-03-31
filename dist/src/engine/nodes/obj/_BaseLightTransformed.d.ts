import { TypedLightObjNode } from './_BaseLight';
import { Light } from 'three/src/lights/Light';
import { NodeParamsConfig } from '../utils/params/ParamsConfig';
import { TransformController } from './utils/TransformController';
import { FlagsControllerD } from '../utils/FlagsController';
declare const TransformedObjParamConfig_base: {
    new (...args: any[]): {
        transform: import("../utils/params/ParamsConfig").ParamTemplate<import("../../poly/ParamType").ParamType.FOLDER>;
        t: import("../utils/params/ParamsConfig").ParamTemplate<import("../../poly/ParamType").ParamType.VECTOR3>;
        r: import("../utils/params/ParamsConfig").ParamTemplate<import("../../poly/ParamType").ParamType.VECTOR3>;
        s: import("../utils/params/ParamsConfig").ParamTemplate<import("../../poly/ParamType").ParamType.VECTOR3>;
        scale: import("../utils/params/ParamsConfig").ParamTemplate<import("../../poly/ParamType").ParamType.FLOAT>;
    };
} & typeof NodeParamsConfig;
declare class TransformedObjParamConfig extends TransformedObjParamConfig_base {
}
export declare abstract class BaseLightTransformedObjNode<L extends Light, K extends TransformedObjParamConfig> extends TypedLightObjNode<L, K> {
    readonly flags: FlagsControllerD;
    readonly transform_controller: TransformController;
    initialize_base_node(): void;
    cook(): void;
}
export {};
