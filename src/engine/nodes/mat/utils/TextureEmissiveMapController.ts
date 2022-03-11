import {Constructor} from '../../../../types/GlobalTypes';
import {TypedMatNode} from '../_Base';
import {BaseTextureMapController, BooleanParamOptions, NodePathOptions} from './_BaseTextureController';
import {NodeParamsConfig, ParamConfig} from '../../utils/params/ParamsConfig';
import {MeshPhysicalMaterial} from 'three/src/materials/MeshPhysicalMaterial';
import {MeshStandardMaterial} from 'three/src/materials/MeshStandardMaterial';
import {MeshLambertMaterial} from 'three/src/materials/MeshLambertMaterial';
import {MeshToonMaterial} from 'three/src/materials/MeshToonMaterial';

export function EmissiveMapParamConfig<TBase extends Constructor>(Base: TBase) {
	return class Mixin extends Base {
		/** @param emissive color */
		emissive = ParamConfig.COLOR([0, 0, 0], {separatorBefore: true});
		/** @param toggle if you want to use a emissive map */
		useEmissiveMap = ParamConfig.BOOLEAN(0, BooleanParamOptions(TextureEmissiveMapController));
		/** @param specify the emissive map COP node */
		emissiveMap = ParamConfig.NODE_PATH('', NodePathOptions(TextureEmissiveMapController, 'useEmissiveMap'));
		/** @param emissive intensity */
		emissiveIntensity = ParamConfig.FLOAT(1);
	};
}

// class TextureEmissiveMaterial extends Material {
// 	emissive!: Color;
// 	emissiveMap!: Texture | null;
// 	emissiveIntensity!: number;
// }
type TextureEmissiveMapControllerCurrentMaterial =
	| MeshLambertMaterial
	| MeshStandardMaterial
	| MeshPhysicalMaterial
	| MeshToonMaterial;
class TextureEmissiveMapParamsConfig extends EmissiveMapParamConfig(NodeParamsConfig) {}
interface EmissiveControllers {
	emissiveMap: TextureEmissiveMapController;
}
abstract class TextureEmissiveMapMatNode extends TypedMatNode<
	TextureEmissiveMapControllerCurrentMaterial,
	TextureEmissiveMapParamsConfig
> {
	controllers!: EmissiveControllers;
	abstract override createMaterial(): TextureEmissiveMapControllerCurrentMaterial;
}

export class TextureEmissiveMapController extends BaseTextureMapController {
	constructor(protected override node: TextureEmissiveMapMatNode) {
		super(node);
	}
	initializeNode() {
		this.add_hooks(this.node.p.useEmissiveMap, this.node.p.emissiveMap);
	}
	override async update() {
		this._update(this.node.material, 'emissiveMap', this.node.p.useEmissiveMap, this.node.p.emissiveMap);
		// if (this._update_options.uniforms) {
		// 	const mat = this.node.material as ShaderMaterial;
		// 	if (mat.uniforms) {
		// 		mat.uniforms.emissive.value.copy(this.node.pv.emissive);
		// 		// mat.uniforms.emissiveIntensity.value = this.node.pv.emissiveIntensity; // not found in uniforms
		// 	}
		// }
		// if (this._update_options.directParams) {
		const mat = this.node.material as TextureEmissiveMapControllerCurrentMaterial;
		mat.emissive.copy(this.node.pv.emissive);
		mat.emissiveIntensity = this.node.pv.emissiveIntensity;
		// }
	}
	static override async update(node: TextureEmissiveMapMatNode) {
		node.controllers.emissiveMap.update();
	}
}
