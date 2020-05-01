export interface SoundEffects {
  counts: string[]; // coount 1-n audio
  beats: string[]; // beats  1-n audio
  endOfCount: string[]; // by level endof count, rep, set
}

export interface Media {
  narrationClip: string;
  narrationAutio: string;
  educationalAudio: string;
  educationalClip: string; // clip id, '' if null
  images: string[]; // image ids one per count, first one used live
  soundEffects: SoundEffects;
}
