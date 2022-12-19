import {CATEGORY_ACTOR} from './Category';

import {AbsActorNode} from '../../../nodes/actor/Abs';
import {AcosActorNode} from '../../../nodes/actor/Acos';
import {AddActorNode} from '../../../nodes/actor/Add';
import {AndActorNode} from '../../../nodes/actor/And';
import {AnyTriggerActorNode} from '../../../nodes/actor/AnyTrigger';
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
import {CacheActorNode} from '../../../nodes/actor/Cache';
import {CatmullRomCurve3GetPointActorNode} from '../../../nodes/actor/CatmullRomCurve3GetPoint';
import {CeilActorNode} from '../../../nodes/actor/Ceil';
import {ClampActorNode} from '../../../nodes/actor/Clamp';
import {CodeActorNode} from '../../../nodes/actor/Code';
import {ColorToVec3ActorNode} from '../../../nodes/actor/ColorToVec3';
import {CompareActorNode} from '../../../nodes/actor/Compare';
import {ComplementActorNode} from '../../../nodes/actor/Complement';
import {ConstantActorNode} from '../../../nodes/actor/Constant';
import {CosActorNode} from '../../../nodes/actor/Cos';
import {CrossActorNode} from '../../../nodes/actor/Cross';
import {CursorActorNode} from '../../../nodes/actor/Cursor';
import {DebugActorNode} from '../../../nodes/actor/Debug';
import {DistanceActorNode} from '../../../nodes/actor/Distance';
import {DivideActorNode} from '../../../nodes/actor/Divide';
import {DotActorNode} from '../../../nodes/actor/Dot';
import {EasingActorNode} from '../../../nodes/actor/Easing';
import {FitActorNode} from '../../../nodes/actor/Fit';
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
import {GetObjectUserDataActorNode} from '../../../nodes/actor/GetObjectUserData';
import {GetObjectWorldPositionActorNode} from '../../../nodes/actor/GetObjectWorldPosition';
import {GetParentActorNode} from '../../../nodes/actor/GetParent';
import {GetPlanePropertyActorNode} from '../../../nodes/actor/GetPlaneProperty';
import {GetSpherePropertyActorNode} from '../../../nodes/actor/GetSphereProperty';
import {IntToFloatActorNode} from '../../../nodes/actor/IntToFloat';
import {IntToBoolActorNode} from '../../../nodes/actor/IntToBool';
import {KeyframesActorNode} from '../../../nodes/actor/Keyframes';
import {LengthActorNode} from '../../../nodes/actor/Length';
import {LerpActorNode} from '../../../nodes/actor/Lerp';
import {ManhattanDistanceActorNode} from '../../../nodes/actor/ManhattanDistance';
import {MaxActorNode} from '../../../nodes/actor/Max';
import {MaxLengthActorNode} from '../../../nodes/actor/MaxLength';
import {MinActorNode} from '../../../nodes/actor/Min';
import {MixActorNode} from '../../../nodes/actor/Mix';
import {MultActorNode} from '../../../nodes/actor/Mult';
import {MultAddActorNode} from '../../../nodes/actor/MultAdd';
import {MultScalarActorNode} from '../../../nodes/actor/MultScalar';
import {NegateActorNode} from '../../../nodes/actor/Negate';
import {NormalizeActorNode} from '../../../nodes/actor/Normalize';
import {NullActorNode} from '../../../nodes/actor/Null';
import {ObjectDispatchEventActorNode} from '../../../nodes/actor/ObjectDispatchEvent';
import {ObjectUpdateMatrixActorNode} from '../../../nodes/actor/ObjectUpdateMatrix';
import {ObjectUpdateWorldMatrixActorNode} from '../../../nodes/actor/ObjectUpdateWorldMatrix';
import {OnChildAttributeUpdateActorNode} from '../../../nodes/actor/OnChildAttributeUpdate';
import {OnKeydownActorActorNode} from '../../../nodes/actor/OnKeydown';
import {OnKeypressActorActorNode} from '../../../nodes/actor/OnKeypress';
import {OnKeyupActorActorNode} from '../../../nodes/actor/OnKeyup';
import {OnManualTriggerActorNode} from '../../../nodes/actor/OnManualTrigger';
import {OnObjectAttributeUpdateActorNode} from '../../../nodes/actor/OnObjectAttributeUpdate';
import {OnObjectClickActorNode} from '../../../nodes/actor/OnObjectClick';
import {OnObjectDispatchEventActorNode} from '../../../nodes/actor/OnObjectDispatchEvent';
import {OnObjectHoverActorNode} from '../../../nodes/actor/OnObjectHover';
import {OnObjectPointerdownActorNode} from '../../../nodes/actor/OnObjectPointerdown';
import {OnObjectPointerupActorNode} from '../../../nodes/actor/OnObjectPointerup';
import {OnPointerdownActorNode} from '../../../nodes/actor/OnPointerdown';
import {OnPointerupActorNode} from '../../../nodes/actor/OnPointerup';
import {OnScenePlayStateActorNode} from '../../../nodes/actor/OnScenePlayState';
import {OnSceneResetActorNode} from '../../../nodes/actor/OnSceneReset';
import {OnTickActorNode} from '../../../nodes/actor/OnTick';
import {OrActorNode} from '../../../nodes/actor/Or';
import {PauseAudioSourceActorNode} from '../../../nodes/actor/PauseAudioSource';
import {PhysicsRBDAddForceActorNode} from '../../../nodes/actor/PhysicsRBDAddForce';
import {PhysicsRBDAddForceAtPointActorNode} from '../../../nodes/actor/PhysicsRBDAddForceAtPoint';
import {PhysicsRBDAddTorqueActorNode} from '../../../nodes/actor/PhysicsRBDAddTorque';
import {PhysicsRBDApplyImpulseActorNode} from '../../../nodes/actor/PhysicsRBDApplyImpulse';
import {PhysicsRBDApplyTorqueImpulseActorNode} from '../../../nodes/actor/PhysicsRBDApplyTorqueImpulse';
import {PhysicsRBDApplyImpulseAtPointActorNode} from '../../../nodes/actor/PhysicsRBDApplyImpulseAtPoint';
import {PhysicsRBDResetForcesActorNode} from '../../../nodes/actor/PhysicsRBDResetForces';
import {PhysicsRBDResetTorquesActorNode} from '../../../nodes/actor/PhysicsRBDResetTorques';
import {PhysicsWorldResetActorNode} from '../../../nodes/actor/PhysicsWorldReset';
import {PhysicsWorldStepSimulationActorNode} from '../../../nodes/actor/PhysicsWorldStepSimulation';
import {PlaneActorNode} from '../../../nodes/actor/Plane';
import {PlayAnimationActorNode} from '../../../nodes/actor/PlayAnimation';
import {PlayAudioSourceActorNode} from '../../../nodes/actor/PlayAudioSource';
import {PlayInstrumentNoteActorNode} from '../../../nodes/actor/PlayInstrumentNote';
import {PressButtonParamActorNode} from '../../../nodes/actor/PressButtonParam';
import {PowActorNode} from '../../../nodes/actor/Pow';
import {RandActorNode} from '../../../nodes/actor/Rand';
import {RandomActorNode} from '../../../nodes/actor/Random';
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
import {SetMaterialUniformActorNode} from '../../../nodes/actor/SetMaterialUniform';
import {SetObjectAttributeActorNode} from '../../../nodes/actor/SetObjectAttribute';
import {SetObjectLookAtActorNode} from '../../../nodes/actor/SetObjectLookAt';
import {SetObjectMaterialColorActorNode} from '../../../nodes/actor/SetObjectMaterialColor';
import {SetObjectMaterialActorNode} from '../../../nodes/actor/SetObjectMaterial';
// import {SetObjectHoveredStateActorNode} from '../../../nodes/actor/SetObjectHoveredState';
import {SetObjectPolarTransformActorNode} from '../../../nodes/actor/SetObjectPolarTransform';
import {SetObjectPositionActorNode} from '../../../nodes/actor/SetObjectPosition';
import {SetObjectRotationActorNode} from '../../../nodes/actor/SetObjectRotation';
import {SetObjectScaleActorNode} from '../../../nodes/actor/SetObjectScale';
import {SetPhysicsRBDPositionActorNode} from '../../../nodes/actor/SetPhysicsRBDPosition';
import {SetPhysicsRBDRotationActorNode} from '../../../nodes/actor/SetPhysicsRBDRotation';
import {SetPhysicsWorldGravityActorNode} from '../../../nodes/actor/SetPhysicsWorldGravity';
import {SetParamActorNode} from '../../../nodes/actor/SetParam';
import {SetPerspectiveCameraFovActorNode} from '../../../nodes/actor/SetPerspectiveCameraFov';
import {SetPerspectiveCameraNearFarActorNode} from '../../../nodes/actor/SetPerspectiveCameraNearFar';
import {SetSpotLightIntensityActorNode} from '../../../nodes/actor/SetSpotLightIntensity';
import {SetViewerActorNode} from '../../../nodes/actor/SetViewer';
import {SignActorNode} from '../../../nodes/actor/Sign';
import {SinActorNode} from '../../../nodes/actor/Sin';
import {SmoothstepActorNode} from '../../../nodes/actor/Smoothstep';
import {SphereActorNode} from '../../../nodes/actor/Sphere';
import {SqrtActorNode} from '../../../nodes/actor/Sqrt';
import {SubtractActorNode} from '../../../nodes/actor/Subtract';
import {SwitchActorNode} from '../../../nodes/actor/Switch';
import {TanActorNode} from '../../../nodes/actor/Tan';
import {TriggerDelayActorNode} from '../../../nodes/actor/TriggerDelay';
import {TriggerFilterActorNode} from '../../../nodes/actor/TriggerFilter';
import {TriggerTwoWaySwitchActorNode} from '../../../nodes/actor/TriggerTwoWaySwitch';
import {TwoWaySwitchActorNode} from '../../../nodes/actor/TwoWaySwitch';
import {Vec2ToFloatActorNode} from '../../../nodes/actor/Vec2ToFloat';
import {Vec2ToVec3ActorNode} from '../../../nodes/actor/Vec2ToVec3';
import {Vec3ToColorActorNode} from '../../../nodes/actor/Vec3ToColor';
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
	and: AndActorNode;
	anyTrigger: AnyTriggerActorNode;
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
	cache: CacheActorNode;
	catmullRomCurve3GetPoint: CatmullRomCurve3GetPointActorNode;
	ceil: CeilActorNode;
	clamp: ClampActorNode;
	code: CodeActorNode;
	colorToVec3: ColorToVec3ActorNode;
	compare: CompareActorNode;
	complement: ComplementActorNode;
	constant: ConstantActorNode;
	cos: CosActorNode;
	cross: CrossActorNode;
	cursor: CursorActorNode;
	debug: DebugActorNode;
	divide: DivideActorNode;
	distance: DistanceActorNode;
	dot: DotActorNode;
	easing: EasingActorNode;
	fit: FitActorNode;
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
	getObjectUserData: GetObjectUserDataActorNode;
	getParent: GetParentActorNode;
	getPlaneProperty: GetPlanePropertyActorNode;
	getSphereProperty: GetSpherePropertyActorNode;
	getObjectWorldPosition: GetObjectWorldPositionActorNode;
	intToBool: IntToBoolActorNode;
	intToFloat: IntToFloatActorNode;
	keyframes: KeyframesActorNode;
	length: LengthActorNode;
	lerp: LerpActorNode;
	manhattanDistance: ManhattanDistanceActorNode;
	max: MaxActorNode;
	maxLength: MaxLengthActorNode;
	min: MinActorNode;
	mix: MixActorNode;
	mult: MultActorNode;
	multAdd: MultAddActorNode;
	multScalar: MultScalarActorNode;
	negate: NegateActorNode;
	normalize: NormalizeActorNode;
	null: NullActorNode;
	objectDispatchEvent: ObjectDispatchEventActorNode;
	objectUpdateMatrix: ObjectUpdateMatrixActorNode;
	objectUpdateWorldMatrix: ObjectUpdateWorldMatrixActorNode;
	onChildAttributeUpdate: OnChildAttributeUpdateActorNode;
	onKeydown: OnKeydownActorActorNode;
	onKeypress: OnKeypressActorActorNode;
	onKeyup: OnKeyupActorActorNode;
	onManualTrigger: OnManualTriggerActorNode;
	onObjectAttributeUpdate: OnObjectAttributeUpdateActorNode;
	onObjectClick: OnObjectClickActorNode;
	onObjectDispatchEvent: OnObjectDispatchEventActorNode;
	onObjectHover: OnObjectHoverActorNode;
	onObjectPointerdown: OnObjectPointerdownActorNode;
	onObjectPointerup: OnObjectPointerupActorNode;
	onPointerdown: OnPointerdownActorNode;
	onPointerup: OnPointerupActorNode;
	onScenePlayState: OnScenePlayStateActorNode;
	onSceneReset: OnSceneResetActorNode;
	onTick: OnTickActorNode;
	or: OrActorNode;
	pauseAudioSource: PauseAudioSourceActorNode;
	physicsRBDAddForceAtPoint: PhysicsRBDAddForceAtPointActorNode;
	physicsRBDAddForce: PhysicsRBDAddForceActorNode;
	physicsRBDAddTorque: PhysicsRBDAddTorqueActorNode;
	physicsRBDApplyImpulse: PhysicsRBDApplyImpulseActorNode;
	physicsRBDApplyTorqueImpulse: PhysicsRBDApplyTorqueImpulseActorNode;
	physicsRBDApplyImpulseAtPoint: PhysicsRBDApplyImpulseAtPointActorNode;
	physicsRBDResetForces: PhysicsRBDResetForcesActorNode;
	physicsRBDResetTorques: PhysicsRBDResetTorquesActorNode;
	physicsWorldReset: PhysicsWorldResetActorNode;
	physicsWorldStepSimulation: PhysicsWorldStepSimulationActorNode;
	plane: PlaneActorNode;
	playAnimation: PlayAnimationActorNode;
	playAudioSource: PlayAudioSourceActorNode;
	playInstrumentNote: PlayInstrumentNoteActorNode;
	pressButtonParam: PressButtonParamActorNode;
	pow: PowActorNode;
	rand: RandActorNode;
	random: RandomActorNode;
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
	setMaterialUniform: SetMaterialUniformActorNode;
	// setObjectHoveredState: SetObjectHoveredStateActorNode;
	setObjectAttribute: SetObjectAttributeActorNode;
	setObjectLookAt: SetObjectLookAtActorNode;
	setObjectMaterial: SetObjectMaterialActorNode;
	setObjectMaterialColor: SetObjectMaterialColorActorNode;
	setObjectPolarTransform: SetObjectPolarTransformActorNode;
	setObjectPosition: SetObjectPositionActorNode;
	setObjectRotation: SetObjectRotationActorNode;
	setObjectScale: SetObjectScaleActorNode;
	setPhysicsRBDPosition: SetPhysicsRBDPositionActorNode;
	setPhysicsRBDRotation: SetPhysicsRBDRotationActorNode;
	setPhysicsWorldGravity: SetPhysicsWorldGravityActorNode;
	setParam: SetParamActorNode;
	setPerspectiveCameraFov: SetPerspectiveCameraFovActorNode;
	setPerspectiveCameraNearFar: SetPerspectiveCameraNearFarActorNode;
	setSpotLightIntensity: SetSpotLightIntensityActorNode;
	setViewer: SetViewerActorNode;
	sign: SignActorNode;
	sin: SinActorNode;
	smoothstep: SmoothstepActorNode;
	sphere: SphereActorNode;
	sqrt: SqrtActorNode;
	subtract: SubtractActorNode;
	switch: SwitchActorNode;
	tan: TanActorNode;
	triggerDelay: TriggerDelayActorNode;
	triggerFilter: TriggerFilterActorNode;
	triggerTwoWaySwitch: TriggerTwoWaySwitchActorNode;
	twoWaySwitch: TwoWaySwitchActorNode;
	vec2ToFloat: Vec2ToFloatActorNode;
	vec2ToVec3: Vec2ToVec3ActorNode;
	vec3ToColor: Vec3ToColorActorNode;
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
		poly.registerNode(AndActorNode, CATEGORY_ACTOR.LOGIC);
		poly.registerNode(AnyTriggerActorNode, CATEGORY_ACTOR.FLOW);
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
		poly.registerNode(CacheActorNode, CATEGORY_ACTOR.ADVANCED);
		poly.registerNode(CeilActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(ClampActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(CatmullRomCurve3GetPointActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(CodeActorNode, CATEGORY_ACTOR.ADVANCED);
		poly.registerNode(ColorToVec3ActorNode, CATEGORY_ACTOR.CONVERSION);
		poly.registerNode(CompareActorNode, CATEGORY_ACTOR.LOGIC);
		poly.registerNode(ComplementActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(ConstantActorNode, CATEGORY_ACTOR.MISC);
		poly.registerNode(CosActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(CrossActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(CursorActorNode, CATEGORY_ACTOR.INPUTS);
		poly.registerNode(DebugActorNode, CATEGORY_ACTOR.MISC);
		poly.registerNode(DistanceActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(DivideActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(DotActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(EasingActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(FitActorNode, CATEGORY_ACTOR.MATH);
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
		poly.registerNode(GetObjectUserDataActorNode, CATEGORY_ACTOR.GET);
		poly.registerNode(GetPlanePropertyActorNode, CATEGORY_ACTOR.GET);
		poly.registerNode(GetParentActorNode, CATEGORY_ACTOR.GET);
		poly.registerNode(GetSpherePropertyActorNode, CATEGORY_ACTOR.GET);
		poly.registerNode(GetObjectWorldPositionActorNode, CATEGORY_ACTOR.GET);
		poly.registerNode(IntToBoolActorNode, CATEGORY_ACTOR.GET);
		poly.registerNode(IntToFloatActorNode, CATEGORY_ACTOR.GET);
		poly.registerNode(KeyframesActorNode, CATEGORY_ACTOR.ANIMATION);
		poly.registerNode(LengthActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(LerpActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(ManhattanDistanceActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(MaxActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(MaxLengthActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(MinActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(MixActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(MultActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(MultAddActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(MultScalarActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(NegateActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(NormalizeActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(NullActorNode, CATEGORY_ACTOR.MISC);
		poly.registerNode(ObjectDispatchEventActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(ObjectUpdateMatrixActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(ObjectUpdateWorldMatrixActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(OnChildAttributeUpdateActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnKeydownActorActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnKeypressActorActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnKeyupActorActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnManualTriggerActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnObjectAttributeUpdateActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnObjectClickActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnObjectDispatchEventActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnObjectHoverActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnObjectPointerdownActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnObjectPointerupActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnPointerdownActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnPointerupActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnScenePlayStateActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnSceneResetActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OnTickActorNode, CATEGORY_ACTOR.EVENTS);
		poly.registerNode(OrActorNode, CATEGORY_ACTOR.LOGIC);
		poly.registerNode(PauseAudioSourceActorNode, CATEGORY_ACTOR.PHYSICS);
		poly.registerNode(PhysicsRBDAddForceActorNode, CATEGORY_ACTOR.PHYSICS);
		poly.registerNode(PhysicsRBDAddForceAtPointActorNode, CATEGORY_ACTOR.PHYSICS);
		poly.registerNode(PhysicsRBDAddTorqueActorNode, CATEGORY_ACTOR.PHYSICS);
		poly.registerNode(PhysicsRBDApplyImpulseActorNode, CATEGORY_ACTOR.PHYSICS);
		poly.registerNode(PhysicsRBDApplyTorqueImpulseActorNode, CATEGORY_ACTOR.PHYSICS);
		poly.registerNode(PhysicsRBDApplyImpulseAtPointActorNode, CATEGORY_ACTOR.PHYSICS);
		poly.registerNode(PhysicsRBDResetForcesActorNode, CATEGORY_ACTOR.PHYSICS);
		poly.registerNode(PhysicsRBDResetTorquesActorNode, CATEGORY_ACTOR.PHYSICS);
		poly.registerNode(PhysicsWorldResetActorNode, CATEGORY_ACTOR.PHYSICS);
		poly.registerNode(PhysicsWorldStepSimulationActorNode, CATEGORY_ACTOR.PHYSICS);
		poly.registerNode(PlaneActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(PlayAnimationActorNode, CATEGORY_ACTOR.ANIMATION);
		poly.registerNode(PlayAudioSourceActorNode, CATEGORY_ACTOR.AUDIO);
		poly.registerNode(PlayInstrumentNoteActorNode, CATEGORY_ACTOR.AUDIO);
		poly.registerNode(PressButtonParamActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(PowActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(RayDistanceToPlaneActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(RandActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(RandomActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(RayFromCursorActorNode, CATEGORY_ACTOR.INPUTS);
		poly.registerNode(RayIntersectBoxActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(RayIntersectPlaneActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(RayIntersectsBoxActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(RayIntersectsPlaneActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(RayIntersectSphereActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(RayIntersectsSphereActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(RoundActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(SetMaterialColorActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(SetMaterialEmissiveColorActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(SetMaterialUniformActorNode, CATEGORY_ACTOR.ACTION);
		// poly.registerNode(SetObjectHoveredStateActorNode, CATEGORY_ACTOR.SET);
		poly.registerNode(SetObjectAttributeActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(SetObjectLookAtActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(SetObjectMaterialActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(SetObjectMaterialColorActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(SetObjectPolarTransformActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(SetObjectPositionActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(SetObjectRotationActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(SetObjectScaleActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(SetPhysicsRBDPositionActorNode, CATEGORY_ACTOR.PHYSICS);
		poly.registerNode(SetPhysicsRBDRotationActorNode, CATEGORY_ACTOR.PHYSICS);
		poly.registerNode(SetPhysicsWorldGravityActorNode, CATEGORY_ACTOR.PHYSICS);
		poly.registerNode(SetParamActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(SetPerspectiveCameraFovActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(SetPerspectiveCameraNearFarActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(SetSpotLightIntensityActorNode, CATEGORY_ACTOR.ACTION);
		poly.registerNode(SetViewerActorNode, CATEGORY_ACTOR.MISC);
		poly.registerNode(SignActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(SinActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(SmoothstepActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(SphereActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(SqrtActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(SubtractActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(SwitchActorNode, CATEGORY_ACTOR.LOGIC);
		poly.registerNode(TanActorNode, CATEGORY_ACTOR.MATH);
		poly.registerNode(TriggerDelayActorNode, CATEGORY_ACTOR.FLOW);
		poly.registerNode(TriggerFilterActorNode, CATEGORY_ACTOR.FLOW);
		poly.registerNode(TriggerTwoWaySwitchActorNode, CATEGORY_ACTOR.FLOW);
		poly.registerNode(TwoWaySwitchActorNode, CATEGORY_ACTOR.LOGIC);
		poly.registerNode(Vec2ToFloatActorNode, CATEGORY_ACTOR.CONVERSION);
		poly.registerNode(Vec2ToVec3ActorNode, CATEGORY_ACTOR.CONVERSION);
		poly.registerNode(Vec3ToColorActorNode, CATEGORY_ACTOR.CONVERSION);
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
