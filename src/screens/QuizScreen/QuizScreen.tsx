import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box } from 'native-base';
import { Quiz } from 'app/screens/QuizScreen/components/Quiz';
import { useSetNavigationTitle } from 'app/screens/QuizScreen/hooks/useSetNavigationTitle';
import { RootStackParamList } from 'app/types/app';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function QuizScreen({ navigation }: Props) {
  useSetNavigationTitle({ navigation });

  return (
    <Box bg="white" p="1" h="100%" w="100%" alignSelf="center">
      <Quiz />
    </Box>
  );
}
