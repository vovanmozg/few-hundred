import { useStore } from 'app/store/quizState';
import { TQuizState } from 'app/types/TQuizState';

export function useResetQuiz() {
  return useStore((state: TQuizState) => state.resetQuiz);
}
