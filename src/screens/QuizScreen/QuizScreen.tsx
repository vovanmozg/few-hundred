import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box } from 'native-base';
import { Quiz } from 'app/screens/QuizScreen/components/Quiz';
import { TQuizState, useStore } from 'app/store/quizState';
import { RootStackParamList } from 'app/types/app';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function QuizScreen({ navigation }: Props) {
  const [answers, current] = useStore((state: TQuizState) => [
    state.answers,
    state.current,
  ]);

  useEffect(() => {
    navigation.setOptions({
      title: `Question ${current + 1} / ${Object.keys(answers).length}`,
    });
  }, [current, answers, navigation]);

  return (
    <Box bg="white" p="1" h="100%" w="100%" alignSelf="center">
      <Quiz />
    </Box>
  );
}
