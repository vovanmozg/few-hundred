import * as React from 'react';
import { Box, ScrollView } from 'native-base';
import { bg } from 'app/debug';

import { useCurrentQuizItem } from '../hooks/useCurrentQuizItem';
import { Next } from './Next';
import { QuizItem } from './QuizItem';

export function Quiz() {
  const { currentQuizItem } = useCurrentQuizItem();

  if (currentQuizItem === undefined) {
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
            <QuizItem />
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
