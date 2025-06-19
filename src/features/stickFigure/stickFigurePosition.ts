export interface StickFigureConfig {
  headRadius: number;
  lineWidth: number;
  cropToPosture?: boolean;
}

export interface CircleDisplay {
  x: number;
  y: number;
  radius: number;
}

export interface LineDisplay {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

interface StickFigureDisplay {
  width: number;
  height: number;
  lineWidth: number;
  floor: LineDisplay;
  head: CircleDisplay;
  neck: LineDisplay;
  chest: LineDisplay;
  abdomen: LineDisplay;
  leftUpperArm: LineDisplay;
  leftLowerArm: LineDisplay;
  rightUpperArm: LineDisplay;
  rightLowerArm: LineDisplay;
  leftUpperLeg: LineDisplay;
  leftLowerLeg: LineDisplay;
  rightUpperLeg: LineDisplay;
  rightLowerLeg: LineDisplay;
}

export interface StickFigurePosition {
  head: {
    neckAngle: number;
  };
  neck: {
    chestAngle: number;
  };
  chest: {
    abdomenAngle: number;
  };
  abdomen: {
    hipAngle: number;
  };
  leftUpperArm: {
    shoulderAngle: number;
  };
  rightUpperArm: {
    shoulderAngle: number;
  };
  leftLowerArm: {
    elbowAngle: number;
  };
  rightLowerArm: {
    elbowAngle: number;
  };
  leftUpperLeg: {
    hipAngle: number;
  };
  rightUpperLeg: {
    hipAngle: number;
  };
  leftLowerLeg: {
    kneeAngle: number;
  };
  rightLowerLeg: {
    kneeAngle: number;
  };
}

/** Drawn from top to bottom, so x1,y1 points are higher than x2,y2 points */
const getNeutralStickFigure = ({
  headRadius,
  lineWidth,
}: StickFigureConfig) => {
  const neckLength = headRadius;
  const upperArmLength = neckLength * 2.5;
  const lowerArmLength = upperArmLength;
  const torsoLength = neckLength * 5;
  const chestLength = torsoLength / 2;
  const abdomenLength = chestLength;
  const upperLegLength = torsoLength;
  const lowerLegLength = upperLegLength;

  const height =
    headRadius * 2 +
    neckLength +
    torsoLength +
    upperLegLength +
    lowerLegLength +
    upperArmLength +
    lowerArmLength +
    lineWidth * 2;
  const width = height;

  const headX = width / 2;
  const headY = headRadius + lineWidth;

  const neckX1 = headX;
  const neckY1 = headY + headRadius;
  const neckX2 = headX;
  const neckY2 = headY + headRadius + neckLength;

  const chestX1 = neckX2;
  const chestY1 = headY + headRadius + neckLength;
  const chestX2 = chestX1;
  const chestY2 = headY + headRadius + neckLength + chestLength;

  const abdomenX1 = chestX2;
  const abdomenY1 = headY + headRadius + neckLength + chestLength;
  const abdomenX2 = abdomenX1;
  const abdomenY2 =
    headY + headRadius + neckLength + chestLength + abdomenLength;

  const leftUpperArmX1 = neckX2;
  const leftUpperArmY1 = neckY2;
  const leftUpperArmX2 = neckX2;
  const leftUpperArmY2 = neckY2 + upperArmLength;

  const leftLowerArmX1 = leftUpperArmX2;
  const leftLowerArmY1 = leftUpperArmY2;
  const leftLowerArmX2 = leftUpperArmX2;
  const leftLowerArmY2 = leftUpperArmY2 + lowerArmLength;

  const rightUpperArmX1 = leftUpperArmX1;
  const rightUpperArmY1 = leftUpperArmY1;
  const rightUpperArmX2 = leftUpperArmX2;
  const rightUpperArmY2 = leftUpperArmY2;

  const rightLowerArmX1 = rightUpperArmX2;
  const rightLowerArmY1 = rightUpperArmY2;
  const rightLowerArmX2 = rightUpperArmX2;
  const rightLowerArmY2 = rightUpperArmY2;

  const leftUpperLegX1 = abdomenX2;
  const leftUpperLegY1 = abdomenY2;
  const leftUpperLegX2 = abdomenX2;
  const leftUpperLegY2 = abdomenY2 + upperLegLength;

  const leftLowerLegX1 = leftUpperLegX2;
  const leftLowerLegY1 = leftUpperLegY2;
  const leftLowerLegX2 = leftUpperLegX2;
  const leftLowerLegY2 = leftUpperLegY2 + lowerLegLength;

  const rightUpperLegX1 = leftUpperLegX1;
  const rightUpperLegY1 = leftUpperLegY1;
  const rightUpperLegX2 = leftUpperLegX2;
  const rightUpperLegY2 = leftUpperLegY2;

  const rightLowerLegX1 = rightUpperLegX2;
  const rightLowerLegY1 = rightUpperLegY2;
  const rightLowerLegX2 = rightUpperLegX2;
  const rightLowerLegY2 = rightUpperLegY2 + lowerLegLength;

  return {
    width,
    height,
    head: {
      x: headX,
      y: headY,
      radius: headRadius,
    },
    neck: {
      x1: neckX1,
      y1: neckY1,
      x2: neckX2,
      y2: neckY2,
      length: neckLength,
    },
    chest: {
      x1: chestX1,
      y1: chestY1,
      x2: chestX2,
      y2: chestY2,
      length: chestLength,
    },
    abdomen: {
      x1: abdomenX1,
      y1: abdomenY1,
      x2: abdomenX2,
      y2: abdomenY2,
      length: abdomenLength,
    },
    leftUpperLeg: {
      x1: leftUpperLegX1,
      y1: leftUpperLegY1,
      x2: leftUpperLegX2,
      y2: leftUpperLegY2,
      length: upperLegLength,
    },
    leftLowerLeg: {
      x1: leftLowerLegX1,
      y1: leftLowerLegY1,
      x2: leftLowerLegX2,
      y2: leftLowerLegY2,
      length: lowerLegLength,
    },
    rightUpperLeg: {
      x1: rightUpperLegX1,
      y1: rightUpperLegY1,
      x2: rightUpperLegX2,
      y2: rightUpperLegY2,
      length: upperLegLength,
    },
    rightLowerLeg: {
      x1: rightLowerLegX1,
      y1: rightLowerLegY1,
      x2: rightLowerLegX2,
      y2: rightLowerLegY2,
      length: lowerLegLength,
    },
    leftUpperArm: {
      x1: leftUpperArmX1,
      y1: leftUpperArmY1,
      x2: leftUpperArmX2,
      y2: leftUpperArmY2,
      length: upperArmLength,
    },
    leftLowerArm: {
      x1: leftLowerArmX1,
      y1: leftLowerArmY1,
      x2: leftLowerArmX2,
      y2: leftLowerArmY2,
      length: lowerArmLength,
    },
    rightUpperArm: {
      x1: rightUpperArmX1,
      y1: rightUpperArmY1,
      x2: rightUpperArmX2,
      y2: rightUpperArmY2,
      length: upperArmLength,
    },
    rightLowerArm: {
      x1: rightLowerArmX1,
      y1: rightLowerArmY1,
      x2: rightLowerArmX2,
      y2: rightLowerArmY2,
      length: lowerArmLength,
    },
  };
};

const angleLine = (
  originX: number,
  originY: number,
  length: number,
  angle: number,
) => ({
  x1: originX,
  y1: originY,
  x2: originX + length * Math.cos((angle * Math.PI) / 180),
  y2: originY + length * Math.sin((angle * Math.PI) / 180),
});

const angleCircleOrigin = (
  edgeX: number,
  edgeY: number,
  radius: number,
  angle: number,
) => ({
  x: edgeX - Math.cos((angle * Math.PI) / 180) * radius,
  y: edgeY - Math.sin((angle * Math.PI) / 180) * radius,
});

const offsetLine = (line: LineDisplay, offsetY: number, offsetX: number) => ({
  ...line,
  y1: line.y1 + offsetY,
  y2: line.y2 + offsetY,
  x1: line.x1 + offsetX,
  x2: line.x2 + offsetX,
});

const NEUTRAL_POSITION: StickFigurePosition = {
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
    shoulderAngle: 0,
  },
  rightUpperArm: {
    shoulderAngle: 0,
  },
  leftLowerArm: {
    elbowAngle: 0,
  },
  rightLowerArm: {
    elbowAngle: 0,
  },
  leftUpperLeg: {
    hipAngle: 0,
  },
  leftLowerLeg: {
    kneeAngle: 0,
  },
  rightUpperLeg: {
    hipAngle: 0,
  },
  rightLowerLeg: {
    kneeAngle: 0,
  },
};

export const positionStickFigure = (
  _position: Partial<StickFigurePosition>,
  config: StickFigureConfig,
): StickFigureDisplay => {
  const neutral = getNeutralStickFigure(config);

  const position = {
    ...NEUTRAL_POSITION,
    ..._position,
  };

  const spacing = config.lineWidth * 1.6;

  const abdomenHipAngle = -position.abdomen.hipAngle - 90;
  const abdomen = angleLine(
    neutral.abdomen.x2,
    neutral.abdomen.y2,
    neutral.abdomen.length,
    abdomenHipAngle,
  );

  const chestAbdomenAngle = abdomenHipAngle - position.chest.abdomenAngle;
  const chest = angleLine(
    abdomen.x2,
    abdomen.y2,
    neutral.chest.length,
    chestAbdomenAngle,
  );

  const neckChestAngle = chestAbdomenAngle - position.neck.chestAngle;
  const neck = angleLine(
    chest.x2,
    chest.y2,
    neutral.neck.length,
    neckChestAngle,
  );

  const head = angleCircleOrigin(
    neck.x2,
    neck.y2 - spacing,
    config.headRadius,
    neckChestAngle + -position.head.neckAngle - 180,
  );

  const leftUpperArmShoulderAngle =
    chestAbdomenAngle - position.leftUpperArm.shoulderAngle - 90;
  const leftUpperArm = angleLine(
    neck.x1 - spacing,
    neck.y1,
    neutral.leftUpperArm.length,
    leftUpperArmShoulderAngle,
  );

  const leftLowerArm = angleLine(
    leftUpperArm.x2,
    leftUpperArm.y2,
    neutral.leftLowerArm.length,
    leftUpperArmShoulderAngle + position.leftLowerArm.elbowAngle,
  );

  const rightUpperArmShoulderAngle =
    chestAbdomenAngle + position.rightUpperArm.shoulderAngle + 90;
  const rightUpperArm = angleLine(
    neck.x1 + spacing,
    neck.y1,
    neutral.rightUpperArm.length,
    rightUpperArmShoulderAngle,
  );

  const rightLowerArm = angleLine(
    rightUpperArm.x2,
    rightUpperArm.y2,
    neutral.rightLowerArm.length,
    rightUpperArmShoulderAngle - position.rightLowerArm.elbowAngle,
  );

  const leftUpperLegHipAngle = position.leftUpperLeg.hipAngle - 270;
  const leftUpperLeg = angleLine(
    abdomen.x1 - spacing,
    abdomen.y1,
    neutral.leftUpperLeg.length,
    leftUpperLegHipAngle,
  );

  const leftLowerLeg = angleLine(
    leftUpperLeg.x2,
    leftUpperLeg.y2,
    neutral.leftLowerLeg.length,
    leftUpperLegHipAngle - position.leftLowerLeg.kneeAngle,
  );

  const rightUpperLegHipAngle = -position.rightUpperLeg.hipAngle + 90;
  const rightUpperLeg = angleLine(
    abdomen.x1 + spacing,
    abdomen.y1,
    neutral.rightUpperLeg.length,
    rightUpperLegHipAngle,
  );

  const rightLowerLeg = angleLine(
    rightUpperLeg.x2,
    rightUpperLeg.y2,
    neutral.rightLowerLeg.length,
    rightUpperLegHipAngle + position.rightLowerLeg.kneeAngle,
  );

  const result = {
    width: neutral.width,
    height: neutral.height,
    lineWidth: config.lineWidth,
    head: {
      ...head,
      radius: config.headRadius,
    },
    abdomen,
    chest,
    neck,
    leftUpperArm,
    leftLowerArm,
    rightUpperArm,
    rightLowerArm,
    leftUpperLeg,
    leftLowerLeg,
    rightUpperLeg,
    rightLowerLeg,
  };

  const allYs = [
    result.head.y + result.head.radius,
    result.head.y - result.head.radius,
    result.neck.y1,
    result.neck.y2,
    result.chest.y1,
    result.chest.y2,
    result.abdomen.y1,
    result.abdomen.y2,
    result.leftUpperArm.y1,
    result.leftUpperArm.y2,
    result.leftLowerArm.y1,
    result.leftLowerArm.y2,
    result.rightUpperArm.y1,
    result.rightUpperArm.y2,
    result.rightLowerArm.y1,
    result.rightLowerArm.y2,
    result.leftUpperLeg.y1,
    result.leftUpperLeg.y2,
    result.rightUpperLeg.y1,
    result.rightUpperLeg.y2,
    result.leftLowerLeg.y1,
    result.leftLowerLeg.y2,
    result.rightLowerLeg.y1,
    result.rightLowerLeg.y2,
  ];

  const allXs = [
    result.head.x + result.head.radius,
    result.head.x - result.head.radius,
    result.neck.x1,
    result.neck.x2,
    result.chest.x1,
    result.chest.x2,
    result.abdomen.x1,
    result.abdomen.x2,
    result.leftUpperArm.x1,
    result.leftUpperArm.x2,
    result.leftLowerArm.x1,
    result.leftLowerArm.x2,
    result.rightUpperArm.x1,
    result.rightUpperArm.x2,
    result.rightLowerArm.x1,
    result.rightLowerArm.x2,
    result.leftUpperLeg.x1,
    result.leftUpperLeg.x2,
    result.rightUpperLeg.x1,
    result.rightUpperLeg.x2,
    result.leftLowerLeg.x1,
    result.leftLowerLeg.x2,
    result.rightLowerLeg.x1,
    result.rightLowerLeg.x2,
  ];

  const highestPoint = Math.min(...allYs);
  const lowestPoint = Math.max(...allYs);
  const leftmostPoint = Math.min(...allXs);
  const rightmostPoint = Math.max(...allXs);

  const figureHeight = lowestPoint - highestPoint;
  const figureWidth = rightmostPoint - leftmostPoint;

  const height = config.cropToPosture
    ? figureHeight + config.lineWidth * 2 + spacing * 2
    : result.height;
  const width = config.cropToPosture
    ? figureWidth + config.lineWidth * 2 + spacing * 2
    : result.width;

  const floorY = height - config.lineWidth;
  const yOffset = floorY - lowestPoint - spacing;

  const figureMiddle = figureWidth / 2 + leftmostPoint;
  const xOffset = width / 2 - figureMiddle;

  return {
    ...result,
    width,
    height,
    floor: {
      x1: config.lineWidth,
      y1: floorY,
      x2: result.width - config.lineWidth,
      y2: floorY,
    },
    head: {
      ...result.head,
      y: result.head.y + yOffset,
      x: result.head.x + xOffset,
    },
    neck: offsetLine(result.neck, yOffset, xOffset),
    chest: offsetLine(result.chest, yOffset, xOffset),
    abdomen: offsetLine(result.abdomen, yOffset, xOffset),
    leftUpperArm: offsetLine(result.leftUpperArm, yOffset, xOffset),
    leftLowerArm: offsetLine(result.leftLowerArm, yOffset, xOffset),
    rightUpperArm: offsetLine(result.rightUpperArm, yOffset, xOffset),
    rightLowerArm: offsetLine(result.rightLowerArm, yOffset, xOffset),
    leftUpperLeg: offsetLine(result.leftUpperLeg, yOffset, xOffset),
    leftLowerLeg: offsetLine(result.leftLowerLeg, yOffset, xOffset),
    rightUpperLeg: offsetLine(result.rightUpperLeg, yOffset, xOffset),
    rightLowerLeg: offsetLine(result.rightLowerLeg, yOffset, xOffset),
  };
};
