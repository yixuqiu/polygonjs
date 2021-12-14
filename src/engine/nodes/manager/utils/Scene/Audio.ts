import {Constructor} from '../../../../../types/GlobalTypes';
import {BaseNodeType} from '../../../_Base';
import {ParamConfig} from '../../../utils/params/ParamsConfig';
import {RootManagerNode} from '../../Root';
import {isBooleanTrue} from '../../../../../core/Type';

const CallbackOptions = {
	computeOnDirty: false,
	callback: (node: BaseNodeType) => {
		RootAudioController.update(node as RootManagerNode);
	},
};

export function RootAudioParamConfig<TBase extends Constructor>(Base: TBase) {
	return class Mixin extends Base {
		// audio
		/** @param set if a audio icon is shown in the viewer to toggle sound on/off */
		displayAudioIcon = ParamConfig.BOOLEAN(0, {
			...CallbackOptions,
		});
		/** @param set if a audio icon is shown in the viewer to toggle sound on/off */
		audioIconColor = ParamConfig.COLOR([0, 0, 0], {
			...CallbackOptions,
			visibleIf: {displayAudioIcon: 1},
		});
	};
}

export class RootAudioController {
	constructor(protected node: RootManagerNode) {}

	async toggleSound() {
		this.audioListeners().forEach((node) => {
			node.toggleSound();
		});

		this.update();
	}
	soundOn() {
		const listener = this.audioListeners()[0];
		if (listener) {
			return isBooleanTrue(listener.pv.soundOn) || false;
		} else {
			return false;
		}
	}

	update() {
		this._updateViewers();
	}
	audioListeners() {
		return this.node.nodesByType('audioListener');
	}

	private _updateViewers() {
		this.node.scene().viewersRegister.traverseViewers((viewer) => {
			viewer.audioController().update();
		});
	}
	static update(node: RootManagerNode) {
		node.audioController.update();
	}
}
