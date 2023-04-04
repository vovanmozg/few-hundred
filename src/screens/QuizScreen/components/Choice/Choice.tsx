import * as React from 'react';
import { Box, Pressable, Text } from 'native-base';
import { isCorrect } from 'app/domain/isCorrect';
import { useGetAnswers } from 'app/hooks/useGetAnswers';
import type { TChoice, TQuizItem } from 'app/types/TQuizItem';
import type { TQuizAnswer } from 'app/types/TQuizState';

import { useCurrentQuizItem } from '../../hooks/useCurrentQuizItem';
import { useSelectAnswer } from './hooks/useSelectAnswer';

function choiceColor(choice: TChoice, answer?: TQuizAnswer) {
  const bgColors = {
    normal: 'muted.50',
    correct: 'emerald.300',
    incorrect: 'rose.300',
  };

  if (answer?.choice?.index !== choice.index) {
    return bgColors.normal;
  }

  return isCorrect(choice) ? bgColors.correct : bgColors.incorrect;
}

type TProps = {
  quizItem: TQuizItem;
  choice: TChoice;
};
export function Choice({ choice, quizItem }: TProps) {
  const selectAnswer = useSelectAnswer();
  const answers = useGetAnswers();
  const { isAnswerSelected } = useCurrentQuizItem();

  const onSelectAnswer = () => {
    if (isAnswerSelected) {
      return;
    }

    selectAnswer({ choice, quizItem });
  };

  const bg = choiceColor(choice, answers[quizItem.id]);

  return (
    <Pressable py="1" onPress={onSelectAnswer} width="100%">
      <Box p="2" bg={bg} borderRadius="5" width="100%">
        <Text>{choice.value}</Text>
      </Box>
    </Pressable>
  );
}
