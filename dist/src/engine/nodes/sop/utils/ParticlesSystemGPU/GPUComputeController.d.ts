import { DataTexture } from 'three/src/textures/DataTexture';
import { CoreGroup } from '../../../../../core/geometry/Group';
import { GPUComputationRenderer } from './GPUComputationRenderer';
import { ParticlesSystemGpuSopNode } from '../../ParticlesSystemGpu';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
import { WebGLRenderTarget } from 'three/src/renderers/WebGLRenderTarget';
import { ShaderMaterial } from 'three/src/materials/ShaderMaterial';
import { CorePoint } from '../../../../../core/geometry/Point';
import { ShaderName } from '../../../utils/shaders/ShaderName';
interface GPUComputationRendererVariable {
    name: string;
    renderTargets: WebGLRenderTarget[];
    material: ShaderMaterial;
}
interface GPUComputationRenderer {
    new (x: number, y: number, renderer: WebGLRenderer): GPUComputationRenderer;
    compute(): void;
    init(): string | null;
    addVariable(name: string, fragment_shader: string, variable: DataTexture): GPUComputationRendererVariable;
    setVariableDependencies(variable: GPUComputationRendererVariable, vars: GPUComputationRendererVariable[]): void;
    renderTexture(texture: DataTexture, render_target: WebGLRenderTarget): void;
    createTexture(): DataTexture;
    getCurrentRenderTarget(variable: GPUComputationRendererVariable): WebGLRenderTarget;
}
export declare class ParticlesSystemGpuComputeController {
    private node;
    protected _gpu_compute: GPUComputationRenderer | undefined;
    protected _simulation_restart_required: boolean;
    protected _renderer: WebGLRenderer | undefined;
    protected _particles_core_group: CoreGroup | undefined;
    protected _points: CorePoint[];
    private variables_by_name;
    private _created_textures_by_name;
    private _shaders_by_name;
    protected _last_simulated_frame: number | undefined;
    private _used_textures_size;
    constructor(node: ParticlesSystemGpuSopNode);
    set_shaders_by_name(shaders_by_name: Map<ShaderName, string>): void;
    init(core_group: CoreGroup): Promise<void>;
    getCurrentRenderTarget(shader_name: ShaderName): WebGLRenderTarget | undefined;
    init_particle_group_points(core_group: CoreGroup): void;
    compute_similation_if_required(): void;
    private _compute_simulation;
    create_gpu_compute(): Promise<void>;
    private create_simulation_material_uniforms;
    private update_simulation_material_uniforms;
    private _init_particles_uvs;
    created_textures_by_name(): Map<ShaderName, DataTexture>;
    private _fill_textures;
    reset_gpu_compute(): void;
    set_restart_not_required(): void;
    reset_gpu_compute_and_set_dirty(): void;
    reset_particle_groups(): void;
    get initialized(): boolean;
    private _create_texture_render_targets;
    restart_simulation_if_required(): void;
    private _restart_simulation;
    private _get_points;
}
export {};
