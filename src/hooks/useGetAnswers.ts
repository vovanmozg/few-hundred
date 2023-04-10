import { useStore } from 'app/store/quizState';
import type { TQuizState } from 'app/types/TQuizState';

export function useGetAnswers() {
  return useStore((state: TQuizState) => state.quizAnswers);
}
