import { Exercise } from './ExerciseTypes';
import { Resources } from './Resources';

export enum Unit {
  second = 'seconds',
  rep = 'reps',
  breaths = 'breaths',
  pountd = 'pound',
  number = 'number',
}
export type Handle = string;
export type Reference<T> = string | T;

export interface ElementMetaData {
  name: Handle; // unique string used to reference the object
  label?: string; // string used for display, defaults to name
  description?: string;
  resources?: Handle; // reference to a media resources object
  dos?: string[]; // [] for none
  donts?: string[]; // [] for none
}

// e.g. down-facing-dog hold 2 , transition 2 sec, up-facing-dog hold 5, are flow elements
// e.g. plank, down-plank, plank in  a flow desctibing a push up
// flow elements are used for determening the duration of an exercise, timing ques, progress bars
// formally called Positon
// and excercise is an array (flow) of flow elements
export interface FlowElement extends ElementMetaData {
  duration?: number; // Duration is oprional, may be assigned by trainer  // Referende to a positionobject
  unit?: Unit; // defualts to second
}
// Equipment metric can be left unspecified, or specified by trainer
export interface Equipment extends ElementMetaData {
  metric?: [number, number]; // range of weight, band number, etc
  unit?: Unit; // defaults to pounds
}

//e.g. : pushup, sun-salutaion,  dumbell-snatch
// if flow is not specified, exercise will get a defualt duration
// if equipment not specified assume none
export interface Exercise extends ElementMetaData {
  flow?: Reference<FlowElement>[];
  equipment?: Reference<Equipment>;
}

// Assinment is a building block of a repeatition which sets repeat
export interface Assignment extends ElementMetaData {
  exercise: Reference<Exercise>[];
  times?: number; // times to rpeat the exercise, defaults to 1
  rest?: number; // seconds to rest after the repeats, defualts to 0
}

// if duration is not speifed, a default duration will be used
// an empty Break is useful as it is a reference resource
export interface Break extends ElementMetaData {
  duration?: number;
  unit?: Unit; // defualts to seconds
}

//
export interface Set extends ElementMetaData {
  repetition: Reference<Assignment>[] | Set[];
  metric?: number; // how many times, or at what interval to repeat the rep
  unit?: Unit; // if not specified defaults to reps
}

export interface Workout extends ElementMetaData {
  preview?: Reference<{}>; // refretence to a preview Object TBD
  sets: [Reference<Set>, Reference<Break>][]; // including warmup, and warmdown sets
}

// Examples:
// naked  pushup
export const pushupBasic: Exercise = {
  name: 'basic pushup',
};

// with some more data
export const pushup3basic: Exercise = {
  name: 'basic pushup',
  label: 'Push up',
  description: 'Classic body weight exercise for uper chest',
  dos: ['Full range of motion', 'Keep elbows close to body'],
  donts: ['Hunch shoulders', 'Sag but'],
  flow: ['plank', 'down'],
};

// Pushups of a count of 3 - full implementation
export const pushup3: Exercise = {
  name: 'Pushup3',
  type: 'exercise',
  label: 'Push up on count of 3',
  equipment: 'none',
  flow: [
    { count: 3, unit: 'second', name: 'plank' },
    { count: 3, unit: 'second', name: 'transition' },
    { count: 3, unit: 'second', name: 'down-plank' },
    { count: 3, unit: 'second', name: 'transition' },
  ],
};

export const assignment1: Assignment = {
  name: 'a1',
  exercise: [
    'pushup3',
    {
      name: 'pullup',
      flow: ['up', 'down'],
    },
  ],
  times: 2,
  rest: 3,
};

export const workout1: Workout = {ce
  name: 'my-first-workout',
  label: 'best workout in the world',
  sets: [
    [
      { name: 'warmup', repetition: ['a1', 'a2'], metric: 10, unit: Unit.rep },
      'Break1',
    ],
  ],
};
