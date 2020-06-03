import { Handle } from './Workout';

export interface Resources {
  name: Handle; // unique id for reference
  liveClip?: Handle; // naration video
  liveAudio?: Handle; // naration audio handle
  queAudio?: string; // Audio to be played as a que
  perviewClips?: Handle[]; // clip id, '' if null
  previewImgages: Handle[]; // image ids one per count, frist one used live
}
