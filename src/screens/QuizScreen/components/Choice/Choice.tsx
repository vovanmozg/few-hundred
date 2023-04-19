import React from 'react';
import { Box, Pressable, Text, useColorMode } from 'native-base';
import { isCorrect } from 'app/domain/isCorrect';
import { useGetAnswers } from 'app/hooks/useGetAnswers';
import type { TChoice, TQuizItem } from 'app/types/TQuizItem';
import type { TQuizAnswer } from 'app/types/TQuizState';

import { useCurrentQuizItem } from '../../hooks/useCurrentQuizItem';
import { styles } from './Choice.styles';
import { useSelectAnswer } from './hooks/useSelectAnswer';

function choiceStyle(
  choice: TChoice,
  answer: TQuizAnswer,
  rightAnswer: string,
  style,
) {
  if (answer?.choice?.index !== choice.index) {
    return answer && choice.index === rightAnswer
      ? style.correctHint
      : style.normal;
  }

  return isCorrect(choice) ? style.correct : style.incorrect;
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

  const { colorMode } = useColorMode();
  const themedStyle = styles(colorMode);
  const style = choiceStyle(
    choice,
    answers[quizItem.id],
    quizItem.answer,
    themedStyle,
  );

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
