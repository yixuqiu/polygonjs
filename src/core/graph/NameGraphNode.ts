import {NodeSimple} from './NodeSimple'

export class NameGraphNode extends NodeSimple {
	constructor(public owner: NodeSimple) {
		super()
	}
}
