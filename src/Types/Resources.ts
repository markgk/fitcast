export interface Resources {
  label: string; // Name to be displayed to the user
  name: string; // unique id for reference
  description: string; // '' for null
  tags: string[]; // [] for none
  dos: string[]; // [] for none
  donts: string[]; // [] for none
  liveClip: string; // naration video
  liveAudio: string; // naration audio handle
  queAudio: string; // Audio to be played as a que
  eduClip: string[]; // clip id, '' if null
  images: string[]; // image ids one per count, frist one used live
}

export const DEFAULT_RESOURCES: Resources = {
  label: 'Label',
  name: 'Name',
  description: '',
  tags: [],
  dos: [],
  donts: [],
  liveClip: '',
  liveAudio: '',
  queAudio: '',
  eduClip: [],
  images: [],
};
