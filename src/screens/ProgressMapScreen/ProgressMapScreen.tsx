import React, { useCallback, useState } from 'react';
import { Box } from 'native-base';
import type { LayoutChangeEvent } from 'react-native';
import { useReadProgress } from 'app/hooks/useReadProgress';
import { Screen } from 'app/ui/Screen/Screen';

import { SvgProgress } from './SvgProgress';
import type { Dimensions } from './types';

const useComponentSize = (): {
  size: Dimensions | null;
  onLayout: (event: LayoutChangeEvent) => void;
} => {
  const [size, setSize] = useState<Dimensions | null>(null);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height }: Dimensions = event.nativeEvent.layout;
    setSize({ width, height });
  }, []);

  return { size, onLayout };
};

export function ProgressMapScreen() {
  const { progressWeights } = useReadProgress();
  const { size, onLayout } = useComponentSize();

  return (
    <Screen>
      <Box p="0" onLayout={onLayout} w="100%" h="100%">
        {size && <SvgProgress progressWeights={progressWeights} size={size} />}
      </Box>
    </Screen>
  );
}
