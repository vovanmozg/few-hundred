import React from 'react';
import { Center } from 'native-base';
import { Quiz } from 'app/screens/QuizScreen/components/Quiz';

export function QuizScreen() {
  return (
    <Center h="100%" w="100%" alignSelf="center">
      <Quiz />
    </Center>
  );
}
