/**
 * Function of SDF Rounded X
 *
 * @remarks
 *
 * based on [https://iquilezles.org/articles/distfunctions2d/](https://iquilezles.org/articles/distfunctions2d/)
 */

// import {ThreeToGl} from '../../../core/ThreeToGl';
import {NodeParamsConfig, ParamConfig} from '../utils/params/ParamsConfig';
import {JsConnectionPointType, JsConnectionPoint} from '../utils/io/connections/Js';
import {JsLinesCollectionController} from './code/utils/JsLinesCollectionController';
import {BaseSDF2DJsNode} from './_BaseSDF2D';
import {Poly} from '../../Poly';
import {JsType} from '../../poly/registers/nodes/types/Js';

const OUTPUT_NAME = 'float';
class SDF2DRoundedXJsParamsConfig extends NodeParamsConfig {
	position = ParamConfig.VECTOR2([0, 0], {hidden: true});
	center = ParamConfig.VECTOR2([0, 0]);
	length = ParamConfig.FLOAT(1);
	radius = ParamConfig.FLOAT(0.1);
}
const ParamsConfig = new SDF2DRoundedXJsParamsConfig();
export class SDF2DRoundedXJsNode extends BaseSDF2DJsNode<SDF2DRoundedXJsParamsConfig> {
	override paramsConfig = ParamsConfig;
	static override type() {
		return JsType.SDF_2D_ROUNDED_X;
	}

	override initializeNode() {
		super.initializeNode();

		this.io.outputs.setNamedOutputConnectionPoints([
			new JsConnectionPoint(OUTPUT_NAME, JsConnectionPointType.FLOAT),
		]);
	}

	override setLines(shadersCollectionController: JsLinesCollectionController) {
		const position = this.variableForInputParam(shadersCollectionController, this.p.position);
		const center = this.variableForInputParam(shadersCollectionController, this.p.center);
		const length = this.variableForInputParam(shadersCollectionController, this.p.length);
		const radius = this.variableForInputParam(shadersCollectionController, this.p.radius);

		const float = this.jsVarName(OUTPUT_NAME);
		const func = Poly.namedFunctionsRegister.getFunction('SDF2DRoundedX', this, shadersCollectionController);
		shadersCollectionController.addBodyOrComputed(this, [
			{
				dataType: JsConnectionPointType.FLOAT,
				varName: float,
				value: func.asString(position, center, length, radius),
			},
		]);
	}
}
