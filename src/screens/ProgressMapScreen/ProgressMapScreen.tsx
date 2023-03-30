import React from 'react';
import { Flex } from 'native-base';
import { useReadProgress } from 'app/screens/HomeScreen/hooks/useReadProgress';

export function ProgressMapScreen() {
  const { progressWeights } = useReadProgress();

  return (
    <Flex
      alignItems="center"
      direction="row"
      flexWrap="wrap"
      p="2"
      justifyContent="space-between">
      {Object.keys(progressWeights).map(key => {
        const weight = progressWeights[key];

        let color = 'gray.200';
        if (weight >= 0.9) {
          color = `green.500`;
        } else if (weight > 0.5) {
          color = `gray.400`;
        } else if (weight > 0.2) {
          color = `gray.300`;
        }

        return (
          <Flex
            bg={color}
            flexWrap="wrap"
            height="4"
            key={key}
            m="1"
            rounded="xs"
            width="4"
          />
        );
      })}
    </Flex>
  );
}
