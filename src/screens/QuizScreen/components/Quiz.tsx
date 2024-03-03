import React from 'react';
import { Box, ScrollView } from 'native-base';

import { useCurrentQuizItem } from '../hooks/useCurrentQuizItem';
import { Next } from './Next';
import { QuizItem } from './QuizItem';

export function Quiz() {
  const { currentQuizItem } = useCurrentQuizItem();

  if (currentQuizItem === undefined) {
    return null;
  }

  return (
    <Box p="1" h="100%" display="flex" flexDirection="column">
      <Box h="90%">
        <ScrollView>
          <Box>
            <QuizItem />
          </Box>
        </ScrollView>
      </Box>

      {/* <Debug /> */}
      <Box w="100%" pt="2" position="absolute" bottom="3" right="3">
        <Next />
      </Box>
    </Box>
  );
}
