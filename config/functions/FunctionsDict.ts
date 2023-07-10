export const FUNCTION_NAME_BY_FILE_NAME: Record<string, string[]> = {
	Add: ['addNumber', 'addVector', 'addVectorNumber'],
	Animation: ['playAnimation'],
	AnimationMixer: [
		'getAnimationMixer',
		'animationMixerUpdate',
		'getAnimationAction',
		'animationActionCrossFade',
		'animationActionFadeIn',
		'animationActionFadeOut',
		'animationActionPlay',
		'animationActionStop',
	],
	Array: [
		'arrayLength',
		'elementsToArrayPrimitive',
		'elementsToArrayVector',
		'arrayElementPrimitive',
		'arrayElementVector',
	],
	Audio: ['addAudioStopEventListener', 'playAudioSource', 'pauseAudioSource', 'playInstrumentNote'],
	Box3: [
		'box3ContainsPoint',
		'box3IntersectsBox3',
		'box3Set',
		'box3SetFromObject',
		'getBox3Center',
		'getBox3Min',
		'getBox3Max',
	],
	Camera: ['setPerspectiveCameraFov', 'setPerspectiveCameraNearFar', 'getDefaultCamera'],
	CameraControlsDeviceOrientation: ['deviceOrientation'],
	Cloth: [
		'clothSolverReset',
		'clothCreateConstraint',
		'clothDeleteConstraint',
		'clothConstraintSetPosition',
		'clothSolverStepSimulation',
		'clothSolverUpdateMaterial',
	],
	Color: ['colorSetRGB', 'hsvToRgb'],
	CookNode: ['cookNode'],
	Conversion: [
		'boolToInt',
		'intToBool',
		'floatToInt',
		'intToFloat',
		'colorToVec3',
		'floatToColor',
		'floatToVec2',
		'floatToVec3',
		'floatToVec4',
		'vec2ToVec3',
		'vec3ToColor',
		'vec3ToVec4',
	],
	CSSObject: ['setCSSObjectClass'],
	Curve: ['catmullRomCurve3GetPoint'],
	Debug: ['debug'],
	Divide: ['divideNumber', 'divideVectorNumber'],
	Easing: [
		'easeI2',
		'easeO2',
		'easeIO2',
		'easeI3',
		'easeO3',
		'easeIO3',
		'easeI4',
		'easeO4',
		'easeIO4',
		'easeSinI',
		'easeSinO',
		'easeSinIO',
		'easeElasticI',
		'easeElasticO',
		'easeElasticIO',
	],
	Euler: ['eulerSetFromVector3', 'eulerSetFromQuaternion'],
	Geolocation: [
		'geolocationCurrentPositionRef',
		'geolocationGetCurrentPosition',
		'geolocationLatitude',
		'geolocationLongitude',
	],
	Geometry: ['getGeometryBoundingBox', 'getGeometryPositions', 'setGeometryPositions'],
	GetActorNodeParamValue: ['getActorNodeParamValue'],
	GetChildrenAttributes: ['getChildrenAttributes'],
	GetChildrenAttributesRef: ['getChildrenAttributesRef'],
	GetChildrenAttributesPrevious: ['getChildrenAttributesPrevious'],
	GetIntersectionAttribute: [
		'getIntersectionAttributeNumberNearest',
		'getIntersectionAttributeColorNearest',
		'getIntersectionAttributeStringNearest',
		'getIntersectionAttributeVector2Nearest',
		'getIntersectionAttributeVector3Nearest',
		'getIntersectionAttributeVector4Nearest',
		'getIntersectionAttributeNumberInterpolated',
		'getIntersectionAttributeColorInterpolated',
		'getIntersectionAttributeVector2Interpolated',
		'getIntersectionAttributeVector3Interpolated',
		'getIntersectionAttributeVector4Interpolated',
	],
	GetIntersectionProperty: [
		'getIntersectionPropertyDistance',
		'getIntersectionPropertyNormal',
		'getIntersectionPropertyObject',
		'getIntersectionPropertyPoint',
		'getIntersectionPropertyUv',
	],
	GetObject: ['getObject'],
	GetObjectAttribute: ['getObjectAttribute', 'getObjectAttributeAutoDefault'],
	GetObjectAttributePrevious: ['getObjectAttributePrevious'],
	GetObjectAttributeRef: ['getObjectAttributeRef'],
	GetObjectChild: ['getObjectChild'],
	GetObjectHoveredState: ['getObjectHoveredIntersection', 'getObjectHoveredState'],
	GetObjectProperty: [
		'getObjectProperty',
		'getObjectWorldPosition',
		'object3DLocalToWorld',
		'object3DWorldToLocal',
		'getChildrenPropertiesCastShadow',
		'getChildrenPropertiesFrustumCulled',
		'getChildrenPropertiesMatrixAutoUpdate',
		'getChildrenPropertiesPosition',
		'getChildrenPropertiesQuaternion',
		'getChildrenPropertiesReceiveShadow',
		'getChildrenPropertiesScale',
		'getChildrenPropertiesUp',
		'getChildrenPropertiesVisible',
	],
	GetObjectUserData: ['getObjectUserData'],
	GetParent: ['getParent'],
	GetSceneObject: ['getMaterial', 'getTexture'],
	GetSibbling: ['getSibbling'],
	Globals: ['globalsTime', 'globalsTimeDelta', 'globalsRaycaster', 'globalsRayFromCursor', 'globalsCursor'],
	Keyframes: [
		'channelFloat',
		'channelValueFloat',
		'channelVector2',
		'channelValueVector2',
		'channelVector3',
		'channelValueVector3',
		'channelVector4',
		'channelValueVector4',
	],
	Instance: [
		'setGeometryInstancePositions',
		'setGeometryInstanceQuaternions',
		'setGeometryInstanceScales',
		'setGeometryInstanceTransforms',
		'setGeometryInstanceAttributeFloat',
		'setGeometryInstanceAttributeVector2',
		'setGeometryInstanceAttributeVector3',
		'setGeometryInstanceAttributeVector4',
		'setGeometryInstanceAttributeQuaternion',
		'setGeometryInstanceAttributeColor',
	],
	KeyboardEventMatchesConfig: ['keyboardEventMatchesConfig'],
	Lerp: ['lerpColor', 'lerpNumber', 'lerpQuaternion', 'lerpVector2', 'lerpVector3', 'lerpVector4'],
	Light: ['setSpotLightIntensity'],
	Logic: ['andArrays', 'andBooleans', 'orArrays', 'orBooleans'],
	Material: [
		'setObjectMaterial',
		// color
		'setObjectMaterialColor',
		'setMaterialColor',
		'setMaterialEmissiveColor',
		// map
		'setMaterialMap',
		'setMaterialAlphaMap',
		'setMaterialAOMap',
		'setMaterialDisplacementMap',
		'setMaterialEnvMap',
		'setMaterialEmissiveMap',
		'setMaterialMetalnessMap',
		'setMaterialRoughnessMap',
		// number
		'setMaterialOpacity',
		// uniforms
		'setMaterialUniformNumber',
		'setMaterialUniformTexture',
		'setMaterialUniformVectorColor',
	],
	MathGeneric: [
		'mathColor_1',
		'mathColor_2',
		'mathColor_3',
		'mathColor_3vvf',
		'mathColor_4',
		'mathColor_5',
		'mathFloat_1',
		'mathFloat_2',
		'mathFloat_3',
		'mathFloat_4',
		'mathFloat_5',
		'mathPrimArray_1',
		'mathPrimArray_2',
		'mathPrimArray_3',
		'mathPrimArray_4',
		'mathPrimArray_5',
		'mathVector2_1',
		'mathVector2_2',
		'mathVector2_3',
		'mathVector2_3vvf',
		'mathVector2_4',
		'mathVector2_5',
		'mathVector3_1',
		'mathVector3_2',
		'mathVector3_3',
		'mathVector3_3vvf',
		'mathVector3_4',
		'mathVector3_5',
		'mathVector4_1',
		'mathVector4_2',
		'mathVector4_3',
		'mathVector4_3vvf',
		'mathVector4_4',
		'mathVector4_5',
		'mathVectorArray_1',
		'mathVectorArray_2',
		'mathVectorArray_3',
		'mathVectorArray_4',
		'mathVectorArray_5',
	],
	Math: [
		'clamp',
		'complement',
		'degToRad',
		'fit',
		'fitClamp',
		'mix',
		'mod',
		'multAdd',
		'negate',
		'radToDeg',
		'rand',
		'random',
		'smoothstep',
		'smootherstep',
	],
	Matrix4: ['matrix4LookAt', 'matrix4MakeTranslation', 'matrix4Multiply'],
	Mult: ['multNumber', 'multVector', 'multVectorNumber'],
	MultScalar: [
		'multScalarArrayVectorArray',
		'multScalarColor',
		'multScalarVector2',
		'multScalarVector3',
		'multScalarVector4',
		'multScalarVectorArray',
	],
	NearestPosition: ['nearestPosition'],
	NoiseSimplex: ['noiseSimplexVector2', 'noiseSimplexVector3', 'noiseSimplexVector4'],
	NoiseImproved: ['noiseImprovedVector3'],
	ObjectDispatchEvent: ['objectDispatchEvent', 'getObjectLastDispatchedEventName', 'objectAddEventListeners'],
	Object3D: ['objectDelete'],
	Param: [
		'getParam',
		'setParamBoolean',
		'setParamBooleanToggle',
		'setParamColor',
		'setParamFloat',
		'setParamInteger',
		'setParamString',
		'setParamVector2',
		'setParamVector3',
		'setParamVector4',
		'pressButtonParam',
	],
	ParticlesSystem: ['particlesSystemReset', 'particlesSystemStepSimulation'],
	Performance: ['onPerformanceChange'],
	Physics: [
		'physicsWorldReset',
		'physicsWorldStepSimulation',
		// get shape
		'getPhysicsRBDCapsuleRadius',
		'getPhysicsRBDCapsuleHeight',
		'getPhysicsRBDConeRadius',
		'getPhysicsRBDConeHeight',
		'getPhysicsRBDCuboidSizes',
		'getPhysicsRBDCylinderRadius',
		'getPhysicsRBDCylinderHeight',
		'getPhysicsRBDSphereRadius',
		// set shape
		'setPhysicsRBDCapsuleProperty',
		'setPhysicsRBDConeProperty',
		'setPhysicsRBDCuboidProperty',
		'setPhysicsRBDCylinderProperty',
		'setPhysicsRBDSphereProperty',
		// get RBD
		'getPhysicsRBDAngularVelocity',
		'getPhysicsRBDLinearVelocity',
		'getPhysicsRBDAngularDamping',
		'getPhysicsRBDLinearDamping',
		'getPhysicsRBDIsSleeping',
		'getPhysicsRBDIsMoving',
		// get Children RBD,
		'getChildrenPhysicsRBDPropertiesAngularDamping',
		'getChildrenPhysicsRBDPropertiesAngularVelocity',
		'getChildrenPhysicsRBDPropertiesIsMoving',
		'getChildrenPhysicsRBDPropertiesIsSleeping',
		'getChildrenPhysicsRBDPropertiesLinearDamping',
		'getChildrenPhysicsRBDPropertiesLinearVelocity',
		// set RBD
		'setPhysicsRBDPosition',
		'setPhysicsRBDRotation',
		'setPhysicsRBDAngularVelocity',
		'setPhysicsRBDLinearVelocity',
		// set world
		'setPhysicsWorldGravity',
		// forces
		'physicsRBDAddForce',
		'physicsRBDAddForceAtPoint',
		'physicsRBDAddTorque',
		'physicsRBDApplyImpulse',
		'physicsRBDApplyImpulseAtPoint',
		'physicsRBDApplyTorqueImpulse',
		'physicsRBDDelete',
		'physicsRBDResetAll',
		'physicsRBDResetForces',
		'physicsRBDResetTorques',
		// constraints
		'physicsRBDCreateConstraint',
		'physicsRBDDeleteConstraints',
	],
	PlayerPhysics: ['playerPhysicsUpdate'],
	PlayerSimple: ['playerSimpleUpdate', 'getPlayerSimplePropertyOnGround', 'getPlayerSimplePropertyVelocity'],
	Plane: ['planeSet', 'getPlaneNormal', 'getPlaneConstant'],
	PolarTransform: ['setObjectPolarTransform', 'polarTransform'],
	Poly: ['playerMode'],
	PreviousValue: [
		'previousValuePrimitive',
		'previousValueColor',
		'previousValueVector2',
		'previousValueVector3',
		'previousValueVector4',
	],
	Quaternion: ['quaternionSetFromEuler', 'quaternionSetFromAxisAngle', 'quaternionAngleTo', 'quaternionSlerp'],
	Ray: [
		'raySet',
		'rayFromCamera',
		'getRayDirection',
		'getRayOrigin',
		'rayIntersectBox3',
		'rayIntersectsBox3',
		'rayIntersectObject3D',
		'rayIntersectsObject3D',
		'rayIntersectPlane',
		'rayIntersectsPlane',
		'rayDistanceToPlane',
		'rayIntersectSphere',
		'rayIntersectsSphere',
	],
	Render: ['cursorToUv', 'renderPixel'],
	Scroll: ['createScrollListener'],
	SDFOperations: [
		'SDFElongateFast',
		'SDFElongateSlow',
		'SDFIntersect',
		'SDFOnion',
		'SDFSmoothUnion',
		'SDFSmoothSubtract',
		'SDFSmoothIntersect',
		'SDFSubtract',
		'SDFTransform',
		'SDFUnion',
	],
	SDFOperations2D: ['SDFRevolutionX', 'SDFRevolutionY', 'SDFRevolutionZ'],
	SDFPrimitives: ['SDFBox', 'SDFPlane', 'SDFSphere', 'SDFTorus', 'SDFTube'],
	SDFPrimitives2D: ['SDF2DBox', 'SDF2DCircle', 'SDF2DCross', 'SDF2DHeart', 'SDF2DRoundedX'],
	SetObjectAttribute: ['setObjectAttribute'],
	SetObjectLookAt: ['setObjectLookAt'],
	SetObjectPosition: ['setObjectPosition'],
	SetObjectProperty: [
		'setObjectCastShadow',
		'setObjectFrustumCulled',
		'setObjectMatrix',
		'setObjectMatrixAutoUpdate',
		'setObjectReceiveShadow',
		'setObjectVisible',
		'objectUpdateMatrix',
		'objectUpdateWorldMatrix',
	],
	SetObjectQuaternion: ['setObjectQuaternion'],
	SetObjectRotation: ['setObjectRotation'],
	SetObjectScale: ['setObjectScale'],
	SetPlayerInput: [
		'setPlayerInput',
		'getPlayerInputDataLeft',
		'getPlayerInputDataRight',
		'getPlayerInputDataBackward',
		'getPlayerInputDataForward',
		'getPlayerInputDataJump',
		'getPlayerInputDataRun',
	],
	Sizzle: ['sizzleVec3XY', 'sizzleVec3XZ', 'sizzleVec3YZ', 'sizzleVec4XYZ', 'sizzleVec4WArray', 'sizzleVec4XYZArray'],
	Sleep: ['sleep'],
	SoftBody: [
		'computeVelocity',
		'softBodySolverStepSimulation',
		'softBodyConstraintCreate',
		'softBodyConstraintSetPosition',
		'softBodyConstraintDelete',
	],
	Sphere: ['sphereSet', 'getSphereCenter', 'getSphereRadius'],
	Subtract: ['subtractNumber', 'subtractVector', 'subtractVectorNumber'],
	TrackingFace: ['trackFace', 'trackFaceGetLandmarks'],
	TrackingHand: [
		'trackHand',
		'trackHandGetNormalizedLandmarks',
		'trackHandGetWorldLandmarks',
		'getTrackedHandIndexDirection',
		'getTrackedHandMiddleDirection',
		'getTrackedHandPinkyDirection',
		'getTrackedHandRingDirection',
		'getTrackedHandThumbDirection',
	],
	Trigger: ['triggerFilter', 'triggerTwoWaySwitch'],
	Vector: ['vector3AngleTo', 'vector3Project', 'vector3ProjectOnPlane', 'vector3Unproject'],
	VectorCross: ['crossVector2', 'crossVector3'],
	VectorDistance: ['distanceVector2', 'distanceVector3'],
	VectorDot: ['dotVector2', 'dotVector3'],
	VectorLength: ['lengthVector', 'lengthVectorArray'],
	VectorManhattanDistance: ['manhattanDistanceVector2', 'manhattanDistanceVector3'],
	VectorMaxLength: ['maxLengthVector2', 'maxLengthVector3', 'maxLengthVector4'],
	VectorNormalize: ['normalizeVector2', 'normalizeVector3', 'normalizeVector4'],
	Video: [
		'addVideoEventListener',
		'getVideoPropertyCurrentTime',
		'getVideoPropertyDuration',
		'getVideoPropertyMuted',
		'getVideoPropertyPlaying',
	],
	Viewer: ['setViewer'],
	WebXR: [
		'getWebXRARHitDetected',
		'getWebXRARHitMatrix',
		'getWebXRARHitPosition',
		'getWebXRARHitQuaternion',
		'getWebXRControllerObject',
		'getWebXRControllerRay',
		'getWebXRControllerHasLinearVelocity',
		'getWebXRControllerLinearVelocity',
		'getWebXRControllerHasAngularVelocity',
		'getWebXRControllerAngularVelocity',
		'getWebXRTrackedMarkerMatrix',
	],
};
