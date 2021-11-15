// for dynamic imports, use
// https://wanago.io/2018/08/20/webpack-4-course-part-eight-dynamic-imports-with-prefetch-and-preload/
// with webpackExclude to not bundle files like _Base.ts or what is under utils/
// with webpackChunkName and [request] to ensure meaningful name
// more on https://webpack.js.org/api/module-methods/
import {CATEGORY_SOP} from './Category';

import {AddSopNode} from '../../../nodes/sop/Add';
import {AnimationCopySopNode} from '../../../nodes/sop/AnimationCopy';
import {AnimationMixerSopNode} from '../../../nodes/sop/AnimationMixer';
import {AttribAddMultSopNode} from '../../../nodes/sop/AttribAddMult';
import {AttribCastSopNode} from '../../../nodes/sop/AttribCast';
import {AttribCopySopNode} from '../../../nodes/sop/AttribCopy';
import {AttribCreateSopNode} from '../../../nodes/sop/AttribCreate';
import {AttribDeleteSopNode} from '../../../nodes/sop/AttribDelete';
import {AttribFromTextureSopNode} from '../../../nodes/sop/AttribFromTexture';
import {AttribNormalizeSopNode} from '../../../nodes/sop/AttribNormalize';
import {AttribPromoteSopNode} from '../../../nodes/sop/AttribPromote';
import {AttribRemapSopNode} from '../../../nodes/sop/AttribRemap';
import {AttribRenameSopNode} from '../../../nodes/sop/AttribRename';
import {AttribTransferSopNode} from '../../../nodes/sop/AttribTransfer';
import {BboxScatterSopNode} from '../../../nodes/sop/BboxScatter';
import {BlendSopNode} from '../../../nodes/sop/Blend';
import {BooleanSopNode} from '../../../nodes/sop/Boolean';
import {BoxSopNode} from '../../../nodes/sop/Box';
import {BVHSopNode} from '../../../nodes/sop/BVH';
import {BVHVisualizerSopNode} from '../../../nodes/sop/BVHVisualizer';
import {CacheSopNode} from '../../../nodes/sop/Cache';
import {CameraPlaneSopNode} from '../../../nodes/sop/CameraPlane';
import {CameraProjectSopNode} from '../../../nodes/sop/CameraProject';
import {CenterSopNode} from '../../../nodes/sop/Center';
import {CircleSopNode} from '../../../nodes/sop/Circle';
import {Circle3PointsSopNode} from '../../../nodes/sop/Circle3Points';
// import {CodeSopNode} from '../../../nodes/sop/Code';
import {ColorSopNode} from '../../../nodes/sop/Color';
import {ConeSopNode} from '../../../nodes/sop/Cone';
import {CopySopNode} from '../../../nodes/sop/Copy';
import {CSS2DObjectSopNode} from '../../../nodes/sop/CSS2DObject';
import {CSS3DObjectSopNode} from '../../../nodes/sop/CSS3DObject';
import {DataSopNode} from '../../../nodes/sop/Data';
import {DataUrlSopNode} from '../../../nodes/sop/DataUrl';
import {DecalSopNode} from '../../../nodes/sop/Decal';
import {DelaySopNode} from '../../../nodes/sop/Delay';
import {DeleteSopNode} from '../../../nodes/sop/Delete';
import {DrawRangeSopNode} from '../../../nodes/sop/DrawRange';
import {ExporterSopNode} from '../../../nodes/sop/Exporter';
import {FaceSopNode} from '../../../nodes/sop/Face';
import {FileSopNode} from '../../../nodes/sop/File';
import {FuseSopNode} from '../../../nodes/sop/Fuse';
import {HexagonsSopNode} from '../../../nodes/sop/Hexagons';
import {HierarchySopNode} from '../../../nodes/sop/Hierarchy';
import {HeightMapSopNode} from '../../../nodes/sop/HeightMap';
import {IcosahedronSopNode} from '../../../nodes/sop/Icosahedron';
import {InstanceSopNode} from '../../../nodes/sop/Instance';
import {InstancesCountSopNode} from '../../../nodes/sop/InstancesCount';
import {JitterSopNode} from '../../../nodes/sop/Jitter';
import {JsPointSopNode} from '../../../nodes/sop/JsPoint';
import {LayerSopNode} from '../../../nodes/sop/Layer';
import {LineSopNode} from '../../../nodes/sop/Line';
import {LodSopNode} from '../../../nodes/sop/Lod';
import {MaterialSopNode} from '../../../nodes/sop/Material';
import {MergeSopNode} from '../../../nodes/sop/Merge';
import {MetaballSopNode} from '../../../nodes/sop/Metaball';
import {NoiseSopNode} from '../../../nodes/sop/Noise';
import {NormalsSopNode} from '../../../nodes/sop/Normals';
import {NullSopNode} from '../../../nodes/sop/Null';
import {ObjectMergeSopNode} from '../../../nodes/sop/ObjectMerge';
import {ObjectPropertiesSopNode} from '../../../nodes/sop/ObjectProperties';
import {OperationsComposerSopNode} from '../../../nodes/sop/OperationsComposer';
import {ParticlesSystemGpuSopNode} from '../../../nodes/sop/ParticlesSystemGpu';
import {PeakSopNode} from '../../../nodes/sop/Peak';
import {PlaneSopNode} from '../../../nodes/sop/Plane';
import {PlayerCapsuleSopNode} from '../../../nodes/sop/PlayerCapsule';
import {PointSopNode} from '../../../nodes/sop/Point';
import {PointLightSopNode} from '../../../nodes/sop/PointLight';
import {PolarTransformSopNode} from '../../../nodes/sop/PolarTransform';
import {PolySopNode} from '../../../nodes/sop/Poly';
import {PolywireSopNode} from '../../../nodes/sop/Polywire';
import {RaySopNode} from '../../../nodes/sop/Ray';
import {ReflectorSopNode} from '../../../nodes/sop/Reflector';
import {ResampleSopNode} from '../../../nodes/sop/Resample';
import {RestAttributesSopNode} from '../../../nodes/sop/RestAttributes';
import {RoundedBoxSopNode} from '../../../nodes/sop/RoundedBox';
import {ScatterSopNode} from '../../../nodes/sop/Scatter';
import {ShearSopNode} from '../../../nodes/sop/Shear';
import {SkinSopNode} from '../../../nodes/sop/Skin';
import {SortSopNode} from '../../../nodes/sop/Sort';
import {SolverSopNode} from '../../../nodes/sop/Solver';
import {SolverPreviousFrameSopNode} from '../../../nodes/sop/SolverPreviousFrame';
import {SphereSopNode} from '../../../nodes/sop/Sphere';
import {SplitSopNode} from '../../../nodes/sop/Split';
import {SubdivideSopNode} from '../../../nodes/sop/Subdivide';
import {SubnetSopNode} from '../../../nodes/sop/Subnet';
import {SubnetInputSopNode} from '../../../nodes/sop/SubnetInput';
import {SubnetOutputSopNode} from '../../../nodes/sop/SubnetOutput';
import {SvgSopNode} from '../../../nodes/sop/Svg';
import {SwitchSopNode} from '../../../nodes/sop/Switch';
import {TetrahedronSopNode} from '../../../nodes/sop/Tetrahedron';
import {TextSopNode} from '../../../nodes/sop/Text';
import {TextureCopySopNode} from '../../../nodes/sop/TextureCopy';
import {TexturePropertiesSopNode} from '../../../nodes/sop/TextureProperties';
import {TorusSopNode} from '../../../nodes/sop/Torus';
import {TorusKnotSopNode} from '../../../nodes/sop/TorusKnot';
import {TransformSopNode} from '../../../nodes/sop/Transform';
import {TransformCopySopNode} from '../../../nodes/sop/TransformCopy';
import {TransformMultiSopNode} from '../../../nodes/sop/TransformMulti';
import {TransformResetSopNode} from '../../../nodes/sop/TransformReset';
import {TubeSopNode} from '../../../nodes/sop/Tube';
import {UvLayoutSopNode} from '../../../nodes/sop/UvLayout';
import {UvProjectSopNode} from '../../../nodes/sop/UvProject';
import {UvTransformSopNode} from '../../../nodes/sop/UvTransform';
import {UvUnwrapSopNode} from '../../../nodes/sop/UvUnwrap';
// networks
import {AnimationsNetworkSopNode} from '../../../nodes/sop/AnimationsNetwork';
import {CopNetworkSopNode} from '../../../nodes/sop/CopNetwork';
import {EventsNetworkSopNode} from '../../../nodes/sop/EventsNetwork';
import {MaterialsNetworkSopNode} from '../../../nodes/sop/MaterialsNetwork';
import {PostProcessNetworkSopNode} from '../../../nodes/sop/PostProcessNetwork';
import {RenderersNetworkSopNode} from '../../../nodes/sop/RenderersNetwork';

export interface GeoNodeChildrenMap {
	add: AddSopNode;
	animationCopy: AnimationCopySopNode;
	animationMixer: AnimationMixerSopNode;
	attribAddMult: AttribAddMultSopNode;
	attribCast: AttribCastSopNode;
	attribCopy: AttribCopySopNode;
	attribCreate: AttribCreateSopNode;
	attribDelete: AttribDeleteSopNode;
	attribFromTexture: AttribFromTextureSopNode;
	attribNormalize: AttribNormalizeSopNode;
	attribPromote: AttribPromoteSopNode;
	attribRemap: AttribRemapSopNode;
	attribRename: AttribRenameSopNode;
	attribTransfer: AttribTransferSopNode;
	bboxScatter: BboxScatterSopNode;
	blend: BlendSopNode;
	boolean: BooleanSopNode;
	box: BoxSopNode;
	BVH: BVHSopNode;
	BVHVisualizer: BVHVisualizerSopNode;
	cache: CacheSopNode;
	cameraPlane: CameraPlaneSopNode;
	cameraProject: CameraProjectSopNode;
	center: CenterSopNode;
	circle: CircleSopNode;
	circle3Points: Circle3PointsSopNode;
	// code: CodeSopNode;
	color: ColorSopNode;
	cone: ConeSopNode;
	copy: CopySopNode;
	CSS2DObject: CSS2DObjectSopNode;
	CSS3DObject: CSS3DObjectSopNode;
	data: DataSopNode;
	dataUrl: DataUrlSopNode;
	decal: DecalSopNode;
	delay: DelaySopNode;
	delete: DeleteSopNode;
	drawRange: DrawRangeSopNode;
	exporter: ExporterSopNode;
	face: FaceSopNode;
	file: FileSopNode;
	fuse: FuseSopNode;
	heightMap: HeightMapSopNode;
	hexagons: HexagonsSopNode;
	hierarchy: HierarchySopNode;
	icosahedron: IcosahedronSopNode;
	instance: InstanceSopNode;
	instancesCount: InstancesCountSopNode;
	jitter: JitterSopNode;
	jsPoint: JsPointSopNode;
	layer: LayerSopNode;
	line: LineSopNode;
	lod: LodSopNode;
	material: MaterialSopNode;
	metaball: MetaballSopNode;
	merge: MergeSopNode;
	noise: NoiseSopNode;
	normals: NormalsSopNode;
	null: NullSopNode;
	objectMerge: ObjectMergeSopNode;
	objectProperties: ObjectPropertiesSopNode;
	operationsComposer: OperationsComposerSopNode;
	particlesSystemGpu: ParticlesSystemGpuSopNode;
	peak: PeakSopNode;
	plane: PlaneSopNode;
	playerCapsule: PlayerCapsuleSopNode;
	point: PointSopNode;
	pointLight: PointLightSopNode;
	polarTransform: PolarTransformSopNode;
	poly: PolySopNode;
	polywire: PolywireSopNode;
	ray: RaySopNode;
	reflector: ReflectorSopNode;
	resample: ResampleSopNode;
	restAttributes: RestAttributesSopNode;
	roundedBox: RoundedBoxSopNode;
	scatter: ScatterSopNode;
	shear: ShearSopNode;
	skin: SkinSopNode;
	solver: SolverSopNode;
	solverPreviousFrame: SolverPreviousFrameSopNode;
	sort: SortSopNode;
	sphere: SphereSopNode;
	split: SplitSopNode;
	subdivide: SubdivideSopNode;
	subnet: SubnetSopNode;
	subnetInput: SubnetInputSopNode;
	subnetOutput: SubnetOutputSopNode;
	svg: SvgSopNode;
	switch: SwitchSopNode;
	tetrahedron: TetrahedronSopNode;
	text: TextSopNode;
	textureCopy: TextureCopySopNode;
	textureProperties: TexturePropertiesSopNode;
	torus: TorusSopNode;
	torusKnot: TorusKnotSopNode;
	transform: TransformSopNode;
	transformCopy: TransformCopySopNode;
	transformMulti: TransformMultiSopNode;
	transformReset: TransformResetSopNode;
	tube: TubeSopNode;
	uvLayout: UvProjectSopNode;
	uvProject: UvProjectSopNode;
	uvTransform: UvTransformSopNode;
	uvUnwrap: UvUnwrapSopNode;

	// networks
	animationsNetwork: AnimationsNetworkSopNode;
	copNetwork: CopNetworkSopNode;
	eventsNetwork: EventsNetworkSopNode;
	materialsNetwork: MaterialsNetworkSopNode;
	postProcessNetwork: PostProcessNetworkSopNode;
	renderersNetwork: RenderersNetworkSopNode;
}

import {AddSopOperation} from '../../../operations/sop/Add';
import {AttribAddMultSopOperation} from '../../../operations/sop/AttribAddMult';
import {AttribCastSopOperation} from '../../../operations/sop/AttribCast';
import {AttribCopySopOperation} from '../../../operations/sop/AttribCopy';
import {AttribCreateSopOperation} from '../../../operations/sop/AttribCreate';
import {AttribNormalizeSopOperation} from '../../../operations/sop/AttribNormalize';
import {AttribFromTextureSopOperation} from '../../../operations/sop/AttribFromTexture';
import {AttribPromoteSopOperation} from '../../../operations/sop/AttribPromote';
import {BooleanSopOperation} from '../../../operations/sop/Boolean';
import {BoxSopOperation} from '../../../operations/sop/Box';
import {BVHSopOperation} from '../../../operations/sop/BVH';
import {BVHVisualizerSopOperation} from '../../../operations/sop/BVHVisualizer';
import {CameraProjectSopOperation} from '../../../operations/sop/CameraProject';
import {CenterSopOperation} from '../../../operations/sop/Center';
import {CircleSopOperation} from '../../../operations/sop/Circle';
import {CSS2DObjectSopOperation} from '../../../operations/sop/CSS2DObject';
import {DecalSopOperation} from '../../../operations/sop/Decal';
import {FileSopOperation} from '../../../operations/sop/File';
import {HierarchySopOperation} from '../../../operations/sop/Hierarchy';
import {IcosahedronSopOperation} from '../../../operations/sop/Icosahedron';
import {InstanceSopOperation} from '../../../operations/sop/Instance';
import {JitterSopOperation} from '../../../operations/sop/Jitter';
import {MergeSopOperation} from '../../../operations/sop/Merge';
import {MetaballSopOperation} from '../../../operations/sop/Metaball';
import {MaterialSopOperation} from '../../../operations/sop/Material';
import {NullSopOperation} from '../../../operations/sop/Null';
import {ObjectPropertiesSopOperation} from '../../../operations/sop/ObjectProperties';
import {PeakSopOperation} from '../../../operations/sop/Peak';
import {PlaneSopOperation} from '../../../operations/sop/Plane';
import {PlayerCapsuleSopOperation} from '../../../operations/sop/PlayerCapsule';
import {PolarTransformSopOperation} from '../../../operations/sop/PolarTransform';
import {PointLightSopOperation} from '../../../operations/sop/PointLight';
import {RaySopOperation} from '../../../operations/sop/Ray';
import {ReflectorSopOperation} from '../../../operations/sop/Reflector';
import {RestAttributesSopOperation} from '../../../operations/sop/RestAttributes';
import {RoundedBoxSopOperation} from '../../../operations/sop/RoundedBox';
import {ScatterSopOperation} from '../../../operations/sop/Scatter';
import {ShearSopOperation} from '../../../operations/sop/Shear';
import {SortSopOperation} from '../../../operations/sop/Sort';
import {SphereSopOperation} from '../../../operations/sop/Sphere';
import {SubdivideSopOperation} from '../../../operations/sop/Subdivide';
import {SvgSopOperation} from '../../../operations/sop/Svg';
import {TextureCopySopOperation} from '../../../operations/sop/TextureCopy';
import {TexturePropertiesSopOperation} from '../../../operations/sop/TextureProperties';
import {TorusSopOperation} from '../../../operations/sop/Torus';
import {TorusKnotSopOperation} from '../../../operations/sop/TorusKnot';
import {TransformSopOperation} from '../../../operations/sop/Transform';
import {UvLayoutSopOperation} from '../../../operations/sop/UvLayout';
import {UvTransformSopOperation} from '../../../operations/sop/UvTransform';
import {UvUnwrapSopOperation} from '../../../operations/sop/UvUnwrap';

import {PolyEngine} from '../../../Poly';
export class SopRegister {
	static run(poly: PolyEngine) {
		poly.registerOperation(AddSopOperation);
		poly.registerOperation(AttribAddMultSopOperation);
		poly.registerOperation(AttribCastSopOperation);
		poly.registerOperation(AttribCopySopOperation);
		poly.registerOperation(AttribCreateSopOperation);
		poly.registerOperation(AttribNormalizeSopOperation);
		poly.registerOperation(AttribFromTextureSopOperation);
		poly.registerOperation(AttribPromoteSopOperation);
		poly.registerOperation(BooleanSopOperation);
		poly.registerOperation(BoxSopOperation);
		poly.registerOperation(BVHSopOperation);
		poly.registerOperation(BVHVisualizerSopOperation);
		poly.registerOperation(CameraProjectSopOperation);
		poly.registerOperation(CenterSopOperation);
		poly.registerOperation(CircleSopOperation);
		poly.registerOperation(CSS2DObjectSopOperation);
		poly.registerOperation(DecalSopOperation);
		poly.registerOperation(FileSopOperation);
		poly.registerOperation(HierarchySopOperation);
		poly.registerOperation(IcosahedronSopOperation);
		poly.registerOperation(InstanceSopOperation);
		poly.registerOperation(JitterSopOperation);
		poly.registerOperation(MergeSopOperation);
		poly.registerOperation(MetaballSopOperation);
		poly.registerOperation(MaterialSopOperation);
		poly.registerOperation(NullSopOperation);
		poly.registerOperation(ObjectPropertiesSopOperation);
		poly.registerOperation(PeakSopOperation);
		poly.registerOperation(PlaneSopOperation);
		poly.registerOperation(PlayerCapsuleSopOperation);
		poly.registerOperation(PointLightSopOperation);
		poly.registerOperation(PolarTransformSopOperation);
		poly.registerOperation(RaySopOperation);
		poly.registerOperation(ReflectorSopOperation);
		poly.registerOperation(RestAttributesSopOperation);
		poly.registerOperation(RoundedBoxSopOperation);
		poly.registerOperation(ScatterSopOperation);
		poly.registerOperation(ShearSopOperation);
		poly.registerOperation(SortSopOperation);
		poly.registerOperation(SphereSopOperation);
		poly.registerOperation(SubdivideSopOperation);
		poly.registerOperation(SvgSopOperation);
		poly.registerOperation(TextureCopySopOperation);
		poly.registerOperation(TexturePropertiesSopOperation);
		poly.registerOperation(TorusSopOperation);
		poly.registerOperation(TorusKnotSopOperation);
		poly.registerOperation(TransformSopOperation);
		poly.registerOperation(UvLayoutSopOperation);
		poly.registerOperation(UvTransformSopOperation);
		poly.registerOperation(UvUnwrapSopOperation);

		poly.registerNode(AddSopNode, CATEGORY_SOP.INPUT);
		poly.registerNode(AnimationCopySopNode, CATEGORY_SOP.ANIMATION);
		poly.registerNode(AnimationMixerSopNode, CATEGORY_SOP.ANIMATION);
		poly.registerNode(AttribAddMultSopNode, CATEGORY_SOP.ATTRIBUTE);
		poly.registerNode(AttribCastSopNode, CATEGORY_SOP.ATTRIBUTE);
		poly.registerNode(AttribCopySopNode, CATEGORY_SOP.ATTRIBUTE);
		poly.registerNode(AttribCreateSopNode, CATEGORY_SOP.ATTRIBUTE);
		poly.registerNode(AttribDeleteSopNode, CATEGORY_SOP.ATTRIBUTE);
		poly.registerNode(AttribFromTextureSopNode, CATEGORY_SOP.ATTRIBUTE);
		poly.registerNode(AttribNormalizeSopNode, CATEGORY_SOP.ATTRIBUTE);
		poly.registerNode(AttribPromoteSopNode, CATEGORY_SOP.ATTRIBUTE);
		poly.registerNode(AttribRemapSopNode, CATEGORY_SOP.ATTRIBUTE);
		poly.registerNode(AttribRenameSopNode, CATEGORY_SOP.ATTRIBUTE);
		poly.registerNode(AttribTransferSopNode, CATEGORY_SOP.ATTRIBUTE);
		poly.registerNode(BboxScatterSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(BlendSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(BooleanSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(BoxSopNode, CATEGORY_SOP.PRIMITIVES);
		poly.registerNode(BVHSopNode, CATEGORY_SOP.ADVANCED);
		poly.registerNode(BVHVisualizerSopNode, CATEGORY_SOP.ADVANCED);
		poly.registerNode(CacheSopNode, CATEGORY_SOP.MISC);
		poly.registerNode(CameraPlaneSopNode, CATEGORY_SOP.PRIMITIVES);
		poly.registerNode(CameraProjectSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(CenterSopNode, CATEGORY_SOP.PRIMITIVES);
		poly.registerNode(CircleSopNode, CATEGORY_SOP.PRIMITIVES);
		poly.registerNode(Circle3PointsSopNode, CATEGORY_SOP.PRIMITIVES);
		// poly.registerNode(CodeSopNode, CATEGORY_SOP.ADVANCED);
		poly.registerNode(ColorSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(ConeSopNode, CATEGORY_SOP.PRIMITIVES);
		poly.registerNode(CopySopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(CSS2DObjectSopNode, CATEGORY_SOP.PRIMITIVES);
		// poly.registerNode(Css3DObjectSopNode, CATEGORY_SOP.PRIMITIVES); // not working yet
		poly.registerNode(DataSopNode, CATEGORY_SOP.INPUT);
		poly.registerNode(DataUrlSopNode, CATEGORY_SOP.INPUT);
		poly.registerNode(DecalSopNode, CATEGORY_SOP.MISC);
		poly.registerNode(DelaySopNode, CATEGORY_SOP.MISC);
		poly.registerNode(DeleteSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(DrawRangeSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(ExporterSopNode, CATEGORY_SOP.ADVANCED);
		poly.registerNode(FaceSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(FileSopNode, CATEGORY_SOP.INPUT);
		poly.registerNode(FuseSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(HexagonsSopNode, CATEGORY_SOP.PRIMITIVES);
		poly.registerNode(HeightMapSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(HierarchySopNode, CATEGORY_SOP.MISC);
		poly.registerNode(IcosahedronSopNode, CATEGORY_SOP.PRIMITIVES);
		poly.registerNode(InstanceSopNode, CATEGORY_SOP.RENDER);
		poly.registerNode(InstancesCountSopNode, CATEGORY_SOP.RENDER);
		poly.registerNode(JitterSopNode, CATEGORY_SOP.MODIFIER);
		if (process.env.NODE_ENV == 'development') {
			poly.registerNode(JsPointSopNode, CATEGORY_SOP.ADVANCED);
		}
		poly.registerNode(LayerSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(LineSopNode, CATEGORY_SOP.PRIMITIVES);
		poly.registerNode(LodSopNode, CATEGORY_SOP.ADVANCED);
		poly.registerNode(MaterialSopNode, CATEGORY_SOP.RENDER);
		poly.registerNode(MergeSopNode, CATEGORY_SOP.MISC);
		poly.registerNode(MetaballSopNode, CATEGORY_SOP.PRIMITIVES);
		poly.registerNode(NoiseSopNode, CATEGORY_SOP.MISC);
		poly.registerNode(NormalsSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(NullSopNode, CATEGORY_SOP.MISC);
		poly.registerNode(ObjectMergeSopNode, CATEGORY_SOP.INPUT);
		poly.registerNode(ObjectPropertiesSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(OperationsComposerSopNode, CATEGORY_SOP.ADVANCED, {userAllowed: false});
		poly.registerNode(ParticlesSystemGpuSopNode, CATEGORY_SOP.DYNAMICS);
		poly.registerNode(PeakSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(PlaneSopNode, CATEGORY_SOP.PRIMITIVES);
		poly.registerNode(PlayerCapsuleSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(PolarTransformSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(PointSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(PointLightSopNode, CATEGORY_SOP.LIGHTS);
		poly.registerNode(PolySopNode, CATEGORY_SOP.ADVANCED);
		poly.registerNode(PolywireSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(RaySopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(ReflectorSopNode, CATEGORY_SOP.RENDER);
		poly.registerNode(ResampleSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(RestAttributesSopNode, CATEGORY_SOP.ATTRIBUTE);
		poly.registerNode(RoundedBoxSopNode, CATEGORY_SOP.INPUT);
		poly.registerNode(ScatterSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(SkinSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(ShearSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(SolverSopNode, CATEGORY_SOP.ADVANCED);
		poly.registerNode(SolverPreviousFrameSopNode, CATEGORY_SOP.ADVANCED);
		poly.registerNode(SortSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(SphereSopNode, CATEGORY_SOP.PRIMITIVES);
		poly.registerNode(SplitSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(SubdivideSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(SubnetSopNode, CATEGORY_SOP.MISC);
		poly.registerNode(
			SubnetInputSopNode,
			CATEGORY_SOP.MISC /*{
			// TODO: use "except" so that it works inside PolyNodes
			// only: [`${NodeContext.SOP}/${SubnetSopNode.type()}`, `${NodeContext.SOP}/poly`],
		}*/
		);
		poly.registerNode(
			SubnetOutputSopNode,
			CATEGORY_SOP.MISC /*{
			// only: [`${NodeContext.SOP}/${SubnetSopNode.type()}`, `${NodeContext.SOP}/poly`],
		}*/
		);
		poly.registerNode(SvgSopNode, CATEGORY_SOP.INPUT);
		poly.registerNode(SwitchSopNode, CATEGORY_SOP.MISC);
		poly.registerNode(TetrahedronSopNode, CATEGORY_SOP.PRIMITIVES);
		poly.registerNode(TextSopNode, CATEGORY_SOP.PRIMITIVES);
		poly.registerNode(TextureCopySopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(TexturePropertiesSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(TorusSopNode, CATEGORY_SOP.PRIMITIVES);
		poly.registerNode(TorusKnotSopNode, CATEGORY_SOP.PRIMITIVES);
		poly.registerNode(TransformSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(TransformCopySopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(TransformMultiSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(TransformResetSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(TubeSopNode, CATEGORY_SOP.PRIMITIVES);
		poly.registerNode(UvLayoutSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(UvProjectSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(UvTransformSopNode, CATEGORY_SOP.MODIFIER);
		poly.registerNode(UvUnwrapSopNode, CATEGORY_SOP.MODIFIER);
		// networks
		poly.registerNode(AnimationsNetworkSopNode, CATEGORY_SOP.NETWORK);
		poly.registerNode(CopNetworkSopNode, CATEGORY_SOP.NETWORK);
		poly.registerNode(EventsNetworkSopNode, CATEGORY_SOP.NETWORK);
		poly.registerNode(MaterialsNetworkSopNode, CATEGORY_SOP.NETWORK);
		poly.registerNode(PostProcessNetworkSopNode, CATEGORY_SOP.NETWORK);
		poly.registerNode(RenderersNetworkSopNode, CATEGORY_SOP.NETWORK);
	}
}
