import type { TChoice, TQuizItem } from 'app/types/TQuizItem';

export type TAnswer = {
  choice: TChoice;
  quizItem: TQuizItem;
};
export type TAnswers = {
  [key: string]: TAnswer;
};
export type TSelectAnswer = { choice: TChoice; quizItem: TQuizItem };
export type TQuizState = {
  answers: TAnswers;
  current: number;
  quizItems: TQuizItem[] | null;
  quizStatus: 'notStarted' | 'inProgress' | 'finished';
  nextQuizItem: () => void;
  resetQuiz: () => void;
  selectAnswer: (params: TSelectAnswer) => void;
  setQuizItems: (quizItems: TQuizItem[]) => void;
};
