import { create } from 'zustand';
import { TChoice, TQuizItem } from 'app/types/TQuizItem';

export type TAnswer = {
  choice: TChoice;
  quizItem: TQuizItem;
};

type TSelectAnswer = { choice: TChoice; quizItem: TQuizItem };

export type TQuizState = {
  answers: { [key: string]: TAnswer };
  current: number;
  quizItems: TQuizItem[] | null;
  quizStatus: 'notStarted' | 'inProgress' | 'finished';
  nextQuizItem: () => void;
  resetQuiz: () => void;
  selectAnswer: (params: TSelectAnswer) => void;
  setQuizItems: (quizItems: TQuizItem[]) => void;
};

export const useStore = create<TQuizState>(set => ({
  current: 0,
  quizItems: null,
  quizStatus: 'notStarted',
  answers: {},
  resetQuiz: () => {
    set(() => ({ quizItems: null, quizStatus: 'notStarted', current: 0 }));
  },
  setQuizItems: (quizItems: TQuizItem[]) => {
    set(() => ({ quizItems, quizStatus: 'inProgress', current: 0 }));
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
