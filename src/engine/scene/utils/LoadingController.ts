import {PolyScene} from '../PolyScene';
import {SceneEventType} from './events/SceneEventsController';
import {EventContext} from './events/_BaseEventsController';

export class LoadingController {
	constructor(private scene: PolyScene) {}

	private _LOADED_EVENT_CONTEXT: EventContext<Event> | undefined;
	get LOADED_EVENT_CONTEXT() {
		return (this._LOADED_EVENT_CONTEXT = this._LOADED_EVENT_CONTEXT || {event: new Event(SceneEventType.LOADED)});
	}

	private _loadingState: boolean = false;
	private _autoUpdating: boolean = true;
	// private _firstObjectLoaded: boolean = false;

	markAsLoading() {
		this._setLoadingState(true);
	}
	async markAsLoaded() {
		this.scene.missingExpressionReferencesController.resolveMissingReferences();
		await this._setLoadingState(false);
		this._triggerLoadedEvent();
	}
	private _triggerLoadedEvent() {
		// we only dispatch events in the browser. If this is run from nodejs, we do not.
		if (globalThis.Event) {
			this.scene.eventsDispatcher.sceneEventsController.processEvent(this.LOADED_EVENT_CONTEXT);
		}
	}

	private async _setLoadingState(state: boolean) {
		this._loadingState = state;
		await this.setAutoUpdate(!this._loadingState);
	}
	isLoading() {
		return this._loadingState;
	}
	loaded() {
		return !this._loadingState;
	}
	autoUpdating() {
		return this._autoUpdating;
	}
	async setAutoUpdate(newState: boolean) {
		if (this._autoUpdating !== newState) {
			this._autoUpdating = newState;
			if (this._autoUpdating) {
				// if this.env_is_development()
				// 	this.performance().start()

				const root = this.scene.root();
				if (root) {
					await root.processQueue();
				}
			}
		}
	}

	// on_first_object_loaded() {
	// 	if (!this._firstObjectLoaded) {
	// 		this._firstObjectLoaded = true;

	// 		const loader = document.getElementById('scene_loading_container');
	// 		if (loader) {
	// 			loader.parentElement?.removeChild(loader);
	// 		}
	// 	}
	// }

	// on_all_objects_loaded() {
	// 	// POLY.viewer_loaders_manager().dipose_loaders()
	// }
}
