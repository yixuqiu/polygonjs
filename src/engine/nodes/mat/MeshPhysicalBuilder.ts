/**
 * Creates a Mesh Physical Material, which can be extended with GL nodes.
 *
 * @remarks
 * This node can create children, which will be GL nodes. The GLSL code generated by the nodes will extend the Material.
 *
 */
import {NodeParamsConfig} from '../utils/params/ParamsConfig';
import {ColorParamConfig, ColorsController} from './utils/UniformsColorsController';
import {AdvancedCommonController, AdvancedCommonParamConfig} from './utils/AdvancedCommonController';
import {SkinningParamConfig, SkinningController} from './utils/SkinningController';
import {TextureMapParamConfig, TextureMapController} from './utils/TextureMapController';
import {TextureAlphaMapParamConfig, TextureAlphaMapController} from './utils/TextureAlphaMapController';
import {TextureBumpMapController, TextureBumpMapParamConfig} from './utils/TextureBumpMapController';
import {TextureEmissiveMapController, TextureEmissiveMapParamConfig} from './utils/TextureEmissiveMapController';
import {TextureEnvMapController, TextureEnvMapParamConfig} from './utils/TextureEnvMapController';
import {TextureAOMapController, TextureAOMapParamConfig} from './utils/TextureAOMapController';
import {TextureNormalMapController, TextureNormalMapParamConfig} from './utils/TextureNormalMapController';
import {TextureRoughnessMapController, TextureRoughnessMapParamConfig} from './utils/TextureRoughnessMapController';
import {TextureMetalnessMapController, TextureMetalnessMapParamConfig} from './utils/TextureMetalnessMapController';
import {TextureLightMapController, TextureLightMapParamConfig} from './utils/TextureLightMapController';
import {MeshPhysicalController, MeshPhysicalParamConfig} from './utils/MeshPhysicalController';
import {
	TextureDisplacementMapController,
	TextureDisplacementMapParamConfig,
} from './utils/TextureDisplacementMapController';
import {TypedBuilderMatNode} from './_BaseBuilder';
import {ShaderAssemblerPhysical} from '../gl/code/assemblers/materials/Physical';
import {AssemblerName} from '../../poly/registers/assemblers/_BaseRegister';
import {Poly} from '../../Poly';
import {FogParamConfig, FogController} from './utils/UniformsFogController';
import {WireframeController, WireframeParamConfig} from './utils/WireframeShaderMaterialController';
import {DefaultFolderParamConfig} from './utils/DefaultFolder';
import {TexturesFolderParamConfig} from './utils/TexturesFolder';
import {AdvancedFolderParamConfig} from './utils/AdvancedFolder';

const CONTROLLER_OPTIONS = {
	uniforms: true,
};
interface Controllers {
	advancedCommon: AdvancedCommonController;
	alphaMap: TextureAlphaMapController;
	aoMap: TextureAOMapController;
	bumpMap: TextureBumpMapController;
	displacementMap: TextureDisplacementMapController;
	emissiveMap: TextureEmissiveMapController;
	envMap: TextureEnvMapController;
	lightMap: TextureLightMapController;
	map: TextureMapController;
	metalnessMap: TextureMetalnessMapController;
	normalMap: TextureNormalMapController;
	physical: MeshPhysicalController;
	roughnessMap: TextureRoughnessMapController;
}
class MeshPhysicalMatParamsConfig extends FogParamConfig(
	SkinningParamConfig(
		WireframeParamConfig(
			AdvancedCommonParamConfig(
				/* advanced */
				AdvancedFolderParamConfig(
					MeshPhysicalParamConfig(
						TextureMetalnessMapParamConfig(
							TextureRoughnessMapParamConfig(
								TextureEnvMapParamConfig(
									TextureLightMapParamConfig(
										TextureNormalMapParamConfig(
											TextureBumpMapParamConfig(
												TextureDisplacementMapParamConfig(
													TextureAOMapParamConfig(
														TextureEmissiveMapParamConfig(
															TextureAlphaMapParamConfig(
																TextureMapParamConfig(
																	/* textures */
																	TexturesFolderParamConfig(
																		ColorParamConfig(
																			DefaultFolderParamConfig(NodeParamsConfig)
																		)
																	)
																)
															)
														)
													)
												)
											)
										)
									)
								)
							)
						)
					)
				)
			)
		)
	)
) {}
const ParamsConfig = new MeshPhysicalMatParamsConfig();

export class MeshPhysicalBuilderMatNode extends TypedBuilderMatNode<
	ShaderAssemblerPhysical,
	MeshPhysicalMatParamsConfig
> {
	params_config = ParamsConfig;
	static type() {
		return 'meshPhysicalBuilder';
	}
	public usedAssembler(): Readonly<AssemblerName.GL_MESH_PHYSICAL> {
		return AssemblerName.GL_MESH_PHYSICAL;
	}
	protected _create_assembler_controller() {
		return Poly.assemblersRegister.assembler(this, this.usedAssembler());
	}
	readonly controllers: Controllers = {
		advancedCommon: new AdvancedCommonController(this),
		alphaMap: new TextureAlphaMapController(this, CONTROLLER_OPTIONS),
		aoMap: new TextureAOMapController(this, CONTROLLER_OPTIONS),
		bumpMap: new TextureBumpMapController(this, CONTROLLER_OPTIONS),
		displacementMap: new TextureDisplacementMapController(this, CONTROLLER_OPTIONS),
		emissiveMap: new TextureEmissiveMapController(this, CONTROLLER_OPTIONS),
		envMap: new TextureEnvMapController(this, CONTROLLER_OPTIONS),
		lightMap: new TextureLightMapController(this, CONTROLLER_OPTIONS),
		map: new TextureMapController(this, CONTROLLER_OPTIONS),
		metalnessMap: new TextureMetalnessMapController(this, CONTROLLER_OPTIONS),
		normalMap: new TextureNormalMapController(this, CONTROLLER_OPTIONS),
		physical: new MeshPhysicalController(this, CONTROLLER_OPTIONS),
		roughnessMap: new TextureRoughnessMapController(this, CONTROLLER_OPTIONS),
	};
	private controllerNames = Object.keys(this.controllers) as Array<keyof Controllers>;

	initializeNode() {
		this.params.onParamsCreated('init controllers', () => {
			for (let controllerName of this.controllerNames) {
				this.controllers[controllerName].initializeNode();
			}
		});
	}

	async cook() {
		this.compile_if_required();

		for (let controllerName of this.controllerNames) {
			this.controllers[controllerName].update();
		}
		ColorsController.update(this);
		FogController.update(this);
		SkinningController.update(this);
		WireframeController.update(this);

		this.setMaterial(this.material);
	}
}
