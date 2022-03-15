import {CATEGORY_AUDIO} from './Category';

import {AMSynthAudioNode} from '../../../nodes/audio/AMSynth';
import {AutoFilterAudioNode} from '../../../nodes/audio/AutoFilter';
import {AutoWahAudioNode} from '../../../nodes/audio/AutoWah';
// import {AmplitudeEnvelopeAudioNode} from '../../../nodes/audio/AmplitudeEnvelope';
import {BitCrusherAudioNode} from '../../../nodes/audio/BitCrusher';
import {ChebyshevAudioNode} from '../../../nodes/audio/Chebyshev';
import {ChorusAudioNode} from '../../../nodes/audio/Chorus';
import {DistortionAudioNode} from '../../../nodes/audio/Distortion';
import {EnvelopeAudioNode} from '../../../nodes/audio/Envelope';
import {FFTAudioNode} from '../../../nodes/audio/FFT';
import {FMSynthAudioNode} from '../../../nodes/audio/FMSynth';
import {FeedbackDelayAudioNode} from '../../../nodes/audio/FeedbackDelay';
import {FetchAudioNode} from '../../../nodes/audio/Fetch';
import {FileAudioNode} from '../../../nodes/audio/File';
import {FrequencyShifterAudioNode} from '../../../nodes/audio/FrequencyShifter';
import {MeterAudioNode} from '../../../nodes/audio/Meter';
import {MonoSynthAudioNode} from '../../../nodes/audio/MonoSynth';
import {NoiseAudioNode} from '../../../nodes/audio/Noise';
import {NullAudioNode} from '../../../nodes/audio/Null';
import {PhaserAudioNode} from '../../../nodes/audio/Phaser';
import {PingPongDelayAudioNode} from '../../../nodes/audio/PingPongDelay';
import {PitchShiftAudioNode} from '../../../nodes/audio/PitchShift';
import {PlayInstrumentAudioNode} from '../../../nodes/audio/PlayInstrument';
import {PolySynthAudioNode} from '../../../nodes/audio/PolySynth';
// import {OscillatorAudioNode} from '../../../nodes/audio/Oscillator';
import {ReverbAudioNode} from '../../../nodes/audio/Reverb';
import {SamplerAudioNode} from '../../../nodes/audio/Sampler';
import {StereoWidenerAudioNode} from '../../../nodes/audio/StereoWidener';
import {SwitchAudioNode} from '../../../nodes/audio/Switch';
import {SynthAudioNode} from '../../../nodes/audio/Synth';
import {TremoloAudioNode} from '../../../nodes/audio/Tremolo';
// import {ToDestinationAudioNode} from '../../../nodes/audio/ToDestination';
import {UserMediaAudioNode} from '../../../nodes/audio/UserMedia';
import {VibratoAudioNode} from '../../../nodes/audio/Vibrato';
import {VolumeAudioNode} from '../../../nodes/audio/Volume';
import {WaveformAudioNode} from '../../../nodes/audio/Waveform';
// networks
import {ActorsNetworkAudioNode} from '../../../nodes/audio/ActorsNetwork';
import {AnimationsNetworkAudioNode} from '../../../nodes/audio/AnimationsNetwork';
import {AudioNetworkAudioNode} from '../../../nodes/audio/AudioNetwork';
import {CopNetworkAudioNode} from '../../../nodes/audio/CopNetwork';
import {EventsNetworkAudioNode} from '../../../nodes/audio/EventsNetwork';
import {MaterialsNetworkAudioNode} from '../../../nodes/audio/MaterialsNetwork';
import {PostProcessNetworkAudioNode} from '../../../nodes/audio/PostProcessNetwork';
import {RenderersNetworkAudioNode} from '../../../nodes/audio/RenderersNetwork';

export interface AudioNodeChildrenMap {
	AMSynth: AMSynthAudioNode;
	autoFilter: AutoFilterAudioNode;
	autoWah: AutoWahAudioNode;
	// amplitudeEnvelope: AmplitudeEnvelopeAudioNode;
	bitCrusher: BitCrusherAudioNode;
	chebyshev: ChebyshevAudioNode;
	chorus: ChorusAudioNode;
	distortion: DistortionAudioNode;
	envelope: EnvelopeAudioNode;
	FFT: FFTAudioNode;
	FMSynth: FMSynthAudioNode;
	feedbackDelay: FeedbackDelayAudioNode;
	fetch: FetchAudioNode;
	file: FileAudioNode;
	frequencyShifter: FrequencyShifterAudioNode;
	meter: MeterAudioNode;
	monoSynth: MonoSynthAudioNode;
	noise: NoiseAudioNode;
	null: NullAudioNode;
	phaser: PhaserAudioNode;
	pingPongDelay: PingPongDelayAudioNode;
	pitchShift: PitchShiftAudioNode;
	playInstrument: PlayInstrumentAudioNode;
	polySynth: PolySynthAudioNode;
	// oscillator: OscillatorAudioNode;
	reverb: ReverbAudioNode;
	sampler: SamplerAudioNode;
	stereoWidener: StereoWidenerAudioNode;
	switch: SwitchAudioNode;
	synth: SynthAudioNode;
	tremolo: TremoloAudioNode;
	// toDestination: ToDestinationAudioNode;
	userMedia: UserMediaAudioNode;
	vibrato: VibratoAudioNode;
	volume: VolumeAudioNode;
	waveform: WaveformAudioNode;
	// networks
	actorsNetwork: ActorsNetworkAudioNode;
	animationsNetwork: AnimationsNetworkAudioNode;
	audioNetwork: AudioNetworkAudioNode;
	copNetwork: CopNetworkAudioNode;
	eventsNetwork: EventsNetworkAudioNode;
	materialsNetwork: MaterialsNetworkAudioNode;
	postProcessNetwork: PostProcessNetworkAudioNode;
	renderersNetwork: RenderersNetworkAudioNode;
}

import {PolyEngine} from '../../../Poly';
import {ACTORS_IN_PROD} from './Actor';

export class AudioRegister {
	static run(poly: PolyEngine) {
		poly.registerNode(AMSynthAudioNode, CATEGORY_AUDIO.INSTRUMENTS);
		poly.registerNode(AutoFilterAudioNode, CATEGORY_AUDIO.EFFECTS);
		poly.registerNode(AutoWahAudioNode, CATEGORY_AUDIO.EFFECTS);
		// poly.registerNode(AmplitudeEnvelopeAudioNode, CATEGORY_AUDIO.EFFECTS);
		poly.registerNode(BitCrusherAudioNode, CATEGORY_AUDIO.EFFECTS);
		poly.registerNode(ChebyshevAudioNode, CATEGORY_AUDIO.EFFECTS);
		poly.registerNode(ChorusAudioNode, CATEGORY_AUDIO.EFFECTS);
		poly.registerNode(DistortionAudioNode, CATEGORY_AUDIO.EFFECTS);
		poly.registerNode(EnvelopeAudioNode, CATEGORY_AUDIO.MISC);
		poly.registerNode(FFTAudioNode, CATEGORY_AUDIO.ANALYSER);
		poly.registerNode(FMSynthAudioNode, CATEGORY_AUDIO.INSTRUMENTS);
		poly.registerNode(FeedbackDelayAudioNode, CATEGORY_AUDIO.EFFECTS);
		poly.registerNode(FetchAudioNode, CATEGORY_AUDIO.INPUTS);
		poly.registerNode(FileAudioNode, CATEGORY_AUDIO.INPUTS);
		poly.registerNode(FrequencyShifterAudioNode, CATEGORY_AUDIO.EFFECTS);
		poly.registerNode(MeterAudioNode, CATEGORY_AUDIO.ANALYSER);
		poly.registerNode(MonoSynthAudioNode, CATEGORY_AUDIO.INSTRUMENTS);
		poly.registerNode(NoiseAudioNode, CATEGORY_AUDIO.INSTRUMENTS);
		poly.registerNode(NullAudioNode, CATEGORY_AUDIO.MISC);
		poly.registerNode(PhaserAudioNode, CATEGORY_AUDIO.EFFECTS);
		poly.registerNode(PingPongDelayAudioNode, CATEGORY_AUDIO.EFFECTS);
		poly.registerNode(PitchShiftAudioNode, CATEGORY_AUDIO.EFFECTS);
		poly.registerNode(PlayInstrumentAudioNode, CATEGORY_AUDIO.MISC);
		poly.registerNode(PolySynthAudioNode, CATEGORY_AUDIO.INSTRUMENTS);
		// poly.registerNode(OscillatorAudioNode, CATEGORY_AUDIO.MISC);
		poly.registerNode(ReverbAudioNode, CATEGORY_AUDIO.EFFECTS);
		poly.registerNode(SamplerAudioNode, CATEGORY_AUDIO.INSTRUMENTS);
		poly.registerNode(StereoWidenerAudioNode, CATEGORY_AUDIO.EFFECTS);
		poly.registerNode(SwitchAudioNode, CATEGORY_AUDIO.MISC);
		poly.registerNode(SynthAudioNode, CATEGORY_AUDIO.INSTRUMENTS);
		poly.registerNode(TremoloAudioNode, CATEGORY_AUDIO.EFFECTS);
		// poly.registerNode(ToDestinationAudioNode, CATEGORY_AUDIO.MISC);
		poly.registerNode(UserMediaAudioNode, CATEGORY_AUDIO.INPUTS);
		poly.registerNode(VibratoAudioNode, CATEGORY_AUDIO.EFFECTS);
		poly.registerNode(VolumeAudioNode, CATEGORY_AUDIO.MISC);
		poly.registerNode(WaveformAudioNode, CATEGORY_AUDIO.ANALYSER);
		// networks
		if (ACTORS_IN_PROD || process.env.NODE_ENV == 'development') {
			poly.registerNode(ActorsNetworkAudioNode, CATEGORY_AUDIO.NETWORK);
		}
		poly.registerNode(AnimationsNetworkAudioNode, CATEGORY_AUDIO.NETWORK);
		poly.registerNode(AudioNetworkAudioNode, CATEGORY_AUDIO.NETWORK);
		poly.registerNode(CopNetworkAudioNode, CATEGORY_AUDIO.NETWORK);
		poly.registerNode(EventsNetworkAudioNode, CATEGORY_AUDIO.NETWORK);
		poly.registerNode(MaterialsNetworkAudioNode, CATEGORY_AUDIO.NETWORK);
		poly.registerNode(PostProcessNetworkAudioNode, CATEGORY_AUDIO.NETWORK);
		poly.registerNode(RenderersNetworkAudioNode, CATEGORY_AUDIO.NETWORK);
	}
}
