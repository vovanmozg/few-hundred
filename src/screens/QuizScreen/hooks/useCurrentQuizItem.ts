import { TQuizState, useStore } from 'app/store/quizState';

export function useCurrentQuizItem() {
  return useStore((state: TQuizState) => state.current);
}
