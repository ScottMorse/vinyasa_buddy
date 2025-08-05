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
    cues: [
      'Big toes together',
      'Knees wide',
      'Hips to heels',
      'Forehead to mat',
      'Reach arms forward',
      'Spread fingers wide',
    ],
    assists: ['Press hips downward', 'Massage neck/shoulders'],
    transitionalCues: [],
    modifications: ['Blanket under or over ankles', 'Forehead on block'],
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
    cues: [
      'Shoulder over wrists, fingers spread wide',
      'Hips over knees',
      'Find a neutral spine and engage your core',
      'Gaze at the top edge of your mat',
    ],
    assists: [],
    transitionalCues: [],
    modifications: ['Use fists instead of open hands'],
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
    cues: [
      'Press into your hands',
      'Tuck your tailbone',
      'Pull navel towards spine (round your spine)',
      'Chin to chest',
    ],
    assists: ['Hands on ribs, draw upwards'],
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
    cues: [
      'Continue to press into hands',
      'Lift tailbone',
      'Belly drops',
      'Lift your gaze',
    ],
    assists: ['Gently draw shoulders open'],
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
    cues: [
      'Fingers spread wide, press the ground away from you',
      'Bend knees',
      'Lift your hips up and back (navel draws to spine)',
      'Create length from fingers to tailbone',
      'Create length from hips to heels, maintain a bend in your knees',
    ],
    assists: ['Pull hips back (from behind)', 'Press hips back (from front)'],
    transitionalCues: [
      'Move hands one hand print forward',
      'Tuck toes under',
      'Lift hips',
      '(Creates an inverted V shape)',
    ],
    modifications: ['Grab sides of mat'],
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
    cues: [
      'Feet hip-width distance or wider',
      'Bend your knees',
      'Hook pinkies in opposite elbows',
      'Relax your neck',
      'Sway side to side',
    ],
    assists: [
      'One hand on sacrum, opposite hand slides down spine',
      'Touch back of knees to encourage bend',
    ],
    transitionalCues: ['(Inhale) Look forward', '(Exhale) Walk feet to hands'],
    modifications: ['Deeper bend in knees'],
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
    cues: [
      'Press evenly into balls and heels of the feet',
      'Engage quads (lift kneecaps)',
      'Keep glutes engaged',
      'Neutral pelvis',
      'Lenghten your spine',
      'Engage your core, knit your lower ribs in',
      'Soften your shoulders',
      'Reach through the crown of your head',
      'Palms forward',
    ],
    assists: ['Soften shoulders', 'Press ribs to lift torso'],
    transitionalCues: [
      'Release your hands toward mat',
      'Keep knees bent, engage the core and glutes',
      '(Inhale) Roll up the spine, or lift with lengthened spine',
    ],
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
    cues: ['Lift arms over head', 'Pinkies spiral in', 'Soften shoulders'],
    assists: ['Soften shoulders', 'Rotate upper arms'],
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
    cues: [
      'Hands to heart center',
      'Thumbs to sternum',
      'Eyes soften or close',
    ],
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
    cues: [
      'Release hands to the floor',
      'Bend your knees, weight in the balls of your feet',
      'Lengthen your spine',
      'Relax your neck',
    ],
    assists: [
      'Tilt pelvis',
      'Stabilize sacrum, run hand down spine (holds shirt in place when stabilizing sacrum)',
      'Neck massage',
    ],
    transitionalCues: [
      'Hinge from your hips with bent knees',
      'Engage your core',
      'Lead with your heart',
    ],
    modifications: ['Hands on blocks', 'Hands on hp creases'],
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
    cues: [
      'Hands to shins or thighs',
      'Lift your torso halfway',
      'Shift weight forward into balls of your feet, knees stay bent',
      'Lengthen your spine, engage your core',
      'Shoulder blades squeeze together',
      'Extend crown of head forward',
      'Chin tucked slightly, gaze at top edge of mat',
    ],
    assists: [
      'Arm braces spine to lengthen',
      'Tilt hips',
      'Stand to side, pull shoulders back',
    ],
    transitionalCues: [],
    modifications: ['Bend knees more', 'Hands on blocks or thighs'],
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
    cues: [
      'Press the ground away from you',
      'Elongate from head to heels',
      'Reach collar bones forward',
      'Engage core',
      'Knit hip bones in towards one another (neutral pelvis)',
      'Engage quads',
    ],
    assists: ['Lift hips', 'Push hands on heels and have student resist'],
    transitionalCues: [
      'Plant your hands shoulder-width distance or wider',
      'Step back to a push up position',
    ],
    modifications: [
      'Lower knees to mat',
      'Use fists instead of open hands',
      'Slight bend in elbows',
    ],
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
    cues: [
      'Keep Plank engagement, hug your elbows toward ribs and lower towards the ground',
      'Bend your elbows no more than 90 degrees',
      'Engage core and quads',
      'Elongate from heels to head as you lower down',
    ],
    assists: [
      'Straddle at thighs and guide hips as they lower (can stay with student for upward dog and downward dog)',
    ],
    transitionalCues: ['(From Plank Pose) rock forwards on the toes'],
    modifications: ['Come down to knees', 'Use fists instead of open hands'],
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
    cues: [
      'Legs hip width or wider',
      'Press tops of feet into mat',
      'Engage quads',
      'Press pelvis into mat',
      'Squeeze shoulder blades together',
      'Lift your chest, little to no weight in hands',
    ],
    assists: [
      'Press on calves to ground feet and legs',
      'Spread collarbone and shoulders away from midline',
    ],
    transitionalCues: [
      'Hug elbows toward ribs and lower to ground',
      'Tops of the feet to the mat',
    ],
    modifications: ['Hands on the mat for support'],
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
    cues: [
      'Press your hands into the floor, bring chest forward',
      'Engage the glutes and quads, thighs lift',
      'Slight bend in your elbows',
      'Shoulders away from the ears',
      'Palms of your hands and tops of your feet touch the mat',
    ],
    assists: [
      'Spread collarbones and shoulders away from midline',
      'Continued from plank and chaturanga, press knees into shoulder blades and press hands to fronts of shoulders',
    ],
    transitionalCues: ['Flip to tops of feet'],
    modifications: ['Cobra instead of upward facing dog', 'Keep toes tucked'],
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
    cues: [
      'Feet and knees together or feet and knees hip width',
      'Weight in the heels',
      'Sit hips back and down',
      'Arms lifted overhead, shoulders soften',
      'Activate fingers (shoot lasers)',
    ],
    assists: ['Lengthen torso or drop tailbone or extend arms'],
    transitionalCues: [],
    modifications: [
      'Sit down less',
      'Hands at heart center',
      'Feet hip distance for balance',
    ],
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
    cues: [
      'Hips even/square, flex toes towards knee',
      'Imagine kicking wall behind you',
    ],
    assists: [
      'Have student press into hand with foot drop hip of lifted leg to square hips',
    ],
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
    cues: ['Ankle stacks under knee', 'Back leg engaged', 'Level hips'],
    assists: [
      'Motion to walk foot forward ("bring your foot to my hand")',
      'Pull up on back thigh, press down on front hip',
    ],
    transitionalCues: ['Step foot between hands'],
    modifications: ['Bring blocks under hands'],
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
    cues: [
      'Back foot parallel to back of mat',
      'Knee reaches forward and towards middle 3 toes',
      'Front ankle, knee and sit bone all in line (this may require back hip to drop forward)',
      'Legs and core engages',
      'Arms reach to front/back to room',
      'Gaze over front middle finger or forward',
    ],
    assists: [
      'Hands on thighs to ensure proper lower body alignment',
      'Adjust front foot so toes point straight forward',
      'Extend arms out, depress shoulders',
    ],
    transitionalCues: ['Spin the back heel down'],
    modifications: ['Knee bends less', 'Arms down'],
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
    cues: [
      'Keep lower body in Warrior 2 alignment',
      'Extend through both side bodies',
      'Chest rotates towards the ceiling',
      'Top arm reaches straight up',
    ],
    assists: [
      'Encourage the front knee towards to pinky toe side of the foot',
      'Hand on top hip and top hand',
      'Hands on ribcage, encouraging length through sides',
    ],
    transitionalCues: ['Lengthen torso forward', 'Elbow to knee'],
    modifications: [
      'Top arm reaches forward (bicep in line with ear)',
      'Bottom arm elbow in front of knee',
    ],
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
    cues: [
      'Stay in Warrior 2 in the lower body',
      'Core engages',
      'Cinch back-side body',
      'Lengthen front side body (not a backbend)',
      'Turn head up or down, chin to shoulder',
    ],
    assists: [
      'Continue with kneeling/standing assist',
      'Press behind front knee to encourage continued deep bend',
    ],
    transitionalCues: [],
    modifications: ['Same as Warrior II'],
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
    cues: [
      'Engage your core, pull your navel toward your spine',
      'Knees lift until spine is nearing the floor, press feet together',
      'Gaze is toward the ceiling',
      'Keep your neck long',
    ],
    assists: [],
    transitionalCues: [
      'Drop to the knees, swing the legs around and come to lying on the floor',
      'Soles of your feet touch',
    ],
    modifications: [
      'Lift your feet off floor for more intensity',
      'Use block under knees',
    ],
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
    cues: [
      'Low back stays on the floor',
      'Shoulder to knee, not elbow to knee',
      'Long back of the neck, chin gently tucked',
    ],
    assists: [],
    transitionalCues: [],
    modifications: [
      'Less intensity - feet straight up',
      'More intensity - feet reach along the floor',
      'Only upper body or only lower body',
    ],
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
    cues: [
      'Rock to the front of your sit bones',
      'Feet can stay rooted on the ground or begin to point your toes and lift your feet',
      'Arms parallel to the mat',
      'Collar bones wide',
      'Jaw soft',
    ],
    assists: [
      "Use outside edge of the lower leg against the student's spine gently press the shoulders back",
    ],
    transitionalCues: ['Rock forwards and backwards and come up to sitting'],
    modifications: ['Toes remain on the floor', 'Arms can support legs'],
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
    cues: [
      'Press into your heels',
      'Engage your glutes',
      'Lift your hips',
      'Walk your shoulders underneath upper back',
      'Gaze remains upwards, keep your neck straight vs looking side to side',
    ],
    assists: [
      'Assist the knees to the appropriate position by placing your hands at the outside or inside of the knees',
      "Block can be placed between the student's knees and they are instructed to hold it in place",
      'Standing with your shins to the outside of theirs, lift underneath the hips. This should only be done if the student is not supported on their neck',
    ],
    transitionalCues: [
      'Roll down onto the floor',
      'Bend your knees',
      'Soles of the feet flat on the mat hip width distance',
      'Feet are close enough so that your fingertips can graze your heels',
    ],
    modifications: [
      'Roll upper arm bones out and interlace hands below the back with the palms touching (pictured)',
    ],
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
    cues: [
      'Back heel stays lifted',
      'Feet in line with hips',
      'Soften your back knee',
      'Tailbone draws down, square hips',
      'Engage core and draw low ribs in',
      'Torso in tadasana alignment',
      'Lift arms overhead',
    ],
    assists: [
      "Squeeze student's back leg with your legs for support while adjusting the torso/arms/shoulders",
      'Use hand to align front knee',
      "Press back heel into instructor's hand",
    ],
    transitionalCues: [],
    modifications: ['Drop the back knee'],
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
    cues: [
      'Stack your elbows and wrists, keep your top shoulder away from your ear',
      'Keep your core engaged',
      'Keep hips square',
      'Engage inner thighs',
      'Inhale lengthen, exhale twist',
    ],
    assists: [
      'Continue from leg clamp, hold ribcage and assist twist',
      'Level the hips',
    ],
    transitionalCues: [
      '(Exhale) Hands to heart center',
      '(Inhale) Hinge forward from hips, exhale twist',
    ],
    modifications: [
      'Drop back knee',
      'Legs wider for balance',
      'Open twist instead of closed',
    ],
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
    cues: [
      'Straight back leg',
      'Externally rotate front thigh open',
      'Keep front foot flexed',
      'Front hip reaches back, back hip reaches forward',
      'Soft neck and shoulders',
    ],
    assists: [
      'Stabilize the hip of the back leg, suggest outward rotation in the front leg',
      'Calf or foot massage on the back leg',
      'Soften the shoulders',
    ],
    transitionalCues: [
      'Hands release to the inside of the front foot',
      'Toe-heel the foot to outside of your hand and one footprint forward',
    ],
    modifications: [
      'Lift back knee',
      'Drop to the elbows',
      'Bend back leg and hold foot for quad stretch',
    ],
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
    cues: [
      'Fingers spread, press down at the base of your index finger and thumb',
      'Reach the top arm towards the ceiling',
      'Lift your hips',
      'Your gaze can be down, forward, or up',
    ],
    assists: ['High five with variable pressure', 'Lift the hips'],
    transitionalCues: [
      'Slide base hand forward slightly',
      'Bring weight into the left hand (2nd round: right hand)',
      'Roll to the outside of the left foot (2nd round: right foot)',
    ],
    modifications: [
      'Drop to the bottom knee',
      'On fist or forearm',
      'Stagger the feet',
      'Lift top leg',
    ],
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
    cues: [
      'Shift weight into your bottom heel',
      'Drop your tailbone and square hips',
      'Bring your knees and elbows to midline',
      'Lean your shoulders back over your hips',
      'Lift elbows, hands away from face',
    ],
    assists: [
      'Encourage length and level shoulders, level hips',
      'Hand in the center of the back for stability',
    ],
    transitionalCues: [
      'Root into left foot (2nd round: root into right foot)',
      'Wrap right leg over left (2nd round: wrap left leg over right)',
      'Wrap right arm under left (2nd round: wrap left arm under right)',
    ],
    modifications: ['One foot kickstand', 'Hands to opposite shoulder (hug)'],
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
    cues: [
      'Hands under feet, toes to wrists',
      'Inhale lengthen your spine',
      'Exhale fold, elbows wide, biceps active',
      'Weight in balls of feet',
      'Crown of head toward ground',
    ],
    assists: [
      'One hand on sacrum, opposite hand slides down spine',
      'Sandwich press',
      'Push down on head of thigh bone (top of glutes)',
    ],
    transitionalCues: ['Toe heel the feet hip-width distance'],
    modifications: [
      'Grab big toes with peace fingers (big toe posture)',
      'Keep knees bent',
    ],
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
    cues: [
      'Place hands shoulder-width on the mat',
      'Fingers spread wide',
      'Knees to triceps',
      'Pull your core up and in, round your spine',
      'Gaze forward with chin lifted',
      'Lean forward',
    ],
    assists: ['Hold shoulders from the front', 'Point to where gaze should go'],
    transitionalCues: [],
    modifications: [
      'Lift one foot at a time (off of ground or off of arm)',
      'Work toward straight arms (knees higher up on arms)',
    ],
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
    cues: [
      'Back hip turns forward and down slightly',
      'Front knee points toward toes - keep a microbend in the front knee',
      'Lower side body lengthens',
    ],
    assists: [
      'High five with variable pressure',
      'Push into back foot with your foot',
      'Rotate the trunk with hands on rib cage, continue to lengthen',
    ],
    transitionalCues: [
      'Straighten the front leg',
      'Front hip draws back',
      'Reach forward and reach top arm up and bottom arm down',
    ],
    modifications: ['Use a block under front hand', 'Rest front hand on shin'],
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
    cues: [
      'Feet parallel',
      'Lengthen spine with neutral neck',
      'Weight in balls of feet',
      'Hands to floor or ankles',
      'To Exit, release your grip with your hands, engage your legs and core, lengthen your spine and return to standing (your arms can be extend or hands to hips)',
    ],
    assists: ['Stabilize sacrum, run hand down spine'],
    transitionalCues: [
      '(Inhale) back to standing',
      '(Exhale) turn your front foot towards long edge of the mat',
      '(Inhale) lengthen your spine(your arms can be extend or hands to hips)',
      '(Exhale) hinge at your hips',
    ],
    modifications: ['Bend knees', 'Hands on a block'],
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
    cues: [
      'Knees track in the same direction as the toes',
      'Hips lower',
      'Core engages',
      'Shoulders over hips',
    ],
    assists: [
      'Assist knees over ankles',
      'Place hand at middle of the back and ask them to press back',
    ],
    transitionalCues: [
      '(Inhale) back to standing',
      '(Exhale) turn the toes towards corners of the mat',
      '(Inhale) lengthen spine',
      '(Exhale) bend the knees',
    ],
    modifications: [
      "Don't squat as low",
      'Back against a wall',
      "Arm variations -Hands can be: at heart center, in a mudra, out to the side with palms facing up, or in front of the body like you're holding a beach ball in front of you",
    ],
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
    cues: [
      'Press hips forward over knees',
      'Hands to hips with fingers up',
      'Chin in line with the sternum',
      'Lift heart',
      'To exit: Inhale, press your hands into your hips and lift your chest back to neutral then sit hips on heels',
    ],
    assists: [
      'One hand behind heart lifting up',
      'Hold back of neck and encourage length',
    ],
    transitionalCues: [
      'Come to standing on the knees at the top of the mat',
      'Knees two fist-widths apart/hip distance',
    ],
    modifications: [
      'Half camel (one hand on block, opposite supports head)',
      'Squeeze block with knees',
      'Fingers face down, to side or make fists',
    ],
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
    cues: [
      'Reach your standing heel toward the ground',
      'Keep your shoulders square',
      'Maintain length in your spine',
    ],
    assists: [
      'One hand on back aiding in keeping shoulders square and the other helps open the lifted hip',
    ],
    transitionalCues: ['Lift your leg', 'Bend your knee, stack the hips'],
    modifications: ['Drop to forearm opposite of lifted leg'],
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
    cues: [
      'Front foot points (unless the shin is parallel with front of mat, then flex your foot)',
      'Back leg straight from hip to toes',
      'Look over your right shoulder to square hips forward (2nd round: left shoulder)',
      'Lift your chest to lengthen your spine',
      'Maintain length in your spine and lower down to your elbows (optional)',
    ],
    assists: [
      'One hand to right thigh other hand to left lower back',
      'Calf massage',
      'Straighten back foot',
    ],
    transitionalCues: [
      'Bring the right knee to the right wrist (2nd round: left knee to left wrist)',
      'Right ankle towards the left groin or wrist (2nd round: left ankle towards right groin or wrist)',
    ],
    modifications: [
      'Use block under hip',
      'Keep torso lifted',
      'If front lower leg is parallel with front of mat, flex that foot',
    ],
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
    cues: [
      'Inhale lift torso, arms and thighs',
      'Palms face down',
      'Keep neck neutral',
    ],
    assists: ['Gently push hand onto lower back to help stabilize'],
    transitionalCues: [
      '(Inhale) plank',
      '(Exhale) lower to the belly',
      'Forehead or chin rests on the mat',
      'Legs hip width distance',
      'Arms reach back beside hips',
    ],
    modifications: ['Just lift torso or legs', 'Bring hands under shoulders'],
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
    cues: [
      'Hinge from the hips',
      'Lead with the heart',
      'Keep the core engaged',
      'Reach for outer edge of the feet',
    ],
    assists: [
      'Press iliac crests to assist in pelvic rotation',
      'Shoulder massage to pull shoulders away from ears',
    ],
    transitionalCues: [
      'Inhale to Staff Pose (Dandasana), seated with your legs extended out in front of you and place your hands/palms on the floor by your hips',
    ],
    modifications: ['Bend knees'],
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
    cues: [
      'Ankles over the knees',
      'Thighs to outside of ribs',
      'Hands grab feet or toes',
      'Entire back lengthens toward floor',
    ],
    assists: [
      'Push down on feet',
      "Instructor's knees to the student's hamstrings",
    ],
    transitionalCues: ['Roll onto your back'],
    modifications: ['Hold the ankles or thighs', 'One leg at a time'],
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
    cues: [
      'Left hand brings right knee across your body at 90 degree angle from hip (2nd round: right hand brings left knee across your body)',
      'Shoulders reach to the ground',
      'Gaze goes to opposite direction of twist',
    ],
    assists: [
      'One hand to right shoulder other hand helps leg reach the other direction to gently deepen the twist with breath',
    ],
    transitionalCues: [
      'Release your left leg to the mat (2nd round: release right leg to the mat)',
      'Pull your right knee into your chest (2nd round: pull the left knee into the chest)',
    ],
    modifications: [
      'Keep both feet on mat and drop both knees the same direction',
    ],
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
    cues: [
      'Feet wider than hips',
      'Let feet flop to the sides',
      'Arms at side, palms up',
      'Eyes closed or soften the gaze',
      'Expand into infinity and radiate the heart open',
    ],
    assists: ['Massage feet or head'],
    transitionalCues: [],
    modifications: [
      'On belly or side',
      'Knees bent, feet flat on the floor, knees knock together (fallen bridge)',
    ],
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
