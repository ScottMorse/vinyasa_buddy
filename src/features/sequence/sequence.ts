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
        breath: 'inhale',
      },
      {
        posture: 'cat',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'cow',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'cat',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'cow',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'cat',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'cow',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'downwardDog',
        duration: '1 minute',
        breath: 'exhale',
      },
      {
        posture: 'downwardDogGaze',
        duration: '',
        breath: 'inhale',
      },
      {
        posture: 'ragdoll',
        duration: '1 minute',
        breath: 'exhale',
      },
      {
        posture: 'rollSpine',
        duration: '',
        breath: 'inhale',
      },
      {
        posture: 'mountain',
        duration: '3 breaths',
        breath: 'exhale',
      },
      {
        posture: 'mountainExt',
        duration: '3 breaths',
        breath: 'inhale',
      },
      {
        posture: 'attention',
        duration: '3 breaths',
        breath: 'exhale',
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
        breath: 'inhale',
      },
      {
        posture: 'forwardFold',
        duration: '3 breaths',
        breath: 'exhale',
      },
      {
        posture: 'halfwayLift',
        duration: '3 breaths',
        breath: 'inhale',
      },
      {
        posture: 'plank',
        duration: '3 breaths',
        breath: 'exhale',
      },
      {
        posture: 'lowerToBelly',
        duration: '',
        breath: 'exhale',
      },
      {
        posture: 'cobra',
        duration: '3 breaths',
        breath: 'inhale',
      },
      {
        posture: 'downwardDog',
        duration: '3 breaths',
        breath: 'exhale',
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
        breath: 'inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'halfwayLift',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'mountainExt',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'halfwayLift',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'lowPlank',
        duration: '',
        breath: 'exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'downwardDog',
        duration: '',
        breath: 'exhale',
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
        breath: 'inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'halfwayLift',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'mountainExt',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'halfwayLift',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'lowPlank',
        duration: '',
        breath: 'exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'downwardDog',
        duration: '',
        breath: 'exhale',
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
        breath: 'inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'halfwayLift',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'chair',
        duration: '3-5 breaths',
        breath: 'inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'halfwayLift',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'lowPlank',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'downwardDog',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'threeLeggedDog',
        duration: '3 breaths',
        breath: 'inhale',
        side: 'right',
      },
      {
        posture: 'lunge',
        duration: '3 breaths',
        breath: 'exhale',
        side: 'right',
      },
      {
        posture: 'warrior2',
        duration: '3-5 breaths',
        breath: 'inhale',
        side: 'right',
      },
      {
        posture: 'warrior2Sink',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'warrior2Reach',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'sideAngle',
        duration: '3-5 breaths',
        breath: 'exhale',
        side: 'right',
      },
      {
        posture: 'reverseWarrior',
        duration: '3-5 breaths',
        breath: 'inhale',
        side: 'right',
      },
      {
        posture: 'lowPlank',
        duration: '',
        breath: 'exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'downwardDog',
        duration: '(Option to take a few breaths here)',
        breath: 'exhale',
      },
      {
        posture: 'threeLeggedDog',
        duration: '3 breaths',
        breath: 'inhale',
        side: 'left',
      },
      {
        posture: 'lunge',
        duration: '3 breaths',
        breath: 'exhale',
        side: 'left',
      },
      {
        posture: 'warrior2',
        duration: '3-5 breaths',
        breath: 'inhale',
        side: 'left',
      },
      {
        posture: 'warrior2Sink',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'warrior2Reach',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'sideAngle',
        duration: '3-5 breaths',
        breath: 'exhale',
        side: 'left',
      },
      {
        posture: 'reverseWarrior',
        duration: '3-5 breaths',
        breath: 'inhale',
        side: 'left',
      },
      {
        posture: 'lowPlank',
        duration: '',
        breath: 'exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'downwardDog',
        duration: '',
        breath: 'exhale',
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
        breath: 'inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'halfwayLift',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'chair',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'halfwayLift',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'lowPlank',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'downwardDog',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'threeLeggedDog',
        duration: '1 breath',
        breath: 'inhale',
        side: 'right',
      },
      {
        posture: 'lunge',
        duration: '1 breath',
        breath: 'exhale',
        side: 'right',
      },
      {
        posture: 'warrior2',
        duration: '1 breath',
        breath: 'inhale',
        side: 'right',
      },
      {
        posture: 'sideAngle',
        duration: '1 breath',
        breath: 'exhale',
        side: 'right',
      },
      {
        posture: 'reverseWarrior',
        duration: '1 breath',
        breath: 'inhale',
        side: 'right',
      },
      {
        posture: 'lowPlank',
        duration: '',
        breath: 'exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'downwardDog',
        duration: '(Option to take a few breaths here)',
        breath: 'exhale',
      },
      {
        posture: 'threeLeggedDog',
        duration: '1 breath',
        breath: 'inhale',
        side: 'left',
      },
      {
        posture: 'lunge',
        duration: '1 breath',
        breath: 'exhale',
        side: 'left',
      },
      {
        posture: 'warrior2',
        duration: '1 breath',
        breath: 'inhale',
        side: 'left',
      },
      {
        posture: 'sideAngle',
        duration: '1 breath',
        breath: 'exhale',
        side: 'left',
      },
      {
        posture: 'reverseWarrior',
        duration: '1 breath',
        breath: 'inhale',
        side: 'left',
      },
      {
        posture: 'lowPlank',
        duration: '',
        breath: 'exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'downwardDog',
        duration: '',
        breath: 'exhale',
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
        breath: 'inhale',
        side: 'right',
      },
      {
        posture: 'lunge',
        duration: '1 breath',
        breath: 'exhale',
        side: 'right',
      },
      {
        posture: 'warrior2',
        duration: '1 breath',
        breath: 'inhale',
        side: 'right',
      },
      {
        posture: 'sideAngle',
        duration: '1 breath',
        breath: 'exhale',
        side: 'right',
      },
      {
        posture: 'reverseWarrior',
        duration: '1 breath',
        breath: 'inhale',
        side: 'right',
      },
      {
        posture: 'lowPlank',
        duration: '',
        breath: 'exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'downwardDog',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'threeLeggedDog',
        duration: '1 breath',
        breath: 'inhale',
        side: 'left',
      },
      {
        posture: 'lunge',
        duration: '1 breath',
        breath: 'exhale',
        side: 'left',
      },
      {
        posture: 'warrior2',
        duration: '1 breath',
        breath: 'inhale',
        side: 'left',
      },
      {
        posture: 'sideAngle',
        duration: '1 breath',
        breath: 'exhale',
        side: 'left',
      },
      {
        posture: 'reverseWarrior',
        duration: '1 breath',
        breath: 'inhale',
        side: 'left',
      },
      {
        posture: 'lowPlank',
        duration: '',
        breath: 'exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'downwardDog',
        duration: ' 1 breath',
        breath: 'exhale',
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
        breath: 'Lift on exhale, lower on inhale',
      },
      {
        posture: 'bicycle',
        duration: '',
        breath: 'Side - exhale, Center - inhale',
      },
      {
        posture: 'boat',
        duration: '3-5 breaths',
        breath: null,
      },
      {
        posture: 'bridge',
        duration: '',
        breath: '(inhale on lift, exhale on lower)',
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
        breath: 'inhale',
        side: 'right',
      },
      {
        posture: 'lunge',
        duration: '1 breath',
        breath: 'exhale',
        side: 'right',
      },
      {
        posture: 'crescentLunge',
        duration: '3-5 breaths',
        breath: 'inhale',
        side: 'right',
      },
      {
        posture: 'crescentLungePrayer',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'crescentLungeLengthen',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'revolvedCrescentLunge',
        duration: '3-5 breaths',
        breath: 'exhale',
        side: 'right',
      },
      {
        posture: 'crescentLunge',
        duration: '1 breath',
        breath: 'inhale',
        side: 'right',
      },
      {
        posture: 'lizardLunge',
        duration: '5-7 breaths',
        breath: 'exhale',
        side: 'right',
      },
      {
        posture: 'plank',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'plank',
        duration: 'Hold',
        breath: 'exhale',
      },
      {
        posture: 'sidePlank',
        duration: '3-5 breaths',
        breath: 'inhale',
        side: 'right',
      },
      {
        posture: 'lowPlank',
        duration: '',
        breath: 'exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'downwardDog',
        duration: '',
        breath: 'exhale',
      },

      {
        posture: 'threeLeggedDog',
        duration: '1 breath',
        breath: 'inhale',
        side: 'left',
      },
      {
        posture: 'lunge',
        duration: '1 breath',
        breath: 'exhale',
        side: 'left',
      },
      {
        posture: 'crescentLunge',
        duration: '3-5 breaths',
        breath: 'inhale',
        side: 'left',
      },
      {
        posture: 'crescentLungePrayer',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'crescentLungeLengthen',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'revolvedCrescentLunge',
        duration: '3-5 breaths',
        breath: 'exhale',
        side: 'left',
      },
      {
        posture: 'crescentLunge',
        duration: '1 breath',
        breath: 'inhale',
        side: 'left',
      },
      {
        posture: 'lizardLunge',
        duration: '5-7 breaths',
        breath: 'exhale',
        side: 'left',
      },
      {
        posture: 'plank',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'plank',
        duration: 'Hold',
        breath: 'exhale',
      },
      {
        posture: 'sidePlank',
        duration: '3-5 breaths',
        breath: 'inhale',
        side: 'left',
      },
      {
        posture: 'lowPlank',
        duration: '',
        breath: 'exhale',
      },
      {
        posture: 'upwardDog',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'downwardDog',
        duration: '1 breath',
        breath: 'exhale',
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
        breath: 'inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'chair',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'eagle',
        duration: '3-5 breaths',
        breath: 'exhale',
        side: 'right',
      },
      {
        posture: 'mountainExt',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'gorilla',
        duration: '3-5 breaths',
        breath: 'exhale',
      },
      {
        posture: 'halfwayLift',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'downwardDog',
        duration: '(Optional half series)',
        breath: 'exhale',
      },
      {
        posture: 'downwardDogGaze',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'chair',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'eagle',
        duration: '3-5 breaths',
        breath: 'exhale',
        side: 'left',
      },
      {
        posture: 'mountainExt',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'forwardFold',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'crow',
        duration: '3-10 breaths (option: seat students and demo)',
        breath: 'inhale',
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
        breath: 'inhale',
        side: 'right',
      },
      {
        posture: 'lunge',
        duration: '1 breath',
        breath: 'exhale',
        side: 'right',
      },
      {
        posture: 'warrior2',
        duration: '1 breath',
        breath: 'inhale',
        side: 'right',
      },
      {
        posture: 'warrior2Straighten',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'warrior2StraightReach',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'triangle',
        duration: '3-5 breaths',
        breath: 'exhale',
        side: 'right',
      },
      {
        posture: 'triangleLift',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'wideForwardFold',
        duration: '3-5 breaths',
        breath: 'exhale',
      },
      {
        posture: 'wideForwardFoldLift',
        duration: '',
        breath: 'inhale',
      },
      {
        posture: 'warrior2',
        duration: '1 breath',
        breath: 'exhale',
        side: 'right',
      },
      {
        posture: 'warrior2',
        duration: 'Hold',
        breath: 'inhale',
        side: 'right',
      },
      {
        posture: 'downwardDog',
        duration: '(Optional half series)',
        breath: 'exhale',
      },

      {
        posture: 'threeLeggedDog',
        duration: '1 breath',
        breath: 'inhale',
        side: 'left',
      },
      {
        posture: 'lunge',
        duration: '1 breath',
        breath: 'exhale',
        side: 'left',
      },
      {
        posture: 'warrior2',
        duration: '1 breath',
        breath: 'inhale',
        side: 'left',
      },
      {
        posture: 'warrior2Straighten',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'warrior2StraightReach',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'triangle',
        duration: '3-5 breaths',
        breath: 'exhale',
        side: 'left',
      },
      {
        posture: 'triangleLift',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'goddess',
        duration: '3-5 breaths',
        breath: 'exhale',
      },
      {
        posture: 'goddessLifted',
        duration: '',
        breath: 'inhale',
      },
      {
        posture: 'warrior2',
        duration: '1 breath',
        breath: 'exhale',
        side: 'left',
      },
      {
        posture: 'warrior2',
        duration: 'Hold',
        breath: 'inhale',
        side: 'left',
      },
      {
        posture: 'downwardDog',
        duration: '(Optional half series)',
        breath: 'exhale',
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
        breath: 'inhale',
      },
      {
        posture: 'downwardDog',
        duration: "(Optional half series or restorative child's pose)",
        breath: 'exhale',
      },
      {
        posture: 'threeLeggedDog',
        duration: '1 breath',
        breath: 'inhale',
        side: 'right',
      },
      {
        posture: 'downwardDogHipStretch',
        duration: '3-5 breaths',
        breath: 'exhale',
        side: 'right',
      },
      {
        posture: 'threeLeggedDog',
        duration: '1 breath',
        breath: 'inhale',
        side: 'right',
      },
      {
        posture: 'halfPigeon',
        duration: '3-5 breaths',
        breath: 'exhale',
        side: 'right',
      },
      {
        posture: 'plank',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'downwardDog',
        duration: '(Optional half series)',
        breath: 'exhale',
      },
      {
        posture: 'threeLeggedDog',
        duration: '1 breath',
        breath: 'inhale',
        side: 'left',
      },
      {
        posture: 'downwardDogHipStretch',
        duration: '3-5 breaths',
        breath: 'exhale',
        side: 'left',
      },
      {
        posture: 'threeLeggedDog',
        duration: '1 breath',
        breath: 'inhale',
        side: 'left',
      },
      {
        posture: 'halfPigeon',
        duration: '3-5 breaths',
        breath: 'exhale',
        side: 'left',
      },
      {
        posture: 'plank',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'downwardDog',
        duration: '(Optional half series)',
        breath: 'exhale',
      },
      {
        posture: 'plank',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'lowerToBelly',
        duration: '',
        breath: 'exhale',
      },
      {
        posture: 'locust',
        duration: '3-5 breaths',
        breath: 'inhale',
      },
    ],
  },
  surrender: {
    id: 'surrender',
    name: 'Surrender Series',
    description: 'Start in seated position',
    items: [
      { posture: 'staff', duration: '', breath: 'inhale' },
      {
        posture: 'seatedForwardFold',
        duration: '5-10 breaths',
        breath: 'exhale',
      },
      {
        posture: 'staffLiftTorso',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'lowerToBack',
        duration: '1 breath',
        breath: 'exhale',
      },
      {
        posture: 'happyBaby',
        duration: '5-10 breaths',
        breath: 'inhale',
      },
      {
        posture: 'supineTwist',
        duration: '5-10 breaths',
        breath: 'exhale',
        side: 'right',
      },
      {
        posture: 'supineKneesCenter',
        duration: '1 breath',
        breath: 'inhale',
      },

      {
        posture: 'supineTwist',
        duration: '5-10 breaths',
        breath: 'exhale',
        side: 'left',
      },
      {
        posture: 'supineKneesCenter',
        duration: '1 breath',
        breath: 'inhale',
      },
      {
        posture: 'corpse',
        duration: '',
        breath: 'exhale (release Ujjayi breath)',
      },
    ],
  },
} as const satisfies Record<string, SequenceGroup>;

export type SequenceGroupId = keyof typeof SEQUENCE_GROUP_MAP;

export const getSequenceGroup = (id: SequenceGroupId) => SEQUENCE_GROUP_MAP[id];
