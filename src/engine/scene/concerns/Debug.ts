import {Scene} from 'three/src/scenes/Scene'
// import {Object3D} from 'three/src/core/Object3D'

// import PrintTree from 'print-tree'

import {PolyScene} from 'src/engine/scene/PolyScene'
import {BaseNode} from 'src/engine/nodes/_Base'

export function Debug<TBase extends Constructor>(Base: TBase) {
	return class extends Base {
		protected self: PolyScene = (<unknown>this) as PolyScene
		_display_scene: Scene

		// print_children(){
		// 	const get_name = (node: Object3D)=>{
		// 		return `${node.name} ----- (${node.uuid})`
		// 	}
		// 	const get_children = (node: any)=>{
		// 		return node.children;
		// 	}
		// 	PrintTree( this._display_scene, get_name, get_children )
		// }

		convert_positions_from_network_gl() {
			const root = this.self.root()
			console.log(root)
			this.node_convert_positions_from_network_gl(root)
		}

		node_convert_positions_from_network_gl(node: BaseNode) {
			const ui_data = node.ui_data()
			console.log(node.name(), node.ui_data().position())
			const new_pos = ui_data.position().clone()
			new_pos.x *= 50
			new_pos.y *= -50
			ui_data.set_position(new_pos)

			const nodes = node.children()
			nodes.forEach((node) => {
				this.node_convert_positions_from_network_gl(node)
			})
		}
	}
}
