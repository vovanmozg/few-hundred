import React, { useEffect } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Center, Image } from 'native-base';
import ruby from 'app/assets/img/ruby.png';
import { Debug } from 'app/components/Debug';
import { useStartQuiz } from 'app/screens/QuizScreen/hooks/useStartQuiz';
import { TQuizState, useStore } from 'app/store/quizState';
import { RootStackParamList } from 'app/types/app';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  // const navigation =
  //   useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const startQuiz = useStartQuiz();
  const resetQuiz = useStore((state: TQuizState) => state.resetQuiz);

  // Reset quiz when screen loaded
  useEffect(() => {
    return navigation.addListener('focus', () => resetQuiz());
  }, [navigation]);

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
