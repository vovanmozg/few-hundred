import React, { useCallback, useState } from 'react';
import { Box } from 'native-base';
import { useReadProgress } from 'app/screens/HomeScreen/hooks/useReadProgress';

import { SvgProgress } from './SvgProgress';
import type { Dimensions } from './types';

const useComponentSize = () => {
  const [size, setSize] = useState<Dimensions, () => void>(null);

  const onLayout = useCallback(event => {
    const { width, height }: Dimensions = event.nativeEvent.layout;
    setSize({ width, height });
  }, []);

  return [size, onLayout];
};

export function ProgressMapScreen() {
  const { progressWeights } = useReadProgress();
  const [size, onLayout] = useComponentSize();

  return (
    <Box p="0" onLayout={onLayout} w="100%" h="100%">
      <SvgProgress progressWeights={progressWeights} size={size} />
    </Box>
  );
}
