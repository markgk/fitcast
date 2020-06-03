import {
  Exercise,
  Segment,
  Phase,
  Workout,
  Repo,
  Intensity,
  ElementType,
  Element,
  Unit,
} from '../Types/Elements';

export const ElementRepoStub: Repo<Element> = {
  pushup: <Exercise>{
    handle: 'pushup',
    type: ElementType.exercise,
    message: 'Classic chest and tricept excercise',
    title: 'Pushup',
    duration: 5,
  },

  lungeJump: <Exercise>{
    handle: 'lungeJump',
    type: ElementType.exercise,
    message: 'lunge and switch position with the jump',
    title: 'lunge Jump',
    duration: 5,
  },

  mountainClimber: <Exercise>{
    handle: 'mountainClimber',
    type: ElementType.exercise,
    message: 'While in plank, alternate legs moving knee to chest',
    title: 'Moountain Climber',
    duration: 5,
  },

  jumpinJack: <Exercise>{
    handle: 'jumpingJack',
    type: ElementType.exercise,
    title: 'Jumping Jack',
    message: 'Old school warmup exercise',
    duration: 5,
  },

  sideToSide: <Exercise>{
    handle: 'sideToSide',
    type: ElementType.exercise,
    title: 'Side to side',
    message: 'up right widestand hop from side to side',
    duration: 5,
  },

  break: <Segment>{
    handle: 'break',
    title: 'Break',
    type: ElementType.segment,
    intensity: Intensity.none,
    duration: 30,
  },

  lightWorkout: <Workout>{
    handle: 'lightWorkout',
    title: 'Light Workout',
    type: ElementType.workout,
    message: 'A light bodyweight workout to start your day',

    phases: [
      <Phase>{
        title: 'Warm Up',
        message: 'Three stage warm up, go faster with every state',
        type: ElementType.phase,
        segments: [
          <Segment>{
            handle: 'warmupStage',
            title: 'Round 1, low intensity',
            message: 'Go Slow...',
            type: ElementType.segment,
            repetition: [
              {
                reference: 'jumpingJack',
                type: ElementType.exercise,
                duration: 30,
              },
              {
                reference: 'sideToSide',
                type: ElementType.exercise,
                duration: 30,
              },
            ],
            intensity: Intensity.low,
          },

          <Segment>{
            reference: 'break',
            type: ElementType.segment,
            message: 'Prepare to go harder',
            duration: 40,
          },

          <Segment>{
            title: 'Round 2, medium intensity',
            message: 'Go Faster...',
            reference: 'warmupStage',
            type: ElementType.segment,
            intensity: Intensity.medium,
          },

          <Segment>{
            reference: 'break',
            type: ElementType.segment,
            message: 'Prepare to the last round',
            duration: 40,
          },

          <Segment>{
            title: 'Round 3, high intensity',
            message: 'Go your fastest...',
            reference: 'warmupStage',
            type: ElementType.segment,
            intensity: Intensity.medium,
          },
        ],
      },
      <Phase>{
        title: 'Main work out',
        message: 'Chest And Tricept',
        type: ElementType.phase,
        segments: [
          <Segment>{
            handle: 'chestAndBackSegment',
            title: 'Round 1...',
            message: '3 ( 20 pushups, 20 lunge jumps, 20 mountain climbers)',
            type: ElementType.segment,
            repetition: [
              { reference: 'pushup', type: ElementType.exercise, times: 20 },
              {
                reference: 'lungeJump',
                type: ElementType.exercise,
                times: 20,
              },
              {
                reference: 'mountainClimber',
                type: ElementType.exercise,
                times: 20,
              },
            ],
          },
          <Segment>{
            reference: 'break',
            type: ElementType.segment,
            message: '1 down, 2 to go',
            duration: 60,
          },
          <Segment>{
            title: 'Round 2...',
            reference: 'chestAndBackSegment',
            type: ElementType.segment,
          },
          <Segment>{
            reference: 'break',
            type: ElementType.segment,
            message: '2 down, 1 left',
            duration: 60,
          },

          <Segment>{
            title: 'Round 3...',
            reference: 'chestAndBackSegment',
            type: ElementType.segment,
          },
        ],
      },
      <Phase>{
        title: 'Cool Down',
        message: 'Streches and Yoga',
        type: ElementType.phase,
        segments: [
          <Segment>{
            title: 'Streches',
            type: ElementType.segment,
            repetition: [
              <Exercise>{
                handle: 'headRolls',
                title: 'Head Rolls',
                message: 'Roll head clockwise',
                type: ElementType.exercise,
                times: 5,
              },
              <Exercise>{
                reference: 'headRolls',
                message: 'Roll head counte clockwise',
                type: ElementType.exercise,
              },

              <Exercise>{
                handle: 'shoulderStretch',
                title: 'Shoulder Stretch Right',
                message:
                  'Fold strait hand at shoulder hight towrds you while pressing with the other',
                type: ElementType.exercise,
                duration: 20,
              },
              <Exercise>{
                reference: 'shoulderStretch',
                title: 'Shoulder Stretch left',
                type: ElementType.exercise,
              },
            ],
          },
          <Segment>{
            title: 'Sun Salutation',
            type: ElementType.segment,
            times: 3,
            repetition: [
              <Exercise>{
                title: 'mountain pose',
                type: ElementType.exercise,
                duration: 5,
                units: Unit.breaths,
              },
              <Exercise>{
                title: 'forward bend',
                type: ElementType.exercise,
                duration: 5,
                units: Unit.breaths,
              },
              <Exercise>{
                title: 'touch your toes',
                type: ElementType.exercise,
                duration: 5,
                units: Unit.breaths,
              },
              <Exercise>{
                title: 'plank',
                type: ElementType.exercise,
                duration: 5,
                units: Unit.breaths,
              },
              <Exercise>{
                title: 'dog facing up',
                type: ElementType.exercise,
                duration: 5,
                units: Unit.breaths,
              },
              <Exercise>{
                title: 'dog facing down',
                type: ElementType.exercise,
                duration: 5,
                units: Unit.breaths,
              },
              <Exercise>{
                title: 'calf stretch left',
                type: ElementType.exercise,
                duration: 5,
                units: Unit.breaths,
              },
              <Exercise>{
                title: 'calf stretch right',
                type: ElementType.exercise,
                duration: 5,
                units: Unit.breaths,
              },
              <Exercise>{
                title: 'back to forward bent',
                type: ElementType.exercise,
                duration: 5,
                units: Unit.breaths,
              },
              <Exercise>{
                title: 'touch your toes',
                type: ElementType.exercise,
                duration: 5,
                units: Unit.breaths,
              },
              <Exercise>{
                title: 'mountain pose',
                type: ElementType.exercise,
                duration: 10,
                units: Unit.breaths,
              },
            ],
          },
        ],
      },
    ],
  },
};
