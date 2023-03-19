import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box } from 'native-base';
import { Quiz } from 'app/screens/QuizScreen/components/Quiz';
import { useStore } from 'app/store/quizState';
import { RootStackParamList } from 'app/types/app';
import type { TQuizState } from 'app/types/TQuizState';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function QuizScreen({ navigation }: Props) {
  const [quizItems, current] = useStore((state: TQuizState) => [
    state.quizItems,
    state.current,
  ]);

  useEffect(() => {
    if (quizItems === null) {
      return;
    }

    navigation.setOptions({
      title: `Question ${current + 1} / ${Object.keys(quizItems).length}`,
    });
  }, [current, quizItems, navigation]);

  return (
    <Box bg="white" p="1" h="100%" w="100%" alignSelf="center">
      <Quiz />
    </Box>
  );
}
