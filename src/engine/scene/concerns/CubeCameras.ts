import {PolyScene} from '../PolyScene'
import {CubeCamerasController} from 'src/renderers/CubeCamerasController'

export function CubeCameras<TBase extends Constructor>(Base: TBase) {
	return class extends Base {
		protected self: PolyScene = (<unknown>this) as PolyScene

		_cube_cameras_controller: CubeCamerasController

		_init_cube_cameras_controller() {
			this._cube_cameras_controller = new CubeCamerasController(this.self)
		}
		cube_cameras_controller() {
			return this._cube_cameras_controller
		}
	}
}
