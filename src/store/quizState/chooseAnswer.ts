import type { TQuizState, TSelectAnswer } from 'app/types/TQuizState';

export function chooseAnswer(
  set: (partial: (state: TQuizState) => Partial<TQuizState>) => void,
) {
  return (params: TSelectAnswer) => {
    const { choice, quizItem } = params;
    set((state: TQuizState) => {
      const quizAnswers = { ...state.quizAnswers };
      const answer = {
        choice,
        quizItem,
      };
      quizAnswers[quizItem.id] = answer;

      return { quizAnswers };
    });
  };
}
