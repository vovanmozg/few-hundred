import type { TChoice, TQuizItem } from 'app/types/TQuizItem';

export type TQuizAnswer = {
  choice: TChoice;
  quizItem: TQuizItem;
};
export type TQuizAnswers = {
  [key: string]: TQuizAnswer;
};
export type TSelectAnswer = { choice: TChoice; quizItem: TQuizItem };
export type TQuizState = {
  quizAnswers: TQuizAnswers;
  current: number;
  quizItems: TQuizItem[] | null;
  quizStatus: 'notStarted' | 'inProgress' | 'finished';
  nextQuizItem: () => void;
  resetQuiz: () => void;
  chooseAnswer: (params: TSelectAnswer) => void;
  setQuizItems: (quizItems: TQuizItem[]) => void;
};
