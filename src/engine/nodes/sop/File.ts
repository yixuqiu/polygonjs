/**
 * Loads a geometry from a url.
 *
 * @remarks
 * Note that this node will automatically use a specific loader depending on the extension of the url.
 *
 */
import {TypedSopNode} from './_Base';
import {CoreLoaderGeometry, GeometryFormat, GEOMETRY_FORMATS} from '../../../core/loader/Geometry';
import {BaseNodeType} from '../_Base';
import {FileType} from '../../params/utils/OptionsController';
import {FileSopOperation} from '../../operations/sop/File';

import {NodeParamsConfig, ParamConfig} from '../utils/params/ParamsConfig';
import {CoreGroup} from '../../../core/geometry/Group';
import {CoreBaseLoader} from '../../../core/loader/_Base';
import {Poly} from '../../Poly';
const DEFAULT = FileSopOperation.DEFAULT_PARAMS;
class FileSopParamsConfig extends NodeParamsConfig {
	/** @param url to load the geometry from */
	url = ParamConfig.STRING(DEFAULT.url, {
		fileBrowse: {type: [FileType.GEOMETRY]},
	});
	/** @param format */
	format = ParamConfig.STRING(DEFAULT.format, {
		menuString: {
			entries: GEOMETRY_FORMATS.map((name) => {
				return {name, value: name};
			}),
		},
	});
	/** @param sets the matrixAutoUpdate attribute for the objects loaded */
	matrixAutoUpdate = ParamConfig.BOOLEAN(0);
	/** @param reload the geometry */
	reload = ParamConfig.BUTTON(null, {
		callback: (node: BaseNodeType) => {
			FileSopNode.PARAM_CALLBACK_reload(node as FileSopNode);
		},
	});
}
const ParamsConfig = new FileSopParamsConfig();

export class FileSopNode extends TypedSopNode<FileSopParamsConfig> {
	override paramsConfig = ParamsConfig;
	static override type() {
		return 'file';
	}
	override async requiredModules() {
		for (let p of [this.p.url, this.p.format]) {
			if (p.isDirty()) {
				await p.compute();
			}
		}
		const ext = CoreBaseLoader.extension(this.pv.url || '');
		const format = this.pv.format as GeometryFormat;
		return CoreLoaderGeometry.moduleNamesFromFormat(format, ext);
	}
	override dispose(): void {
		super.dispose();
		Poly.blobs.clearBlobsForNode(this);
	}

	// TODO: no error when trying to load a non existing zip file??
	private _operation: FileSopOperation | undefined;
	private operation() {
		return (this._operation = this._operation || new FileSopOperation(this.scene(), this.states, this));
	}
	override async cook(input_contents: CoreGroup[]) {
		const core_group = await this.operation().cook(input_contents, this.pv);
		this.setCoreGroup(core_group);
	}

	static PARAM_CALLBACK_reload(node: FileSopNode) {
		node._paramCallbackReload();
	}
	private _paramCallbackReload() {
		// this.operation().clearLoadedBlob(this.pv);
		// set the param dirty is preferable to just the successors, in case the expression result needs to be updated
		this.p.url.setDirty();
		// this.setDirty()
	}
}
