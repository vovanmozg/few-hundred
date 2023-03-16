import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Center, Text } from 'native-base';
import { useStartQuiz } from 'app/screens/QuizScreen/hooks/useStartQuiz';
import { TQuizState, useStore } from 'app/store/quizState';
import { RootStackParamList } from 'app/types/app';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function ResultQuizScreen({ navigation }: Props) {
  const answers = useStore((state: TQuizState) => state.answers);
  const startQuiz = useStartQuiz();

  const onPress = () => {
    startQuiz();
    navigation.navigate('Quiz');
  };

  const answersCount = Object.keys(answers).length;

  const correctAnswers = Object.values(answers).filter(
    answer => answer.choice.index === answer.quizItem.answer,
  ).length;

  // const incorrectAnswersCount = answers.length - correctAnswers.length;

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
