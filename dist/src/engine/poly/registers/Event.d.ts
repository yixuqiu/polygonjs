import { CameraMapControlsEventNode } from '../../nodes/event/CameraMapControls';
import { CameraOrbitControlsEventNode } from '../../nodes/event/CameraOrbitControls';
import { CodeEventNode } from '../../nodes/event/Code';
import { MouseEventNode } from '../../nodes/event/MouseEvent';
export interface EventNodeChildrenMap {
    camera_orbit_controls: CameraMapControlsEventNode;
    camera_map_controls: CameraOrbitControlsEventNode;
    code: CodeEventNode;
    mouse_event: MouseEventNode;
}
import { Poly } from '../../Poly';
export declare class EventRegister {
    static run(poly: Poly): void;
}
