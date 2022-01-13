/**
 * Sends events related to the scene
 *
 *
 */
import {ACCEPTED_SCENE_EVENT_TYPES, SceneEventType} from '../../scene/utils/events/SceneEventsController';
import {BaseNodeType} from '../_Base';
import {BaseParamType} from '../../params/_Base';
import {EventConnectionPoint, EventConnectionPointType, BaseEventConnectionPoint} from '../utils/io/connections/Event';
import {TypedInputEventNode, EVENT_PARAM_OPTIONS} from './_BaseInput';
import {EventContext} from '../../scene/utils/events/_BaseEventsController';

enum SceneNodeInput {
	SET_FRAME = 'setFrame',
}
enum SceneNodeOutput {
	TIME_REACHED = 'timeReached',
}
import {NodeParamsConfig, ParamConfig} from '../utils/params/ParamsConfig';
import {CoreGraphNode} from '../../../core/graph/CoreGraphNode';
class SceneEventParamsConfig extends NodeParamsConfig {
	/** @param toggle on to allow any event to be listened to */
	active = ParamConfig.BOOLEAN(true, {
		callback: (node: BaseNodeType, param: BaseParamType) => {
			SceneEventNode.PARAM_CALLBACK_updateRegister(node as SceneEventNode);
		},
		separatorAfter: true,
	});
	/** @param set which element triggers the event */
	element = ParamConfig.INTEGER(0, {
		hidden: true,
	});
	/** @param toggle on to trigger an event when the scene has loaded. This can be useful to initialize other nodes */
	sceneLoaded = ParamConfig.BOOLEAN(1, EVENT_PARAM_OPTIONS);
	/** @param toggle on to trigger an event when the scene starts playing */
	play = ParamConfig.BOOLEAN(1, EVENT_PARAM_OPTIONS);
	/** @param toggle on to trigger an event when the scene pauses */
	pause = ParamConfig.BOOLEAN(1, EVENT_PARAM_OPTIONS);
	/** @param toggle on to trigger an event on every tick */
	tick = ParamConfig.BOOLEAN(1, {
		separatorAfter: true,
		...EVENT_PARAM_OPTIONS,
	});
	/** @param toggle on to trigger an event on every tick */
	treachedTime = ParamConfig.BOOLEAN(0, {
		callback: (node: BaseNodeType) => {
			SceneEventNode.PARAM_CALLBACK_updateTimeDependency(node as SceneEventNode);
		},
	});
	/** @param time to trigger an event */
	reachedTime = ParamConfig.INTEGER(10, {
		visibleIf: {treachedTime: 1},
		range: [0, 100],
		separatorAfter: true,
	});
	/** @param frame to set */
	setFrameValue = ParamConfig.INTEGER(1, {
		range: [0, 100],
	});
	/** @param button to set a specific frame */
	setFrame = ParamConfig.BUTTON(null, {
		callback: (node: BaseNodeType) => {
			SceneEventNode.PARAM_CALLBACK_setFrame(node as SceneEventNode);
		},
	});
}
const ParamsConfig = new SceneEventParamsConfig();

export class SceneEventNode extends TypedInputEventNode<SceneEventParamsConfig> {
	paramsConfig = ParamsConfig;
	static type() {
		return 'scene';
	}

	private _graphNode: CoreGraphNode | undefined;

	protected acceptedEventTypes() {
		return new Set(ACCEPTED_SCENE_EVENT_TYPES.map((n) => `${n}`));
	}

	dispose() {
		this._graphNode?.dispose();
		super.dispose();
	}

	initializeNode() {
		this.io.inputs.setNamedInputConnectionPoints([
			new EventConnectionPoint(
				SceneNodeInput.SET_FRAME,
				EventConnectionPointType.BASE,
				this._onSetFrame.bind(this)
			),
			new EventConnectionPoint(SceneEventType.PLAY, EventConnectionPointType.BASE, this._play.bind(this)),
			new EventConnectionPoint(SceneEventType.PAUSE, EventConnectionPointType.BASE, this._pause.bind(this)),
		]);
		const outConnectionPoints: BaseEventConnectionPoint[] = ACCEPTED_SCENE_EVENT_TYPES.map((event_type) => {
			return new EventConnectionPoint(event_type, EventConnectionPointType.BASE);
		});
		outConnectionPoints.push(new EventConnectionPoint(SceneNodeOutput.TIME_REACHED, EventConnectionPointType.BASE));
		this.io.outputs.setNamedOutputConnectionPoints(outConnectionPoints);

		this.params.onParamsCreated('updateTimeDependency', () => {
			this._updateTimeDependency();
		});
	}

	private _onSetFrame(eventContext: EventContext<Event>) {
		this.scene().setFrame(this.pv.setFrameValue);
	}
	private _play(eventContext: EventContext<Event>) {
		this.scene().play();
	}
	private _pause(eventContext: EventContext<Event>) {
		this.scene().pause();
	}

	private _onFrameUpdate() {
		if (this.scene().time() >= this.pv.reachedTime) {
			this.dispatchEventToOutput(SceneNodeOutput.TIME_REACHED, {});
		}
	}
	private _updateTimeDependency() {
		if (this.pv.treachedTime) {
			this._graphNode = this._graphNode || new CoreGraphNode(this.scene(), 'sceneNodeTimeGraphNode');
			this._graphNode.addGraphInput(this.scene().timeController.graphNode);
			this._graphNode.addPostDirtyHook('timeUpdate', this._onFrameUpdate.bind(this));
		} else {
			if (this._graphNode) {
				this._graphNode.graphDisconnectPredecessors();
			}
		}
	}
	static PARAM_CALLBACK_setFrame(node: SceneEventNode) {
		node._onSetFrame({});
	}
	static PARAM_CALLBACK_updateTimeDependency(node: SceneEventNode) {
		node._updateTimeDependency();
	}
}
