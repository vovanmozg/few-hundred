import { useStore } from 'app/store/quizState';
import { TQuizState } from 'app/types/TQuizState';

export function useGetAnswers() {
  return useStore((state: TQuizState) => state.quizAnswers);
}
