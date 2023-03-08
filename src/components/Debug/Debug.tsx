import React from 'react';
import { Box } from 'native-base';
import { TQuizState, useStore } from 'app/store/quizState';

export function Debug() {
  const state = useStore((state: TQuizState) => state);
  console.log(state);
  return (
    <Box width="100%">
      <Box>quizStatus: {state.quizStatus}</Box>
      <Box>
        items: {state.quizItems === null ? null : state.quizItems.length}
      </Box>
      <Box>current:{state.current}</Box>
    </Box>
  );
}
