import { create } from 'zustand';
import { TQuizItem } from 'app/types/TQuizItem';
import type { TQuizState, TSelectAnswer } from 'app/types/TQuizState';

export const useStore = create<TQuizState>(set => ({
  current: 0,
  quizItems: null,
  quizStatus: 'notStarted',
  quizAnswers: {},
  resetQuiz: () => {
    set(() => ({
      quizItems: null,
      quizStatus: 'notStarted',
      current: 0,
      quizAnswers: {},
    }));
  },
  setQuizItems: (quizItems: TQuizItem[]) => {
    set(() => ({
      quizItems,
      quizStatus: 'inProgress',
      current: 0,
      quizAnswers: {},
    }));
  },
  selectAnswer: (params: TSelectAnswer) => {
    const { choice, quizItem } = params;
    set((state: TQuizState) => {
      const quizAnswers = { ...state.quizAnswers };
      const answer = {
        choice,
        quizItem,
      };
      quizAnswers[quizItem.question] = answer;

      return { quizAnswers };
    });
  },
  nextQuizItem: () => {
    set(state => {
      const newCurrent = state.current + 1;
      if (state.quizItems && state.quizItems[newCurrent]) {
        return { current: state.current + 1 };
      } else {
        return { quizStatus: 'finished' };
      }
    });
  },
}));
