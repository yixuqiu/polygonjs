import {Object3D, Vector3} from 'three';
import {getSoftBodyControllerNodeFromSolverObject} from '../nodes/sop/TetSoftBodySolver';
import {ObjectNamedFunction0, ObjectNamedFunction2, ObjectNamedFunction1, ObjectNamedFunction3} from './_Base';
import {
	softBodySolverStepSimulation as _softBodySolverStepSimulation,
	setSoftBodySolverGravity as _setSoftBodySolverGravity,
	softBodyConstraintCreate as _softBodyConstraintCreate,
	softBodyConstraintSetPosition as _softBodyConstraintSetPosition,
	softBodyConstraintDelete as _softBodyConstraintDelete,
} from '../../core/softBody/SoftBodySolver';
import {Ref} from '@vue/reactivity';

export class softBodySolverReset extends ObjectNamedFunction0 {
	static override type() {
		return 'softBodySolverReset';
	}
	func(object3D: Object3D): void {
		const softBodySolverNode = getSoftBodyControllerNodeFromSolverObject(object3D, this.scene);
		if (!softBodySolverNode) {
			// console.warn(`no ${SopType.PHYSICS_WORLD} node found`);
			return;
		}
		softBodySolverNode.setDirty();
	}
}

export class softBodySolverStepSimulation extends ObjectNamedFunction3<[number, number, number]> {
	static override type() {
		return 'softBodySolverStepSimulation';
	}
	func(object3D: Object3D, stepsCount: number, edgeCompliance: number, volumeCompliance: number): void {
		_softBodySolverStepSimulation(object3D, stepsCount, edgeCompliance, volumeCompliance);
	}
}

export class setSoftBodySolverGravity extends ObjectNamedFunction2<[Vector3, number]> {
	static override type() {
		return 'setSoftBodySolverGravity';
	}
	func(object3D: Object3D, gravity: Vector3, lerp: number): void {
		_setSoftBodySolverGravity(object3D, gravity, lerp);
	}
}
export class softBodyConstraintCreate extends ObjectNamedFunction2<[number, Ref<number>]> {
	static override type() {
		return 'softBodyConstraintCreate';
	}
	func(object3D: Object3D, index: number, constraintIdRef: Ref<number>): void {
		const constraint = _softBodyConstraintCreate(object3D, index);
		if (constraint) {
			constraintIdRef.value = constraint.id;
		}
	}
}
export class softBodyConstraintSetPosition extends ObjectNamedFunction3<[number, Vector3, number]> {
	static override type() {
		return 'softBodyConstraintSetPosition';
	}
	func(object3D: Object3D, constraintId: number, position: Vector3, lerp: number): void {
		const delta = this.scene.timeController.delta();
		_softBodyConstraintSetPosition(object3D, constraintId, position, lerp, delta);
	}
}
export class softBodyConstraintDelete extends ObjectNamedFunction1<[number]> {
	static override type() {
		return 'softBodyConstraintDelete';
	}
	func(object3D: Object3D, constraintId: number): void {
		_softBodyConstraintDelete(object3D, constraintId);
	}
}
