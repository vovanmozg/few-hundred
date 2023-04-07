import { TQuizItem } from 'app/types/TQuizItem';

export function setQuizItems(set) {
  return (quizItems: TQuizItem[]) => {
    set(() => ({
      quizItems,
      quizStatus: 'inProgress',
      current: 0,
      quizAnswers: {},
    }));
  };
}
