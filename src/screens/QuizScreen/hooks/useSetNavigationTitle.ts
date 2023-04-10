import { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useStore } from 'app/store/quizState';
import type { RootStackParamList } from 'app/types/app';
import type { TQuizState } from 'app/types/TQuizState';

type Props = Pick<
  NativeStackScreenProps<RootStackParamList, 'Home'>,
  'navigation'
>;

export function useSetNavigationTitle({ navigation }: Props) {
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
}
