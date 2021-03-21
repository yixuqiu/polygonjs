import {PolyScene} from '../scene/PolyScene';
import {Vector2} from 'three/src/math/Vector2';
import {ViewerControlsController} from './utils/ControlsController';
import {TypedViewer} from './_Base';
import {BaseThreejsCameraObjNodeType} from '../nodes/obj/_BaseCamera';

const CSS_CLASS = 'CoreThreejsViewer';

declare global {
	interface HTMLCanvasElement {
		onwebglcontextlost: () => void;
		onwebglcontextrestored: () => void;
	}
}

export interface ThreejsViewerProperties {
	autoRender: boolean;
}

type onTimeTickHook = () => void;
type onRenderHook = () => void;
export class ThreejsViewer extends TypedViewer<BaseThreejsCameraObjNodeType> {
	private _request_animation_frame_id: number | undefined;
	private _do_render: boolean = true;

	// tick callbacks
	private _onBeforeTickCallbackNames: string[] | undefined;
	private _onAfterTickCallbackNames: string[] | undefined;
	private _onBeforeTickCallbacks: onTimeTickHook[] | undefined;
	private _onAfterTickCallbacks: onTimeTickHook[] | undefined;
	// render callbacks
	private _onBeforeRenderCallbackNames: string[] | undefined;
	private _onAfterRenderCallbackNames: string[] | undefined;
	private _onBeforeRenderCallbacks: onRenderHook[] | undefined;
	private _onAfterRenderCallbacks: onRenderHook[] | undefined;

	private _animate_method: () => void = this.animate.bind(this);

	constructor(
		_container: HTMLElement,
		protected _scene: PolyScene,
		protected _camera_node: BaseThreejsCameraObjNodeType,
		private _properties?: ThreejsViewerProperties
	) {
		super(_container, _scene, _camera_node);

		this._do_render = this._properties != null ? this._properties.autoRender : true;

		this._canvas = document.createElement('canvas');
		this._canvas.id = `canvas_id_${Math.random()}`.replace('.', '_');
		this._canvas.style.display = 'block';
		this._canvas.style.outline = 'none';

		this._container.appendChild(this._canvas);
		this._container.classList.add(CSS_CLASS);
		// this._container.style.height = '100%'; // this should be app specific

		this._build();
		this._set_events();
	}
	get controlsController(): ViewerControlsController {
		return (this._controls_controller = this._controls_controller || new ViewerControlsController(this));
	}

	public _build() {
		this._init_display();
		this.activate();
	}

	dispose() {
		this._cancel_animate();
		this.controlsController.dispose();
		// TODO: also dispose the renderer
		super.dispose();
	}
	get cameraControlsController() {
		return this._camera_node.controls_controller;
	}

	private _set_events() {
		this.eventsController.init();
		this.webglController.init();

		window.onresize = () => {
			this.onResize();
		};
	}
	onResize() {
		const canvas = this.canvas();
		if (!canvas) {
			return;
		}
		this.camerasController.computeSizeAndAspect();
		this._camera_node.renderController.set_renderer_size(canvas, this.camerasController.size);
		this.camerasController.updateCameraAspect();
	}

	private _init_display() {
		if (!this._canvas) {
			console.warn('no canvas found for viewer');
			return;
		}
		this.camerasController.computeSizeAndAspect();
		const size: Vector2 = this.camerasController.size;

		this._camera_node.renderController.createRenderer(this._canvas, size);
		// this.canvas_context = canvas.getContext('2d')

		// init renderer
		// renderer = new THREE.WebGLRenderer
		// 	canvas: canvas
		// 	antialias: true
		// 	alpha: true

		// renderer.shadowMap.enabled = true
		// this.compute_size_and_aspect()

		//
		// https://stackoverflow.com/questions/31407778/display-scene-at-lower-resolution-in-three-js
		// TODO: this article mentions that setSize should be called after
		// renderer.setSize(this._size[0], this._size[1])
		// renderer.setPixelRatio(window.devicePixelRatio)
		// renderer.setSize(size[0]*1.5, size[1]*1.5)
		// canvas.width = "//{size[0]}px"
		// canvas.height = "//{size[1]}px"
		// canvas.style.width = "//{size[0]}px"
		// canvas.style.height = "//{size[1]}px"

		// TODO: ensure the renderers get added to a list
		//if !this.player_mode
		//	console.log("set window.viewer_renderer from Threejs.vue component")
		// window.viewer_renderer = renderer
		// POLY.renderers_controller.register_renderer(renderer)

		this.camerasController.prepareCurrentCamera();

		this.animate();
	}

	setAutoRender(state = true) {
		this._do_render = state;
		if (this._do_render) {
			this.animate();
		}
	}

	animate() {
		if (this._do_render) {
			this._request_animation_frame_id = requestAnimationFrame(this._animate_method);
			if (this._onBeforeTickCallbacks) {
				for (let callback of this._onBeforeTickCallbacks) {
					callback();
				}
			}
			this._scene.timeController.incrementTimeIfPlaying();
			if (this._onAfterTickCallbacks) {
				for (let callback of this._onAfterTickCallbacks) {
					callback();
				}
			}
			this.render();
			this._controls_controller?.update();
		}
	}

	private _cancel_animate() {
		this._do_render = false;
		if (this._request_animation_frame_id) {
			cancelAnimationFrame(this._request_animation_frame_id);
		}
		if (this._canvas) {
			this._camera_node.renderController.delete_renderer(this._canvas);
		}
	}

	render() {
		if (this.camerasController.cameraNode() && this._canvas) {
			if (this._onBeforeRenderCallbacks) {
				for (let callback of this._onBeforeRenderCallbacks) {
					callback();
				}
			}
			const size = this.camerasController.size;
			const aspect = this.camerasController.aspect;
			this._camera_node.renderController.render(this._canvas, size, aspect);
			if (this._onAfterRenderCallbacks) {
				for (let callback of this._onAfterRenderCallbacks) {
					callback();
				}
			}
		} else {
			console.warn('no camera to render with');
		}
	}

	renderer() {
		if (this._canvas) {
			return this._camera_node.renderController.renderer(this._canvas);
		}
	}

	//
	//
	// CALLBACKS
	//
	//
	registerOnBeforeTick(callbackName: string, callback: onTimeTickHook) {
		this._onBeforeTickCallbacks = this._onBeforeTickCallbacks || [];
		this._onBeforeTickCallbackNames = this._onBeforeTickCallbackNames || [];
		this._onBeforeTickCallbacks.push(callback);
		this._onBeforeTickCallbackNames.push(callbackName);
	}
	unRegisterOnBeforeTick(callbackName: string) {
		if (!this._onBeforeTickCallbackNames) {
			return;
		}
		if (!this._onBeforeTickCallbacks) {
			return;
		}
		const index = this._onBeforeTickCallbackNames.indexOf(callbackName);
		this._onBeforeTickCallbackNames.splice(index, 1);
		this._onBeforeTickCallbacks.splice(index, 1);
	}
	registeredBeforeTickCallbackNames() {
		return this._onBeforeTickCallbackNames;
	}
	registerOnAfterTick(callbackName: string, callback: onTimeTickHook) {
		this._onAfterTickCallbacks = this._onAfterTickCallbacks || [];
		this._onAfterTickCallbackNames = this._onAfterTickCallbackNames || [];
		this._onAfterTickCallbacks.push(callback);
		this._onAfterTickCallbackNames.push(callbackName);
	}
	unRegisterOnAfterTick(callbackName: string) {
		if (!this._onAfterTickCallbackNames) {
			return;
		}
		if (!this._onAfterTickCallbacks) {
			return;
		}
		const index = this._onAfterTickCallbackNames.indexOf(callbackName);
		this._onAfterTickCallbackNames.splice(index, 1);
		this._onAfterTickCallbacks.splice(index, 1);
	}
	registeredAfterTickCallbackNames() {
		return this._onAfterTickCallbackNames;
	}
	registerOnBeforeRender(callbackName: string, callback: onRenderHook) {
		this._onBeforeRenderCallbacks = this._onBeforeRenderCallbacks || [];
		this._onBeforeRenderCallbackNames = this._onBeforeRenderCallbackNames || [];
		this._onBeforeRenderCallbacks.push(callback);
		this._onBeforeRenderCallbackNames.push(callbackName);
	}
	unRegisterOnBeforeRender(callbackName: string) {
		if (!this._onBeforeRenderCallbackNames) {
			return;
		}
		if (!this._onBeforeRenderCallbacks) {
			return;
		}
		const index = this._onBeforeRenderCallbackNames.indexOf(callbackName);
		this._onBeforeRenderCallbackNames.splice(index, 1);
		this._onBeforeRenderCallbacks.splice(index, 1);
	}
	registeredBeforeRenderCallbackNames() {
		return this._onBeforeRenderCallbackNames;
	}
	registerOnAfterRender(callbackName: string, callback: onRenderHook) {
		this._onAfterRenderCallbacks = this._onAfterRenderCallbacks || [];
		this._onAfterRenderCallbackNames = this._onAfterRenderCallbackNames || [];
		this._onAfterRenderCallbacks.push(callback);
		this._onAfterRenderCallbackNames.push(callbackName);
	}
	unRegisterOnAfterRender(callbackName: string) {
		if (!this._onAfterRenderCallbackNames) {
			return;
		}
		if (!this._onAfterRenderCallbacks) {
			return;
		}
		const index = this._onAfterRenderCallbackNames.indexOf(callbackName);
		this._onAfterRenderCallbackNames.splice(index, 1);
		this._onAfterRenderCallbacks.splice(index, 1);
	}
	registeredAfterRenderCallbackNames() {
		return this._onAfterRenderCallbackNames;
	}
}
