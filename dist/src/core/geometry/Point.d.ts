import { Vector3 } from 'three/src/math/Vector3';
import { BufferGeometry } from 'three/src/core/BufferGeometry';
import { CoreGeometry } from './Geometry';
import { CoreEntity } from './Entity';
export declare class CorePoint extends CoreEntity {
    private _core_geometry;
    _geometry: BufferGeometry;
    _position: Vector3 | undefined;
    _normal: Vector3 | undefined;
    constructor(_core_geometry: CoreGeometry, index: number);
    geometry_wrapper(): CoreGeometry;
    geometry(): BufferGeometry;
    attrib_size(name: string): number;
    has_attrib(name: string): boolean;
    attrib_value(name: string): any;
    attrib_value_index(name: string): number;
    position(): Vector3;
    set_position(new_position: Vector3): void;
    normal(): Vector3;
    set_normal(new_normal: Vector3): void;
    set_attrib_value(name: string, value: NumericAttribValue | string): void;
    set_attrib_value_vector3(name: string, value: Vector3): void;
    set_attrib_index(name: string, new_value_index: number): number;
}
