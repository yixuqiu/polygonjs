import {PolyScene} from 'src/engine/scene/PolyScene';
import {Vector2} from 'three/src/math/Vector2';
import {IUniform} from 'three/src/renderers/shaders/UniformsLib';

type IUniformsDictionary = Dictionary<IUniform>;
interface IUniformsDictionaryWithFrame extends IUniformsDictionary {
	frame: IUniform;
}
interface IUniformsDictionaryWithResolution extends IUniformsDictionary {
	resolution: {
		value: Vector2Like;
	};
}

export class UniformsController {
	constructor(private scene: PolyScene) {}

	private _frame_dependent_uniform_owners: Dictionary<IUniformsDictionaryWithFrame> = {}; //new Map()
	private _frame_dependent_uniform_owners_ids: string[] | null = null;

	private _resolution: Vector2;
	private _resolution_dependent_uniform_owners: Dictionary<IUniformsDictionaryWithResolution> = {};
	private _resolution_dependent_uniform_owners_ids: string[] = [];

	// frame
	add_frame_dependent_uniform_owner(id: string, uniforms: IUniformsDictionaryWithFrame) {
		this._frame_dependent_uniform_owners[id] = uniforms;
		this._update_frame_dependent_uniform_owners_ids();
	}
	remove_frame_dependent_uniform_owner(id: string) {
		delete this._frame_dependent_uniform_owners[id];
		this._update_frame_dependent_uniform_owners_ids();
	}
	protected _update_frame_dependent_uniform_owners_ids() {
		this._frame_dependent_uniform_owners_ids = Object.keys(this._frame_dependent_uniform_owners);
	}
	public update_frame_dependent_uniform_owners() {
		const frame = this.scene.frame;
		if (this._frame_dependent_uniform_owners_ids) {
			for (let id of this._frame_dependent_uniform_owners_ids) {
				const uniforms = this._frame_dependent_uniform_owners[id];
				uniforms.frame.value = frame;
			}
		}
	}

	// resolution
	add_resolution_dependent_uniform_owner(id: string, uniforms: IUniformsDictionaryWithResolution) {
		this._resolution_dependent_uniform_owners[id] = uniforms;
		this._update_resolution_dependent_uniform_owners_ids();
		if (this._resolution) {
			this.update_resolution_dependent_uniforms(uniforms);
		}
	}
	remove_resolution_dependent_uniform_owner(id: string) {
		delete this._resolution_dependent_uniform_owners[id];
		this._update_resolution_dependent_uniform_owners_ids();
	}
	protected _update_resolution_dependent_uniform_owners_ids() {
		this._resolution_dependent_uniform_owners_ids = Object.keys(this._resolution_dependent_uniform_owners);
	}
	update_resolution_dependent_uniform_owners(resolution: Vector2) {
		this._resolution = this._resolution || new Vector2();
		this._resolution.copy(resolution);
		for (let id of this._resolution_dependent_uniform_owners_ids) {
			const uniforms = this._resolution_dependent_uniform_owners[id];
			this.update_resolution_dependent_uniforms(uniforms);
		}
	}
	update_resolution_dependent_uniforms(uniforms: IUniformsDictionaryWithResolution) {
		uniforms.resolution.value.x = this._resolution.x * window.devicePixelRatio;
		uniforms.resolution.value.y = this._resolution.y * window.devicePixelRatio;
	}
}
