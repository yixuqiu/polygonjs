/**
 * Creates a Mesh Standard Material, which can be extended with GL nodes.
 *
 * @remarks
 * This node can create children, which will be GL nodes. The GLSL code generated by the nodes will extend the Material.
 *
 * Note that when overriding some properties like metalness and roughness from the output node, the values will be mutliplied with the material top level parameters. You may therefore want to set those to 1 to have predictable results.
 *
 */
import {NodeParamsConfig} from '../utils/params/ParamsConfig';
import {UniformsTransparencyParamConfig, UniformsTransparencyController} from './utils/UniformsTransparencyController';
import {AdvancedCommonController, AdvancedCommonParamConfig} from './utils/AdvancedCommonController';
import {MapParamConfig, TextureMapController} from './utils/TextureMapController';
import {AlphaMapParamConfig, TextureAlphaMapController} from './utils/TextureAlphaMapController';
import {TextureBumpMapController, BumpMapParamConfig} from './utils/TextureBumpMapController';
import {TextureEmissiveMapController, EmissiveMapParamConfig} from './utils/TextureEmissiveMapController';
import {TextureEnvMapController, EnvMapParamConfig} from './utils/TextureEnvMapController';
import {TextureAOMapController, AOMapParamConfig} from './utils/TextureAOMapController';
import {TextureNormalMapController, NormalMapParamConfig} from './utils/TextureNormalMapController';
import {
	TextureMetalnessRoughnessMapController,
	MetalnessRoughnessMapParamConfig,
} from './utils/TextureMetalnessRoughnessMapController';
import {TextureLightMapController, LightMapParamConfig} from './utils/TextureLightMapController';
import {TextureDisplacementMapController, DisplacementMapParamConfig} from './utils/TextureDisplacementMapController';
import {BaseBuilderParamConfig, TypedBuilderMatNode} from './_BaseBuilder';
import {ShaderAssemblerStandard} from '../gl/code/assemblers/materials/Standard';
import {AssemblerName} from '../../poly/registers/assemblers/_BaseRegister';
import {Poly} from '../../Poly';
import {FogParamConfig, FogController} from './utils/UniformsFogController';
import {
	WireframeShaderMaterialController,
	WireframeShaderMaterialParamsConfig,
} from './utils/WireframeShaderMaterialController';
import {DefaultFolderParamConfig} from './utils/DefaultFolder';
import {TexturesFolderParamConfig} from './utils/TexturesFolder';
import {AdvancedFolderParamConfig} from './utils/AdvancedFolder';
import {PCSSController, PCSSParamConfig} from './utils/PCSSController';
import {Material} from 'three';
import {MeshStandardMaterial} from 'three';
import {CustomMaterialName, IUniforms} from '../../../core/geometry/Material';
import {
	CustomMaterialMeshParamConfig,
	materialMeshAssemblerCustomMaterialRequested,
} from './utils/customMaterials/CustomMaterialMesh';
interface MeshStandardBuilderControllers {
	advancedCommon: AdvancedCommonController;
	alphaMap: TextureAlphaMapController;
	aoMap: TextureAOMapController;
	bumpMap: TextureBumpMapController;
	displacementMap: TextureDisplacementMapController;
	emissiveMap: TextureEmissiveMapController;
	envMap: TextureEnvMapController;
	lightMap: TextureLightMapController;
	map: TextureMapController;
	metalnessRoughnessMap: TextureMetalnessRoughnessMapController;
	normalMap: TextureNormalMapController;
	PCSS: PCSSController;
}
interface MeshStandardBuilderMaterial extends MeshStandardMaterial {
	vertexShader: string;
	fragmentShader: string;
	uniforms: IUniforms;
	customMaterials: {
		[key in CustomMaterialName]?: Material;
	};
}
class MeshStandardBuilderMatParamsConfig extends CustomMaterialMeshParamConfig(
	PCSSParamConfig(
		FogParamConfig(
			WireframeShaderMaterialParamsConfig(
				AdvancedCommonParamConfig(
					BaseBuilderParamConfig(
						/* advanced */
						AdvancedFolderParamConfig(
							MetalnessRoughnessMapParamConfig(
								NormalMapParamConfig(
									LightMapParamConfig(
										EnvMapParamConfig(
											EmissiveMapParamConfig(
												DisplacementMapParamConfig(
													BumpMapParamConfig(
														AOMapParamConfig(
															AlphaMapParamConfig(
																MapParamConfig(
																	/* textures */
																	TexturesFolderParamConfig(
																		UniformsTransparencyParamConfig(
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
const ParamsConfig = new MeshStandardBuilderMatParamsConfig();

export class MeshStandardBuilderMatNode extends TypedBuilderMatNode<
	MeshStandardBuilderMaterial,
	ShaderAssemblerStandard,
	MeshStandardBuilderMatParamsConfig
> {
	override paramsConfig = ParamsConfig;
	static override type() {
		return 'meshStandardBuilder';
	}
	public override usedAssembler(): Readonly<AssemblerName.GL_MESH_STANDARD> {
		return AssemblerName.GL_MESH_STANDARD;
	}
	protected _createAssemblerController() {
		return Poly.assemblersRegister.assembler(this, this.usedAssembler());
	}
	public override customMaterialRequested(customName: CustomMaterialName): boolean {
		return materialMeshAssemblerCustomMaterialRequested(this, customName);
	}
	readonly controllers: MeshStandardBuilderControllers = {
		advancedCommon: new AdvancedCommonController(this),
		alphaMap: new TextureAlphaMapController(this),
		aoMap: new TextureAOMapController(this),
		bumpMap: new TextureBumpMapController(this),
		displacementMap: new TextureDisplacementMapController(this),
		emissiveMap: new TextureEmissiveMapController(this),
		envMap: new TextureEnvMapController(this),
		lightMap: new TextureLightMapController(this),
		map: new TextureMapController(this),
		metalnessRoughnessMap: new TextureMetalnessRoughnessMapController(this),
		normalMap: new TextureNormalMapController(this),
		PCSS: new PCSSController(this),
	};
	private controllerNames = Object.keys(this.controllers) as Array<keyof MeshStandardBuilderControllers>;

	override initializeNode() {
		this.params.onParamsCreated('init controllers', () => {
			for (let controllerName of this.controllerNames) {
				this.controllers[controllerName].initializeNode();
			}
		});
	}

	override async cook() {
		for (let controllerName of this.controllerNames) {
			this.controllers[controllerName].update();
		}
		UniformsTransparencyController.update(this);
		FogController.update(this);
		WireframeShaderMaterialController.update(this);

		this.compileIfRequired();

		this.setMaterial(this.material);
	}
}
