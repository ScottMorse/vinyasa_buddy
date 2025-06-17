interface StickFigureConfig {
  headRadius: number;
  lineWidth: number;
  floorY: number;
}

interface CircleDisplay {
  x: number;
  y: number;
  radius: number;
}

interface LineDisplay {
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

interface StickFigurePosition {
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
const getNeutralStickFigure = ({ headRadius }: StickFigureConfig) => {
  const neckLength = headRadius / 1.5;
  const upperArmLength = neckLength * 2.5;
  const lowerArmLength = upperArmLength;
  const torsoLength = neckLength * 4;
  const chestLength = torsoLength / 2;
  const abdomenLength = chestLength;
  const upperLegLength = torsoLength;
  const lowerLegLength = upperLegLength;

  const height =
    headRadius * 2 + neckLength + torsoLength + upperLegLength + lowerLegLength;
  const width = height;

  const headX = width / 2;
  const headY = height - headRadius;

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

const offsetLine = (line: LineDisplay, offset: number) => ({
  ...line,
  y1: line.y1 + offset,
  y2: line.y2 + offset,
});

export const positionStickFigure = (
  position: StickFigurePosition,
  config: StickFigureConfig,
): StickFigureDisplay => {
  const figure = getNeutralStickFigure(config);

  const abdomenHipAngle = -position.abdomen.hipAngle - 90;
  const abdomen = angleLine(
    figure.abdomen.x2,
    figure.abdomen.y2,
    figure.abdomen.length,
    abdomenHipAngle,
  );

  const chestAbdomenAngle = abdomenHipAngle - position.chest.abdomenAngle;
  const chest = angleLine(
    abdomen.x2,
    abdomen.y2,
    figure.chest.length,
    chestAbdomenAngle,
  );

  const neckChestAngle = chestAbdomenAngle - position.neck.chestAngle;
  const neck = angleLine(
    chest.x2,
    chest.y2,
    figure.neck.length,
    neckChestAngle,
  );

  const head = angleCircleOrigin(
    neck.x2,
    neck.y2,
    config.headRadius,
    neckChestAngle + -position.head.neckAngle - 180,
  );

  const leftUpperArmShoulderAngle =
    chestAbdomenAngle - position.leftUpperArm.shoulderAngle - 90;
  const leftUpperArm = angleLine(
    neck.x1,
    neck.y1,
    figure.leftUpperArm.length,
    leftUpperArmShoulderAngle,
  );

  const leftLowerArm = angleLine(
    leftUpperArm.x2,
    leftUpperArm.y2,
    figure.leftLowerArm.length,
    leftUpperArmShoulderAngle + position.leftLowerArm.elbowAngle,
  );

  const rightUpperArmShoulderAngle =
    chestAbdomenAngle + position.rightUpperArm.shoulderAngle + 90;
  const rightUpperArm = angleLine(
    neck.x1,
    neck.y1,
    figure.rightUpperArm.length,
    rightUpperArmShoulderAngle,
  );

  const rightLowerArm = angleLine(
    rightUpperArm.x2,
    rightUpperArm.y2,
    figure.rightLowerArm.length,
    rightUpperArmShoulderAngle - position.rightLowerArm.elbowAngle,
  );

  const leftUpperLegHipAngle = position.leftUpperLeg.hipAngle - 270;
  const leftUpperLeg = angleLine(
    abdomen.x1,
    abdomen.y1,
    figure.leftUpperLeg.length,
    leftUpperLegHipAngle,
  );

  const leftLowerLeg = angleLine(
    leftUpperLeg.x2,
    leftUpperLeg.y2,
    figure.leftLowerLeg.length,
    leftUpperLegHipAngle - position.leftLowerLeg.kneeAngle,
  );

  const rightUpperLegHipAngle = -position.rightUpperLeg.hipAngle + 90;
  const rightUpperLeg = angleLine(
    abdomen.x1,
    abdomen.y1,
    figure.rightUpperLeg.length,
    rightUpperLegHipAngle,
  );

  const rightLowerLeg = angleLine(
    rightUpperLeg.x2,
    rightUpperLeg.y2,
    figure.rightLowerLeg.length,
    rightUpperLegHipAngle + position.rightLowerLeg.kneeAngle,
  );

  const { floorY } = config;

  const result = {
    width: figure.width,
    height: figure.height,
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

  const lowestPoint = Math.max(
    result.head.y + result.head.radius,
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
    result.leftUpperLeg.y2,
    result.rightUpperLeg.y2,
    result.leftLowerLeg.y2,
    result.rightLowerLeg.y2,
  );

  const floorOffset = floorY - lowestPoint;

  return {
    ...result,
    floor: {
      x1: 0,
      y1: floorY,
      x2: result.width,
      y2: floorY,
    },
    head: {
      ...result.head,
      y: result.head.y + floorOffset,
    },
    neck: offsetLine(result.neck, floorOffset),
    chest: offsetLine(result.chest, floorOffset),
    abdomen: offsetLine(result.abdomen, floorOffset),
    leftUpperArm: offsetLine(result.leftUpperArm, floorOffset),
    leftLowerArm: offsetLine(result.leftLowerArm, floorOffset),
    rightUpperArm: offsetLine(result.rightUpperArm, floorOffset),
    rightLowerArm: offsetLine(result.rightLowerArm, floorOffset),
    leftUpperLeg: offsetLine(result.leftUpperLeg, floorOffset),
    leftLowerLeg: offsetLine(result.leftLowerLeg, floorOffset),
    rightUpperLeg: offsetLine(result.rightUpperLeg, floorOffset),
    rightLowerLeg: offsetLine(result.rightLowerLeg, floorOffset),
  };
};
