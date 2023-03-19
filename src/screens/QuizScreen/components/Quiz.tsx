import * as React from 'react';
import { Box, ScrollView } from 'native-base';
import { bg } from 'app/debug';
import { useCurrentQuizItem } from 'app/screens/QuizScreen/hooks/useCurrentQuizItem';
import { TQuizState, useStore } from 'app/store/quizState';

import { Next } from './Next';
import { QuizItem } from './QuizItem';

export function Quiz() {
  const { number } = useCurrentQuizItem();

  const items = useStore((state: TQuizState) => state.quizItems);

  if (!items || number === undefined) {
    return null;
  }

  return (
    <Box
      bg={bg('secondary.300')}
      p="1"
      h="100%"
      display="flex"
      flexDirection="column">
      <Box h="90%">
        <ScrollView>
          <Box>
            <QuizItem quizItem={items[number]} />
          </Box>
        </ScrollView>
      </Box>

      {/* <Debug /> */}
      <Box w="100%" bg="white" pt="2" position="absolute" bottom="0" right="0">
        <Next />
      </Box>
    </Box>
  );
}
