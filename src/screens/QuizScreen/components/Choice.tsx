import * as React from 'react';
import { Button, Text } from 'native-base';
import type { TQuizState } from 'app/store/quizState';
import { useStore } from 'app/store/quizState';
import type { TChoice, TQuizItem } from 'app/types/tQuizItem';

type TProps = {
  quizItem: TQuizItem;
  answer: TChoice;
};
export function Choice({ answer, quizItem }: TProps) {
  const selectAnswer = useStore((state: TQuizState) => state.selectAnswer);
  const onPressButton = () => {
    selectAnswer({ choice: answer, quizItem });
    // onAnswer(quizItemId, children);
  };

  return (
    <Button onPress={onPressButton}>
      <Text>{answer.value}</Text>
    </Button>
  );
}
