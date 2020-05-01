import { Media } from './MediaTypes';

interface ElementMetaData {
  name: string;
  description?: string;
  dos?: string[];
  donts?: string[];
  media?: Media; // default media if not specified
}

interface Tag {
  uid: string;
  name: string;
}

export interface Position extends ElementMetaData {
  positionUid: string;
  count: number; // how long to hold the position in seconds, defaults to 1
}

export interface Transition extends ElementMetaData {
  transitionUid: string;
  count: number; // number of steps in transition, defaults ot 1
}

// TODO: Is this the best way to represent this? We run into a fence-post
// problem like this.
export interface Movement {
  position: Position;
  transition: Transition;
}

export interface Equipment extends ElementMetaData {
  name: string; // Dumbbell, band, barbell, etc.
  equipmentUid: string;
  label?: string; // When resistance isn't a number. Red band, heavy weight, etc.
  resistance?: {
    range: [number, number]; // range of weight, band number, etc
    unit: string; // lbs for weight, band No. etc..
  };
}

export interface Exercise extends ElementMetaData {
  movements: Movement[];
  equipment?: Equipment;
  exerciseUid: string;
}

export interface Break {
  duration: number; // duration in seconds, defaults to 120
  media: Media; // default media if not specified
}

export enum Measurement {
  duration,
  reps,
  breaths,
  weight,
}

// Arrays represent the values for different rounds. If a set repeats,
// it will use the value in the next index for this assignment.
// If the assignment's array is < number of rounds, repeat last value in array
export interface Assignment {
  exercise: string[]; // exercise UID
  duration?: number[]; // seconds
  reps?: number[];
  breaths?: number[];
  weight?: number[];
  max?: Measurement[]; // Max duration, max reps, etc.
  break?: Break[];
}

export interface Set extends ElementMetaData {
  assignments: Assignment[];
  rounds: number; // default to 1
  break: Break; // break at the end of each round
}

export interface Workout extends ElementMetaData {
  sets: (Set | Break)[];
  tags: string[]; // [] for none, references tag UIDs from tags table
}
