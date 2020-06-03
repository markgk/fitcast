import { Repo, Intensity, ElementType, Element, Unit } from '../Types/Elements';

export const ElementRepoStub: Repo<Element> = {
  pushup: {
    handle: 'pushup',
    type: ElementType.exercise,
    message: 'Classic chest and tricept excercise',
    title: 'Pushup',
    duration: 5,
  },

  lungeJump: {
    handle: 'lungeJump',
    type: ElementType.exercise,
    message: 'lunge and switch position with the jump',
    title: 'lunge Jump',
    duration: 5,
  },

  mountainClimber: {
    handle: 'mountainClimber',
    type: ElementType.exercise,
    message: 'While in plank, alternate legs moving knee to chest',
    title: 'Moountain Climber',
    duration: 5,
  },

  jumpinJack: {
    handle: 'jumpingJack',
    type: ElementType.exercise,
    title: 'Jumping Jack',
    message: 'Old school warmup exercise',
    duration: 5,
  },

  sideToSide: {
    handle: 'sideToSide',
    type: ElementType.exercise,
    title: 'Side to side',
    message: 'up right widestand hop from side to side',
    duration: 5,
  },

  break: {
    handle: 'break',
    title: 'Break',
    type: ElementType.segment,
    intensity: Intensity.none,
    interval: 50,
  },

  lightWorkout: {
    handle: 'lightWorkout',
    title: 'Light Workout',
    type: ElementType.workout,
    message: 'A light bodyweight workout to start your day',

    elements: [
      {
        title: 'Warm Up',
        message: 'Three stage warm up, go faster with every state',
        type: ElementType.phase,
        elements: [
          {
            handle: 'warmupStage',
            title: 'Round 1, low intensity',
            intensity: Intensity.low,
            message: 'Go Slow...',
            type: ElementType.segment,
            elements: [
              {
                reference: 'jumpingJack',
                type: ElementType.exercise,
                interval: 30,
              },
              {
                reference: 'sideToSide',
                type: ElementType.exercise,
                interval: 30,
              },
            ],
          },

          {
            reference: 'break',
            type: ElementType.segment,
            message: 'Prepare to go harder',
            interval: 40,
          },

          {
            title: 'Round 2, medium intensity',
            message: 'Go Faster...',
            reference: 'warmupStage',
            type: ElementType.segment,
            intensity: Intensity.medium,
          },

          {
            reference: 'break',
            type: ElementType.segment,
            message: 'Prepare to the last round',
            interval: 40,
          },

          {
            title: 'Round 3, high intensity',
            message: 'Go your fastest...',
            reference: 'warmupStage',
            type: ElementType.segment,
            intensity: Intensity.medium,
          },
        ],
      },
      {
        title: 'Main work out',
        message: 'Chest And Tricept',
        type: ElementType.phase,
        elements: [
          {
            handle: 'chestAndBackSegment',
            title: 'Round 1...',
            message: '3 ( 20 pushups, 20 lunge jumps, 20 mountain climbers)',
            type: ElementType.segment,
            elements: [
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
          {
            reference: 'break',
            type: ElementType.segment,
            message: '1 down, 2 to go',
            duration: 60,
          },
          {
            title: 'Round 2...',
            reference: 'chestAndBackSegment',
            type: ElementType.segment,
          },
          {
            reference: 'break',
            type: ElementType.segment,
            message: '2 down, 1 left',
            interval: 60,
          },

          {
            title: 'Round 3...',
            reference: 'chestAndBackSegment',
            type: ElementType.segment,
          },
        ],
      },
      {
        title: 'Cool Down',
        message: 'Streches and Yoga',
        type: ElementType.phase,
        elements: [
          {
            title: 'Streches',
            type: ElementType.segment,
            elements: [
              {
                handle: 'headRolls',
                title: 'Head Rolls',
                message: 'Roll head clockwise',
                type: ElementType.exercise,
                times: 5,
              },
              {
                reference: 'headRolls',
                message: 'Roll head counte clockwise',
                type: ElementType.exercise,
              },

              {
                handle: 'shoulderStretch',
                title: 'Shoulder Stretch Right',
                message:
                  'Fold strait hand at shoulder hight towrds you while pressing with the other',
                type: ElementType.exercise,
                duration: 20,
              },
              {
                reference: 'shoulderStretch',
                title: 'Shoulder Stretch left',
                type: ElementType.exercise,
              },
            ],
          },
          {
            title: 'Sun Salutation',
            type: ElementType.segment,
            times: 3,
            elements: [
              {
                title: 'mountain pose',
                type: ElementType.exercise,
                duration: 5,
                units: Unit.breaths,
              },
              {
                title: 'forward bend',
                type: ElementType.exercise,
                duration: 5,
                units: Unit.breaths,
              },
              {
                title: 'touch your toes',
                type: ElementType.exercise,
                duration: 5,
                units: Unit.breaths,
              },
              {
                title: 'plank',
                type: ElementType.exercise,
                duration: 5,
                units: Unit.breaths,
              },
              {
                title: 'dog facing up',
                type: ElementType.exercise,
                duration: 5,
                units: Unit.breaths,
              },
              {
                title: 'dog facing down',
                type: ElementType.exercise,
                duration: 5,
                units: Unit.breaths,
              },
              {
                title: 'calf stretch left',
                type: ElementType.exercise,
                duration: 5,
                units: Unit.breaths,
              },
              {
                title: 'calf stretch right',
                type: ElementType.exercise,
                duration: 5,
                units: Unit.breaths,
              },
              {
                title: 'back to forward bent',
                type: ElementType.exercise,
                duration: 5,
                units: Unit.breaths,
              },
              {
                title: 'touch your toes',
                type: ElementType.exercise,
                duration: 5,
                units: Unit.breaths,
              },
              {
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
