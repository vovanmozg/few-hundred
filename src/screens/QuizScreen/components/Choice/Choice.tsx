import * as React from 'react';
import { Box, Pressable, Text } from 'native-base';
import { isCorrect } from 'app/domain/isCorrect';
import { useGetAnswers } from 'app/hooks/useGetAnswers';
import type { TChoice, TQuizItem } from 'app/types/TQuizItem';
import type { TQuizAnswer } from 'app/types/TQuizState';

import { useCurrentQuizItem } from '../../hooks/useCurrentQuizItem';
import { useSelectAnswer } from './hooks/useSelectAnswer';

function choiceStyle(
  choice: TChoice,
  answer: TQuizAnswer,
  rightAnswer: string,
) {
  const styles = {
    normal: {
      backgroundColor: 'muted.50',
      borderSize: 2,
      borderColor: 'muted.50',
    },
    correct: {
      backgroundColor: 'emerald.300',
      borderSize: 2,
      borderColor: 'emerald.300',
    },
    incorrect: {
      backgroundColor: 'rose.300',
      borderSize: 2,
      borderColor: 'rose.300',
    },
    correctHint: {
      backgroundColor: null,
      borderSize: 2,
      borderColor: 'emerald.300',
    },
  };

  if (answer?.choice?.index !== choice.index) {
    return answer && choice.index === rightAnswer
      ? styles.correctHint
      : styles.normal;
  }

  return isCorrect(choice) ? styles.correct : styles.incorrect;
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

  const style = choiceStyle(choice, answers[quizItem.id], quizItem.answer);

  return (
    <Pressable py="1" onPress={onSelectAnswer} width="100%">
      <Box
        p="2"
        bg={style.backgroundColor}
        borderColor={style.borderColor}
        borderWidth={style.borderSize}
        borderRadius="5"
        width="100%">
        <Text>{choice.value}</Text>
      </Box>
    </Pressable>
  );
}
