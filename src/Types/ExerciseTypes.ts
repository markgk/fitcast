import { Media } from './MediaTypes';

interface WorkoutObject {
  name: string;
  uid: string;
  description: string;
  tags: string[];
  dos: string[];
  donts: string[];
  media: Media;
}

export interface Position extends WorkoutObject {
  count: number; // how long to hold the position
}

export interface Transition extends WorkoutObject {
  count: number; // number of steps in transition
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
  duration: number; // duration in seconds
}

export interface Set {
  exercise: string; //exercise uid
  reps: number; // if 0 go for max
  break: Break;
}

export interface Workout extends WorkoutObject {
  warmUp: Exercise[];
  sets: Set[];
  warmDown: Exercise[];
}
