import React, { useEffect } from 'react';
import { Box } from 'native-base';
import { DEBUG } from 'app/contants';
import { Quiz } from 'app/screens/QuizScreen/components/Quiz';

export function QuizScreen() {
  return (
    <Box bg="white" p="1" h="100%" w="100%" alignSelf="center">
      <Quiz />
    </Box>
  );
}
