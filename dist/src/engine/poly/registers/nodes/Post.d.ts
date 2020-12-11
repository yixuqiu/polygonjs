import { AdaptiveToneMappingPostNode } from '../../../nodes/post/AdaptiveToneMapping';
import { AfterImagePostNode } from '../../../nodes/post/AfterImage';
import { BleachPostNode } from '../../../nodes/post/Bleach';
import { BrightnessContrastPostNode } from '../../../nodes/post/BrightnessContrast';
import { ClearPostNode } from '../../../nodes/post/Clear';
import { ClearMaskPostNode } from '../../../nodes/post/ClearMask';
import { ColorCorrectionPostNode } from '../../../nodes/post/ColorCorrection';
import { CopyPostNode } from '../../../nodes/post/Copy';
import { DepthOfFieldPostNode } from '../../../nodes/post/DepthOfField';
import { DotScreenPostNode } from '../../../nodes/post/DotScreen';
import { FilmPostNode } from '../../../nodes/post/Film';
import { FXAAPostNode } from '../../../nodes/post/FXAA';
import { GammaCorrectionPostNode } from '../../../nodes/post/GammaCorrection';
import { HorizontalBlurPostNode } from '../../../nodes/post/HorizontalBlur';
import { ImagePostNode } from '../../../nodes/post/Image';
import { LayerPostNode } from '../../../nodes/post/Layer';
import { MaskPostNode } from '../../../nodes/post/Mask';
import { NullPostNode } from '../../../nodes/post/Null';
import { OutlinePostNode } from '../../../nodes/post/Outline';
import { PixelPostNode } from '../../../nodes/post/Pixel';
import { RenderPostNode } from '../../../nodes/post/Render';
import { RGBShiftPostNode } from '../../../nodes/post/RGBShift';
import { SepiaPostNode } from '../../../nodes/post/Sepia';
import { SequencePostNode } from '../../../nodes/post/Sequence';
import { TriangleBlurPostNode } from '../../../nodes/post/TriangleBlur';
import { UnrealBloomPostNode } from '../../../nodes/post/UnrealBloom';
import { VerticalBlurPostNode } from '../../../nodes/post/VerticalBlur';
import { VignettePostNode } from '../../../nodes/post/Vignette';
export interface PostNodeChildrenMap {
    adaptive_post_mapping: AdaptiveToneMappingPostNode;
    after_image: AfterImagePostNode;
    bleach: BleachPostNode;
    brightness_contrast: BrightnessContrastPostNode;
    clear: ClearPostNode;
    clear_mask: ClearMaskPostNode;
    color_correction: ColorCorrectionPostNode;
    copy: CopyPostNode;
    depth_of_field: DepthOfFieldPostNode;
    dot_screen: DotScreenPostNode;
    film: FilmPostNode;
    fxaa: FXAAPostNode;
    gamma_correction: GammaCorrectionPostNode;
    horizontal_blur: HorizontalBlurPostNode;
    image: ImagePostNode;
    layer: LayerPostNode;
    mask: MaskPostNode;
    null: NullPostNode;
    outline: OutlinePostNode;
    pixel: PixelPostNode;
    render: RenderPostNode;
    rgb_shift: RGBShiftPostNode;
    sepia: SepiaPostNode;
    sequence: SequencePostNode;
    triangle_blur: TriangleBlurPostNode;
    unreal_bloom: UnrealBloomPostNode;
    vertical_blur: VerticalBlurPostNode;
    vignette: VignettePostNode;
}
import { Poly } from '../../../Poly';
export declare class PostRegister {
    static run(poly: Poly): void;
}
