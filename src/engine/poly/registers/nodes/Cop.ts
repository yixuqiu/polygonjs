import {CATEGORY_COP} from './Category';

import {BuilderCopNode} from '../../../nodes/cop/Builder';
import {ColorCopNode} from '../../../nodes/cop/Color';
import {EnvMapCopNode} from '../../../nodes/cop/EnvMap';
import {ImageCopNode} from '../../../nodes/cop/Image';
import {NullCopNode} from '../../../nodes/cop/Null';
import {PostCopNode} from '../../../nodes/cop/Post';
import {SwitchCopNode} from '../../../nodes/cop/Switch';
import {TexturePropertiesCopNode} from '../../../nodes/cop/TextureProperties';
import {VideoCopNode} from '../../../nodes/cop/Video';
import {WebcamCopNode} from '../../../nodes/cop/Webcam';

export interface CopNodeChildrenMap {
	builder: BuilderCopNode;
	color: ColorCopNode;
	envMap: EnvMapCopNode;
	image: ImageCopNode;
	Post: PostCopNode;
	null: NullCopNode;
	switch: SwitchCopNode;
	textureProperties: TexturePropertiesCopNode;
	video: VideoCopNode;
	webcam: WebcamCopNode;
}

import {Poly} from '../../../Poly';
export class CopRegister {
	static run(poly: Poly) {
		poly.registerNode(BuilderCopNode, CATEGORY_COP.ADVANCED);
		poly.registerNode(ColorCopNode, CATEGORY_COP.INPUT);
		poly.registerNode(EnvMapCopNode, CATEGORY_COP.INPUT);
		poly.registerNode(ImageCopNode, CATEGORY_COP.INPUT);
		poly.registerNode(NullCopNode, CATEGORY_COP.MISC);
		poly.registerNode(PostCopNode, CATEGORY_COP.FILTER);
		poly.registerNode(SwitchCopNode, CATEGORY_COP.MISC);
		poly.registerNode(TexturePropertiesCopNode, CATEGORY_COP.ADVANCED);
		poly.registerNode(VideoCopNode, CATEGORY_COP.INPUT);
		poly.registerNode(WebcamCopNode, CATEGORY_COP.ADVANCED);
	}
}
