import {BaseSopOperation} from './_Base';
import {CoreGroup} from '../../../core/geometry/Group';
import {InputCloneMode} from '../../../engine/poly/InputCloneMode';
import {DefaultOperationParams} from '../../../core/operations/_Base';
import {TypedNodePathParamValue} from '../../../core/Walker';
import {CoreObject} from '../../../core/geometry/Object';
import {CameraAttribute} from '../../../core/camera/CoreCamera';
import {CameraSopNodeType} from '../../poly/NodeContext';
import {Object3D} from 'three';
import {BaseNodeType} from '../../nodes/_Base';

interface CameraControlsSopParams extends DefaultOperationParams {
	node: TypedNodePathParamValue;
}
interface UpdateObjectOptions {
	objects: Object3D[];
	params: CameraControlsSopParams;
	node: BaseNodeType;
	active: boolean;
}

export class CameraControlsSopOperation extends BaseSopOperation {
	static override readonly DEFAULT_PARAMS: CameraControlsSopParams = {
		node: new TypedNodePathParamValue(''),
	};
	static override readonly INPUT_CLONED_STATE = InputCloneMode.FROM_NODE;
	static override type(): Readonly<CameraSopNodeType.CONTROLS> {
		return CameraSopNodeType.CONTROLS;
	}
	override cook(inputCoreGroups: CoreGroup[], params: CameraControlsSopParams) {
		const objects = inputCoreGroups[0].objects();

		if (this._node) {
			CameraControlsSopOperation.updateObject({objects, params, node: this._node, active: true});
		}

		return this.createCoreGroupFromObjects(objects);
	}
	static updateObject(options: UpdateObjectOptions) {
		const {objects, params, node, active} = options;

		const relativeOrAbsolutePath = params.node.path();
		const foundNode = node.node(relativeOrAbsolutePath);
		if (foundNode && active) {
			// we need to give the absolute path, so that the creation of the viewer can find the node
			// without having to know which node set the path
			// Update: the absolute path on its own fails if some node in that path gets renamed.
			// Using the node id: this would fail if the target node was to be deleted and replaced.
			// Although that should really recook the camera
			const nodeId = foundNode.graphNodeId();
			for (let object of objects) {
				CoreObject.addAttribute(object, CameraAttribute.CONTROLS_NODE_ID, nodeId);
			}
		} else {
			for (let object of objects) {
				CoreObject.deleteAttribute(object, CameraAttribute.CONTROLS_NODE_ID);
			}
		}
	}
}
