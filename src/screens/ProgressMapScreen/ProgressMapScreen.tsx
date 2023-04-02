import React from 'react';
import { Flex } from 'native-base';
import { useReadProgress } from 'app/screens/HomeScreen/hooks/useReadProgress';

function getProgressColor(weight: number) {
  if (weight >= 0.9) {
    return `green.500`;
  } else if (weight > 0.5) {
    return `gray.400`;
  } else if (weight > 0.2) {
    return `gray.300`;
  }

  return 'gray.200';
}

export function ProgressMapScreen() {
  const { progressWeights } = useReadProgress();

  return (
    <Flex
      alignItems="center"
      direction="row"
      flexWrap="wrap"
      alignContent="stretch"
      justifyContent="space-between"
      p="2">
      {Object.keys(progressWeights).map(key => {
        const weight = progressWeights[key];

        return (
          <Flex
            bg={getProgressColor(weight)}
            flexWrap="wrap"
            h="4"
            key={key}
            m="1"
            rounded="xs"
            w="4"
          />
        );
      })}
    </Flex>
  );
}
