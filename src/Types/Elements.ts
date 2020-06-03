// import { Resources } from './Resources';

export enum Unit {
  second = 'seconds',
  rep = 'reps',
  breaths = 'breaths',
  pountd = 'pound',
  number = 'number',
}

export enum Intensity {
  none = 0,
  low,
  medium,
  high,
}

export enum ElementType {
  none,
  post,
  exercise,
  repetition,
  segment,
  phase,
  workout,
}

export interface Repo<T> {
  [handle: string]: T;
}

export type StringField = string;
export type NumberField = number;
export type Handle = string | null;

export interface ElementMetaData {
  handle: Handle; // name is a Handle
  title: StringField; // string used for display, defaults to name
  message: StringField;
  // resources: Handle; // Handle into the resources pool
  // dos: string[]; // [] for none
  // donts: string[]; // [] for none
}

// Equipment metric can be left unspecified, or specified by trainer
// export interface Equipment extends FlexElementMetaData {
//   reference?: Handle;
//   metric?: [number, number]; // range of weight, band number, etc
//   unit?: Unit; // defaults to pounds
// }

export interface BaseElement extends ElementMetaData {
  duration: NumberField;
  interval: NumberField;
  reference: Handle;
  intensity: Intensity;
  times: NumberField;
  units: Unit;
}

export interface Exercise extends Partial<BaseElement> {
  type: ElementType.exercise;
  elements?: null;
}
export interface Segment extends Partial<BaseElement> {
  type: ElementType.segment;
  elements?: Exercise[]; // repetition
}
export interface Phase extends Partial<BaseElement> {
  type: ElementType.phase;
  elements?: Segment[]; // segments
}
export interface Workout extends Partial<BaseElement> {
  type: ElementType.workout;
  elements?: Phase[]; // phases
}

export type Element = Workout | Phase | Segment | Exercise;
