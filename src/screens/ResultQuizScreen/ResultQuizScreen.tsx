import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Center, Text } from 'native-base';
import { useGetAnswers } from 'src/hooks/useGetAnswers';
import { useStartQuiz } from 'app/hooks/useStartQuiz';
import type { RootStackParamList } from 'app/types/app';
import { Screen } from 'app/ui/Screen/Screen';

import { useCorrectAnswersCount } from './hooks/useCorrectAnswersCount';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function ResultQuizScreen({ navigation }: Props) {
  const answers = useGetAnswers();
  const startQuiz = useStartQuiz();
  const correctAnswers = useCorrectAnswersCount(answers);
  const answersCount = Object.keys(answers).length;

  const onPress = () => {
    startQuiz();
    navigation.navigate('Quiz');
  };

  return (
    <Screen>
      <Center p="1" h="100%" w="100%" alignSelf="center">
        <Text fontSize="2xl">Correct answers</Text>
        <Text fontSize="4xl">
          <Text color="green.500">{correctAnswers}</Text> / {answersCount}
        </Text>
        <Button mt="10" onPress={onPress}>
          Play again
        </Button>
      </Center>
    </Screen>
  );
}
