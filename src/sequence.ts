import type { PostureId } from './postures';

export interface SequenceItem {
  posture: PostureId;
  duration: string;
  breath: 'inhale' | 'exhale' | null;
  side?: 'left' | 'right';
}

export interface SequenceGroup {
  name: string;
  description: string;
  items: SequenceItem[];
}

const SEQUENCE_GROUP_MAP = {
  integration: {
    name: 'Integration',
    description: '',
    items: [
      {
        posture: 'child',
        duration: '1-2 minutes',
        breath: null,
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
        posture: 'lowPlank',
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
        posture: 'plank',
        duration: '1 breath',
        breath: 'exhale',
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
        duration: '(Option to have a few breaths here)',
        breath: 'exhale',
      },
    ],
  },
  sunA3: {
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
        posture: 'plank',
        duration: '1 breath',
        breath: 'exhale',
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
        duration: '(Option to have a few breaths here)',
        breath: 'exhale',
      },
    ],
  },
  sunB1: {
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
        posture: 'plank',
        duration: '1 breath',
        breath: 'exhale',
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
        posture: 'downwardDogGaze',
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
        posture: 'warrior2',
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
        posture: 'plank',
        duration: '1 breath',
        breath: 'exhale',
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
        posture: 'downwardDogGaze',
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
        posture: 'warrior2',
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
        posture: 'plank',
        duration: '1 breath',
        breath: 'exhale',
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
    name: 'Sun Salutation B - Round 2',
    description: 'One breath per movement',
    items: [],
  },
  sunB3: {
    name: 'Sun Salutation B - Round 3',
    description: 'One breath per movement (Omit chair)',
    items: [],
  },
  core: {
    name: 'Strengthening Series (Core)',
    description: '',
    items: [],
  },
  crescent: {
    name: 'Crescent Series',
    description: '',
    items: [],
  },
  utkatasana: {
    name: 'Utkatasana Series',
    description: '',
    items: [],
  },
  standing: {
    name: 'Standing Series',
    description: '',
    items: [],
  },
  triangle: {
    name: 'Triangle Series',
    description: '',
    items: [],
  },
  balance: {
    name: 'Balance Series',
    description: '',
    items: [],
  },
  spine: {
    name: 'Spine/Hips Series',
    description: 'Start lowered to knees',
    items: [],
  },
  surrender: {
    name: 'Surrender Series',
    description: 'Start in seated position',
    items: [],
  },
} as const satisfies Record<string, SequenceGroup>;

export type SequenceGroupId = keyof typeof SEQUENCE_GROUP_MAP;

export const getSequenceGroup = (id: SequenceGroupId) => SEQUENCE_GROUP_MAP[id];
