import { Media } from './MediaTypes';

interface WorkoutObject {
  name: string;
  uid: string;
  description: string; // '' for null
  tags: string[]; // [] for none
  dos: string[]; // [] for none
  donts: string[]; // [] for none
  media: Media; // default meadia if not specified
}

export interface Position extends WorkoutObject {
  count: number; // how long to hold the position, defaulsts to 1
}

export interface Transition extends WorkoutObject {
  count: number; // number of steps in transition, defaults ot 1
}

export interface Move {
  position: Position;
  transition: Transition;
}

export interface Equipment extends WorkoutObject {
  metric: [number, number]; // range of weight, band number, etc
  unit: string; // lbs for weight, band No. etc..
}

export interface Exercise extends WorkoutObject {
  Moves: Move[];
  equipment: Equipment;
}
export interface Break extends WorkoutObject {
  duration: number; // duration in seconds, defaults to 120
}

export interface Set {
  exercise: string; //exercise uid
  reps: number; // if 0 go for max
  break: Break;
}

export interface Workout extends WorkoutObject {
  warmUp: Exercise[]; // [] stands for none
  sets: Set[];
  warmDown: Exercise[]; // [] stands for none
}
