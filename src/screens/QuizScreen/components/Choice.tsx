import * as React from 'react';
import { Box, Pressable, Text } from 'native-base';
import type { TQuizState } from 'app/store/quizState';
import { useStore } from 'app/store/quizState';
import type { TChoice, TQuizItem } from 'app/types/TQuizItem';

type TProps = {
  quizItem: TQuizItem;
  answer: TChoice;
};
export function Choice({ answer, quizItem }: TProps) {
  const selectAnswer = useStore((state: TQuizState) => state.selectAnswer);
  const answers = useStore((state: TQuizState) => state.answers);

  const onSelectAnswer = _ => {
    selectAnswer({ choice: answer, quizItem });
    // selectAnswer({ choice: answer, quizItem });
    // onAnswer(quizItemId, children);
    // console.log('-------------');
    // console.log(
    //   'answers[quizItem.question]?.choice',
    //   answers[quizItem.question]?.choice,
    // );
    // console.log('answer', answer);
  };

  const bg =
    answers[quizItem.question]?.choice.index === answer.index
      ? answer.index === '1'
        ? 'emerald.300'
        : 'rose.300'
      : 'muted.50';
  console.log(
    'answer',
    bg,
    answers[quizItem.question]?.choice.index,
    answer.index,
  );
  return (
    <Pressable py="1" onPress={onSelectAnswer} width="100%">
      <Box p="2" bg={bg} borderRadius="5" width="100%">
        <Text>{answer.value}</Text>
      </Box>
    </Pressable>
  );
}
