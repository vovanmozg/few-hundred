import React from 'react';
import { Box } from 'native-base';
import { useStore } from 'app/store/quizState';
import type { TQuizState } from 'app/types/TQuizState';

export function Debug() {
  const state = useStore((quizState: TQuizState) => quizState);
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
