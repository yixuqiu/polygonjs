//
//
// Data types
//
//

export enum ActorConnectionPointType {
	BOOLEAN = 'boolean',
	COLOR = 'color',
	FLOAT = 'float',
	INTEGER = 'integer',
	OBJECT_3D = 'Object3D',
	STRING = 'string',
	TRIGGER = 'trigger',
	VECTOR2 = 'Vector2',
	VECTOR3 = 'Vector3',
	VECTOR4 = 'Vector4',
}

//
//
// ALL GL Data types in an array
//
//
export const ACTOR_CONNECTION_POINT_TYPES: Array<ActorConnectionPointType> = [
	ActorConnectionPointType.BOOLEAN,
	ActorConnectionPointType.COLOR,
	ActorConnectionPointType.FLOAT,
	ActorConnectionPointType.INTEGER,
	ActorConnectionPointType.OBJECT_3D,
	ActorConnectionPointType.STRING,
	ActorConnectionPointType.TRIGGER,
	ActorConnectionPointType.VECTOR2,
	ActorConnectionPointType.VECTOR3,
	ActorConnectionPointType.VECTOR4,
];
export const PARAM_CONVERTIBLE_ACTOR_CONNECTION_POINT_TYPES: Array<ActorConnectionPointType> = [
	ActorConnectionPointType.BOOLEAN,
	ActorConnectionPointType.COLOR,
	ActorConnectionPointType.FLOAT,
	ActorConnectionPointType.INTEGER,
	// ActorConnectionPointType.OBJECT_3D,
	ActorConnectionPointType.STRING,
	// ActorConnectionPointType.TRIGGER,
	ActorConnectionPointType.VECTOR2,
	ActorConnectionPointType.VECTOR3,
	ActorConnectionPointType.VECTOR4,
];

//
//
// Map to convert from a GL Data type to a ParamType
//
//
type ConnectionPointTypeToParamTypeMapGeneric = {[key in ActorConnectionPointType]: ParamType};
export interface IConnectionPointTypeToParamTypeMap extends ConnectionPointTypeToParamTypeMapGeneric {
	[ActorConnectionPointType.BOOLEAN]: ParamType.BOOLEAN;
	[ActorConnectionPointType.COLOR]: ParamType.COLOR;
	[ActorConnectionPointType.FLOAT]: ParamType.FLOAT;
	[ActorConnectionPointType.INTEGER]: ParamType.INTEGER;
	[ActorConnectionPointType.OBJECT_3D]: ParamType.STRING; // to reconsider
	[ActorConnectionPointType.STRING]: ParamType.STRING;
	[ActorConnectionPointType.TRIGGER]: ParamType.BUTTON;
	[ActorConnectionPointType.VECTOR2]: ParamType.VECTOR2;
	[ActorConnectionPointType.VECTOR3]: ParamType.VECTOR3;
	[ActorConnectionPointType.VECTOR4]: ParamType.VECTOR4;
}
export const ActorConnectionPointTypeToParamTypeMap: IConnectionPointTypeToParamTypeMap = {
	[ActorConnectionPointType.BOOLEAN]: ParamType.BOOLEAN,
	[ActorConnectionPointType.COLOR]: ParamType.COLOR,
	[ActorConnectionPointType.FLOAT]: ParamType.FLOAT,
	[ActorConnectionPointType.INTEGER]: ParamType.INTEGER,
	[ActorConnectionPointType.OBJECT_3D]: ParamType.STRING, // to reconsider
	[ActorConnectionPointType.STRING]: ParamType.STRING,
	[ActorConnectionPointType.TRIGGER]: ParamType.BUTTON,
	[ActorConnectionPointType.VECTOR2]: ParamType.VECTOR2,
	[ActorConnectionPointType.VECTOR3]: ParamType.VECTOR3,
	[ActorConnectionPointType.VECTOR4]: ParamType.VECTOR4,
};

ActorConnectionPointTypeToParamTypeMap[ActorConnectionPointType.BOOLEAN];

//
//
// Map to convert from a ParamType to Actor Data type
//
//
type ActorParamTypeToConnectionPointTypeMapGeneric = {[key in ParamType]: ActorConnectionPointType | undefined};
export interface IActorParamTypeToConnectionPointTypeMap extends ActorParamTypeToConnectionPointTypeMapGeneric {
	[ParamType.BOOLEAN]: ActorConnectionPointType.BOOLEAN;
	[ParamType.COLOR]: ActorConnectionPointType.COLOR;
	[ParamType.FLOAT]: ActorConnectionPointType.FLOAT;
	[ParamType.INTEGER]: ActorConnectionPointType.INTEGER;
	[ParamType.FOLDER]: undefined;
	[ParamType.VECTOR2]: ActorConnectionPointType.VECTOR2;
	[ParamType.VECTOR3]: ActorConnectionPointType.VECTOR3;
	[ParamType.VECTOR4]: ActorConnectionPointType.VECTOR4;
	[ParamType.BUTTON]: undefined;
	[ParamType.NODE_PATH]: undefined;
	[ParamType.PARAM_PATH]: undefined;
	[ParamType.RAMP]: undefined;
	[ParamType.STRING]: undefined;
}
export const ActorParamTypeToConnectionPointTypeMap: IActorParamTypeToConnectionPointTypeMap = {
	[ParamType.BOOLEAN]: ActorConnectionPointType.BOOLEAN,
	[ParamType.COLOR]: ActorConnectionPointType.COLOR,
	[ParamType.FLOAT]: ActorConnectionPointType.FLOAT,
	[ParamType.INTEGER]: ActorConnectionPointType.INTEGER,
	[ParamType.FOLDER]: undefined,
	[ParamType.VECTOR2]: ActorConnectionPointType.VECTOR2,
	[ParamType.VECTOR3]: ActorConnectionPointType.VECTOR3,
	[ParamType.VECTOR4]: ActorConnectionPointType.VECTOR4,
	[ParamType.BUTTON]: undefined,
	// [ParamType.OPERATOR_PATH]: undefined,
	[ParamType.PARAM_PATH]: undefined,
	[ParamType.NODE_PATH]: undefined,
	[ParamType.RAMP]: undefined,
	[ParamType.STRING]: undefined,
};

//
//
// Map of Data type default values
//
//
export type ConnectionPointInitValueMapGeneric = {
	[key in ActorConnectionPointType]: ParamInitValuesTypeMap[IConnectionPointTypeToParamTypeMap[key]];
};
export const ActorConnectionPointInitValueMap: ConnectionPointInitValueMapGeneric = {
	[ActorConnectionPointType.BOOLEAN]: false,
	[ActorConnectionPointType.COLOR]: new Color(),
	[ActorConnectionPointType.FLOAT]: 0,
	[ActorConnectionPointType.INTEGER]: 0,
	[ActorConnectionPointType.OBJECT_3D]: '', // to reconsider
	[ActorConnectionPointType.STRING]: '',
	[ActorConnectionPointType.TRIGGER]: null,
	[ActorConnectionPointType.VECTOR2]: new Vector2(),
	[ActorConnectionPointType.VECTOR3]: new Vector3(),
	[ActorConnectionPointType.VECTOR4]: new Vector4(),
};

//
//
// Map of Data type component counts
//
//
export type ConnectionPointComponentsCountMapGeneric = {
	[key in ActorConnectionPointType]: number;
};
export const ActorConnectionPointComponentsCountMap: ConnectionPointComponentsCountMapGeneric = {
	[ActorConnectionPointType.BOOLEAN]: 1,
	[ActorConnectionPointType.COLOR]: 3,
	[ActorConnectionPointType.FLOAT]: 1,
	[ActorConnectionPointType.INTEGER]: 1,
	[ActorConnectionPointType.OBJECT_3D]: 1, // to reconsider
	[ActorConnectionPointType.STRING]: 1,
	[ActorConnectionPointType.TRIGGER]: 1,
	[ActorConnectionPointType.VECTOR2]: 2,
	[ActorConnectionPointType.VECTOR3]: 3,
	[ActorConnectionPointType.VECTOR4]: 4,
};

//
//
// Map of Actor Data type default values
//
//
import {Object3D} from 'three/src/core/Object3D';
import {Color} from 'three/src/math/Color';
import {Vector2} from 'three/src/math/Vector2';
import {Vector3} from 'three/src/math/Vector3';
import {Vector4} from 'three/src/math/Vector4';
import {CoreType} from '../../../../../core/Type';
export type ReturnValueTypeByActorConnectionPointType = {
	[ActorConnectionPointType.BOOLEAN]: boolean;
	[ActorConnectionPointType.COLOR]: Color;
	[ActorConnectionPointType.FLOAT]: number;
	[ActorConnectionPointType.INTEGER]: number;
	[ActorConnectionPointType.OBJECT_3D]: Object3D;
	[ActorConnectionPointType.STRING]: string;
	[ActorConnectionPointType.TRIGGER]: null;
	[ActorConnectionPointType.VECTOR2]: Vector2;
	[ActorConnectionPointType.VECTOR3]: Vector3;
	[ActorConnectionPointType.VECTOR4]: Vector4;
};

export interface ActorConnectionPointData<T extends ActorConnectionPointType> {
	name: string;
	type: T;
}
interface ActorConnectionPointOptions<T extends ActorConnectionPointType> {
	inNodeDefinition?: boolean;
	init_value?: ConnectionPointInitValueMapGeneric[T];
}

import {ParamInitValuesTypeMap} from '../../../../params/types/ParamInitValuesTypeMap';
import {ParamType} from '../../../../poly/ParamType';
import {BaseConnectionPoint} from './_Base';
export class ActorConnectionPoint<T extends ActorConnectionPointType> extends BaseConnectionPoint {
	protected override _json: ActorConnectionPointData<T> | undefined;
	protected override _init_value?: ConnectionPointInitValueMapGeneric[T];

	constructor(
		protected override _name: string,
		protected override _type: T,
		_options?: ActorConnectionPointOptions<T>
	) {
		super(_name, _type);

		if (_options) {
			this._inNodeDefinition = _options.inNodeDefinition == true;
			this._init_value = _options.init_value;
		}
		this._init_value = this._init_value || ActorConnectionPointInitValueMap[this._type];

		if (CoreType.isColor(this._init_value) || CoreType.isVector(this._init_value)) {
			this._init_value = this._init_value.clone() as ConnectionPointInitValueMapGeneric[T];
		}
	}
	override type() {
		return this._type;
	}
	get param_type(): IConnectionPointTypeToParamTypeMap[T] {
		return ActorConnectionPointTypeToParamTypeMap[this._type];
	}
	override get init_value() {
		return this._init_value;
	}
	override are_types_matched(srcType: string, destType: string): boolean {
		return srcType == destType;
	}

	override toJSON(): ActorConnectionPointData<T> {
		return (this._json = this._json || this._create_json());
	}
	protected override _create_json(): ActorConnectionPointData<T> {
		return {
			name: this._name,
			type: this._type,
		};
	}
}

export type BaseActorConnectionPoint = ActorConnectionPoint<ActorConnectionPointType>;
