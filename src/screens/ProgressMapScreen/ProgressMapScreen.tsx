import React, { useCallback, useState } from 'react';
import { Box, Flex } from 'native-base';
import Svg, { Circle, Rect } from 'react-native-svg';
import { useReadProgress } from 'app/screens/HomeScreen/hooks/useReadProgress';

type Dimensions = { width: number; height: number };
function getProgressColor(weight: number) {
  if (weight >= 0.9) {
    return '#22c55e'; // `green.500`;
  } else if (weight > 0.5) {
    return '#a1a1aa'; // `gray.400`;
  } else if (weight > 0.2) {
    return '#d4d4d8'; // `gray.300`;
  }

  return '#e4e4e7'; // 'gray.200';
}

const useComponentSize = () => {
  const [size, setSize] = useState<Dimensions, Function>(null);

  const onLayout = useCallback(event => {
    const { width, height }: Dimensions = event.nativeEvent.layout;
    setSize({ width, height });
  }, []);

  return [size, onLayout];
};

// returns square size of square element
function fillRectangleWithSquares(size, amount) {
  if (!size) {
    return null;
  }
  const { width, height } = size;
  const area = width * height;
  const squareArea = area / amount;
  const squareSide = Math.sqrt(squareArea);

  return Math.floor(squareSide);
}

export function ProgressMapScreen() {
  const { progressWeights } = useReadProgress();
  const [size, onLayout] = useComponentSize();

  const squareSize = fillRectangleWithSquares(
    size,
    Object.keys(progressWeights).length,
  );

  let i = 0;
  return (
    <Box p="0" onLayout={onLayout} width="100%">
      <Svg height="100%" width="100%">
        {Object.keys(progressWeights).map(key => {
          if (!size || !squareSize) {
            return null;
          }
          const weight = progressWeights[key];

          const itemsInRow = Math.floor(size.width / squareSize);
          const alignedWidth = itemsInRow * squareSize;
          const itemsInColumn = Math.floor(size.height / squareSize);
          const alignedHeight = itemsInColumn * squareSize;

          const paddingX = (size.width - alignedWidth) / 2;
          const paddingY = (size.height - alignedHeight) / 2;

          const x = Math.floor((squareSize * i) % alignedWidth) + paddingX;
          const y =
            Math.floor((squareSize * i) / alignedWidth) * squareSize + paddingY;

          i++;
          return (
            <Rect
              key={key}
              x={x + 1}
              y={y + 1}
              width={squareSize - 2}
              height={squareSize - 2}
              strokeWidth="0"
              fill={getProgressColor(weight)}
            />
          );
        })}
      </Svg>
    </Box>
  );
}
