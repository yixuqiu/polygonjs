// import {TypedNode} from '../_Base';
// import {NodeContext} from '../../poly/NodeContext';
// import {NodeParamsConfig} from '../utils/params/ParamsConfig';
// import {FlagsControllerDBO} from '../utils/FlagsController';
// // import {CadCoreGroup} from '../../../core/geometry/cad/CadCoreGroup';
// import {CadCoreObject} from '../../../core/geometry/cad/CadCoreObject';
// import {
// 	gp_Pnt2d,
// 	TopoDS_Vertex,
// 	TopoDS_Edge,
// 	TopoDS_Wire,
// 	TopoDS_Shell,
// 	TopoDS_Face,
// 	Geom2d_Curve,
// 	CadGeometryType,
// } from '../../../core/geometry/cad/CadCommon';
// import {CadObject} from '../../../core/geometry/cad/CadObject';

// const INPUT_GEOMETRY_NAME = 'input CAD geometry';
// const DEFAULT_INPUT_NAMES = [INPUT_GEOMETRY_NAME, INPUT_GEOMETRY_NAME, INPUT_GEOMETRY_NAME, INPUT_GEOMETRY_NAME];

// /**
//  *
//  *
//  * TypedCadNode is the base class for all nodes that process CAD. This inherits from [TypedNode](/docs/api/TypedNode).
//  *
//  */
// export class TypedCadNode<K extends NodeParamsConfig> extends TypedNode<NodeContext.CAD, K> {
// 	static override context(): NodeContext {
// 		return NodeContext.CAD;
// 	}
// 	public override readonly flags: FlagsControllerDBO = new FlagsControllerDBO(this);

// 	static override displayedInputNames(): string[] {
// 		return DEFAULT_INPUT_NAMES;
// 	}

// 	override initializeBaseNode() {
// 		this.flags.display.set(false);
// 		this.flags.display.onUpdate(() => {
// 			if (this.flags.display.active()) {
// 				const parent = this.parent();
// 				if (parent && parent.displayNodeController) {
// 					parent.displayNodeController.setDisplayNode(this);
// 				}
// 			}
// 		});
// 		this.io.outputs.setHasOneOutput();
// 		// this.io.inputs.initInputsClonedState(InputCloneMode.ALWAYS);
// 	}

// 	// setCadCoreGroup(csgCoreGgroup: CadCoreGroup) {
// 	// 	this._setContainer(csgCoreGgroup);
// 	// }

// 	setPoint2D(point: gp_Pnt2d) {
// 		this._setContainerObjects([new CadCoreObject(new CadObject(point, CadGeometryType.POINT_2D), 0)]);
// 	}
// 	setGeom2dCurve(curve: Geom2d_Curve) {
// 		this._setContainerObjects([new CadCoreObject(new CadObject(curve, CadGeometryType.CURVE_2D), 0)]);
// 	}
// 	// setGeomCurve(curve: Geom_Curve) {
// 	// 	this._setContainerObjects([new CadCoreObject(curve, CadObjectType.CURVE_3D)]);
// 	// }
// 	setVertex(vertex: TopoDS_Vertex) {
// 		this._setContainerObjects([new CadCoreObject(new CadObject(vertex), 0)]);
// 	}
// 	setEdge(edge: TopoDS_Edge) {
// 		this._setContainerObjects([new CadCoreObject(new CadObject(edge), 0)]);
// 	}
// 	setWire(wire: TopoDS_Wire) {
// 		this._setContainerObjects([new CadCoreObject(new CadObject(wire), 0)]);
// 	}
// 	setFace(face: TopoDS_Face) {
// 		this._setContainerObjects([new CadCoreObject(new CadObject(face), 0)]);
// 	}
// 	setShell(shell: TopoDS_Shell) {
// 		this._setContainerObjects([new CadCoreObject(new CadObject(shell), 0)]);
// 	}
// 	// setCadObject(object: CadObject) {
// 	// 	this._setContainerObjects([object]);
// 	// }
// 	setCadObjects(objects: CadCoreObject<CadGeometryType>[]) {
// 		this._setContainerObjects(objects);
// 	}
// 	// setCadCoreObjects(objects: CadObject[]) {
// 	// 	this._setContainerObjects(objects);
// 	// }
// 	private _setContainerObjects(objects: CadCoreObject<CadGeometryType>[]) {
// 		// const coreGroup = this.containerController.container().coreContent() || new CadCoreGroup();
// 		// coreGroup.setObjects(objects);
// 		// coreGroup.touch();
// 		// this._setContainer(coreGroup);
// 	}
// }

// export type BaseCadNodeType = TypedCadNode<NodeParamsConfig>;
// export class BaseCadNodeClass extends TypedCadNode<NodeParamsConfig> {}
