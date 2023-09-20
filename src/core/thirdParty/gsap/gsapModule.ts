import {PolyEngine} from '../../../engine/Poly';
import {GSAP_FACTORY} from './gsapFactory';
import type {GsapCoreTimelineVars} from './gsapFactory';

export function onGsapModuleRegister(poly: PolyEngine) {
	GSAP_FACTORY.timeline = (vars?: GsapCoreTimelineVars | undefined) => {
		return gsap.timeline(vars);
	};
}
