export interface SoundEffects {
  counts: string[]; // coount 1-n audio
  beats: string[]; // beats  1-n audio
  endOfCount: string[]; // by level endof count, rep, set
}

export interface Media {
  narClip: string;
  narAutio: string;
  eduClip: string; // clip id, '' if null
  eduAudio: string;
  images: string[]; // image ids one per count, frist one used live
  soundEffects: SoundEffects;
}
