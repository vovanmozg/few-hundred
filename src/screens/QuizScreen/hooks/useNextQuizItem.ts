import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useStore } from 'app/store/quizState';
import { RootStackParamList } from 'app/types/app';
import type { TQuizState } from 'app/types/TQuizState';

export function useNextQuizItem() {
  const [nextQuizItem, quizStatus] = useStore((state: TQuizState) => [
    state.nextQuizItem,
    state.quizStatus,
  ]);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  console.log(quizStatus);
  if (quizStatus === 'finished') {
    console.log('navigate.....');
    navigation.navigate('ResultQuiz');
    return;
  }

  return nextQuizItem;
}
