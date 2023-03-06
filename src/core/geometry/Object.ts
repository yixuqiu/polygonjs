import {AttribValue, NumericAttribValue, PolyDictionary} from '../../types/GlobalTypes';
import {
	Bone,
	SkinnedMesh,
	Material,
	AnimationClip,
	BufferGeometry,
	Color,
	Mesh,
	Box3,
	Sphere,
	Vector3,
	Object3D,
	Matrix4,
} from 'three';
import {CoreGeometry} from './Geometry';
import {GroupString, Object3DWithGeometry} from './Group';
import {CoreAttribute} from './Attribute';
import {dataFromConstructor} from './Constant';
import {CorePoint} from './Point';
import {CoreMaterial, MaterialWithCustomMaterials} from './Material';
import {CoreString} from '../String';
import {ObjectUtils} from '../ObjectUtils';
import {ArrayUtils} from '../ArrayUtils';
import {ThreeMeshBVHHelper} from '../../engine/operations/sop/utils/Bvh/ThreeMeshBVHHelper';

import {CoreObjectType} from './ObjectContent';
import {BaseCoreObject} from './_BaseObject';
import {TransformTargetType} from '../Transform';
import {TypeAssert} from '../../engine/poly/Assert';
import {applyTransformWithSpaceToObject, ObjectTransformSpace} from '../TransformSpace';
// import {computeBoundingBoxFromObject3D} from './BoundingBox';
// import {setSphereFromObject} from './BoundingSphere';

interface Object3DWithAnimations extends Object3D {
	animations: AnimationClip[];
}
interface MaterialWithColor extends Material {
	color: Color;
}
const COMPUTE_PRECISE_BOUNDS = true;
const SPHERE_EMPTY = new Sphere(new Vector3(0, 0, 0), 0);

// interface SkinnedMeshWithisSkinnedMesh extends SkinnedMesh {
// 	readonly isSkinnedMesh: boolean;
// }

export type AttributeDictionary = PolyDictionary<AttribValue>;

// export type CoreObjectContent = Object3D|CadObject

// type ThreejsCoreObjectContent =  ObjectContent<BufferGeometry>
export class CoreObject extends BaseCoreObject<CoreObjectType.THREEJS> {
	constructor(protected override _object: Object3D, index: number) {
		super(_object, index);
	}
	override humanType(): string {
		return dataFromConstructor(this._object.constructor).humanName;
	}
	override object() {
		return this._object;
	}
	override geometry(): BufferGeometry | null {
		return (this._object as Mesh).geometry as BufferGeometry | null;
	}
	// object():Object3D{
	// 	return this._object
	// }
	coreGeometry(): CoreGeometry | null {
		const geo = this.geometry();
		if (geo) {
			return new CoreGeometry(geo);
		} else {
			return null;
		}
		// const geo = this.geometry()
		// if (geo) {
		// 	return new CoreGeometry(geo)
		// } else {
		// 	return null
		// }
	}
	points() {
		return this.coreGeometry()?.points() || [];
	}
	pointsFromGroup(group: GroupString): CorePoint[] {
		if (group) {
			const indices = CoreString.indices(group);
			if (indices) {
				const points = this.points();
				return ArrayUtils.compact(indices.map((i) => points[i]));
			} else {
				return [];
			}
		} else {
			return this.points();
		}
	}
	addNumericVertexAttrib(name: string, size: number, defaultValue: NumericAttribValue) {
		if (defaultValue == null) {
			defaultValue = CoreAttribute.default_value(size);
		}
		this.coreGeometry()?.addNumericAttrib(name, size, defaultValue);
	}
	static override position(object: Object3D, target: Vector3) {
		target.copy(object.position);
	}
	override boundingBox(target: Box3) {
		target.setFromObject(this._object, COMPUTE_PRECISE_BOUNDS);
	}
	override boundingSphere(target: Sphere) {
		const geometry = (this._object as Mesh).geometry;
		if (!geometry) {
			target.copy(SPHERE_EMPTY);
			return;
		}
		geometry.computeBoundingSphere();
		const computedSphere = geometry.boundingSphere;
		if (!computedSphere) {
			target.copy(SPHERE_EMPTY);
			return;
		}
		target.copy(computedSphere);
		// setSphereFromObject(target, this._object, COMPUTE_PRECISE_BOUNDS);
		// console.log('boundingSphere', target.radius);
	}

	computeVertexNormals() {
		this.coreGeometry()?.computeVertexNormals();
	}
	static override clone(srcObject: Object3D) {
		const clonedObject = srcObject.clone();
		var sourceLookup = new Map<Object3D, Object3D>();
		var cloneLookup = new Map<Object3D, Object3D>();
		CoreObject.parallelTraverse(srcObject, clonedObject, function (sourceNode: Object3D, clonedNode: Object3D) {
			sourceLookup.set(clonedNode, sourceNode);
			cloneLookup.set(sourceNode, clonedNode);
		});
		clonedObject.traverse(function (node) {
			const srcNode = sourceLookup.get(node) as SkinnedMesh | undefined;
			const meshNode = node as Mesh;

			if (meshNode.geometry && srcNode && srcNode.geometry) {
				const srcNodeGeometry = srcNode.geometry as BufferGeometry;
				meshNode.geometry = CoreGeometry.clone(srcNodeGeometry);
				ThreeMeshBVHHelper.copyBVH(meshNode, srcNode);
				// const mesh_node_geometry = meshNode.geometry as BufferGeometry;
				// if (mesh_node_geometry.userData) {
				// 	mesh_node_geometry.userData = ObjectUtils.cloneDeep(srcNodeGeometry.userData);
				// }
			}
			if (meshNode.material) {
				// no need to assign the material here
				// as this should already be done in the .clone() method.
				// Otherwise, when this is assigned here, some objects that rely on their own mat
				// such as sop/Reflector stop working when cloned
				// mesh_node.material = src_node.material;
				CoreMaterial.applyCustomMaterials(node, meshNode.material as MaterialWithCustomMaterials);

				// prevents crashes for linesegments with shader material such as the line dashed instance
				// TODO: test
				const material_with_color = meshNode.material as MaterialWithColor;
				if (material_with_color.color == null) {
					material_with_color.color = new Color(1, 1, 1);
				}
			}
			if (srcNode) {
				if (srcNode.userData) {
					node.userData = ObjectUtils.cloneDeep(srcNode.userData);
				}
				const src_node_with_animations = (<unknown>srcNode) as Object3DWithAnimations;
				if (src_node_with_animations.animations) {
					(node as Object3DWithAnimations).animations = src_node_with_animations.animations.map((animation) =>
						animation.clone()
					);
				}
				const skinned_node = node as SkinnedMesh;
				if (skinned_node.isSkinnedMesh) {
					var clonedMesh = skinned_node;
					var sourceMesh = srcNode;
					var sourceBones = sourceMesh.skeleton.bones;

					clonedMesh.skeleton = sourceMesh.skeleton.clone();
					clonedMesh.bindMatrix.copy(sourceMesh.bindMatrix);

					const new_bones = sourceBones.map(function (bone) {
						return cloneLookup.get(bone);
					}) as Bone[];

					clonedMesh.skeleton.bones = new_bones;

					clonedMesh.bind(clonedMesh.skeleton, clonedMesh.bindMatrix);
				}
			}
		});

		return clonedObject;
	}
	static parallelTraverse(a: Object3D, b: Object3D, callback: (a: Object3D, b: Object3D) => void) {
		callback(a, b);
		for (var i = 0; i < a.children.length; i++) {
			const childA = a.children[i];
			const childB = b.children[i];
			if (childA && childB) {
				this.parallelTraverse(childA, childB, callback);
			}
		}
	}
	static override applyMatrix(
		object: Object3D,
		matrix: Matrix4,
		transformTargetType: TransformTargetType,
		transformSpace: ObjectTransformSpace
	) {
		switch (transformTargetType) {
			case TransformTargetType.OBJECT: {
				applyTransformWithSpaceToObject(object, matrix, transformSpace);
				// this._applyMatrixToObject(object, matrix);
				return;
			}
			case TransformTargetType.GEOMETRY: {
				const geometry = (object as Object3DWithGeometry).geometry;
				if (geometry) {
					geometry.applyMatrix4(matrix);
				}
				return;
			}
		}
		TypeAssert.unreachable(transformTargetType);
	}
}
