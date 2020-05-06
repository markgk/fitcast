import { Resources } from './Resources';
export type WorkoutObjectType =
  | 'exuipment'
  | 'position'
  | 'exercise'
  | 'assignment'
  | 'set'
  | 'workout';

export type Reference<T> = string | T;

export interface WorkoutObject {
  name: string; // unique string used to reference the object
  label?: string; // string used for display, defaults to name
  type?: WorkoutObjectType; // if not speified will be inffered
  resources?: Reference<Resources>; // reference to a media resources object
  // if not specified default media will be used
}

// e.g. palnk, down-facing-dog, transition
// the name Position is not the best for a timed trnsition
// Position duration can be left unspecified, or specified by trainer
export interface Position extends WorkoutObject {
  duration?: number; // Duration is oprional, may be assigned by trainer  // Referende to a positionobject
}
// Equipment metric can be left unspecified, or specified by trainer
export interface Equipment extends WorkoutObject {
  metric?: [number, number]; // range of weight, band number, etc
  unit: string; // lbs for weight, band No. etc..
}

//e.g. : pushup, sun-salutaion,  dumbell-snatch
// if flow is not specified, exercise will get a defualt duration
// if equipment not specified assume none
export interface Exercise extends WorkoutObject {
  flow?: Reference<Position>[];
  equipment?: Reference<Equipment>;
}

// A set of 1 or more exercises that will count as a rep
export interface Assignment extends WorkoutObject {
  exercises: Reference<Exercise>[]; // the repeatable unit from now up.
}

// if duration is not speifed, a default duration will be used
// an empty Break is useful as it is a reference to media resources
export interface Break extends WorkoutObject {
  duration?: number;
}

//
export interface Set extends WorkoutObject {
  assignments: Reference<Assignment>[];
  metric?: number; // if not specified defaults to 1 for count 30 for duration
  measure?: 'count' | 'duration'; // if not specified defaults to count
}

export interface Workout extends WorkoutObject {
  preview?: Reference<{}>; // refretence to a preview Object TBD
  sets: [Reference<Set>, Reference<Break>][]; // including warmup, and warmdown sets
}

// Examples:
// naked  pushup
export const pushupBasic: Exercise = {
  name: 'PushupBasic',
  type: 'exercise',
};

//
// FitCast will use default settings
export const pushup3basic: Exercise = {
  name: 'Pushup3basic',
  type: 'exercise',
  label: 'Push up ',
  resources: 'Pushup_resources',
  flow: ['plank', 'down'], // if no position by that name use the string
};

// Pushups of a count of 3 - full implementation
export const pushup3: Exercise = {
  name: 'Pushup3',
  type: 'exercise',
  label: 'Push up on count of 3',
  equipment: 'none',
  flow: [
    { duration: 3, name: 'plank' },
    { duration: 3, name: 'transition' },
    { duration: 3, name: 'down-plank' },
    { duration: 3, name: 'transition' },
  ],
};

export const assignment1: Assignment = {
  name: 'a1',
  exercises: [
    'pushup3, pushupBasic',
    {
      name: 'Pushup3basic',
      type: 'exercise',
      label: 'Push up ',
      resources: 'Pushup_resources',
      flow: ['plank', 'down'],
    },
  ],
};

export const workout1: Workout = {
  name: 'my-first-workout',
  label: 'best workout in the world',
  sets: [
    [{ name: '', assignments: ['a1'], metric: 10, measure: 'count' }, 'Break1'],
  ],
};
