import type { TQuizState } from 'app/types/TQuizState';

export function nextQuizItem(
  set: (partial: (state: TQuizState) => Partial<TQuizState>) => void,
) {
  return () => {
    set((state: TQuizState) => {
      const newCurrent = state.current + 1;
      if (state.quizItems && state.quizItems[newCurrent]) {
        return { current: state.current + 1 };
      } else {
        return { quizStatus: 'finished' };
      }
    });
  };
}
