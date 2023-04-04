import React, { useEffect } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Button, Center, Image, Pressable } from 'native-base';
import ruby from 'app/assets/img/ruby.png';
import { useStartQuiz } from 'app/hooks/useStartQuiz';
import { ProgressMapScreen } from 'app/screens/ProgressMapScreen';
import { RootStackParamList } from 'app/types/app';

import { PercentProgress } from './components/PercentProgress';
import { useResetQuiz } from './hooks/useResetQuiz';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  const startQuiz = useStartQuiz();
  const resetQuiz = useResetQuiz();

  // Reset quiz when screen loaded
  useEffect(() => {
    return navigation.addListener('focus', () => resetQuiz());
  }, [navigation, resetQuiz]);

  const onPress = () => {
    startQuiz();
    navigation.navigate('Quiz');
  };

  const onPressProgress = () => {
    navigation.navigate('ProgressMap');
  };

  return (
    <Center h="100%" w="100%" alignSelf="center">
      <Image mb="10" alt="" source={ruby} width={117} height={92} />

      <Button onPress={onPress}>Play</Button>

      <Pressable mt="20" onPress={onPressProgress} w="70%">
        <Center>
          <PercentProgress />
          <Box h="50" w="100%">
            <ProgressMapScreen />
          </Box>
        </Center>
      </Pressable>
    </Center>
  );
}
