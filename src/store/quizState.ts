import { create } from 'zustand';
import { TQuizItem } from 'app/types/TQuizItem';
import type { TQuizState, TSelectAnswer } from 'app/types/TQuizState';

export const useStore = create<TQuizState>(set => ({
  current: 0,
  quizItems: null,
  quizStatus: 'notStarted',
  answers: {},
  resetQuiz: () => {
    set(() => ({
      quizItems: null,
      quizStatus: 'notStarted',
      current: 0,
      answers: {},
    }));
  },
  setQuizItems: (quizItems: TQuizItem[]) => {
    set(() => ({
      quizItems,
      quizStatus: 'inProgress',
      current: 0,
      answers: {},
    }));
  },
  selectAnswer: (params: TSelectAnswer) => {
    const { choice, quizItem } = params;
    set((state: TQuizState) => {
      const answers = { ...state.answers };
      const answer = {
        choice,
        quizItem,
      };
      answers[quizItem.question] = answer;

      return { answers };
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
