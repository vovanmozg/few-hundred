import type { TQuizItem } from 'app/types/TQuizItem';
import type { TQuizState } from 'app/types/TQuizState';

export function setQuizItems(
  set: (partial: (state: TQuizState) => Partial<TQuizState>) => void,
) {
  return (quizItems: TQuizItem[]) => {
    set(() => ({
      quizItems,
      quizStatus: 'inProgress',
      current: 0,
      quizAnswers: {},
    }));
  };
}
