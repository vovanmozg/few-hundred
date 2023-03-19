import type { TAnswers } from 'app/types/TQuizState';

export function useCorrectAnswersCount(answers: TAnswers) {
  return Object.values(answers).filter(
    answer => answer.choice.index === answer.quizItem.answer,
  ).length;
}
