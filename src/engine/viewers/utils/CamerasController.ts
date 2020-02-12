// import {Camera} from 'three/src/cameras/Camera';
import {Vector2} from 'three/src/math/Vector2';
import {BaseCameraObjNodeType} from 'src/engine/nodes/obj/_BaseCamera';
import {BaseViewer} from '../_Base';

export class CamerasController {
	// private _is_active: boolean = false;
	private _camera_node: BaseCameraObjNodeType | null = null;
	// private _camera: Camera;

	private _size: Vector2 = new Vector2(100, 100);
	private _aspect: number = 1;
	// private current_camera_controls_node_graph_id: number = null;

	constructor(private viewer: BaseViewer) {}

	// activate() {
	// 	this._is_active = true;
	// }
	set_camera_node(camera_node: BaseCameraObjNodeType) {
		if (!this._camera_node || camera_node.graph_node_id != this._camera_node.graph_node_id) {
			this._camera_node = camera_node;
			// this._camera = camera_node.object;
		}
	}
	get camera_node() {
		return this._camera_node;
	}
	get size() {
		return this._size;
	}
	get aspect() {
		return this._aspect;
	}

	on_resize() {
		this.compute_size_and_aspect();
		this._camera_node?.post_process_controller.set_renderer_size(this.viewer.canvas, this._size);
		console.log('cameras_controller on_resize', this._camera_node, this._size);
		this.update_camera_aspect();
	}
	compute_size_and_aspect() {
		this._update_size();
		this._camera_node?.scene.uniforms_controller.update_resolution_dependent_uniform_owners(this._size);
		this._aspect = this._get_aspect();
	}

	private _update_size() {
		this._size.x = this.viewer.container.offsetWidth;
		this._size.y = this.viewer.container.offsetHeight;
	}
	private _get_aspect(): number {
		return this._size.x / this._size.y;
	}

	update_camera_aspect() {
		this._camera_node?.setup_for_aspect_ratio(this._aspect);
	}
	// dispose_camera: ->
	// 	this.$emit('before_controls_apply', null)
	// 	// if @_controls?
	// 	// 	@_controls.dispose()
	// 	// camera_graph_node_id ?= this.current_camera_node_graph_id
	// 	// camera_node = this.$store.scene.graph().node_from_id(camera_graph_node_id)
	// 	// this.current_camera_node.dipose_controls()
	// 	//if this.current_camera_node?
	// 	//	this.current_camera_node.dispose_controls()
	async prepare_current_camera() {
		if (this._camera_node) {
			// we dispose the controls first, so they can be applied
			// if they were not disposed properly when we closed the viewer
			// but I'm now trying in the destroyed callback
			//this.current_camera_node.dispose_controls()

			//this.current_camera_node.apply_controls()
			//this.current_camera_node.prepare_for_viewer(this.aspect())
			// const name = this.current_camera_node.name()
			// const graph_node_id = this._camera_node.graph_node_id
			/*const container = */ await this._camera_node.request_container(); // ensure the camera is cooked
			await this._update_from_camera_container(); //container, graph_node_id)
		}
	}
	// remove_cloned_camera: ->
	// 	if @_current_camera?
	// 		@_current_camera.camera_source.node.remove_clone(@_current_camera)

	async _update_from_camera_container() {
		//container, graph_node_id:number){
		// ensure that we get the same as we requested
		// if(graph_node_id == this._camera_node.graph_node_id){

		// this.remove_cloned_camera()
		// cloned_camera = this.current_camera_node.clone_camera()
		// @_current_camera = cloned_camera
		this.update_camera_aspect();

		//this.dispose_camera()

		// @_is_active is use to check if the component has been destroyed
		// which can happen on app load, but also when user switches the camera menu

		// if this.current_camera_controls_node_graph_id == null || ()

		// if(@_is_active == true)
		await this.viewer.controls_controller.create_controls();

		// }
	}
}
