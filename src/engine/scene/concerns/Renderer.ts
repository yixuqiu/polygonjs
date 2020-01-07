import {PolyScene} from 'src/engine/scene/PolyScene'
import 'src/engine/Poly'
// import {BaseNode} from 'src/engine/nodes/_Base'

export function Renderer<TBase extends Constructor>(Base: TBase) {
	return class extends Base {
		protected self: PolyScene = (<unknown>this) as PolyScene

		_require_webgl2: boolean = false

		require_webgl2() {
			return this._require_webgl2
		}
		set_require_webgl2() {
			if (!this._require_webgl2) {
				this._require_webgl2 = true
				POLY.renderers_controller.set_require_webgl2()
			}
		}
	}
}
