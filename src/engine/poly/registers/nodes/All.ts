import {ActorRegister, ActorNodeChildrenMap} from './Actor';
import {AnimRegister, AnimNodeChildrenMap} from './Anim';
import {AudioRegister, AudioNodeChildrenMap} from './Audio';
// import {CadRegister, CadNodeChildrenMap} from './Cad';
import {CopRegister, CopNodeChildrenMap} from './Cop';
import {CsgRegister, CsgNodeChildrenMap} from './Csg';
import {EventRegister, EventNodeChildrenMap} from './Event';
import {GlRegister, GlNodeChildrenMap} from './Gl';
import {JsRegister, JsNodeChildrenMap} from './Js';
import {MatRegister, MatNodeChildrenMap} from './Mat';
import {ObjRegister, ObjNodeChildrenMap} from './Obj';
import {PostRegister, PostNodeChildrenMap} from './Post';
import {RopRegister, RopNodeChildrenMap} from './Rop';
import {SopRegister, GeoNodeChildrenMap} from './Sop';
// import {ActorRegister, ActorNodeChildrenMap} from './ActorMini';
// import {AnimRegister, AnimNodeChildrenMap} from './AnimMini';
// import {AudioRegister, AudioNodeChildrenMap} from './AudioMini';
// import {CopRegister, CopNodeChildrenMap} from './CopMini';
// import {EventRegister, EventNodeChildrenMap} from './EventMini';
// import {GlRegister, GlNodeChildrenMap} from './GlMini';
// import {JsRegister, JsNodeChildrenMap} from './JsMini';
// import {MatRegister, MatNodeChildrenMap} from './MatMini';
// import {ObjRegister, ObjNodeChildrenMap} from './ObjMini';
// import {PostRegister, PostNodeChildrenMap} from './PostMini';
// import {RopRegister, RopNodeChildrenMap} from './RopMini';
// import {SopRegister, GeoNodeChildrenMap} from './SopMini';

import {PolyEngine} from '../../../Poly';
import {NodeContext} from '../../NodeContext';

export interface NodeChildrenMapByContext {
	[NodeContext.ACTOR]: ActorNodeChildrenMap;
	[NodeContext.ANIM]: AnimNodeChildrenMap;
	[NodeContext.AUDIO]: AudioNodeChildrenMap;
	// [NodeContext.CAD]: CadNodeChildrenMap;
	[NodeContext.COP]: CopNodeChildrenMap;
	[NodeContext.CSG]: CsgNodeChildrenMap;
	[NodeContext.EVENT]: EventNodeChildrenMap;
	[NodeContext.GL]: GlNodeChildrenMap;
	[NodeContext.JS]: JsNodeChildrenMap;
	[NodeContext.MANAGER]: {};
	[NodeContext.MAT]: MatNodeChildrenMap;
	[NodeContext.OBJ]: ObjNodeChildrenMap;
	[NodeContext.POST]: PostNodeChildrenMap;
	[NodeContext.ROP]: RopNodeChildrenMap;
	[NodeContext.SOP]: GeoNodeChildrenMap;
}

export class AllNodesRegister {
	static async run(poly: PolyEngine) {
		ActorRegister.run(poly);
		AnimRegister.run(poly);
		AudioRegister.run(poly);
		// CadRegister.run(poly);
		CopRegister.run(poly);
		CsgRegister.run(poly);
		EventRegister.run(poly);
		GlRegister.run(poly);
		JsRegister.run(poly);
		MatRegister.run(poly);
		ObjRegister.run(poly);
		PostRegister.run(poly);
		RopRegister.run(poly);
		SopRegister.run(poly);
	}
}
