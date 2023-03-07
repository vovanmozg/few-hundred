import * as React from 'react';
import { Box, Button, Text } from 'native-base';
import { useNextQuizItem } from 'app/screens/QuizScreen/hooks/useNextQuizItem';

// const buttonStyle = { alignSelf: 'flex-end', position: 'absolute', bottom: 35 };
export function Next() {
  // const nextQuizItem = useStore((state: TQuizState) => state.nextQuizItem);

  const nextQuizItem = useNextQuizItem();

  if (!nextQuizItem) {
    return null;
  }

  return (
    <Box alignItems="center">
      <Button onPress={nextQuizItem}>Next</Button>
    </Box>
  );
}
