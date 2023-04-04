import type { TQuizAnswers } from 'app/types/TQuizState';

export function useCorrectAnswersCount(answers: TQuizAnswers) {
  return Object.values(answers).filter(
    answer => answer.choice.index === answer.quizItem.answer,
  ).length;
}
