import * as React from 'react';
import { Box, Pressable, Text } from 'native-base';
import { useCurrentQuizItem } from 'app/screens/QuizScreen/hooks/useCurrentQuizItem';
import { useStore } from 'app/store/quizState';
import type { TChoice, TQuizItem } from 'app/types/TQuizItem';
import type { TAnswer, TQuizState } from 'app/types/TQuizState';

function choiceColor(choice: TChoice, answer?: TAnswer) {
  const bgColors = {
    normal: 'muted.50',
    correct: 'emerald.300',
    incorrect: 'rose.300',
  };

  if (answer?.choice?.index !== choice.index) {
    return bgColors.normal;
  }

  return choice.index === '1' ? bgColors.correct : bgColors.incorrect;
}

type TProps = {
  quizItem: TQuizItem;
  choice: TChoice;
};
export function Choice({ choice, quizItem }: TProps) {
  const selectAnswer = useStore((state: TQuizState) => state.selectAnswer);
  const answers = useStore((state: TQuizState) => state.answers);
  const { isAnswerSelected } = useCurrentQuizItem();

  const onSelectAnswer = () => {
    if (isAnswerSelected) {
      return;
    }

    selectAnswer({ choice, quizItem });
  };

  const bg = choiceColor(choice, answers[quizItem.question]);

  return (
    <Pressable py="1" onPress={onSelectAnswer} width="100%">
      <Box p="2" bg={bg} borderRadius="5" width="100%">
        <Text>{choice.value}</Text>
      </Box>
    </Pressable>
  );
}
