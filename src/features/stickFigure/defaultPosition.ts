import type { StickFigurePosition } from './stickFigurePosition';

export const DEFAULT_POSITION: StickFigurePosition = {
  head: {
    neckAngle: 0,
  },
  neck: {
    chestAngle: 0,
  },
  chest: {
    abdomenAngle: 0,
  },
  abdomen: {
    hipAngle: 0,
  },
  leftUpperArm: {
    shoulderAngle: 46,
  },
  leftLowerArm: {
    elbowAngle: -120,
  },
  rightUpperArm: {
    shoulderAngle: 46,
  },
  rightLowerArm: {
    elbowAngle: -120,
  },
  leftUpperLeg: {
    hipAngle: 80,
  },
  leftLowerLeg: {
    kneeAngle: 165,
  },
  rightUpperLeg: {
    hipAngle: 80,
  },
  rightLowerLeg: {
    kneeAngle: 165,
  },
};
