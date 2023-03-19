import * as React from 'react';
import { Box, Button } from 'native-base';
import { useCurrentQuizItem } from 'app/screens/QuizScreen/hooks/useCurrentQuizItem';
import { useNextQuizItem } from 'app/screens/QuizScreen/hooks/useNextQuizItem';

// const buttonStyle = { alignSelf: 'flex-end', position: 'absolute', bottom: 35 };
export function Next() {
  // const nextQuizItem = useStore((state: TQuizState) => state.nextQuizItem);
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
