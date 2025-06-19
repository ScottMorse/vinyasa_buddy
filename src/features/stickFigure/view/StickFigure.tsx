import { useEffect, useMemo, useRef } from 'react';
import { animate, createScope, type Scope } from 'animejs';
import {
  positionStickFigure,
  type StickFigureConfig,
  type StickFigurePosition,
} from '../stickFigurePosition';
import { DEFAULT_POSITION } from '../defaultPosition';
import { useToken } from '@chakra-ui/react';

export interface StickFigureProps {
  position: Partial<StickFigurePosition> | null;
  config: StickFigureConfig;
  showFloor?: boolean;
}

const DURATION = 1000;
const EASE = 'linear';

export const StickFigure = ({
  position,
  config,
  showFloor,
}: StickFigureProps) => {
  const initialPosition = useRef(
    positionStickFigure(position || DEFAULT_POSITION, config),
  );

  const svgRef = useRef<SVGSVGElement>(null);
  const scopeRef = useRef<Scope>(null);

  const currentPosition = useMemo(
    () => positionStickFigure(position || DEFAULT_POSITION, config),
    [position, config],
  );

  useEffect(() => {
    svgRef.current?.setAttribute('width', currentPosition.width.toString());
    svgRef.current?.setAttribute('height', currentPosition.height.toString());

    scopeRef.current = createScope({ root: svgRef }).add((self) => {
      animate('.head', {
        cx: currentPosition.head.x,
        cy: currentPosition.head.y,
        r: currentPosition.head.radius,
        duration: DURATION,
        ease: EASE,
      });

      animate('.neck', {
        x1: currentPosition.neck.x1,
        y1: currentPosition.neck.y1,
        x2: currentPosition.neck.x2,
        y2: currentPosition.neck.y2,
        duration: DURATION,
        ease: EASE,
      });

      animate('.chest', {
        x1: currentPosition.chest.x1,
        y1: currentPosition.chest.y1,
        x2: currentPosition.chest.x2,
        y2: currentPosition.chest.y2,
        duration: DURATION,
        ease: EASE,
      });

      animate('.abdomen', {
        x1: currentPosition.abdomen.x1,
        y1: currentPosition.abdomen.y1,
        x2: currentPosition.abdomen.x2,
        y2: currentPosition.abdomen.y2,
        duration: DURATION,
        ease: EASE,
      });

      animate('.leftUpperLeg', {
        x1: currentPosition.leftUpperLeg.x1,
        y1: currentPosition.leftUpperLeg.y1,
        x2: currentPosition.leftUpperLeg.x2,
        y2: currentPosition.leftUpperLeg.y2,
        duration: DURATION,
        ease: EASE,
      });

      animate('.leftLowerLeg', {
        x1: currentPosition.leftLowerLeg.x1,
        y1: currentPosition.leftLowerLeg.y1,
        x2: currentPosition.leftLowerLeg.x2,
        y2: currentPosition.leftLowerLeg.y2,
        duration: DURATION,
        ease: EASE,
      });

      animate('.rightUpperLeg', {
        x1: currentPosition.rightUpperLeg.x1,
        y1: currentPosition.rightUpperLeg.y1,
        x2: currentPosition.rightUpperLeg.x2,
        y2: currentPosition.rightUpperLeg.y2,
        duration: DURATION,
        ease: EASE,
      });

      animate('.rightLowerLeg', {
        x1: currentPosition.rightLowerLeg.x1,
        y1: currentPosition.rightLowerLeg.y1,
        x2: currentPosition.rightLowerLeg.x2,
        y2: currentPosition.rightLowerLeg.y2,
        duration: DURATION,
        ease: EASE,
      });

      animate('.leftUpperArm', {
        x1: currentPosition.leftUpperArm.x1,
        y1: currentPosition.leftUpperArm.y1,
        x2: currentPosition.leftUpperArm.x2,
        y2: currentPosition.leftUpperArm.y2,
        duration: DURATION,
        ease: EASE,
      });

      animate('.leftLowerArm', {
        x1: currentPosition.leftLowerArm.x1,
        y1: currentPosition.leftLowerArm.y1,
        x2: currentPosition.leftLowerArm.x2,
        y2: currentPosition.leftLowerArm.y2,
        duration: DURATION,
        ease: EASE,
      });

      animate('.rightUpperArm', {
        x1: currentPosition.rightUpperArm.x1,
        y1: currentPosition.rightUpperArm.y1,
        x2: currentPosition.rightUpperArm.x2,
        y2: currentPosition.rightUpperArm.y2,
        duration: DURATION,
        ease: EASE,
      });

      animate('.rightLowerArm', {
        x1: currentPosition.rightLowerArm.x1,
        y1: currentPosition.rightLowerArm.y1,
        x2: currentPosition.rightLowerArm.x2,
        y2: currentPosition.rightLowerArm.y2,
        duration: DURATION,
        ease: EASE,
      });

      animate('.floor', {
        x1: currentPosition.floor.x1,
        y1: currentPosition.floor.y1,
        x2: currentPosition.floor.x2,
        y2: currentPosition.floor.y2,
        duration: DURATION,
        ease: EASE,
      });
    });
  }, [currentPosition]);

  const [
    headColor,
    neckColor,
    chestColor,
    abdomenColor,
    leftUpperLegColor,
    leftLowerLegColor,
    rightUpperLegColor,
    rightLowerLegColor,
    rightUpperArmColor,
    rightLowerArmColor,
    leftUpperArmColor,
    leftLowerArmColor,
    floorColor,
  ] = useToken('colors', [
    'stickHead',
    'stickNeck',
    'stickChest',
    'stickAbdomen',
    'stickLeftUpperLeg',
    'stickLeftLowerLeg',
    'stickRightUpperLeg',
    'stickRightLowerLeg',
    'stickRightUpperArm',
    'stickRightLowerArm',
    'stickLeftUpperArm',
    'stickLeftLowerArm',
    'stickFloor',
  ]);
  const [bgColor] = useToken('colors', 'background');

  return (
    <svg
      className="stickFigure"
      width={initialPosition.current.width}
      height={initialPosition.current.height}
      ref={svgRef}
    >
      <title>Stick Figure</title>

      <line
        className="leftUpperLeg"
        x1={initialPosition.current.leftUpperLeg.x1}
        y1={initialPosition.current.leftUpperLeg.y1}
        x2={initialPosition.current.leftUpperLeg.x2}
        y2={initialPosition.current.leftUpperLeg.y2}
        stroke={leftUpperLegColor}
        strokeWidth={config.lineWidth}
        strokeLinecap="round"
      />
      <line
        className="leftLowerLeg"
        x1={initialPosition.current.leftLowerLeg.x1}
        y1={initialPosition.current.leftLowerLeg.y1}
        x2={initialPosition.current.leftLowerLeg.x2}
        y2={initialPosition.current.leftLowerLeg.y2}
        stroke={leftLowerLegColor}
        strokeWidth={config.lineWidth}
        strokeLinecap="round"
      />
      <line
        className="chest"
        x1={initialPosition.current.chest.x1}
        y1={initialPosition.current.chest.y1}
        x2={initialPosition.current.chest.x2}
        y2={initialPosition.current.chest.y2}
        stroke={chestColor}
        strokeWidth={config.lineWidth}
        strokeLinecap="round"
      />
      <line
        className="abdomen"
        x1={initialPosition.current.abdomen.x1}
        y1={initialPosition.current.abdomen.y1}
        x2={initialPosition.current.abdomen.x2}
        y2={initialPosition.current.abdomen.y2}
        stroke={abdomenColor}
        strokeWidth={config.lineWidth}
        strokeLinecap="round"
      />
      <line
        className="rightUpperLeg"
        x1={initialPosition.current.rightUpperLeg.x1}
        y1={initialPosition.current.rightUpperLeg.y1}
        x2={initialPosition.current.rightUpperLeg.x2}
        y2={initialPosition.current.rightUpperLeg.y2}
        stroke={rightUpperLegColor}
        strokeWidth={config.lineWidth}
        strokeLinecap="round"
      />
      <line
        className="rightLowerLeg"
        x1={initialPosition.current.rightLowerLeg.x1}
        y1={initialPosition.current.rightLowerLeg.y1}
        x2={initialPosition.current.rightLowerLeg.x2}
        y2={initialPosition.current.rightLowerLeg.y2}
        stroke={rightLowerLegColor}
        strokeWidth={config.lineWidth}
        strokeLinecap="round"
      />
      <line
        className="leftUpperArm"
        x1={initialPosition.current.leftUpperArm.x1}
        y1={initialPosition.current.leftUpperArm.y1}
        x2={initialPosition.current.leftUpperArm.x2}
        y2={initialPosition.current.leftUpperArm.y2}
        stroke={leftUpperArmColor}
        strokeWidth={config.lineWidth}
        strokeLinecap="round"
      />
      <line
        className="leftLowerArm"
        x1={initialPosition.current.leftLowerArm.x1}
        y1={initialPosition.current.leftLowerArm.y1}
        x2={initialPosition.current.leftLowerArm.x2}
        y2={initialPosition.current.leftLowerArm.y2}
        stroke={leftLowerArmColor}
        strokeWidth={config.lineWidth}
        strokeLinecap="round"
      />
      <line
        className="neck"
        x1={initialPosition.current.neck.x1}
        y1={initialPosition.current.neck.y1}
        x2={initialPosition.current.neck.x2}
        y2={initialPosition.current.neck.y2}
        stroke={neckColor}
        strokeWidth={config.lineWidth}
        strokeLinecap="round"
      />
      <circle
        className="head"
        cx={initialPosition.current.head.x}
        cy={initialPosition.current.head.y}
        r={initialPosition.current.head.radius}
        stroke={headColor}
        strokeWidth={config.lineWidth}
        fill={bgColor}
      />
      <line
        className="rightUpperArm"
        x1={initialPosition.current.rightUpperArm.x1}
        y1={initialPosition.current.rightUpperArm.y1}
        x2={initialPosition.current.rightUpperArm.x2}
        y2={initialPosition.current.rightUpperArm.y2}
        stroke={rightUpperArmColor}
        strokeWidth={config.lineWidth}
        strokeLinecap="round"
      />
      <line
        className="rightLowerArm"
        x1={initialPosition.current.rightLowerArm.x1}
        y1={initialPosition.current.rightLowerArm.y1}
        x2={initialPosition.current.rightLowerArm.x2}
        y2={initialPosition.current.rightLowerArm.y2}
        stroke={rightLowerArmColor}
        strokeWidth={config.lineWidth}
        strokeLinecap="round"
      />
      {showFloor && (
        <line
          className="floor"
          x1={initialPosition.current.floor.x1}
          y1={initialPosition.current.floor.y1}
          x2={initialPosition.current.floor.x2}
          y2={initialPosition.current.floor.y2}
          stroke={floorColor}
          strokeWidth={config.lineWidth / 1.5}
          strokeLinecap="round"
        />
      )}
    </svg>
  );
};
