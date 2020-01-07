import {MissingReferencesController} from 'src/engine/expressions/MissingReferencesController'

export function ExpressionRegister<TBase extends Constructor>(Base: TBase) {
	return class extends Base {
		public missing_expression_references_controller: MissingReferencesController = new MissingReferencesController()
	}
}
