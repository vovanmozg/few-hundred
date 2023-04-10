/*
 * progress stored by set of binary flags
 * 0 - never answered or wrong answered one time
 * 1 - right answered one time
 * 111 - right answered three times
 * */

import type { TQuizItem } from 'app/types/TQuizItem';

export type TAnswerCorrectnessFlag = 0 | 1;

export type TAnswersProgress = {
  [id: string]: TAnswerCorrectnessFlag[];
};

export type TTopic = 'rails' | 'ruby';

type TTopicSettings = {
  isEnabled: boolean;
};

export type TTopicsSettins = {
  [key in TTopic]: TTopicSettings;
};

export type TAppState = {
  answersProgress: TAnswersProgress;
  settings: {
    topics: TTopicsSettins;
  };
  saveAnswerProgress: (quizItem: TQuizItem, isCorrect: boolean) => void;
  setTopicsSettings: (isEnabled: boolean, topic: TTopic) => void;
};
