import * as React from 'react';
import { Box, ScrollView } from 'native-base';
// import { Debug } from 'app/components/Debug';
import { bg } from 'app/debug';
import { useCurrentQuizItem } from 'app/screens/QuizScreen/hooks/useCurrentQuizItem';
import { TQuizState, useStore } from 'app/store/quizState';

import { Next } from './Next';
import { Question } from './Question';
import { QuizItem } from './QuizItem';

export function Quiz() {
  const currentQuizItem = useCurrentQuizItem();

  const items = useStore((state: TQuizState) => state.quizItems);

  if (!items) {
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
          <Box mb="10">
            <Question text={items[currentQuizItem].question} />
          </Box>
          <Box>
            <QuizItem quizItem={items[currentQuizItem]} />
          </Box>
        </ScrollView>
      </Box>

      {/* <Debug /> */}
      <Box
        w="100%"
        bg="white"
        pt="2"
        style={{ position: 'absolute', bottom: 0, right: 0 }}>
        <Next />
      </Box>
    </Box>
  );
}
