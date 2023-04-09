import type { TQuizState } from 'app/types/TQuizState';

export function resetQuiz(
  set: (partial: (state: TQuizState) => Partial<TQuizState>) => void,
) {
  return () => {
    set(() => ({
      quizItems: null,
      quizStatus: 'notStarted',
      current: 0,
      quizAnswers: {},
    }));
  };
}
