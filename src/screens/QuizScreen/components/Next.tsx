import React from 'react';
import { Box, Button } from 'native-base';

import { useCurrentQuizItem } from '../hooks/useCurrentQuizItem';
import { useNextQuizItem } from '../hooks/useNextQuizItem';

export function Next() {
  const { isAnswerSelected } = useCurrentQuizItem();

  const nextQuizItem = useNextQuizItem();

  if (!nextQuizItem) {
    return null;
  }

  return (
    <Box alignItems="flex-end">
      <Button w="50%" onPress={nextQuizItem} isDisabled={!isAnswerSelected}>
        Next
      </Button>
    </Box>
  );
}
