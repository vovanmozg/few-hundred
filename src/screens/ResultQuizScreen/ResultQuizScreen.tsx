import React, { useEffect } from 'react';
import { HeaderBackButton } from '@react-navigation/elements';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Center, Text } from 'native-base';
import { useCorrectAnswersCount } from 'app/screens/QuizScreen/hooks/useCorrectAnswersCount';
import { useStartQuiz } from 'app/screens/QuizScreen/hooks/useStartQuiz';
import { TQuizState, useStore } from 'app/store/quizState';
import { RootStackParamList } from 'app/types/app';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function ResultQuizScreen({ navigation }: Props) {
  const answers = useStore((state: TQuizState) => state.answers);
  const startQuiz = useStartQuiz();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      ),
    });
  });

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
