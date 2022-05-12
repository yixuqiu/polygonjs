import {CATEGORY_ACTOR} from './Category';

import {AbsActorNode} from '../../../nodes/actor/Abs';
import {AcosActorNode} from '../../../nodes/actor/Acos';
import {AddActorNode} from '../../../nodes/actor/Add';
import {AsinActorNode} from '../../../nodes/actor/Asin';
import {AtanActorNode} from '../../../nodes/actor/Atan';
import {AnimationActionActorNode} from '../../../nodes/actor/AnimationAction';
import {AnimationActionCrossFadeActorNode} from '../../../nodes/actor/AnimationActionCrossFade';
import {AnimationActionFadeOutActorNode} from '../../../nodes/actor/AnimationActionFadeOut';
import {AnimationActionFadeInActorNode} from '../../../nodes/actor/AnimationActionFadeIn';
import {AnimationActionPlayActorNode} from '../../../nodes/actor/AnimationActionPlay';
import {AnimationActionStopActorNode} from '../../../nodes/actor/AnimationActionStop';
import {AnimationMixerActorNode} from '../../../nodes/actor/AnimationMixer';
import {AnimationMixerUpdateActorNode} from '../../../nodes/actor/AnimationMixerUpdate';
import {BoolToIntActorNode} from '../../../nodes/actor/BoolToInt';
import {Box3ActorNode} from '../../../nodes/actor/Box3';
import {CeilActorNode} from '../../../nodes/actor/Ceil';
import {CodeActorNode} from '../../../nodes/actor/Code';
import {CompareActorNode} from '../../../nodes/actor/Compare';
import {ConstantActorNode} from '../../../nodes/actor/Constant';
import {CosActorNode} from '../../../nodes/actor/Cos';
import {DebugActorNode} from '../../../nodes/actor/Debug';
import {DivideActorNode} from '../../../nodes/actor/Divide';
import {FloatToIntActorNode} from '../../../nodes/actor/FloatToInt';
import {FloatToVec2ActorNode} from '../../../nodes/actor/FloatToVec2';
import {FloatToVec3ActorNode} from '../../../nodes/actor/FloatToVec3';
import {FloatToVec4ActorNode} from '../../../nodes/actor/FloatToVec4';
import {FloorActorNode} from '../../../nodes/actor/Floor';
import {GetBox3PropertyActorNode} from '../../../nodes/actor/GetBox3Property';
import {GetChildrenAttributesActorNode} from '../../../nodes/actor/GetChildrenAttributes';
import {GetMaterialActorNode} from '../../../nodes/actor/GetMaterial';
import {GetObjectActorNode} from '../../../nodes/actor/GetObject';
import {GetObjectAttributeActorNode} from '../../../nodes/actor/GetObjectAttribute';
import {GetObjectPropertyActorNode} from '../../../nodes/actor/GetObjectProperty';
import {GetPlanePropertyActorNode} from '../../../nodes/actor/GetPlaneProperty';
import {GetSpherePropertyActorNode} from '../../../nodes/actor/GetSphereProperty';
import {IntToFloatActorNode} from '../../../nodes/actor/IntToFloat';
import {IntToBoolActorNode} from '../../../nodes/actor/IntToBool';
import {MaxActorNode} from '../../../nodes/actor/Max';
import {MinActorNode} from '../../../nodes/actor/Min';
import {MixActorNode} from '../../../nodes/actor/Mix';
import {MultActorNode} from '../../../nodes/actor/Mult';
import {MultScalarActorNode} from '../../../nodes/actor/MultScalar';
import {NullActorNode} from '../../../nodes/actor/Null';
import {ObjectDispatchEventActorNode} from '../../../nodes/actor/ObjectDispatchEvent';
import {OnChildAttributeUpdateActorNode} from '../../../nodes/actor/OnChildAttributeUpdate';
import {OnManualTriggerActorNode} from '../../../nodes/actor/OnManualTrigger';
import {OnObjectAttributeUpdateActorNode} from '../../../nodes/actor/OnObjectAttributeUpdate';
import {OnObjectClickActorNode} from '../../../nodes/actor/OnObjectClick';
import {OnObjectDispatchEventActorNode} from '../../../nodes/actor/OnObjectDispatchEvent';
import {OnObjectHoverActorNode} from '../../../nodes/actor/OnObjectHover';
import {OnObjectPointerDownActorNode} from '../../../nodes/actor/OnObjectPointerDown';
import {OnObjectPointerUpActorNode} from '../../../nodes/actor/OnObjectPointerUp';
import {OnPointerUpActorNode} from '../../../nodes/actor/OnPointerUp';
import {OnScenePlayStateActorNode} from '../../../nodes/actor/OnScenePlayState';
import {OnSceneResetActorNode} from '../../../nodes/actor/OnSceneReset';
import {OnTickActorNode} from '../../../nodes/actor/OnTick';
import {OrActorNode} from '../../../nodes/actor/Or';
import {PlaneActorNode} from '../../../nodes/actor/Plane';
import {PlayAnimationActorNode} from '../../../nodes/actor/PlayAnimation';
import {PlayInstrumentNoteActorNode} from '../../../nodes/actor/PlayInstrumentNote';
import {RayDistanceToPlaneActorNode} from '../../../nodes/actor/RayDistanceToPlane';
import {RayFromCursorActorNode} from '../../../nodes/actor/RayFromCursor';
import {RayIntersectBoxActorNode} from '../../../nodes/actor/RayIntersectBox';
import {RayIntersectPlaneActorNode} from '../../../nodes/actor/RayIntersectPlane';
import {RayIntersectsBoxActorNode} from '../../../nodes/actor/RayIntersectsBox';
import {RayIntersectSphereActorNode} from '../../../nodes/actor/RayIntersectSphere';
import {RayIntersectsPlaneActorNode} from '../../../nodes/actor/RayIntersectsPlane';
import {RayIntersectsSphereActorNode} from '../../../nodes/actor/RayIntersectsSphere';
import {RoundActorNode} from '../../../nodes/actor/Round';
import {SetMaterialColorActorNode} from '../../../nodes/actor/SetMaterialColor';
import {SetMaterialEmissiveColorActorNode} from '../../../nodes/actor/SetMaterialEmissiveColor';
import {SetObjectMaterialColorActorNode} from '../../../nodes/actor/SetObjectMaterialColor';
import {SetObjectAttributeActorNode} from '../../../nodes/actor/SetObjectAttribute';
import {SetObjectLookAtActorNode} from '../../../nodes/actor/SetObjectLookAt';
import {SetObjectMaterialActorNode} from '../../../nodes/actor/SetObjectMaterial';
// import {SetObjectHoveredStateActorNode} from '../../../nodes/actor/SetObjectHoveredState';
import {SetObjectPositionActorNode} from '../../../nodes/actor/SetObjectPosition';
import {SetObjectRotationActorNode} from '../../../nodes/actor/SetObjectRotation';
import {SetObjectScaleActorNode} from '../../../nodes/actor/SetObjectScale';
import {SetViewerActorNode} from '../../../nodes/actor/SetViewer';
import {SignActorNode} from '../../../nodes/actor/Sign';
import {SinActorNode} from '../../../nodes/actor/Sin';
import {SphereActorNode} from '../../../nodes/actor/Sphere';
import {SqrtActorNode} from '../../../nodes/actor/Sqrt';
import {SubtractActorNode} from '../../../nodes/actor/Subtract';
import {SwitchActorNode} from '../../../nodes/actor/Switch';
import {TanActorNode} from '../../../nodes/actor/Tan';
import {TriggerFilterActorNode} from '../../../nodes/actor/TriggerFilter';
import {TriggerTwoWaySwitchActorNode} from '../../../nodes/actor/TriggerTwoWaySwitch';
import {TwoWaySwitchActorNode} from '../../../nodes/actor/TwoWaySwitch';
import {Vec2ToFloatActorNode} from '../../../nodes/actor/Vec2ToFloat';
import {Vec2ToVec3ActorNode} from '../../../nodes/actor/Vec2ToVec3';
import {Vec3ToFloatActorNode} from '../../../nodes/actor/Vec3ToFloat';
import {Vec3ToVec4ActorNode} from '../../../nodes/actor/Vec3ToVec4';
import {Vec3ToVec2ActorNode} from '../../../nodes/actor/Vec3ToVec2';
import {Vec4ToFloatActorNode} from '../../../nodes/actor/Vec4ToFloat';
import {Vec4ToVec3ActorNode} from '../../../nodes/actor/Vec4ToVec3';
// networks
import {ActorsNetworkActorNode} from '../../../nodes/actor/ActorsNetwork';
import {AnimationsNetworkActorNode} from '../../../nodes/actor/AnimationsNetwork';
import {AudioNetworkActorNode} from '../../../nodes/actor/AudioNetwork';
import {CopNetworkActorNode} from '../../../nodes/actor/CopNetwork';
import {EventsNetworkActorNode} from '../../../nodes/actor/EventsNetwork';
import {MaterialsNetworkActorNode} from '../../../nodes/actor/MaterialsNetwork';
import {PostProcessNetworkActorNode} from '../../../nodes/actor/PostProcessNetwork';
import {RenderersNetworkActorNode} from '../../../nodes/actor/RenderersNetwork';

export interface ActorNodeChildrenMap {
	abs: AbsActorNode;
	acos: AcosActorNode;
	add: AddActorNode;
	asin: AsinActorNode;
	atan: AtanActorNode;
	animationAction: AnimationActionActorNode;
	animationActionCrossFade: AnimationActionCrossFadeActorNode;
	animationActionFadeOut: AnimationActionFadeOutActorNode;
	animationActionFadeIn: AnimationActionFadeInActorNode;
	animationActionPlay: AnimationActionPlayActorNode;
	animationActionStop: AnimationActionStopActorNode;
	animationMixer: AnimationMixerActorNode;
	animationMixerUpdate: AnimationMixerUpdateActorNode;
	boolToInt: BoolToIntActorNode;
	box3: Box3ActorNode;
	ceil: CeilActorNode;
	code: CodeActorNode;
	compare: CompareActorNode;
	constant: ConstantActorNode;
	cos: CosActorNode;
	debug: DebugActorNode;
	divide: DivideActorNode;
	floatToInt: FloatToIntActorNode;
	floatToVec2: FloatToVec2ActorNode;
	floatToVec3: FloatToVec3ActorNode;
	floatToVec4: FloatToVec4ActorNode;
	floor: FloorActorNode;
	getBox3Property: GetBox3PropertyActorNode;
	getChildrenAttributes: GetChildrenAttributesActorNode;
	getMaterial: GetMaterialActorNode;
	getObject: GetObjectActorNode;
	getObjectAttribute: GetObjectAttributeActorNode;
	getObjectProperty: GetObjectPropertyActorNode;
	getPlaneProperty: GetPlanePropertyActorNode;
	getSphereProperty: GetSpherePropertyActorNode;
	intToBool: IntToBoolActorNode;
	intToFloat: IntToFloatActorNode;
	max: MaxActorNode;
	min: MinActorNode;
	mix: MixActorNode;
	mult: MultActorNode;
	multScalar: MultScalarActorNode;
	null: NullActorNode;
	objectDispatchEvent: ObjectDispatchEventActorNode;
	onChildAttributeUpdate: OnChildAttributeUpdateActorNode;
	onManualTrigger: OnManualTriggerActorNode;
	onObjectAttributeUpdate: OnObjectAttributeUpdateActorNode;
	onObjectClick: OnObjectClickActorNode;
	onObjectDispatchEvent: OnObjectDispatchEventActorNode;
	onObjectHover: OnObjectHoverActorNode;
	onObjectPointerDown: OnObjectPointerDownActorNode;
	onObjectPointerUp: OnObjectPointerUpActorNode;
	onPointerUp: OnPointerUpActorNode;
	onScenePlayState: OnScenePlayStateActorNode;
	onSceneReset: OnSceneResetActorNode;
	onTick: OnTickActorNode;
	or: OrActorNode;
	plane: PlaneActorNode;
	playAnimation: PlayAnimationActorNode;
	playInstrumentNote: PlayInstrumentNoteActorNode;
	rayDistanceToPlaneActorNode: RayDistanceToPlaneActorNode;
	rayFromCursor: RayFromCursorActorNode;
	rayIntersectBox: RayIntersectBoxActorNode;
	rayIntersectPlane: RayIntersectPlaneActorNode;
	rayIntersectsBox: RayIntersectsBoxActorNode;
	rayIntersectsPlane: RayIntersectsPlaneActorNode;
	rayIntersectSphere: RayIntersectSphereActorNode;
	rayIntersectsSphere: RayIntersectsSphereActorNode;
	round: RoundActorNode;
	setMaterialColor: SetMaterialColorActorNode;
	setMaterialEmissiveColor: SetMaterialEmissiveColorActorNode;
	setObjectMaterialColor: SetObjectMaterialColorActorNode;
	// setObjectHoveredState: SetObjectHoveredStateActorNode;
	setObjectAttribute: SetObjectAttributeActorNode;
	setObjectLookAt: SetObjectLookAtActorNode;
	setObjectMaterial: SetObjectMaterialActorNode;
	setObjectPosition: SetObjectPositionActorNode;
	setObjectRotation: SetObjectRotationActorNode;
	setObjectScale: SetObjectScaleActorNode;
	setViewer: SetViewerActorNode;
	sign: SignActorNode;
	sin: SinActorNode;
	sphere: SphereActorNode;
	sqrt: SqrtActorNode;
	subtract: SubtractActorNode;
	switch: SwitchActorNode;
	tan: TanActorNode;
	triggerFilter: TriggerFilterActorNode;
	triggerTwoWaySwitch: TriggerTwoWaySwitchActorNode;
	twoWaySwitch: TwoWaySwitchActorNode;
	vec2ToFloat: Vec2ToFloatActorNode;
	vec2ToVec3: Vec2ToVec3ActorNode;
	vec3ToFloat: Vec3ToFloatActorNode;
	vec3ToVec2: Vec3ToVec2ActorNode;
	vec3ToVec4: Vec3ToVec4ActorNode;
	vec4ToFloat: Vec4ToFloatActorNode;
	vec4ToVec3: Vec4ToVec3ActorNode;
	// networks
	actorsNetwork: ActorsNetworkActorNode;
	animationsNetwork: AnimationsNetworkActorNode;
	audioNetwork: AudioNetworkActorNode;
	copNetwork: CopNetworkActorNode;
	eventsNetwork: EventsNetworkActorNode;
	materialsNetwork: MaterialsNetworkActorNode;
	postProcessNetwork: PostProcessNetworkActorNode;
	renderersNetwork: RenderersNetworkActorNode;
}

import {PolyEngine} from '../../../Poly';

export class ActorRegister {
	static run(poly: PolyEngine) {
		poly.registerNode(AbsActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(AcosActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(AddActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(AsinActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(AtanActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(AnimationActionActorNode, CATEGORY_ACTOR.ANIMATION);
		poly.registerNode(AnimationActionCrossFadeActorNode, CATEGORY_ACTOR.ANIMATION);
		poly.registerNode(AnimationActionFadeOutActorNode, CATEGORY_ACTOR.ANIMATION);
		poly.registerNode(AnimationActionFadeInActorNode, CATEGORY_ACTOR.ANIMATION);
		poly.registerNode(AnimationActionPlayActorNode, CATEGORY_ACTOR.ANIMATION);
		poly.registerNode(AnimationActionStopActorNode, CATEGORY_ACTOR.ANIMATION);
		poly.registerNode(AnimationMixerActorNode, CATEGORY_ACTOR.ANIMATION);
		poly.registerNode(AnimationMixerUpdateActorNode, CATEGORY_ACTOR.ANIMATION);
		poly.registerNode(BoolToIntActorNode, CATEGORY_ACTOR.CONVERSION);
		poly.registerNode(Box3ActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(CeilActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(CodeActorNode, CATEGORY_ACTOR.ADVANCED);
		poly.registerNode(CompareActorNode, CATEGORY_ACTOR.LOGIC);
		poly.registerNode(ConstantActorNode, CATEGORY_ACTOR.MISC);
		poly.registerNode(CosActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(DebugActorNode, CATEGORY_ACTOR.MISC);
		poly.registerNode(DivideActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(FloatToIntActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(FloatToVec2ActorNode, CATEGORY_ACTOR.CONVERSION);
		poly.registerNode(FloatToVec3ActorNode, CATEGORY_ACTOR.CONVERSION);
		poly.registerNode(FloatToVec4ActorNode, CATEGORY_ACTOR.CONVERSION);
		poly.registerNode(FloorActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(GetBox3PropertyActorNode, CATEGORY_ACTOR.GET);
		poly.registerNode(GetChildrenAttributesActorNode, CATEGORY_ACTOR.GET);
		poly.registerNode(GetMaterialActorNode, CATEGORY_ACTOR.GET);
		poly.registerNode(GetObjectActorNode, CATEGORY_ACTOR.GET);
		poly.registerNode(GetObjectAttributeActorNode, CATEGORY_ACTOR.GET);
		poly.registerNode(GetObjectPropertyActorNode, CATEGORY_ACTOR.GET);
		poly.registerNode(GetPlanePropertyActorNode, CATEGORY_ACTOR.GET);
		poly.registerNode(GetSpherePropertyActorNode, CATEGORY_ACTOR.GET);
		poly.registerNode(IntToBoolActorNode, CATEGORY_ACTOR.GET);
		poly.registerNode(IntToFloatActorNode, CATEGORY_ACTOR.GET);
		poly.registerNode(MaxActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(MinActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(MixActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(MultActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(MultScalarActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(NullActorNode, CATEGORY_ACTOR.MISC);
		poly.registerNode(ObjectDispatchEventActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(OnManualTriggerActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnChildAttributeUpdateActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnObjectAttributeUpdateActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnObjectClickActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnObjectDispatchEventActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnObjectHoverActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnObjectPointerDownActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnObjectPointerUpActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnPointerUpActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnScenePlayStateActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnSceneResetActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnTickActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OrActorNode, CATEGORY_ACTOR.LOGIC);
		poly.registerNode(PlaneActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(PlayAnimationActorNode, CATEGORY_ACTOR.ANIMATION);
		poly.registerNode(PlayInstrumentNoteActorNode, CATEGORY_ACTOR.AUDIO);
		poly.registerNode(RayDistanceToPlaneActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(RayFromCursorActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(RayIntersectBoxActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(RayIntersectPlaneActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(RayIntersectsBoxActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(RayIntersectsPlaneActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(RayIntersectSphereActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(RayIntersectsSphereActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(RoundActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(SetMaterialColorActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(SetMaterialEmissiveColorActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(SetObjectMaterialColorActorNode, CATEGORY_ACTOR.ACTION);
		// poly.registerNode(SetObjectHoveredStateActorNode, CATEGORY_ACTOR.SET);
		poly.registerNode(SetObjectAttributeActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(SetObjectLookAtActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(SetObjectMaterialActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(SetObjectPositionActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(SetObjectRotationActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(SetObjectScaleActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(SignActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(SinActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(SphereActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(SqrtActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(SubtractActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(SwitchActorNode, CATEGORY_ACTOR.LOGIC);
		poly.registerNode(SetViewerActorNode, CATEGORY_ACTOR.MISC);
		poly.registerNode(TanActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(TriggerFilterActorNode, CATEGORY_ACTOR.LOGIC);
		poly.registerNode(TriggerTwoWaySwitchActorNode, CATEGORY_ACTOR.LOGIC);
		poly.registerNode(TwoWaySwitchActorNode, CATEGORY_ACTOR.LOGIC);
		poly.registerNode(Vec2ToFloatActorNode, CATEGORY_ACTOR.CONVERSION);
		poly.registerNode(Vec2ToVec3ActorNode, CATEGORY_ACTOR.CONVERSION);
		poly.registerNode(Vec3ToFloatActorNode, CATEGORY_ACTOR.CONVERSION);
		poly.registerNode(Vec3ToVec2ActorNode, CATEGORY_ACTOR.CONVERSION);
		poly.registerNode(Vec3ToVec4ActorNode, CATEGORY_ACTOR.CONVERSION);
		poly.registerNode(Vec4ToFloatActorNode, CATEGORY_ACTOR.CONVERSION);
		poly.registerNode(Vec4ToVec3ActorNode, CATEGORY_ACTOR.CONVERSION);

		// networks
		poly.registerNode(ActorsNetworkActorNode, CATEGORY_ACTOR.NETWORK);
		poly.registerNode(AnimationsNetworkActorNode, CATEGORY_ACTOR.NETWORK);
		poly.registerNode(AudioNetworkActorNode, CATEGORY_ACTOR.NETWORK);
		poly.registerNode(CopNetworkActorNode, CATEGORY_ACTOR.NETWORK);
		poly.registerNode(EventsNetworkActorNode, CATEGORY_ACTOR.NETWORK);
		poly.registerNode(MaterialsNetworkActorNode, CATEGORY_ACTOR.NETWORK);
		poly.registerNode(PostProcessNetworkActorNode, CATEGORY_ACTOR.NETWORK);
		poly.registerNode(RenderersNetworkActorNode, CATEGORY_ACTOR.NETWORK);
	}
}
