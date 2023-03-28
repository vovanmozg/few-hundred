import { create } from 'zustand';
import { chooseAnswer } from 'app/store/domain/chooseAnswer';
import { nextQuizItem } from 'app/store/domain/nextQuizItem';
import { resetQuiz } from 'app/store/domain/resetQuiz';
import { setQuizItems } from 'app/store/domain/setQuizItems';
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
