export interface SoundEffects {
  counts: string[]; // coount 1-n audio
  beats: string[]; // beats  1-n audio
  endOfCount: string[]; // by level endof count, rep, set
}

export enum MediaType {
  video,
  audio,
}

export interface Media {
  type: MediaType;
  mediaId: string;
  images?: string[]; // image ids one per count, first one used live
  soundEffects?: SoundEffects;
}
