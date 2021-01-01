import {BaseSopOperation} from './_Base';
import {DefaultOperationParams} from '../_Base';
import {CoreGroup} from '../../../core/geometry/Group';
import {Vector3} from 'three/src/math/Vector3';
import {ObjectType} from '../../../core/geometry/Constant';
import {Object3D} from 'three/src/core/Object3D';
import {BufferGeometry} from 'three/src/core/BufferGeometry';
import {BufferAttribute, Float32BufferAttribute} from 'three/src/core/BufferAttribute';
import {CorePoint} from '../../geometry/Point';
interface AddSopParams extends DefaultOperationParams {
	// create point
	createPoint: boolean;
	pointsCount: number;
	position: Vector3;
	// connect input points
	connectInputPoints: boolean;
	// open: boolean; // creating a polygon when this is closed still needs work
	connectToLastPoint: boolean;
}

export class AddSopOperation extends BaseSopOperation {
	static readonly DEFAULT_PARAMS: AddSopParams = {
		createPoint: true,
		pointsCount: 1,
		position: new Vector3(0, 0, 0),
		connectInputPoints: false,
		connectToLastPoint: false,
	};
	static type(): Readonly<'add'> {
		return 'add';
	}

	cook(input_contents: CoreGroup[], params: AddSopParams) {
		const objects: Object3D[] = [];
		this._create_point(objects, params);
		this._create_polygon(input_contents[0], objects, params);

		return this.create_core_group_from_objects(objects);
	}
	private _create_point(objects: Object3D[], params: AddSopParams) {
		if (!params.createPoint) {
			return;
		}
		const geometry = new BufferGeometry();
		const positions: number[] = [];
		for (let i = 0; i < params.pointsCount; i++) {
			params.position.toArray(positions, i * 3);
		}
		geometry.setAttribute('position', new BufferAttribute(new Float32Array(positions), 3));
		const object = this.create_object(geometry, ObjectType.POINTS);

		if (objects) {
			objects.push(object);
		}
	}

	private _create_polygon(core_group: CoreGroup, objects: Object3D[], params: AddSopParams) {
		if (!params.connectInputPoints) {
			return;
		}
		const points = core_group.points();
		if (points.length > 0) {
			// const is_polygon_closed = !params.open && points.length >= 3;
			// if (is_polygon_closed) {
			// 	this._create_polygon_closed(core_group, objects);
			// } else {
			this._create_polygon_open(core_group, objects, params);
			// }
		}
	}

	// private _create_polygon_closed(core_group: CoreGroup, objects: Object3D[]) {
	// 	const points = core_group.points();

	// 	const geometry = CoreGeometryUtilShape.geometry_from_points(points.map((p) => p.position()));
	// 	const object = this.create_object(geometry, ObjectType.MESH);
	// 	objects.push(object);
	// }

	private _create_polygon_open(core_group: CoreGroup, objects: Object3D[], params: AddSopParams) {
		const points = core_group.points();

		let positions: number[] = [];
		const indices: number[] = [];
		let point: CorePoint;
		for (let i = 0; i < points.length; i++) {
			point = points[i];
			point.position().toArray(positions, i * 3);
			// positions.push(point.position().toArray());

			if (i > 0) {
				indices.push(i - 1);
				indices.push(i);
			}
		}

		if (points.length > 2 && params.connectToLastPoint) {
			points[0].position().toArray(positions, positions.length);
			const last_index = indices[indices.length - 1];
			indices.push(last_index);
			indices.push(0);
		}
		const geometry = new BufferGeometry();
		geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
		geometry.setIndex(indices);
		const object = this.create_object(geometry, ObjectType.LINE_SEGMENTS);
		objects.push(object);
	}
}
