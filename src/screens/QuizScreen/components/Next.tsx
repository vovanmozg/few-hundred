import * as React from 'react';
import { Box, Button, Text } from 'native-base';
import { TQuizState, useStore } from 'app/store/quizState';

// const buttonStyle = { alignSelf: 'flex-end', position: 'absolute', bottom: 35 };
export function Next() {
  const nextQuizItem = useStore((state: TQuizState) => state.nextQuizItem);

  return (
    <Box alignItems="center">
      <Button onPress={nextQuizItem}>Next</Button>
    </Box>
  );
}
