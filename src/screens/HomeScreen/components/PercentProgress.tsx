import React from 'react';
import { Box, Text } from 'native-base';
import { bg } from 'app/debug';
import { useReadProgress } from 'app/screens/HomeScreen/hooks/useReadProgress';

export function PercentProgress() {
  const { averageWeight } = useReadProgress();

  return (
    <Box
      bg={bg('primary.200')}
      display="flex"
      flexDirection="row"
      justifyContent="space-between">
      <Text fontSize="4xl">
        <Text>{Math.floor(averageWeight * 100)}%</Text>
      </Text>
    </Box>
  );
}
