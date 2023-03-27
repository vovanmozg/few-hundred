import { useStore } from 'app/store/quizState';
import { TQuizState } from 'app/types/TQuizState';

export function useSelectAnswer() {
  return useStore((state: TQuizState) => state.selectAnswer);
}
