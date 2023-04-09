/*
 * progress stored by set of binary flags
 * 0 - never answered or wrong answered one time
 * 1 - right answered one time
 * 111 - right answered three times
 * */

import type { TQuizItem } from 'app/types/TQuizItem';

export type TAnswerCorrectnessFlag = 0 | 1;

type TAnswersProgress = {
  [id: string]: TAnswerCorrectnessFlag[];
};

export type TAppState = {
  answersProgress: TAnswersProgress;
  saveAnswerProgress: (quizItem: TQuizItem, isCorrect: boolean) => void;
};
