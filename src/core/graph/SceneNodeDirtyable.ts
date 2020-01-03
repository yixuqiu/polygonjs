import {Scene} from 'three/src/scenes/Scene'
import {PolyScene} from 'src/engine/scene/PolyScene'
import {CoreObject} from 'src/core/Object'
import {Dirtyable} from './concerns/Dirtyable'
// import {Scene} from 'src/engine/Scene'
// import {Cooker} from './Cooker'
import {GraphNode} from './concerns/GraphNode'

export class SceneNodeDirtyable extends GraphNode(Dirtyable(CoreObject)) {
	_scene: PolyScene
	_display_scene: Scene

	constructor() {
		super()
	}

	scene() {
		return this._scene
	}
	cooker() {
		return this._scene.cooker()
	}

	dirty_successors(): Array<SceneNodeDirtyable> {
		return this.graph_successors()
	}
	set_scene(scene: PolyScene) {
		console.warn(this)
		throw 'SceneNodeDirtyable.set_scene requires implementation'
	}
	// graph_successors(): Array<SceneNodeDirtyable> {
	// 	console.warn(this)
	// 	throw 'SceneNodeDirtyable.graph_successors requires implementation'
	// 	return []
	// }
}
