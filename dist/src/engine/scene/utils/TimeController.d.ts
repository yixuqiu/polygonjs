import { PolyScene } from '../PolyScene';
import { CoreGraphNode } from '../../../core/graph/CoreGraphNode';
import { EventContext } from './events/_BaseEventsController';
declare type FrameRange = Number2;
export declare class TimeController {
    private scene;
    private _frame;
    private _time;
    private _prev_performance_now;
    private _graph_node;
    private _frame_range;
    private _realtime_state;
    private _frame_range_locked;
    private _playing;
    private _PLAY_EVENT_CONTEXT;
    private _PAUSE_EVENT_CONTEXT;
    private _TICK_EVENT_CONTEXT;
    get PLAY_EVENT_CONTEXT(): EventContext<Event>;
    get PAUSE_EVENT_CONTEXT(): EventContext<Event>;
    get TICK_EVENT_CONTEXT(): EventContext<Event>;
    constructor(scene: PolyScene);
    get graph_node(): CoreGraphNode;
    get frame(): number;
    get time(): number;
    get frame_range(): FrameRange;
    get frame_range_locked(): [boolean, boolean];
    get realtime_state(): boolean;
    set_frame_range(start_frame: number, end_frame: number): void;
    set_frame_range_locked(start_locked: boolean, end_locked: boolean): void;
    set_realtime_state(state: boolean): void;
    set_time(time: number, update_frame?: boolean): void;
    set_frame(frame: number, update_time?: boolean): void;
    increment_time_if_playing(): void;
    increment_time(): void;
    _ensure_frame_within_bounds(frame: number): number;
    get playing(): boolean;
    pause(): void;
    play(): void;
    toggle_play_pause(): void;
}
export {};
