import type { PostureId } from '@/features/posture';

export interface SequenceItem {
  posture: PostureId;
  duration: string;
  breath: string | null;
  side?: 'left' | 'right';
}

export interface SequenceGroup {
  id: string;
  name: string;
  description: string;
  items: SequenceItem[];
}

export const SEQUENCE_GROUP_MAP = {
  integration: {
    id: 'integration',
    name: 'Integration',
    description: 'Welcome & Consent',
    items: [
      {
        posture: 'child',
        duration: '1-2 minutes',
        breath: 'Begin Ujjayi breath',
      },
      {
        posture: 'tabletop',
        duration: '3 breaths',
        breath: 'Inhale',
      },
      {
        posture: 'cat',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'cow',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'cat',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'cow',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'cat',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'cow',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'downwardDog',
        duration: '1 minute',
        breath: 'Exhale',
      },
      {
        posture: 'downwardDogGaze',
        duration: '',
        breath: 'Inhale',
      },
      {
        posture: 'ragdoll',
        duration: '1 minute',
        breath: 'Exhale',
      },
      {
        posture: 'rollSpine',
        duration: '',
        breath: 'Inhale',
      },
      {
        posture: 'mountain',
        duration: '3 breaths',
        breath: 'Exhale',
      },
      {
        posture: 'mountainExt',
        duration: '3 breaths',
        breath: 'Inhale',
      },
      {
        posture: 'attention',
        duration: '3 breaths',
        breath: 'Exhale',
      },
    ],
  },
  sunA1: {
    id: 'sunA1',
    name: 'Sun Salutation A - Round 1',
    description: 'Alignment Focus',
    items: [
      {
        posture: 'mountainExt',
        duration: '3 breaths',
        breath: 'Inhale',
      },
      {
        posture: 'forwardFold',
        duration: '3 breaths',
        breath: 'Exhale',
      },
      {
        posture: 'halfwayLift',
        duration: '3 breaths',
        breath: 'Inhale',
      },
      {
        posture: 'plank',
        duration: '3 breaths',
        breath: 'Exhale',
      },
      {
        posture: 'lowerToBelly',
        duration: '',
        breath: 'Exhale',
      },
      {
        posture: 'cobra',
        duration: '3 breaths',
        breath: 'Inhale',
      },
      {
        posture: 'downwardDog',
        duration: '3 breaths',
        breath: 'Exhale',
      },
    ],
  },
  sunA2: {
    id: 'sunA2',
    name: 'Sun Salutation A - Round 2',
    description: 'Demo half series, then one breath per movement',
    items: [
      {
        posture: 'downwardDogGaze',
        duration: '',
        breath: 'Inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'halfwayLift',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'mountainExt',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'halfwayLift',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'lowPlank',
        duration: '',
        breath: 'Exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'downwardDog',
        duration: '',
        breath: 'Exhale',
      },
    ],
  },
  sunA3: {
    id: 'sunA3',
    name: 'Sun Salutation A - Round 3',
    description: 'One breath per movement',
    items: [
      {
        posture: 'downwardDogGaze',
        duration: '',
        breath: 'Inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'halfwayLift',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'mountainExt',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'halfwayLift',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'lowPlank',
        duration: '',
        breath: 'Exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'downwardDog',
        duration: '',
        breath: 'Exhale',
      },
    ],
  },
  sunB1: {
    id: 'sunB1',
    name: 'Sun Salutation B - Round 1',
    description: 'Alignment Focus',
    items: [
      {
        posture: 'downwardDogGaze',
        duration: '',
        breath: 'Inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'halfwayLift',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'chair',
        duration: '3-5 breaths',
        breath: 'Inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'halfwayLift',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'lowPlank',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'downwardDog',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'threeLeggedDog',
        duration: '3 breaths',
        breath: 'Inhale',
        side: 'right',
      },
      {
        posture: 'lunge',
        duration: '3 breaths',
        breath: 'Exhale',
        side: 'right',
      },
      {
        posture: 'warrior2',
        duration: '3-5 breaths',
        breath: 'Inhale',
        side: 'right',
      },
      {
        posture: 'warrior2Sink',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'warrior2Reach',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'sideAngle',
        duration: '3-5 breaths',
        breath: 'Exhale',
        side: 'right',
      },
      {
        posture: 'reverseWarrior',
        duration: '3-5 breaths',
        breath: 'Inhale',
        side: 'right',
      },
      {
        posture: 'lowPlank',
        duration: '',
        breath: 'Exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'downwardDog',
        duration: '(Option to take a few breaths here)',
        breath: 'Exhale',
      },
      {
        posture: 'threeLeggedDog',
        duration: '3 breaths',
        breath: 'Inhale',
        side: 'left',
      },
      {
        posture: 'lunge',
        duration: '3 breaths',
        breath: 'Exhale',
        side: 'left',
      },
      {
        posture: 'warrior2',
        duration: '3-5 breaths',
        breath: 'Inhale',
        side: 'left',
      },
      {
        posture: 'warrior2Sink',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'warrior2Reach',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'sideAngle',
        duration: '3-5 breaths',
        breath: 'Exhale',
        side: 'left',
      },
      {
        posture: 'reverseWarrior',
        duration: '3-5 breaths',
        breath: 'Inhale',
        side: 'left',
      },
      {
        posture: 'lowPlank',
        duration: '',
        breath: 'Exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'downwardDog',
        duration: '',
        breath: 'Exhale',
      },
    ],
  },
  sunB2: {
    id: 'sunB2',
    name: 'Sun Salutation B - Round 2',
    description: 'One breath per movement',
    items: [
      {
        posture: 'downwardDogGaze',
        duration: '',
        breath: 'Inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'halfwayLift',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'chair',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'halfwayLift',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'lowPlank',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'downwardDog',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'threeLeggedDog',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'right',
      },
      {
        posture: 'lunge',
        duration: '1 breath',
        breath: 'Exhale',
        side: 'right',
      },
      {
        posture: 'warrior2',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'right',
      },
      {
        posture: 'sideAngle',
        duration: '1 breath',
        breath: 'Exhale',
        side: 'right',
      },
      {
        posture: 'reverseWarrior',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'right',
      },
      {
        posture: 'lowPlank',
        duration: '',
        breath: 'Exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'downwardDog',
        duration: '(Option to take a few breaths here)',
        breath: 'Exhale',
      },
      {
        posture: 'threeLeggedDog',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'left',
      },
      {
        posture: 'lunge',
        duration: '1 breath',
        breath: 'Exhale',
        side: 'left',
      },
      {
        posture: 'warrior2',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'left',
      },
      {
        posture: 'sideAngle',
        duration: '1 breath',
        breath: 'Exhale',
        side: 'left',
      },
      {
        posture: 'reverseWarrior',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'left',
      },
      {
        posture: 'lowPlank',
        duration: '',
        breath: 'Exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'downwardDog',
        duration: '',
        breath: 'Exhale',
      },
    ],
  },
  sunB3: {
    id: 'sunB3',
    name: 'Sun Salutation B - Round 3',
    description: 'One breath per movement (Omit chair)',
    items: [
      {
        posture: 'threeLeggedDog',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'right',
      },
      {
        posture: 'lunge',
        duration: '1 breath',
        breath: 'Exhale',
        side: 'right',
      },
      {
        posture: 'warrior2',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'right',
      },
      {
        posture: 'sideAngle',
        duration: '1 breath',
        breath: 'Exhale',
        side: 'right',
      },
      {
        posture: 'reverseWarrior',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'right',
      },
      {
        posture: 'lowPlank',
        duration: '',
        breath: 'Exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'downwardDog',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'threeLeggedDog',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'left',
      },
      {
        posture: 'lunge',
        duration: '1 breath',
        breath: 'Exhale',
        side: 'left',
      },
      {
        posture: 'warrior2',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'left',
      },
      {
        posture: 'sideAngle',
        duration: '1 breath',
        breath: 'Exhale',
        side: 'left',
      },
      {
        posture: 'reverseWarrior',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'left',
      },
      {
        posture: 'lowPlank',
        duration: '',
        breath: 'Exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'downwardDog',
        duration: ' 1 breath',
        breath: 'Exhale',
      },
    ],
  },
  core: {
    id: 'core',
    name: 'Strengthening Series (Core)',
    description: '',
    items: [
      {
        posture: 'reclinedBoundSitUp',
        duration: '',
        breath: 'Lift on Exhale, lower on Inhale',
      },
      {
        posture: 'bicycle',
        duration: '',
        breath: 'Side - Exhale, Center - Inhale',
      },
      {
        posture: 'boat',
        duration: '3-5 breaths',
        breath: null,
      },
      {
        posture: 'bridge',
        duration: '',
        breath: '(Inhale on lift, Exhale on lower)',
      },
      {
        posture: 'downwardDog',
        duration: '(Optional half series)',
        breath: '',
      },
    ],
  },
  crescent: {
    id: 'crescent',
    name: 'Crescent Series',
    description: '',
    items: [
      {
        posture: 'threeLeggedDog',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'right',
      },
      {
        posture: 'lunge',
        duration: '1 breath',
        breath: 'Exhale',
        side: 'right',
      },
      {
        posture: 'crescentLunge',
        duration: '3-5 breaths',
        breath: 'Inhale',
        side: 'right',
      },
      {
        posture: 'crescentLungePrayer',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'crescentLungeLengthen',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'revolvedCrescentLunge',
        duration: '3-5 breaths',
        breath: 'Exhale',
        side: 'right',
      },
      {
        posture: 'crescentLunge',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'right',
      },
      {
        posture: 'lizardLunge',
        duration: '5-7 breaths',
        breath: 'Exhale',
        side: 'right',
      },
      {
        posture: 'plank',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'plank',
        duration: 'Hold',
        breath: 'Exhale',
      },
      {
        posture: 'sidePlank',
        duration: '3-5 breaths',
        breath: 'Inhale',
        side: 'right',
      },
      {
        posture: 'lowPlank',
        duration: '',
        breath: 'Exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'downwardDog',
        duration: '',
        breath: 'Exhale',
      },

      {
        posture: 'threeLeggedDog',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'left',
      },
      {
        posture: 'lunge',
        duration: '1 breath',
        breath: 'Exhale',
        side: 'left',
      },
      {
        posture: 'crescentLunge',
        duration: '3-5 breaths',
        breath: 'Inhale',
        side: 'left',
      },
      {
        posture: 'crescentLungePrayer',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'crescentLungeLengthen',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'revolvedCrescentLunge',
        duration: '3-5 breaths',
        breath: 'Exhale',
        side: 'left',
      },
      {
        posture: 'crescentLunge',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'left',
      },
      {
        posture: 'lizardLunge',
        duration: '5-7 breaths',
        breath: 'Exhale',
        side: 'left',
      },
      {
        posture: 'plank',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'plank',
        duration: 'Hold',
        breath: 'Exhale',
      },
      {
        posture: 'sidePlank',
        duration: '3-5 breaths',
        breath: 'Inhale',
        side: 'left',
      },
      {
        posture: 'lowPlank',
        duration: '',
        breath: 'Exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'downwardDog',
        duration: '1 breath',
        breath: 'Exhale',
      },
    ],
  },
  utkatasana: {
    id: 'utkatasana',
    name: 'Utkatasana Series',
    description: '',
    items: [
      {
        posture: 'downwardDogGaze',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'chair',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'eagle',
        duration: '3-5 breaths',
        breath: 'Exhale',
        side: 'right',
      },
      {
        posture: 'mountainExt',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'gorilla',
        duration: '3-5 breaths',
        breath: 'Exhale',
      },
      {
        posture: 'halfwayLift',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'downwardDog',
        duration: '(Optional half series)',
        breath: 'Exhale',
      },
      {
        posture: 'downwardDogGaze',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'chair',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'eagle',
        duration: '3-5 breaths',
        breath: 'Exhale',
        side: 'left',
      },
      {
        posture: 'mountainExt',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'crow',
        duration: '3-10 breaths (option: seat students and demo)',
        breath: 'Inhale',
      },
    ],
  },
  triangle: {
    id: 'triangle',
    name: 'Triangle Series',
    description: '',
    items: [
      {
        posture: 'threeLeggedDog',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'right',
      },
      {
        posture: 'lunge',
        duration: '1 breath',
        breath: 'Exhale',
        side: 'right',
      },
      {
        posture: 'warrior2',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'right',
      },
      {
        posture: 'warrior2Straighten',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'warrior2StraightReach',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'triangle',
        duration: '3-5 breaths',
        breath: 'Exhale',
        side: 'right',
      },
      {
        posture: 'triangleLift',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'wideForwardFold',
        duration: '3-5 breaths',
        breath: 'Exhale',
      },
      {
        posture: 'wideForwardFoldLift',
        duration: '',
        breath: 'Inhale',
      },
      {
        posture: 'warrior2',
        duration: '1 breath',
        breath: 'Exhale',
        side: 'right',
      },
      {
        posture: 'warrior2',
        duration: 'Hold',
        breath: 'Inhale',
        side: 'right',
      },
      {
        posture: 'downwardDog',
        duration: '(Optional half series)',
        breath: 'Exhale',
      },

      {
        posture: 'threeLeggedDog',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'left',
      },
      {
        posture: 'lunge',
        duration: '1 breath',
        breath: 'Exhale',
        side: 'left',
      },
      {
        posture: 'warrior2',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'left',
      },
      {
        posture: 'warrior2Straighten',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'warrior2StraightReach',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'triangle',
        duration: '3-5 breaths',
        breath: 'Exhale',
        side: 'left',
      },
      {
        posture: 'triangleLift',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'goddess',
        duration: '3-5 breaths',
        breath: 'Exhale',
      },
      {
        posture: 'goddessLifted',
        duration: '',
        breath: 'Inhale',
      },
      {
        posture: 'warrior2',
        duration: '1 breath',
        breath: 'Exhale',
        side: 'left',
      },
      {
        posture: 'warrior2',
        duration: 'Hold',
        breath: 'Inhale',
        side: 'left',
      },
      {
        posture: 'downwardDog',
        duration: '(Optional half series)',
        breath: 'Exhale',
      },
    ],
  },
  spine: {
    id: 'spine',
    name: 'Spine/Hips Series',
    description: 'Start lowered to knees',
    items: [
      {
        posture: 'camel',
        duration: '3-5 breaths',
        breath: 'Inhale',
      },
      {
        posture: 'downwardDog',
        duration: "(Optional half series or restorative child's pose)",
        breath: 'Exhale',
      },
      {
        posture: 'threeLeggedDog',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'right',
      },
      {
        posture: 'downwardDogHipStretch',
        duration: '3-5 breaths',
        breath: 'Exhale',
        side: 'right',
      },
      {
        posture: 'threeLeggedDog',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'right',
      },
      {
        posture: 'halfPigeon',
        duration: '3-5 breaths',
        breath: 'Exhale',
        side: 'right',
      },
      {
        posture: 'plank',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'downwardDog',
        duration: '(Optional half series)',
        breath: 'Exhale',
      },
      {
        posture: 'threeLeggedDog',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'left',
      },
      {
        posture: 'downwardDogHipStretch',
        duration: '3-5 breaths',
        breath: 'Exhale',
        side: 'left',
      },
      {
        posture: 'threeLeggedDog',
        duration: '1 breath',
        breath: 'Inhale',
        side: 'left',
      },
      {
        posture: 'halfPigeon',
        duration: '3-5 breaths',
        breath: 'Exhale',
        side: 'left',
      },
      {
        posture: 'plank',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'downwardDog',
        duration: '(Optional half series)',
        breath: 'Exhale',
      },
      {
        posture: 'plank',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'lowerToBelly',
        duration: '',
        breath: 'Exhale',
      },
      {
        posture: 'locust',
        duration: '3-5 breaths',
        breath: 'Inhale',
      },
    ],
  },
  surrender: {
    id: 'surrender',
    name: 'Surrender Series',
    description: 'Start in seated position',
    items: [
      { posture: 'staff', duration: '', breath: 'Inhale' },
      {
        posture: 'seatedForwardFold',
        duration: '5-10 breaths',
        breath: 'Exhale',
      },
      {
        posture: 'staffLiftTorso',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'lowerToBack',
        duration: '1 breath',
        breath: 'Exhale',
      },
      {
        posture: 'happyBaby',
        duration: '5-10 breaths',
        breath: 'Inhale',
      },
      {
        posture: 'supineTwist',
        duration: '5-10 breaths',
        breath: 'Exhale',
        side: 'right',
      },
      {
        posture: 'supineKneesCenter',
        duration: '1 breath',
        breath: 'Inhale',
      },

      {
        posture: 'supineTwist',
        duration: '5-10 breaths',
        breath: 'Exhale',
        side: 'left',
      },
      {
        posture: 'supineKneesCenter',
        duration: '1 breath',
        breath: 'Inhale',
      },
      {
        posture: 'corpse',
        duration: '',
        breath: 'Exhale (release Ujjayi breath)',
      },
    ],
  },
} as const satisfies Record<string, SequenceGroup>;

export type SequenceGroupId = keyof typeof SEQUENCE_GROUP_MAP;

export const getSequenceGroup = (id: SequenceGroupId) => SEQUENCE_GROUP_MAP[id];
