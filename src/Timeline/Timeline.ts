
import { ElementType, Segment, StringField, NumberField } from './../Types/Elements';

enum Play {
  none,
  play,
  pause
}


interface ElementState {
  name: StringField
  next: StringField
  timeLeft: NumberField
  totalTime: NumberField
  count: NumberField
  totalCount: NumberField
  message: StringField
}

interface State <T>{
  play: Play
  timeLeft: number
  phase: T
  segment : T
  exercise : T
}

type WorkoutState = State<ElementState>
type EventAction = Partial<State<Partial<ElementState>>>

export interface Event {
  time: number;
  action?: EventAction
  state?: WorkoutState
}

export interface Workout {
  title: string;
  by: string;
  description: string;
  workout: Workout; // Handle might do
  timeline: Event[];
}

export class TimeLine {
  events: Event[] = [];
  state : WorkoutState = WorkoutInitialState
  time = 0;

    this.events.push(event)

    element.elements!.forEach( e =>{
     
      switch (e.type) {
        case ElementType.post :

          }

      }



    })
  }
}
