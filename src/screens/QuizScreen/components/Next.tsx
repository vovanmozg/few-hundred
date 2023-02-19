import * as React from 'react';
import { Button, Text } from 'native-base';
import { TQuizState, useStore } from 'app/store/quizState';

export function Next() {
  const nextQuizItem = useStore((state: TQuizState) => state.nextQuizItem);

  return (
    <Button onPress={nextQuizItem}>
      <Text>Next</Text>
    </Button>
  );
}
