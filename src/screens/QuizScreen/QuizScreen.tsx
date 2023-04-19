import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'app/types/app';
import { Screen } from 'app/ui/Screen/Screen';

import { Quiz } from './components/Quiz';
import { useSetNavigationTitle } from './hooks/useSetNavigationTitle';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function QuizScreen({ navigation }: Props) {
  useSetNavigationTitle({ navigation });

  return (
    <Screen>
      <Quiz />
    </Screen>
  );
}
