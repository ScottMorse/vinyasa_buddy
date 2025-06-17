import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import {
  positionStickFigure,
  type StickFigureConfig,
  type StickFigurePosition,
} from './stickFigurePosition';

export const DEFAULT_POSITION = {
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
    elbowAngle: -90,
  },
  rightUpperArm: {
    shoulderAngle: 46,
  },
  rightLowerArm: {
    elbowAngle: -90,
  },
  leftUpperLeg: {
    hipAngle: 80,
  },
  leftLowerLeg: {
    kneeAngle: 160,
  },
  rightUpperLeg: {
    hipAngle: 80,
  },
  rightLowerLeg: {
    kneeAngle: 160,
  },
};

export interface StickFigureProps {
  position: Partial<StickFigurePosition> | null;
  config: StickFigureConfig;
}

const DURATION = 1000;
const EASE = 'linear';

export const StickFigure = ({ position, config }: StickFigureProps) => {
  const initialPosition = useRef(
    positionStickFigure(position || DEFAULT_POSITION, config),
  );

  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const newPosition = positionStickFigure(
      position || DEFAULT_POSITION,
      config,
    );

    svgRef.current?.setAttribute('width', newPosition.width.toString());
    svgRef.current?.setAttribute('height', newPosition.height.toString());

    animate('#head', {
      cx: newPosition.head.x,
      cy: newPosition.head.y,
      r: newPosition.head.radius,
      duration: DURATION,
      ease: EASE,
    });

    animate('#neck', {
      x1: newPosition.neck.x1,
      y1: newPosition.neck.y1,
      x2: newPosition.neck.x2,
      y2: newPosition.neck.y2,
      duration: DURATION,
      ease: EASE,
    });

    animate('#chest', {
      x1: newPosition.chest.x1,
      y1: newPosition.chest.y1,
      x2: newPosition.chest.x2,
      y2: newPosition.chest.y2,
      duration: DURATION,
      ease: EASE,
    });

    animate('#abdomen', {
      x1: newPosition.abdomen.x1,
      y1: newPosition.abdomen.y1,
      x2: newPosition.abdomen.x2,
      y2: newPosition.abdomen.y2,
      duration: DURATION,
      ease: EASE,
    });

    animate('#leftUpperLeg', {
      x1: newPosition.leftUpperLeg.x1,
      y1: newPosition.leftUpperLeg.y1,
      x2: newPosition.leftUpperLeg.x2,
      y2: newPosition.leftUpperLeg.y2,
      duration: DURATION,
      ease: EASE,
    });

    animate('#leftLowerLeg', {
      x1: newPosition.leftLowerLeg.x1,
      y1: newPosition.leftLowerLeg.y1,
      x2: newPosition.leftLowerLeg.x2,
      y2: newPosition.leftLowerLeg.y2,
      duration: DURATION,
      ease: EASE,
    });

    animate('#rightUpperLeg', {
      x1: newPosition.rightUpperLeg.x1,
      y1: newPosition.rightUpperLeg.y1,
      x2: newPosition.rightUpperLeg.x2,
      y2: newPosition.rightUpperLeg.y2,
      duration: DURATION,
      ease: EASE,
    });

    animate('#rightLowerLeg', {
      x1: newPosition.rightLowerLeg.x1,
      y1: newPosition.rightLowerLeg.y1,
      x2: newPosition.rightLowerLeg.x2,
      y2: newPosition.rightLowerLeg.y2,
      duration: DURATION,
      ease: EASE,
    });

    animate('#leftUpperArm', {
      x1: newPosition.leftUpperArm.x1,
      y1: newPosition.leftUpperArm.y1,
      x2: newPosition.leftUpperArm.x2,
      y2: newPosition.leftUpperArm.y2,
      duration: DURATION,
      ease: EASE,
    });

    animate('#leftLowerArm', {
      x1: newPosition.leftLowerArm.x1,
      y1: newPosition.leftLowerArm.y1,
      x2: newPosition.leftLowerArm.x2,
      y2: newPosition.leftLowerArm.y2,
      duration: DURATION,
      ease: EASE,
    });

    animate('#rightUpperArm', {
      x1: newPosition.rightUpperArm.x1,
      y1: newPosition.rightUpperArm.y1,
      x2: newPosition.rightUpperArm.x2,
      y2: newPosition.rightUpperArm.y2,
      duration: DURATION,
      ease: EASE,
    });

    animate('#rightLowerArm', {
      x1: newPosition.rightLowerArm.x1,
      y1: newPosition.rightLowerArm.y1,
      x2: newPosition.rightLowerArm.x2,
      y2: newPosition.rightLowerArm.y2,
      duration: DURATION,
      ease: EASE,
    });

    animate('#floor', {
      x1: newPosition.floor.x1,
      y1: newPosition.floor.y1,
      x2: newPosition.floor.x2,
      y2: newPosition.floor.y2,
      duration: DURATION,
      ease: EASE,
    });
  }, [position, config]);

  return (
    <svg
      id="stickFigure"
      width={initialPosition.current.width}
      height={initialPosition.current.height}
      ref={svgRef}
    >
      <title>Stick Figure</title>
      <line
        id="chest"
        x1={initialPosition.current.chest.x1}
        y1={initialPosition.current.chest.y1}
        x2={initialPosition.current.chest.x2}
        y2={initialPosition.current.chest.y2}
        stroke="orangered"
        strokeWidth={initialPosition.current.lineWidth}
        strokeLinecap="round"
      />
      <line
        id="abdomen"
        x1={initialPosition.current.abdomen.x1}
        y1={initialPosition.current.abdomen.y1}
        x2={initialPosition.current.abdomen.x2}
        y2={initialPosition.current.abdomen.y2}
        stroke="darkred"
        strokeWidth={initialPosition.current.lineWidth}
        strokeLinecap="round"
      />
      <line
        id="leftUpperLeg"
        x1={initialPosition.current.leftUpperLeg.x1}
        y1={initialPosition.current.leftUpperLeg.y1}
        x2={initialPosition.current.leftUpperLeg.x2}
        y2={initialPosition.current.leftUpperLeg.y2}
        stroke="darkgreen"
        strokeWidth={initialPosition.current.lineWidth}
        strokeLinecap="round"
      />
      <line
        id="leftLowerLeg"
        x1={initialPosition.current.leftLowerLeg.x1}
        y1={initialPosition.current.leftLowerLeg.y1}
        x2={initialPosition.current.leftLowerLeg.x2}
        y2={initialPosition.current.leftLowerLeg.y2}
        stroke="green"
        strokeWidth={initialPosition.current.lineWidth}
        strokeLinecap="round"
      />
      <line
        id="rightUpperLeg"
        x1={initialPosition.current.rightUpperLeg.x1}
        y1={initialPosition.current.rightUpperLeg.y1}
        x2={initialPosition.current.rightUpperLeg.x2}
        y2={initialPosition.current.rightUpperLeg.y2}
        stroke="darkblue"
        strokeWidth={initialPosition.current.lineWidth}
        strokeLinecap="round"
      />
      <line
        id="rightLowerLeg"
        x1={initialPosition.current.rightLowerLeg.x1}
        y1={initialPosition.current.rightLowerLeg.y1}
        x2={initialPosition.current.rightLowerLeg.x2}
        y2={initialPosition.current.rightLowerLeg.y2}
        stroke="blue"
        strokeWidth={initialPosition.current.lineWidth}
        strokeLinecap="round"
      />
      <line
        id="leftUpperArm"
        x1={initialPosition.current.leftUpperArm.x1}
        y1={initialPosition.current.leftUpperArm.y1}
        x2={initialPosition.current.leftUpperArm.x2}
        y2={initialPosition.current.leftUpperArm.y2}
        stroke="darkgreen"
        strokeWidth={initialPosition.current.lineWidth}
        strokeLinecap="round"
      />
      <line
        id="leftLowerArm"
        x1={initialPosition.current.leftLowerArm.x1}
        y1={initialPosition.current.leftLowerArm.y1}
        x2={initialPosition.current.leftLowerArm.x2}
        y2={initialPosition.current.leftLowerArm.y2}
        stroke="green"
        strokeWidth={initialPosition.current.lineWidth}
        strokeLinecap="round"
      />
      <line
        id="neck"
        x1={initialPosition.current.neck.x1}
        y1={initialPosition.current.neck.y1}
        x2={initialPosition.current.neck.x2}
        y2={initialPosition.current.neck.y2}
        stroke="yellow"
        strokeWidth={initialPosition.current.lineWidth}
        strokeLinecap="round"
      />
      <circle
        id="head"
        cx={initialPosition.current.head.x}
        cy={initialPosition.current.head.y}
        r={initialPosition.current.head.radius}
        stroke="deeppink"
        strokeWidth={initialPosition.current.lineWidth}
        fill="#232323"
      />
      <line
        id="rightUpperArm"
        x1={initialPosition.current.rightUpperArm.x1}
        y1={initialPosition.current.rightUpperArm.y1}
        x2={initialPosition.current.rightUpperArm.x2}
        y2={initialPosition.current.rightUpperArm.y2}
        stroke="darkblue"
        strokeWidth={initialPosition.current.lineWidth}
        strokeLinecap="round"
      />
      <line
        id="rightLowerArm"
        x1={initialPosition.current.rightLowerArm.x1}
        y1={initialPosition.current.rightLowerArm.y1}
        x2={initialPosition.current.rightLowerArm.x2}
        y2={initialPosition.current.rightLowerArm.y2}
        stroke="blue"
        strokeWidth={initialPosition.current.lineWidth}
        strokeLinecap="round"
      />
      <line
        id="floor"
        x1={initialPosition.current.floor.x1}
        y1={initialPosition.current.floor.y1}
        x2={initialPosition.current.floor.x2}
        y2={initialPosition.current.floor.y2}
        stroke="white"
        strokeLinecap="round"
      />
    </svg>
  );
};
