import {WebGLRenderer} from 'three/src/renderers/WebGLRenderer';
import {WebGLRenderTarget} from 'three/src/renderers/WebGLRenderTarget';
import {LinearFilter, RGBAFormat, ACESFilmicToneMapping, sRGBEncoding} from 'three/src/constants';
import {Vector2} from 'three/src/math/Vector2';

import lodash_range from 'lodash/range';
import {BaseParam} from 'src/engine/params/_Base';
import {BaseNodePostProcess} from 'src/engine/nodes/post/_Base';
import {BaseCamera} from '../_BaseCamera';
import {EffectComposer} from 'modules/three/examples/jsm/postprocessing/EffectComposer';
import {RenderPass} from 'modules/three/examples/jsm/postprocessing/RenderPass';

// const TONE_MAPPINGS = [
// 	export enum ToneMapping {}
// 	export const NoToneMapping: ToneMapping;
// 	export const LinearToneMapping: ToneMapping;
// 	export const ReinhardToneMapping: ToneMapping;
// 	export const Uncharted2ToneMapping: ToneMapping;
// 	export const CineonToneMapping: ToneMapping;
// 	export const ACESFilmicToneMapping: ToneMapping;
// ]

// const TEXTURE_ENCODING = [
// 	export enum TextureEncoding {}
// 	export const LinearEncoding: TextureEncoding;
// 	export const sRGBEncoding: TextureEncoding;
// 	export const GammaEncoding: TextureEncoding;
// 	export const RGBEEncoding: TextureEncoding;
// 	export const LogLuvEncoding: TextureEncoding;
// 	export const RGBM7Encoding: TextureEncoding;
// 	export const RGBM16Encoding: TextureEncoding;
// 	export const RGBDEncoding: TextureEncoding;
// ]

interface BooleanByString {
	[propName: string]: boolean;
}
interface RendererByString {
	[propName: string]: WebGLRenderer;
}
interface EffectComposerByString {
	[propName: string]: EffectComposer;
}
interface ResolutionByString {
	[propName: string]: Vector2;
}

export function PostProcess<TBase extends Constructor>(Base: TBase) {
	return class Mixin extends Base {
		protected self: BaseCamera = (<unknown>this) as BaseCamera;

		private _param_do_post_process: boolean;
		// private _param_do_sao: boolean;
		private _renderers_by_canvas_id: RendererByString = {};
		private _composers_by_canvas_id: EffectComposerByString = {};
		private _resolution_by_canvas_id: ResolutionByString = {};
		private _composers_set_in_progress_by_canvas_id: BooleanByString = {};
		private _fetch_post_process_nodes_in_progress: boolean;
		// private _render_passes: any[] = []
		private _post_process_nodes: BaseNodePostProcess[] = [];

		private _post_process_use_node_path_params: BaseParam[] = [];
		private _post_process_node_path_params: BaseParam[] = [];
		// private _previous_post_process_nodes_paths: string

		// private _fuse_activedesign = new FuseActiveDesignPass()

		using_activedesign(): boolean {
			// COMMENT NEXT LINE WHEN EXPORTING WITH WATERMARK FOR ACTIVEDESIGN
			return false;
			return true;
		}

		render(canvas: HTMLCanvasElement, size: Vector2, aspect: number) {
			const renderer = this.renderer(canvas);
			if (renderer) {
				if (this._param_do_post_process || this.using_activedesign()) {
					const composer = this.composer(canvas);
					if (composer) {
						composer.setSize(size.x, size.y);
						composer.render();
					}
				} else {
					this.self.setup_for_aspect_ratio(aspect);
					renderer.render(this._display_scene, this.self._object);
				}
			}
		}

		private renderer(canvas: HTMLCanvasElement) {
			return this._renderers_by_canvas_id[canvas.id];
		}

		create_renderer(canvas: HTMLCanvasElement, size: Vector2): WebGLRenderer {
			const gl = window.POLY.renderers_controller.rendering_context(canvas);

			const renderer = new WebGLRenderer({
				canvas: canvas,
				antialias: true,
				alpha: true,
				context: gl,
			});

			renderer.shadowMap.enabled = true;
			renderer.physicallyCorrectLights = true; // https://discourse.threejs.org/t/three-js-white-is-too-bright/11873/3

			// TODO: find a way to have those accessible via params
			renderer.toneMapping = ACESFilmicToneMapping;
			renderer.toneMappingExposure = 1;
			renderer.outputEncoding = sRGBEncoding;

			// https://github.com/mrdoob/js/issues/15493
			// This below is an attempt to fix env map not being loaded in firefox, but that doesn't work.
			// Since the threejs example (https://threejs.org/examples/?q=exr#webgl_materials_envmaps_exr) also only works in chrome, not in firefox, I assume this is a firefox+linux bug
			// console.log(renderer.extensions)
			// renderer.extensions.get( 'EXT_color_buffer_float' );

			// attempt to have particle systems work in firefox on mobile
			// (current solution is to have the node SOP/particlesSystemGPU force webgl2 to be used)
			// renderer.extensions.get( 'WEBGL_color_buffer_float' );
			// renderer.extensions.get( 'WEBGL_draw_buffers' );

			window.POLY.renderers_controller.register_renderer(renderer);
			this._renderers_by_canvas_id[canvas.id] = renderer;
			this.set_renderer_size(canvas, size);
			renderer.setPixelRatio(window.devicePixelRatio);

			return renderer;
		}
		delete_renderer(canvas: HTMLCanvasElement) {
			const renderer = this.renderer(canvas);
			if (renderer) {
				window.POLY.renderers_controller.deregister_renderer(renderer);
			}
		}
		set_renderer_size(canvas: HTMLCanvasElement, size: Vector2) {
			this._resolution_by_canvas_id[canvas.id] = this._resolution_by_canvas_id[canvas.id] || new Vector2();
			this._resolution_by_canvas_id[canvas.id].copy(size);

			const renderer = this.renderer(canvas);
			if (renderer) {
				renderer.setSize(size.x, size.y);
			}
			const composer = this.composer(canvas);
			if (composer) {
				composer.setSize(size.x, size.y);
			}
		}

		private composer(canvas: HTMLCanvasElement): EffectComposer {
			return (this._composers_by_canvas_id[canvas.id] =
				this._composers_by_canvas_id[canvas.id] || this._create_composer(canvas));
		}

		private _create_composer(canvas: HTMLCanvasElement) {
			const renderer = this.renderer(canvas);
			if (renderer) {
				// const parameters = {
				// 	minFilter: LinearFilter,
				// 	magFilter: LinearFilter,
				// 	format: RGBAFormat,
				// 	stencilBuffer: true
				// }
				// const renderTarget = new WebGLRenderTarget( window.innerWidth, window.innerHeight, parameters );
				const composer = new EffectComposer(renderer); //, renderTarget );
				// to achieve better antialiasing
				// while using post:
				// composer.setPixelRatio( window.devicePixelRatio*2 )
				composer.setPixelRatio(window.devicePixelRatio * 2);
				this.set_composer_passes(canvas.id, composer, renderer);

				return composer;
			} /*else {
				console.warn(this._renderers_by_canvas_id)
				throw "failed to create composer, no renderer ready"
			}*/
		}

		protected async update_composer_passes() {
			if (this._param_do_post_process) {
				this._post_process_nodes = [];
				if (this._fetch_post_process_nodes_in_progress) {
					return;
				}
				this._fetch_post_process_nodes_in_progress = true;

				if (this.composer_passes_nodes_changed()) {
					this._post_process_nodes = [];

					for (let i of lodash_range(4)) {
						const toggle_param = this._post_process_use_node_path_params[i];
						// const use_node = await toggle_param.eval_p()
						const tcache_name = this.self.param_cache_name(toggle_param.name());
						const use_node = this[tcache_name];
						if (use_node) {
							const param = this._post_process_node_path_params[i];
							const post_process_node = param.found_node();
							if (post_process_node) {
								await post_process_node.request_container_p();
								// const render_pass = container.render_pass()
								// this._render_passes.push(render_pass)
								this._post_process_nodes.push(post_process_node);
							}
						}
					}

					this.set_composers_passes();
					// this._previous_post_process_nodes_paths = this.composer_passes_nodes_paths()
				}
				this._fetch_post_process_nodes_in_progress = false;
			} else {
				this._post_process_nodes = [];
			}
		}

		private set_composers_passes() {
			const ids = Object.keys(this._composers_by_canvas_id);

			for (let id of ids) {
				const composer = this._composers_by_canvas_id[id];
				const renderer = this._renderers_by_canvas_id[id];
				if (composer) {
					this.set_composer_passes(id, composer, renderer);
				}
			}
		}

		private set_composer_passes(id: string, composer: EffectComposer, renderer: WebGLRenderer) {
			const set_in_progress = this._composers_set_in_progress_by_canvas_id[id];
			if (set_in_progress) {
				return;
			}
			this._composers_set_in_progress_by_canvas_id[id] = true;

			this.clear_render_passes(composer);

			const render_scene_pass = new RenderPass(this._display_scene, this._object);
			render_scene_pass.clearAlpha = 0;
			composer.addPass(render_scene_pass);

			for (let post_process_node of this._post_process_nodes) {
				post_process_node.apply_to_composer(composer, this._object, this._resolution_by_canvas_id[id], this);
			}
			delete this._composers_set_in_progress_by_canvas_id[id];

			// if(this.using_activedesign()){
			// 	const pass = this._fuse_activedesign.pass()
			// 	if(pass){
			// 		composer.addPass(pass)
			// 	}
			// }
		}

		private clear_render_passes(composer: EffectComposer) {
			let render_pass;
			while ((render_pass = composer.passes.pop())) {
				if (render_pass.dispose) {
					try {
						render_pass.dispose();
					} catch (e) {
						console.warn(e);
					}
				}
			}
			// this._render_passes = []
			composer.passes = [];
		}

		private composer_passes_nodes_changed(): boolean {
			return true;
			// I have to evaluate the nodes anyway, in case they changed
			// unless I can create a method that can store if one of those nodes are the ones that
			// made this current node dirty
		}

		private create_post_process_params() {
			this.self.within_param_folder('post_process', () => {
				this.self.add_param(ParamType.BOOLEAN, 'do_post_process', 0);

				lodash_range(4).forEach((i) => {
					const toggle_param = this.self.add_param(ParamType.BOOLEAN, `use_post_process_node${i + 1}`, 0, {
						visible_if: {do_post_process: 1},
					});

					const visible_options = {
						do_post_process: 1,
					};
					visible_options[toggle_param.name()] = 1;
					const node_path_options = {
						node_selection: {context: NodeContext.POST},
						visible_if: visible_options,
					};
					const param = this.self.add_param(
						ParamType.OPERATOR_PATH,
						`post_process_node${i + 1}`,
						'',
						node_path_options
					);

					this._post_process_use_node_path_params.push(toggle_param);
					this._post_process_node_path_params.push(param);
				});
			});
		}
	};
}
