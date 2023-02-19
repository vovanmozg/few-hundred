import create from 'zustand';
import { TChoice, TQuizItem } from 'app/types/tQuizItem';

type TAnswer = {
  choice: TChoice;
  quizItem: TQuizItem;
};

type TSelectAnswer = { choice: TChoice; quizItem: TQuizItem };

export type TQuizState = {
  quizItems: TQuizItem[];
  answers: TAnswer[];
  selectAnswer: (params: TSelectAnswer) => void;
  nextQuizItem: () => void;
  current: number;
};

export const useStore = create<TQuizState>(set => ({
  current: 0,
  quizItems: [],
  answers: [],
  selectAnswer: (params: TSelectAnswer) => {
    const { choice, quizItem } = params;
    set((state: TQuizState) => {
      const answers = [...state.answers];
      const answer = {
        choice,
        quizItem,
      };
      answers.push(answer);
      return { answers };
    });
  },
  nextQuizItem: () => {
    set(state => {
      return { current: state.current + 1 };
    });
  },
}));
