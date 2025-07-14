import type { StickFigurePosition } from '@/features/stickFigure/stickFigurePosition';

export interface PostureMetadata {
  id: string;
  name: string;
  sanskritName: string;
  cues: string[];
  transitionalCues?: string[];
  assists: string[];
  modifications: string[];
  stickFigurePosition: Partial<StickFigurePosition>;
  transitionOnly?: boolean;
}

const POSTURE_MAP = {
  child: {
    id: 'child',
    name: "Child's Pose",
    sanskritName: 'Bālāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      head: {
        neckAngle: 20,
      },
      neck: {
        chestAngle: 20,
      },
      chest: {
        abdomenAngle: 20,
      },
      abdomen: {
        hipAngle: 75,
      },
      leftUpperArm: {
        shoulderAngle: -70,
      },
      leftLowerArm: {
        elbowAngle: 4,
      },
      rightUpperArm: {
        shoulderAngle: -110,
      },
      rightLowerArm: {
        elbowAngle: -2,
      },
      leftUpperLeg: {
        hipAngle: 75,
      },
      leftLowerLeg: {
        kneeAngle: 160,
      },
      rightUpperLeg: {
        hipAngle: -73,
      },
      rightLowerLeg: {
        kneeAngle: -160,
      },
    },
  },
  tabletop: {
    id: 'tabletop',
    name: 'Tabletop',
    sanskritName: 'Cakravākāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      abdomen: {
        hipAngle: 90,
      },
      leftLowerLeg: {
        kneeAngle: 90,
      },
      rightLowerLeg: {
        kneeAngle: -90,
      },
      rightUpperArm: {
        shoulderAngle: 180,
      },
    },
  },
  cat: {
    id: 'cat',
    name: 'Cat',
    sanskritName: 'Mārjarīāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      neck: {
        chestAngle: 20,
      },
      chest: {
        abdomenAngle: 60,
      },
      abdomen: {
        hipAngle: 60,
      },
      leftLowerLeg: {
        kneeAngle: 90,
      },
      rightLowerLeg: {
        kneeAngle: -90,
      },
      leftUpperArm: {
        shoulderAngle: -30,
      },
      rightUpperArm: {
        shoulderAngle: 210,
      },
    },
  },
  cow: {
    id: 'cow',
    name: 'Cow',
    sanskritName: 'Biḍālāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      neck: {
        chestAngle: -15,
      },
      chest: {
        abdomenAngle: -40,
      },
      abdomen: {
        hipAngle: 110,
      },
      leftLowerLeg: {
        kneeAngle: 90,
      },
      rightLowerLeg: {
        kneeAngle: -90,
      },
      leftUpperArm: {
        shoulderAngle: 20,
      },
      rightUpperArm: {
        shoulderAngle: 160,
      },
    },
  },
  downwardDog: {
    id: 'downwardDog',
    name: 'Downward Facing Dog',
    sanskritName: 'Adho Mukha Svanāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      abdomen: {
        hipAngle: 137,
      },
      leftLowerLeg: {
        kneeAngle: 60,
      },
      rightLowerLeg: {
        kneeAngle: -60,
      },
      leftUpperArm: {
        shoulderAngle: -80,
      },
      rightUpperArm: {
        shoulderAngle: 260,
      },
      leftLowerArm: {
        elbowAngle: 10,
      },
      rightLowerArm: {
        elbowAngle: -10,
      },
    },
  },
  downwardDogGaze: {
    id: 'downwardDogGaze',
    name: 'Gaze Forward',
    sanskritName: '',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    transitionOnly: true,
    stickFigurePosition: {
      abdomen: {
        hipAngle: 122,
      },
      leftLowerLeg: {
        kneeAngle: 60,
      },
      rightLowerLeg: {
        kneeAngle: -60,
      },
      leftUpperArm: {
        shoulderAngle: -40,
      },
      rightUpperArm: {
        shoulderAngle: 220,
      },
      leftLowerArm: {
        elbowAngle: 10,
      },
      rightLowerArm: {
        elbowAngle: -10,
      },
    },
  },
  ragdoll: {
    id: 'ragdoll',
    name: 'Ragdoll (Forward Fold Variation)',
    sanskritName: 'Uttānāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      neck: {
        chestAngle: 25,
      },
      abdomen: {
        hipAngle: 130,
      },
      chest: {
        abdomenAngle: 20,
      },
      leftUpperLeg: {
        hipAngle: 10,
      },
      rightUpperLeg: {
        hipAngle: -10,
      },
      leftLowerLeg: {
        kneeAngle: 15,
      },
      rightLowerLeg: {
        kneeAngle: -15,
      },
      leftUpperArm: {
        shoulderAngle: -50,
      },
      rightUpperArm: {
        shoulderAngle: 230,
      },
      leftLowerArm: {
        elbowAngle: -5,
      },
    },
  },
  rollSpine: {
    id: 'rollSpine',
    name: 'Roll up the Spine',
    sanskritName: '',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    transitionOnly: true,
    stickFigurePosition: {
      neck: {
        chestAngle: 25,
      },
      abdomen: {
        hipAngle: 0,
      },
      chest: {
        abdomenAngle: 20,
      },
      leftUpperLeg: {
        hipAngle: 10,
      },
      rightUpperLeg: {
        hipAngle: -5,
      },
      leftLowerLeg: {
        kneeAngle: 10,
      },
      rightLowerLeg: {
        kneeAngle: -10,
      },
      leftUpperArm: {
        shoulderAngle: 40,
      },
      rightUpperArm: {
        shoulderAngle: 130,
      },
      leftLowerArm: {
        elbowAngle: -5,
      },
    },
  },
  mountain: {
    id: 'mountain',
    name: 'Mountain',
    sanskritName: 'Tāḍāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      rightUpperArm: {
        shoulderAngle: 80,
      },
      rightLowerArm: {
        elbowAngle: 10,
      },
      leftUpperArm: {
        shoulderAngle: 80,
      },
      leftLowerArm: {
        elbowAngle: 10,
      },
    },
  },
  mountainExt: {
    id: 'mountainExt',
    name: 'Extended Mountain',
    sanskritName: 'Ūrdhva Hastāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      rightUpperArm: {
        shoulderAngle: -40,
      },
      rightLowerArm: {
        elbowAngle: 40,
      },
      leftUpperArm: {
        shoulderAngle: -40,
      },
      leftLowerArm: {
        elbowAngle: 40,
      },
    },
  },
  attention: {
    id: 'attention',
    name: 'Standing At Attention',
    sanskritName: 'Samasthiti',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      rightUpperArm: {
        shoulderAngle: 45,
      },
      rightLowerArm: {
        elbowAngle: -150,
      },
      leftUpperArm: {
        shoulderAngle: 45,
      },
      leftLowerArm: {
        elbowAngle: -150,
      },
    },
  },
  forwardFold: {
    id: 'forwardFold',
    name: 'Forward Fold',
    sanskritName: 'Uttānāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      neck: {
        chestAngle: 25,
      },
      abdomen: {
        hipAngle: 140,
      },
      chest: {
        abdomenAngle: 20,
      },
      leftUpperLeg: {
        hipAngle: 10,
      },
      rightUpperLeg: {
        hipAngle: -10,
      },
      leftLowerLeg: {
        kneeAngle: 10,
      },
      rightLowerLeg: {
        kneeAngle: -10,
      },
      leftUpperArm: {
        shoulderAngle: -70,
      },
      rightUpperArm: {
        shoulderAngle: -110,
      },
      leftLowerArm: {
        elbowAngle: -5,
      },
    },
  },
  halfwayLift: {
    id: 'halfwayLift',
    name: 'Halfway Lift',
    sanskritName: 'Ardha Uttānāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      abdomen: {
        hipAngle: 90,
      },
      chest: {
        abdomenAngle: 2,
      },
      leftUpperLeg: {
        hipAngle: 5,
      },
      rightUpperLeg: {
        hipAngle: -5,
      },
      leftLowerLeg: {
        kneeAngle: 5,
      },
      rightLowerLeg: {
        kneeAngle: -5,
      },
      leftUpperArm: {
        shoulderAngle: 70,
      },
      rightUpperArm: {
        shoulderAngle: 110,
      },
      leftLowerArm: {
        elbowAngle: 5,
      },
      rightLowerArm: {
        elbowAngle: -10,
      },
    },
  },
  plank: {
    id: 'plank',
    name: 'Plank',
    sanskritName: 'Kumbhakasana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      abdomen: {
        hipAngle: 80,
      },
      leftUpperLeg: {
        hipAngle: -65,
      },
      rightUpperLeg: {
        hipAngle: 65,
      },
      leftLowerLeg: {
        kneeAngle: 3,
      },
      rightLowerLeg: {
        kneeAngle: -3,
      },
      rightUpperArm: {
        shoulderAngle: 180,
      },
      leftLowerArm: {
        elbowAngle: 5,
      },
      rightLowerArm: {
        elbowAngle: -5,
      },
    },
  },
  lowPlank: {
    id: 'lowPlank',
    name: 'Plank to Low Plank',
    sanskritName: 'Chaturanga',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      abdomen: {
        hipAngle: 90,
      },
      leftUpperLeg: {
        hipAngle: -75,
      },
      rightUpperLeg: {
        hipAngle: 75,
      },
      leftLowerLeg: {
        kneeAngle: 3,
      },
      rightLowerLeg: {
        kneeAngle: -3,
      },
      leftUpperArm: {
        shoulderAngle: 90,
      },
      rightUpperArm: {
        shoulderAngle: 90,
      },
      leftLowerArm: {
        elbowAngle: 90,
      },
      rightLowerArm: {
        elbowAngle: -90,
      },
    },
  },
  lowerToBelly: {
    id: 'lowerToBelly',
    name: 'Lower to Belly',
    sanskritName: '',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      abdomen: {
        hipAngle: 90,
      },
      leftUpperLeg: {
        hipAngle: -85,
      },
      rightUpperLeg: {
        hipAngle: 85,
      },
      leftLowerLeg: {
        kneeAngle: 3,
      },
      rightLowerLeg: {
        kneeAngle: -3,
      },
      leftUpperArm: {
        shoulderAngle: 90,
      },
      rightUpperArm: {
        shoulderAngle: 90,
      },
      leftLowerArm: {
        elbowAngle: 150,
      },
      rightLowerArm: {
        elbowAngle: -150,
      },
    },
  },
  cobra: {
    id: 'cobra',
    name: 'Cobra',
    sanskritName: 'Bhujaṅgāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      neck: {
        chestAngle: -10,
      },
      chest: {
        abdomenAngle: -15,
      },
      abdomen: {
        hipAngle: 70,
      },
      leftUpperLeg: {
        hipAngle: -85,
      },
      rightUpperLeg: {
        hipAngle: 85,
      },
      leftLowerLeg: {
        kneeAngle: 5,
      },
      rightLowerLeg: {
        kneeAngle: -5,
      },
      leftUpperArm: {
        shoulderAngle: 70,
      },
      rightUpperArm: {
        shoulderAngle: 110,
      },
      leftLowerArm: {
        elbowAngle: 110,
      },
      rightLowerArm: {
        elbowAngle: -110,
      },
    },
  },
  upwardDog: {
    id: 'upwardDog',
    name: 'Upward Facing Dog',
    sanskritName: 'Ūrdhva Mukha Śvanāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      neck: {
        chestAngle: -10,
      },
      chest: {
        abdomenAngle: -30,
      },
      abdomen: {
        hipAngle: 50,
      },
      leftUpperLeg: {
        hipAngle: -85,
      },
      rightUpperLeg: {
        hipAngle: 85,
      },
      leftUpperArm: {
        shoulderAngle: 70,
      },
      rightUpperArm: {
        shoulderAngle: 110,
      },
      leftLowerArm: {
        elbowAngle: 5,
      },
      rightLowerArm: {
        elbowAngle: -5,
      },
    },
  },
  chair: {
    id: 'chair',
    name: 'Chair',
    sanskritName: 'Utkaṭāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      abdomen: {
        hipAngle: 30,
      },
      leftUpperLeg: {
        hipAngle: 30,
      },
      rightUpperLeg: {
        hipAngle: -30,
      },
      leftLowerLeg: {
        kneeAngle: 60,
      },
      rightLowerLeg: {
        kneeAngle: -60,
      },
      leftUpperArm: {
        shoulderAngle: -80,
      },
      rightUpperArm: {
        shoulderAngle: -80,
      },
      leftLowerArm: {
        elbowAngle: 5,
      },
      rightLowerArm: {
        elbowAngle: 5,
      },
    },
  },
  threeLeggedDog: {
    id: 'threeLeggedDog',
    name: 'Three-Legged Down Dog',
    sanskritName: 'Eka Pāda Adho Mukha Śvānāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      abdomen: {
        hipAngle: 137,
      },
      rightUpperLeg: {
        hipAngle: 120,
      },
      leftLowerLeg: {
        kneeAngle: 60,
      },
      rightLowerLeg: {
        kneeAngle: -10,
      },
      leftUpperArm: {
        shoulderAngle: -80,
      },
      rightUpperArm: {
        shoulderAngle: 260,
      },
      leftLowerArm: {
        elbowAngle: 10,
      },
      rightLowerArm: {
        elbowAngle: -10,
      },
    },
  },
  threeLeggedDogCue: {
    id: 'threeLeggedDogCue',
    name: 'Extend leg, Square Hips (3-Legged Dog)',
    sanskritName: 'Eka Pāda Adho Mukha Śvānāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    transitionOnly: true,
    stickFigurePosition: {
      abdomen: {
        hipAngle: 137,
      },
      rightUpperLeg: {
        hipAngle: 120,
      },
      leftLowerLeg: {
        kneeAngle: 60,
      },
      rightLowerLeg: {
        kneeAngle: -10,
      },
      leftUpperArm: {
        shoulderAngle: -80,
      },
      rightUpperArm: {
        shoulderAngle: 260,
      },
      leftLowerArm: {
        elbowAngle: 10,
      },
      rightLowerArm: {
        elbowAngle: -10,
      },
    },
  },
  lunge: {
    id: 'lunge',
    name: 'Lunge',
    sanskritName: 'Āñjaneyāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      abdomen: {
        hipAngle: 80,
      },
      chest: {
        abdomenAngle: 5,
      },
      leftUpperLeg: {
        hipAngle: 90,
      },
      rightUpperLeg: {
        hipAngle: 60,
      },
      leftLowerLeg: {
        kneeAngle: 85,
      },
      rightLowerLeg: {
        kneeAngle: -3,
      },
      leftUpperArm: {
        shoulderAngle: 5,
      },
      rightUpperArm: {
        shoulderAngle: 175,
      },
      leftLowerArm: {
        elbowAngle: 5,
      },
      rightLowerArm: {
        elbowAngle: -5,
      },
    },
  },
  warrior2: {
    id: 'warrior2',
    name: 'Warrior 2',
    sanskritName: 'Vīrabhadrāsana II',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      leftUpperLeg: {
        hipAngle: 70,
      },
      rightUpperLeg: {
        hipAngle: 47.5,
      },
      leftLowerLeg: {
        kneeAngle: 65,
      },
    },
  },
  warrior2Sink: {
    id: 'warrior2',
    name: 'Warrior 2 (Sink Down)',
    sanskritName: 'Vīrabhadrāsana II',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      leftUpperLeg: {
        hipAngle: 80,
      },
      rightUpperLeg: {
        hipAngle: 55,
      },
      leftLowerLeg: {
        kneeAngle: 75,
      },
    },
  },
  warrior2Reach: {
    id: 'warrior2Reach',
    name: 'Warrior 2 (Reach Forward)',
    sanskritName: 'Vīrabhadrāsana II',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    transitionOnly: true,
    stickFigurePosition: {
      neck: {
        chestAngle: -5,
      },
      chest: {
        abdomenAngle: 5,
      },
      abdomen: {
        hipAngle: 20,
      },
      leftUpperLeg: {
        hipAngle: 80,
      },
      rightUpperLeg: {
        hipAngle: 55,
      },
      leftLowerLeg: {
        kneeAngle: 75,
      },
      leftUpperArm: {
        shoulderAngle: -25,
      },
      rightUpperArm: {
        shoulderAngle: 25,
      },
    },
  },
  warrior2Straighten: {
    id: 'warrior2Straighten',
    name: 'Straighten Knee',
    sanskritName: 'Vīrabhadrāsana II',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      leftUpperLeg: {
        hipAngle: 50,
      },
      rightUpperLeg: {
        hipAngle: 47.5,
      },
      leftLowerLeg: {
        kneeAngle: 5,
      },
    },
  },
  warrior2StraightReach: {
    id: 'warrior2StraightReach',
    name: 'Reach Forward',
    sanskritName: 'Vīrabhadrāsana II',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      neck: {
        chestAngle: -5,
      },
      chest: {
        abdomenAngle: 5,
      },
      abdomen: {
        hipAngle: 20,
      },
      leftUpperLeg: {
        hipAngle: 50,
      },
      rightUpperLeg: {
        hipAngle: 47.5,
      },
      leftLowerLeg: {
        kneeAngle: 5,
      },

      leftUpperArm: {
        shoulderAngle: -25,
      },
      rightUpperArm: {
        shoulderAngle: 25,
      },
    },
  },
  sideAngle: {
    id: 'sideAngle',
    name: 'Extended Side Angle',
    sanskritName: 'Utthita Pārśvakoṇāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    transitionOnly: true,
    stickFigurePosition: {
      abdomen: {
        hipAngle: 30,
      },
      leftUpperLeg: {
        hipAngle: 80,
      },
      rightUpperLeg: {
        hipAngle: 55,
      },
      leftLowerLeg: {
        kneeAngle: 75,
      },
      leftUpperArm: {
        shoulderAngle: 60,
      },
      rightUpperArm: {
        shoulderAngle: -60,
      },
    },
  },
  reverseWarrior: {
    id: 'reverseWarrior',
    name: 'Reverse Warrior',
    sanskritName: 'Viparīta Vīrabhadrāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    transitionOnly: true,
    stickFigurePosition: {
      neck: {
        chestAngle: -5,
      },
      chest: {
        abdomenAngle: -5,
      },
      leftUpperLeg: {
        hipAngle: 80,
      },
      rightUpperLeg: {
        hipAngle: 50,
      },
      leftLowerLeg: {
        kneeAngle: 75,
      },
      rightLowerLeg: {
        kneeAngle: -10,
      },
      leftUpperArm: {
        shoulderAngle: -80,
      },
      rightUpperArm: {
        shoulderAngle: 80,
      },
      leftLowerArm: {
        elbowAngle: 7,
      },
    },
  },
  reclinedBoundSitUp: {
    id: 'reclinedBoundSitUp',
    name: 'Reclined Bound Angle Sit Ups',
    sanskritName: 'Supta Baddha Koṇāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      head: {
        neckAngle: -10,
      },
      neck: {
        chestAngle: -10,
      },
      chest: {
        abdomenAngle: -10,
      },
      abdomen: {
        hipAngle: 90,
      },
      leftUpperLeg: {
        hipAngle: -120,
      },
      rightUpperLeg: {
        hipAngle: 120,
      },
      leftLowerLeg: {
        kneeAngle: -60,
      },
      rightLowerLeg: {
        kneeAngle: 60,
      },
      leftUpperArm: {
        shoulderAngle: -85,
      },
      rightUpperArm: {
        shoulderAngle: -95,
      },
      leftLowerArm: {
        elbowAngle: 90,
      },
      rightLowerArm: {
        elbowAngle: -60,
      },
    },
  },
  bicycle: {
    id: 'bicycle',
    name: 'Bicycles',
    sanskritName: '',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      head: {
        neckAngle: -10,
      },
      neck: {
        chestAngle: -20,
      },
      chest: {
        abdomenAngle: -15,
      },
      abdomen: {
        hipAngle: 80,
      },
      leftUpperLeg: {
        hipAngle: -92,
      },
      rightUpperLeg: {
        hipAngle: 175,
      },
      leftLowerLeg: {
        kneeAngle: -2,
      },
      rightLowerLeg: {
        kneeAngle: 90,
      },
      leftUpperArm: {
        shoulderAngle: -190,
      },
      rightUpperArm: {
        shoulderAngle: -140,
      },
      leftLowerArm: {
        elbowAngle: -120,
      },
      rightLowerArm: {
        elbowAngle: -100,
      },
    },
  },
  boat: {
    id: 'boat',
    name: 'Boat',
    sanskritName: 'Nāvāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      head: {
        neckAngle: -10,
      },
      neck: {
        chestAngle: -10,
      },
      chest: {
        abdomenAngle: -20,
      },
      abdomen: {
        hipAngle: 50,
      },
      leftUpperLeg: {
        hipAngle: -175,
      },
      rightUpperLeg: {
        hipAngle: 175,
      },
      leftLowerLeg: {
        kneeAngle: -90,
      },
      rightLowerLeg: {
        kneeAngle: 90,
      },
      leftUpperArm: {
        shoulderAngle: 140,
      },
      rightUpperArm: {
        shoulderAngle: 45,
      },
      leftLowerArm: {
        elbowAngle: -30,
      },
      rightLowerArm: {
        elbowAngle: 40,
      },
    },
  },
  bridge: {
    id: 'bridge',
    name: 'Bridge',
    sanskritName: 'Setu Bandha Sarvāṅgāsana/Setu Bandhāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      head: {
        neckAngle: -50,
      },
      neck: {
        chestAngle: -20,
      },
      chest: {
        abdomenAngle: -5,
      },
      abdomen: {
        hipAngle: 120,
      },
      leftUpperLeg: {
        hipAngle: -120,
      },
      rightUpperLeg: {
        hipAngle: 120,
      },
      leftLowerLeg: {
        kneeAngle: -120,
      },
      rightLowerLeg: {
        kneeAngle: 120,
      },
      leftUpperArm: {
        shoulderAngle: 60,
      },
      rightUpperArm: {
        shoulderAngle: 120,
      },
      leftLowerArm: {
        elbowAngle: 0,
      },
      rightLowerArm: {
        elbowAngle: 0,
      },
    },
  },
  crescentLunge: {
    id: 'crescentLunge',
    name: 'Crescent Lunge',
    sanskritName: 'Āñjaneyāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      leftUpperLeg: {
        hipAngle: 70,
      },
      rightUpperLeg: {
        hipAngle: 37.5,
      },
      leftLowerLeg: {
        kneeAngle: 65,
      },
      rightLowerLeg: {
        kneeAngle: -20,
      },
      rightUpperArm: {
        shoulderAngle: -40,
      },
      rightLowerArm: {
        elbowAngle: 40,
      },
      leftUpperArm: {
        shoulderAngle: -40,
      },
      leftLowerArm: {
        elbowAngle: 40,
      },
    },
  },
  crescentLungePrayer: {
    id: 'crescentLungePrayer',
    name: 'Crescent Lunge Prayer Hands',
    sanskritName: '',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      leftUpperLeg: {
        hipAngle: 70,
      },
      rightUpperLeg: {
        hipAngle: 37.5,
      },
      leftLowerLeg: {
        kneeAngle: 65,
      },
      rightLowerLeg: {
        kneeAngle: -20,
      },
      rightUpperArm: {
        shoulderAngle: 50,
      },
      rightLowerArm: {
        elbowAngle: -140,
      },
      leftUpperArm: {
        shoulderAngle: 50,
      },
      leftLowerArm: {
        elbowAngle: -140,
      },
    },
  },

  crescentLungeLengthen: {
    id: 'crescentLungeLengthen',
    name: 'Lengthen Torso Forward',
    sanskritName: '',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      abdomen: {
        hipAngle: 20,
      },
      leftUpperLeg: {
        hipAngle: 70,
      },
      rightUpperLeg: {
        hipAngle: 37.5,
      },
      leftLowerLeg: {
        kneeAngle: 65,
      },
      rightLowerLeg: {
        kneeAngle: -20,
      },
      rightUpperArm: {
        shoulderAngle: 50,
      },
      rightLowerArm: {
        elbowAngle: -150,
      },
      leftUpperArm: {
        shoulderAngle: 50,
      },
      leftLowerArm: {
        elbowAngle: -140,
      },
    },
  },
  revolvedCrescentLunge: {
    id: 'revolvedCrescentLunge',
    name: 'Revolved Crescent Lunge',
    sanskritName: 'Parivṛtta Āñjaneyāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      abdomen: {
        hipAngle: 80,
      },
      leftUpperLeg: {
        hipAngle: 70,
      },
      rightUpperLeg: {
        hipAngle: 37.5,
      },
      leftLowerLeg: {
        kneeAngle: 65,
      },
      rightLowerLeg: {
        kneeAngle: -20,
      },
      rightUpperArm: {
        shoulderAngle: 40,
      },
      rightLowerArm: {
        elbowAngle: -170,
      },
      leftUpperArm: {
        shoulderAngle: 20,
      },
      leftLowerArm: {
        elbowAngle: -150,
      },
    },
  },
  lizardLunge: {
    id: 'lizardLunge',
    name: 'Lizard Lunge',
    sanskritName: 'Utthan Pristhasana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      chest: {
        abdomenAngle: 2,
      },
      abdomen: {
        hipAngle: 80,
      },
      leftUpperLeg: {
        hipAngle: -77.5,
      },
      rightUpperLeg: {
        hipAngle: -130,
      },
      leftLowerLeg: {
        kneeAngle: 5,
      },
      rightLowerLeg: {
        kneeAngle: -130,
      },
      leftUpperArm: {
        shoulderAngle: 10,
      },
      rightUpperArm: {
        shoulderAngle: 170,
      },
      leftLowerArm: {
        elbowAngle: 90,
      },
      rightLowerArm: {
        elbowAngle: -90,
      },
    },
  },
  sidePlank: {
    id: 'sidePlank',
    name: 'Side Plank',
    sanskritName: 'Vasiṣṭhāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      abdomen: {
        hipAngle: 70,
      },
      leftUpperLeg: {
        hipAngle: -70,
      },
      rightUpperLeg: {
        hipAngle: 73,
      },
      leftLowerLeg: {
        kneeAngle: 3,
      },
      rightLowerLeg: {
        kneeAngle: 3,
      },
      rightUpperArm: {
        shoulderAngle: -10,
      },
      leftUpperArm: {
        shoulderAngle: 10,
      },
      leftLowerArm: {
        elbowAngle: 5,
      },
      rightLowerArm: {
        elbowAngle: 2,
      },
    },
  },
  eagle: {
    id: 'eagle',
    name: 'Eagle',
    sanskritName: 'Garuḍāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      abdomen: {
        hipAngle: 20,
      },
      leftUpperLeg: {
        hipAngle: 30,
      },
      rightUpperLeg: {
        hipAngle: -60,
      },
      leftLowerLeg: {
        kneeAngle: 60,
      },
      rightLowerLeg: {
        kneeAngle: -75,
      },
      leftUpperArm: {
        shoulderAngle: -20,
      },
      rightUpperArm: {
        shoulderAngle: -155,
      },
      leftLowerArm: {
        elbowAngle: 110,
      },
      rightLowerArm: {
        elbowAngle: -50,
      },
    },
  },
  gorilla: {
    id: 'gorilla',
    name: 'Gorilla',
    sanskritName: 'Pādahastāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      neck: {
        chestAngle: 25,
      },
      abdomen: {
        hipAngle: 150,
      },
      chest: {
        abdomenAngle: 15,
      },
      leftUpperLeg: {
        hipAngle: 5,
      },
      rightUpperLeg: {
        hipAngle: -5,
      },
      leftLowerLeg: {
        kneeAngle: 10,
      },
      rightLowerLeg: {
        kneeAngle: -10,
      },
      leftUpperArm: {
        shoulderAngle: -70,
      },
      rightUpperArm: {
        shoulderAngle: -110,
      },
      leftLowerArm: {
        elbowAngle: -20,
      },
      rightLowerArm: {
        elbowAngle: 20,
      },
    },
  },

  crow: {
    id: 'crow',
    name: 'Crow',
    sanskritName: 'Bakāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      abdomen: {
        hipAngle: 90,
      },
      leftUpperLeg: {
        hipAngle: 70,
      },
      rightUpperLeg: {
        hipAngle: -70,
      },
      leftLowerLeg: {
        kneeAngle: 160,
      },
      rightLowerLeg: {
        kneeAngle: -160,
      },
      leftUpperArm: {
        shoulderAngle: 80,
      },
      rightUpperArm: {
        shoulderAngle: 100,
      },
      leftLowerArm: {
        elbowAngle: 90,
      },
      rightLowerArm: {
        elbowAngle: -90,
      },
    },
  },
  triangle: {
    id: 'triangle',
    name: 'Triangle',
    sanskritName: 'Utthita Trikoṇāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      abdomen: {
        hipAngle: 30,
      },
      leftUpperLeg: {
        hipAngle: 50,
      },
      rightUpperLeg: {
        hipAngle: 50,
      },
      leftLowerLeg: {
        kneeAngle: 2,
      },
      leftUpperArm: {
        shoulderAngle: 60,
      },
      rightUpperArm: {
        shoulderAngle: -60,
      },
    },
  },
  triangleLift: {
    id: 'triangleLift',
    name: 'Lift torso, Rotate front foot',
    sanskritName: '',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    transitionOnly: true,
    stickFigurePosition: {
      abdomen: {
        hipAngle: 30,
      },
      leftUpperLeg: {
        hipAngle: 40,
      },
      rightUpperLeg: {
        hipAngle: 40,
      },
      leftLowerLeg: {
        kneeAngle: 2,
      },
      leftUpperArm: {
        shoulderAngle: 60,
      },
      rightUpperArm: {
        shoulderAngle: -60,
      },
    },
  },
  wideForwardFold: {
    id: 'wideForwardFold',
    name: 'Wide Legged Forward Fold',
    sanskritName: 'Prasarita',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      abdomen: {
        hipAngle: 180,
      },
      leftUpperLeg: {
        hipAngle: 40,
      },
      rightUpperLeg: {
        hipAngle: 40,
      },
      leftLowerLeg: {
        kneeAngle: 2,
      },
      leftUpperArm: {
        shoulderAngle: -130,
      },
      rightUpperArm: {
        shoulderAngle: -130,
      },
    },
  },
  wideForwardFoldLift: {
    id: 'wideForwardFoldLift',
    name: 'Lift torso, adjust feet',
    sanskritName: '',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    transitionOnly: true,
    stickFigurePosition: {
      abdomen: {
        hipAngle: 180,
      },
      chest: {
        abdomenAngle: 180,
      },
      neck: {
        chestAngle: 180,
      },
      leftUpperLeg: {
        hipAngle: 40,
      },
      rightUpperLeg: {
        hipAngle: 40,
      },
      leftLowerLeg: {
        kneeAngle: 2,
      },
      leftUpperArm: {
        shoulderAngle: 90,
      },
      rightUpperArm: {
        shoulderAngle: 90,
      },
    },
  },
  goddess: {
    id: 'goddess',
    name: 'Goddess',
    sanskritName: 'Utkata Konasana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      leftUpperLeg: {
        hipAngle: 80,
      },
      rightUpperLeg: {
        hipAngle: 80,
      },
      leftLowerLeg: {
        kneeAngle: 70,
      },
      rightLowerLeg: {
        kneeAngle: 70,
      },
      rightUpperArm: {
        shoulderAngle: 30,
      },
      rightLowerArm: {
        elbowAngle: -150,
      },
      leftUpperArm: {
        shoulderAngle: 30,
      },
      leftLowerArm: {
        elbowAngle: -150,
      },
    },
  },
  goddessLifted: {
    id: 'goddessLifted',
    name: 'Lift torso, adjust feet',
    sanskritName: 'Utkata Konasana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    transitionOnly: true,
    stickFigurePosition: {
      leftUpperLeg: {
        hipAngle: 60,
      },
      rightUpperLeg: {
        hipAngle: 60,
      },
      leftLowerLeg: {
        kneeAngle: 60,
      },
      rightLowerLeg: {
        kneeAngle: 60,
      },
      rightUpperArm: {
        shoulderAngle: 30,
      },
      rightLowerArm: {
        elbowAngle: -170,
      },
      leftUpperArm: {
        shoulderAngle: 30,
      },
      leftLowerArm: {
        elbowAngle: -170,
      },
    },
  },
  camel: {
    id: 'camel',
    name: 'Camel',
    sanskritName: 'Uṣtrāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      chest: {
        abdomenAngle: -5,
      },
      abdomen: {
        hipAngle: -5,
      },
      leftLowerLeg: {
        kneeAngle: 90,
      },
      rightLowerLeg: {
        kneeAngle: -90,
      },
      leftUpperArm: {
        shoulderAngle: 140,
      },
      rightUpperArm: {
        shoulderAngle: 40,
      },
      leftLowerArm: {
        elbowAngle: 90,
      },
      rightLowerArm: {
        elbowAngle: -90,
      },
    },
  },
  downwardDogHipStretch: {
    id: 'downwardDogHipStretch',
    name: 'Bend Knee, Stack Hips',
    sanskritName: '',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      abdomen: {
        hipAngle: 140,
      },
      rightUpperLeg: {
        hipAngle: 140,
      },
      leftLowerLeg: {
        kneeAngle: 60,
      },
      rightLowerLeg: {
        kneeAngle: -130,
      },
      leftUpperArm: {
        shoulderAngle: -80,
      },
      rightUpperArm: {
        shoulderAngle: 260,
      },
      leftLowerArm: {
        elbowAngle: 10,
      },
      rightLowerArm: {
        elbowAngle: -10,
      },
    },
  },
  halfPigeon: {
    id: 'halfPigeon',
    name: 'Half Pigeon',
    sanskritName: 'Eka Pāda Kapotāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      head: {
        neckAngle: 30,
      },
      chest: {
        abdomenAngle: 2,
      },
      abdomen: {
        hipAngle: 80,
      },
      leftUpperLeg: {
        hipAngle: -77.5,
      },
      rightUpperLeg: {
        hipAngle: -70,
      },
      leftLowerLeg: {
        kneeAngle: 5,
      },
      rightLowerLeg: {
        kneeAngle: -160,
      },
      leftUpperArm: {
        shoulderAngle: 10,
      },
      rightUpperArm: {
        shoulderAngle: 170,
      },
      leftLowerArm: {
        elbowAngle: 90,
      },
      rightLowerArm: {
        elbowAngle: -90,
      },
    },
  },
  locust: {
    id: 'locust',
    name: 'Locust',
    sanskritName: 'Śalabhāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      chest: {
        abdomenAngle: -10,
      },
      abdomen: {
        hipAngle: 85,
      },
      leftUpperLeg: {
        hipAngle: -95,
      },
      rightUpperLeg: {
        hipAngle: 95,
      },
      leftLowerLeg: {
        kneeAngle: 2,
      },
      rightLowerLeg: {
        kneeAngle: -2,
      },
      leftUpperArm: {
        shoulderAngle: 105,
      },
      rightUpperArm: {
        shoulderAngle: 77,
      },
      leftLowerArm: {
        elbowAngle: 2,
      },
      rightLowerArm: {
        elbowAngle: -2,
      },
    },
  },
  seatedForwardFold: {
    id: 'seatedForwardFold',
    name: 'Seated Forward Fold',
    sanskritName: 'Paścimottānāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      head: {
        neckAngle: 5,
      },
      neck: {
        chestAngle: 5,
      },
      chest: {
        abdomenAngle: 5,
      },
      abdomen: {
        hipAngle: 55,
      },
      leftUpperLeg: {
        hipAngle: 95,
      },
      rightUpperLeg: {
        hipAngle: -95,
      },
      leftLowerLeg: {
        kneeAngle: 10,
      },
      rightLowerLeg: {
        kneeAngle: -10,
      },
      leftUpperArm: {
        shoulderAngle: -30,
      },
      rightUpperArm: {
        shoulderAngle: -150,
      },
      leftLowerArm: {
        elbowAngle: 2,
      },
      rightLowerArm: {
        elbowAngle: -2,
      },
    },
  },
  staff: {
    id: 'staff',
    name: 'Staff',
    sanskritName: 'Dandasana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      head: {
        neckAngle: -5,
      },
      leftUpperLeg: {
        hipAngle: 92,
      },
      rightUpperLeg: {
        hipAngle: -92,
      },
      leftLowerLeg: {
        kneeAngle: 5,
      },
      rightLowerLeg: {
        kneeAngle: -5,
      },
      leftUpperArm: {
        shoulderAngle: 90,
      },
      rightUpperArm: {
        shoulderAngle: 90,
      },
      leftLowerArm: {
        elbowAngle: 2,
      },
      rightLowerArm: {
        elbowAngle: -2,
      },
    },
  },
  staffLiftTorso: {
    id: 'staffLiftTorso',
    name: 'Lift Torso',
    sanskritName: '',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      head: {
        neckAngle: -5,
      },
      leftUpperLeg: {
        hipAngle: 92,
      },
      rightUpperLeg: {
        hipAngle: -92,
      },
      leftLowerLeg: {
        kneeAngle: 5,
      },
      rightLowerLeg: {
        kneeAngle: -5,
      },
      leftUpperArm: {
        shoulderAngle: 90,
      },
      rightUpperArm: {
        shoulderAngle: 90,
      },
      leftLowerArm: {
        elbowAngle: 2,
      },
      rightLowerArm: {
        elbowAngle: -2,
      },
    },
  },
  happyBaby: {
    id: 'happyBaby',
    name: 'Happy Baby',
    sanskritName: 'Ānanda Bālāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      head: {
        neckAngle: 60,
      },
      abdomen: {
        hipAngle: -90,
      },
      leftUpperLeg: {
        hipAngle: -120,
      },
      leftLowerLeg: {
        kneeAngle: 60,
      },
      rightUpperLeg: {
        hipAngle: 110,
      },
      rightLowerLeg: {
        kneeAngle: -60,
      },
      leftUpperArm: {
        shoulderAngle: 5,
      },
      rightUpperArm: {
        shoulderAngle: -180,
      },
    },
  },
  supineTwist: {
    id: 'supineTwist',
    name: 'Supine Twist',
    sanskritName: 'Jaṭhara Parivartanasana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      head: {
        neckAngle: 60,
      },
      abdomen: {
        hipAngle: -90,
      },
      leftUpperLeg: {
        hipAngle: -140,
      },
      leftLowerLeg: {
        kneeAngle: 170,
      },
      rightUpperLeg: {
        hipAngle: -90,
      },
      rightLowerLeg: {
        kneeAngle: 0,
      },
      leftUpperArm: {
        shoulderAngle: 90,
      },
      rightUpperArm: {
        shoulderAngle: 115,
      },
      rightLowerArm: {
        elbowAngle: -35,
      },
    },
  },
  supineKneesCenter: {
    id: 'supineKneesCenter',
    name: 'Knees Center',
    sanskritName: '',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    transitionOnly: true,
    stickFigurePosition: {
      head: {
        neckAngle: 60,
      },
      abdomen: {
        hipAngle: -90,
      },
      leftUpperLeg: {
        hipAngle: 180,
      },
      leftLowerLeg: {
        kneeAngle: 90,
      },
      rightUpperLeg: {
        hipAngle: -180,
      },
      rightLowerLeg: {
        kneeAngle: -90,
      },
      leftUpperArm: {
        shoulderAngle: 90,
      },
      rightUpperArm: {
        shoulderAngle: 90,
      },
    },
  },
  lowerToBack: {
    id: 'lowerToBack',
    name: 'Lower to Back',
    sanskritName: '',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      head: {
        neckAngle: 10,
      },
      abdomen: {
        hipAngle: -90,
      },
      leftUpperLeg: {
        hipAngle: 90,
      },
      leftLowerLeg: {
        kneeAngle: 0,
      },
      rightUpperLeg: {
        hipAngle: -90,
      },
      rightLowerLeg: {
        kneeAngle: 0,
      },
      leftUpperArm: {
        shoulderAngle: 90,
      },
      rightUpperArm: {
        shoulderAngle: 90,
      },
    },
  },
  corpse: {
    id: 'corpse',
    name: 'Corpse',
    sanskritName: 'Śavāsana',
    cues: [],
    assists: [],
    transitionalCues: [],
    modifications: [],
    stickFigurePosition: {
      head: {
        neckAngle: 10,
      },
      abdomen: {
        hipAngle: -90,
      },
      leftUpperLeg: {
        hipAngle: 90,
      },
      leftLowerLeg: {
        kneeAngle: 0,
      },
      rightUpperLeg: {
        hipAngle: -90,
      },
      rightLowerLeg: {
        kneeAngle: 0,
      },
      leftUpperArm: {
        shoulderAngle: 90,
      },
      rightUpperArm: {
        shoulderAngle: 90,
      },
    },
  },
} as const satisfies Record<string, PostureMetadata>;

export const getPosture = (id: PostureId | undefined | null) =>
  id ? POSTURE_MAP[id] : null;

export const ALL_POSTURES = Object.values(POSTURE_MAP);

export type PostureId = keyof typeof POSTURE_MAP;

export type Posture = (typeof POSTURE_MAP)[PostureId];
