import {BaseNodeClass} from '../../../nodes/_Base';
import {Poly} from '../../../Poly';

type BaseNodeConstructor = typeof BaseNodeClass;

export class CamerasRegister {
	private _camera_types: string[] = [];

	constructor(poly: Poly) {}

	register(node: BaseNodeConstructor) {
		const node_type = node.type();
		if (!this._camera_types.includes(node_type)) {
			this._camera_types.push(node_type);
		}
	}
	registeredTypes() {
		return this._camera_types;
	}
}
