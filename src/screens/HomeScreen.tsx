import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Center, Image } from 'native-base';
import ruby from 'app/assets/img/ruby.png';
import { Debug } from 'app/components/Debug';
import { useStartQuiz } from 'app/screens/QuizScreen/hooks/useStartQuiz';
import { RootStackParamList } from 'app/types/app';

export function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const startQuiz = useStartQuiz();

  const onPress = () => {
    startQuiz();
    navigation.navigate('Quiz');
  };

  return (
    <Center h="100%" w="100%" alignSelf="center">
      <Image alt="123" mb="10" source={ruby} width={117} height={92} />

      <Button onPress={onPress}>Play</Button>
      <Debug />
    </Center>
  );
}
