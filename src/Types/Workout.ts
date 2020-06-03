import { FlexElement } from './Elements';

type FieldValue = string | null;
export interface Progress {
  timeLeft: number;
  currentTitle: FieldValue;
  nextTitle: FieldValue;
  count: FieldValue;
  currentCount: FieldValue;
}

export type Action = Partial<Progress>;

export interface State<T> {
  workout: T;
  set: T;
}

export interface Event {
  time: number;
  setAction?: Action;
  workOutAction?: Action;
  state: State<Progress>;
}

export interface Workout {
  title: string;
  by: string;
  description: string;
  workout: FlexElement; // Handle might do
  timeline: Event[];
}
