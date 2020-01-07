import {BaseViewer} from '../_Base'

const HOVERED_CLASS_NAME = 'hovered'

export function ContainerClass<TBase extends Constructor>(Base: TBase) {
	return class Mixin extends Base {
		protected self: BaseViewer = (<unknown>this) as BaseViewer

		reset_container_class() {
			this.self._element.classList.remove(HOVERED_CLASS_NAME)
		}
		set_container_class_hovered() {
			this.self._element.classList.add(HOVERED_CLASS_NAME)
		}
	}
}
