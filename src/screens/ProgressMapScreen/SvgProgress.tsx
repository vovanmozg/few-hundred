import React from 'react';
import Svg, { Rect } from 'react-native-svg';

import type { Dimensions } from './types';

type TProps = {
  progressWeights: Record<string, number>;
  size: Dimensions;
};

function getProgressColor(weight: number): string {
  if (weight >= 0.9) {
    return '#22c55e'; // `green.500`;
  } else if (weight > 0.5) {
    return '#a1a1aa'; // `gray.400`;
  } else if (weight > 0.2) {
    return '#d4d4d8'; // `gray.300`;
  }

  return '#e4e4e7'; // 'gray.200';
}

function getSquareSize(size: Dimensions | null, amount: number): number | null {
  if (!size) {
    return null;
  }

  const { width, height } = size;
  const area = width * height;
  const squareArea = area / amount;
  const squareSide = Math.sqrt(squareArea);

  return Math.floor(squareSide);
}

export function SvgProgress({ progressWeights, size }: TProps) {
  const squareSize = getSquareSize(size, Object.keys(progressWeights).length);

  if (!squareSize) {
    return null;
  }

  const itemsInRow = Math.floor(size.width / squareSize);
  const itemsInColumn = Math.floor(size.height / squareSize);

  const alignedWidth = itemsInRow * squareSize;
  const alignedHeight = itemsInColumn * squareSize;

  const paddingX = (size.width - alignedWidth) / 2;
  const paddingY = (size.height - alignedHeight) / 2;

  return (
    <Svg>
      {Object.keys(progressWeights).map((key, i) => {
        const weight = progressWeights[key];
        const color = getProgressColor(weight);

        const x = Math.floor((squareSize * i) % alignedWidth) + paddingX;
        const y =
          Math.floor((squareSize * i) / alignedWidth) * squareSize + paddingY;

        const padding = 1;
        return (
          <Rect
            key={key}
            x={x + padding}
            y={y + padding}
            width={squareSize - padding * 2}
            height={squareSize - padding * 2}
            strokeWidth="0"
            fill={color}
          />
        );
      })}
    </Svg>
  );
}
