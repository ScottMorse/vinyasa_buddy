import { positionStickFigure } from './stickFigurePosition';

export const DEFAULT_STICK_FIGURE_POSITION = positionStickFigure(
  {
    head: {
      neckAngle: 30,
    },
    neck: {
      chestAngle: 10,
    },
    chest: {
      abdomenAngle: 10,
    },
    abdomen: {
      hipAngle: 20,
    },
    leftUpperArm: {
      shoulderAngle: 45,
    },
    leftLowerArm: {
      elbowAngle: 90,
    },
    rightUpperArm: {
      shoulderAngle: 45,
    },
    rightLowerArm: {
      elbowAngle: 90,
    },
    leftUpperLeg: {
      hipAngle: 90,
    },
    leftLowerLeg: {
      kneeAngle: 120,
    },
    rightUpperLeg: {
      hipAngle: 60,
    },
    rightLowerLeg: {
      kneeAngle: 10,
    },
  },
  {
    headRadius: 20,
    lineWidth: 2,
    floorY: 300,
  },
);

export const StickFigure = () => {
  return (
    <svg id="stickFigure" width="400" height="400">
      <title>Stick Figure</title>
      <line
        id="neck"
        x1={DEFAULT_STICK_FIGURE_POSITION.neck.x1}
        y1={DEFAULT_STICK_FIGURE_POSITION.neck.y1}
        x2={DEFAULT_STICK_FIGURE_POSITION.neck.x2}
        y2={DEFAULT_STICK_FIGURE_POSITION.neck.y2}
        stroke="yellow"
        strokeWidth={DEFAULT_STICK_FIGURE_POSITION.lineWidth}
      />
      <circle
        id="head"
        cx={DEFAULT_STICK_FIGURE_POSITION.head.x}
        cy={DEFAULT_STICK_FIGURE_POSITION.head.y}
        r={DEFAULT_STICK_FIGURE_POSITION.head.radius}
        stroke="deeppink"
        strokeWidth={DEFAULT_STICK_FIGURE_POSITION.lineWidth}
        fill="none"
      />
      <line
        id="chest"
        x1={DEFAULT_STICK_FIGURE_POSITION.chest.x1}
        y1={DEFAULT_STICK_FIGURE_POSITION.chest.y1}
        x2={DEFAULT_STICK_FIGURE_POSITION.chest.x2}
        y2={DEFAULT_STICK_FIGURE_POSITION.chest.y2}
        stroke="orangered"
        strokeWidth={DEFAULT_STICK_FIGURE_POSITION.lineWidth}
      />
      <line
        id="abdomen"
        x1={DEFAULT_STICK_FIGURE_POSITION.abdomen.x1}
        y1={DEFAULT_STICK_FIGURE_POSITION.abdomen.y1}
        x2={DEFAULT_STICK_FIGURE_POSITION.abdomen.x2}
        y2={DEFAULT_STICK_FIGURE_POSITION.abdomen.y2}
        stroke="darkred"
        strokeWidth={DEFAULT_STICK_FIGURE_POSITION.lineWidth}
      />
      <line
        id="leftUpperLeg"
        x1={DEFAULT_STICK_FIGURE_POSITION.leftUpperLeg.x1}
        y1={DEFAULT_STICK_FIGURE_POSITION.leftUpperLeg.y1}
        x2={DEFAULT_STICK_FIGURE_POSITION.leftUpperLeg.x2}
        y2={DEFAULT_STICK_FIGURE_POSITION.leftUpperLeg.y2}
        stroke="darkgreen"
        strokeWidth={DEFAULT_STICK_FIGURE_POSITION.lineWidth}
      />
      <line
        id="leftLowerLeg"
        x1={DEFAULT_STICK_FIGURE_POSITION.leftLowerLeg.x1}
        y1={DEFAULT_STICK_FIGURE_POSITION.leftLowerLeg.y1}
        x2={DEFAULT_STICK_FIGURE_POSITION.leftLowerLeg.x2}
        y2={DEFAULT_STICK_FIGURE_POSITION.leftLowerLeg.y2}
        stroke="green"
        strokeWidth={DEFAULT_STICK_FIGURE_POSITION.lineWidth}
      />
      <line
        id="rightUpperLeg"
        x1={DEFAULT_STICK_FIGURE_POSITION.rightUpperLeg.x1}
        y1={DEFAULT_STICK_FIGURE_POSITION.rightUpperLeg.y1}
        x2={DEFAULT_STICK_FIGURE_POSITION.rightUpperLeg.x2}
        y2={DEFAULT_STICK_FIGURE_POSITION.rightUpperLeg.y2}
        stroke="darkblue"
        strokeWidth={DEFAULT_STICK_FIGURE_POSITION.lineWidth}
      />
      <line
        id="rightLowerLeg"
        x1={DEFAULT_STICK_FIGURE_POSITION.rightLowerLeg.x1}
        y1={DEFAULT_STICK_FIGURE_POSITION.rightLowerLeg.y1}
        x2={DEFAULT_STICK_FIGURE_POSITION.rightLowerLeg.x2}
        y2={DEFAULT_STICK_FIGURE_POSITION.rightLowerLeg.y2}
        stroke="blue"
        strokeWidth={DEFAULT_STICK_FIGURE_POSITION.lineWidth}
      />
      <line
        id="leftUpperArm"
        x1={DEFAULT_STICK_FIGURE_POSITION.leftUpperArm.x1}
        y1={DEFAULT_STICK_FIGURE_POSITION.leftUpperArm.y1}
        x2={DEFAULT_STICK_FIGURE_POSITION.leftUpperArm.x2}
        y2={DEFAULT_STICK_FIGURE_POSITION.leftUpperArm.y2}
        stroke="darkgreen"
        strokeWidth={DEFAULT_STICK_FIGURE_POSITION.lineWidth}
      />
      <line
        id="leftLowerArm"
        x1={DEFAULT_STICK_FIGURE_POSITION.leftLowerArm.x1}
        y1={DEFAULT_STICK_FIGURE_POSITION.leftLowerArm.y1}
        x2={DEFAULT_STICK_FIGURE_POSITION.leftLowerArm.x2}
        y2={DEFAULT_STICK_FIGURE_POSITION.leftLowerArm.y2}
        stroke="green"
        strokeWidth={DEFAULT_STICK_FIGURE_POSITION.lineWidth}
      />
      <line
        id="rightUpperArm"
        x1={DEFAULT_STICK_FIGURE_POSITION.rightUpperArm.x1}
        y1={DEFAULT_STICK_FIGURE_POSITION.rightUpperArm.y1}
        x2={DEFAULT_STICK_FIGURE_POSITION.rightUpperArm.x2}
        y2={DEFAULT_STICK_FIGURE_POSITION.rightUpperArm.y2}
        stroke="darkblue"
        strokeWidth={DEFAULT_STICK_FIGURE_POSITION.lineWidth}
      />
      <line
        id="rightLowerArm"
        x1={DEFAULT_STICK_FIGURE_POSITION.rightLowerArm.x1}
        y1={DEFAULT_STICK_FIGURE_POSITION.rightLowerArm.y1}
        x2={DEFAULT_STICK_FIGURE_POSITION.rightLowerArm.x2}
        y2={DEFAULT_STICK_FIGURE_POSITION.rightLowerArm.y2}
        stroke="blue"
        strokeWidth={DEFAULT_STICK_FIGURE_POSITION.lineWidth}
      />
      <line
        id="floor"
        x1={DEFAULT_STICK_FIGURE_POSITION.floor.x1}
        y1={DEFAULT_STICK_FIGURE_POSITION.floor.y1}
        x2={DEFAULT_STICK_FIGURE_POSITION.floor.x2}
        y2={DEFAULT_STICK_FIGURE_POSITION.floor.y2}
        stroke="white"
      />
    </svg>
  );
};
