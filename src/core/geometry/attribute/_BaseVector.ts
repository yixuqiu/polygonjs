import {Object3D, Vector2, Vector3, Vector4} from 'three';
import {CoreObject} from '../Object';
import {AttributeCallbackQueue} from './AttributeCallbackQueue';
import {AttributeProxy, AttributeReactiveCallback} from './_Base';

type Vector4Prop = 'x' | 'y' | 'z' | 'w';
type AttribValueVector = Vector2 | Vector3 | Vector4;

export function _makeAttribReactiveBaseVector<V extends AttribValueVector>(
	object: Object3D,
	attribName: string,
	props: Array<Vector4Prop>,
	callback: AttributeReactiveCallback<V>
) {
	const attributesDict = CoreObject.attributesDictionary(object);
	const attributesPreviousValuesDict = CoreObject.attributesPreviousValuesDictionary(object);

	const proxy: AttributeProxy<V> = {
		value: (attributesDict[attribName] as V).clone() as V,
		previousValue: attributesDict[attribName] as V,
		// callbackRanAtFrame: 0,
	};

	const currentVec = attributesDict[attribName] as V;

	for (let prop of props) {
		Object.defineProperties(currentVec, {
			[prop]: {
				get: function () {
					return proxy.value[prop as keyof V];
				},
				set: function (componentVal: number) {
					if (componentVal != (proxy.value as any)[prop]) {
						proxy.previousValue = proxy.value;
						(proxy.value as any)[prop] = componentVal;
						const c = function () {
							callback(proxy);
						};
						AttributeCallbackQueue.runOrEnqueue(c);
					}
					return componentVal;
				},
				configurable: true,
			},
		});
	}
	Object.defineProperties(attributesPreviousValuesDict, {
		[attribName]: {
			get: function () {
				return proxy.previousValue;
			},
			configurable: true,
		},
	});
}