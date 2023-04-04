import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Center, Text } from 'native-base';
import { useGetAnswers } from 'src/hooks/useGetAnswers';
import { useStartQuiz } from 'app/hooks/useStartQuiz';
import { RootStackParamList } from 'app/types/app';

import { useCorrectAnswersCount } from './hooks/useCorrectAnswersCount';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function ResultQuizScreen({ navigation }: Props) {
  const answers = useGetAnswers();
  const startQuiz = useStartQuiz();

  const onPress = () => {
    startQuiz();
    navigation.navigate('Quiz');
  };

  const answersCount = Object.keys(answers).length;

  const correctAnswers = useCorrectAnswersCount(answers);

  return (
    <Center bg="white" p="1" h="100%" w="100%" alignSelf="center">
      <Text fontSize="2xl">Correct answers</Text>
      <Text fontSize="4xl">
        <Text color="green.500">{correctAnswers}</Text> / {answersCount}
      </Text>
      <Button mt="10" onPress={onPress}>
        Play again
      </Button>
    </Center>
  );
}
