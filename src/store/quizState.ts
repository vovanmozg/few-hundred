import { create } from 'zustand';
import { chooseAnswer } from 'app/store/quizState/chooseAnswer';
import { nextQuizItem } from 'app/store/quizState/nextQuizItem';
import { resetQuiz } from 'app/store/quizState/resetQuiz';
import { setQuizItems } from 'app/store/quizState/setQuizItems';
import type { TQuizState } from 'app/types/TQuizState';

export const useStore = create<TQuizState>(set => ({
  current: 0,
  quizItems: null,
  quizStatus: 'notStarted',
  quizAnswers: {},
  resetQuiz: resetQuiz(set),
  setQuizItems: setQuizItems(set),
  chooseAnswer: chooseAnswer(set),
  nextQuizItem: nextQuizItem(set),
}));
