import type { TChoice, TQuizItem } from 'app/types/TQuizItem';

/*
 * progress stored by binary value.
 * 0 - never answered or wrong answered one time
 * 1 - right answered one time
 * 111 - right answered three times
 *
 *
000
  001
    011
      111
      110
    010
      101
      100
  000 (dup)
001


 * */
type TAnswersProgress = {
  [id: string]: number[];
};

export type TAppState = {
  answersProgress: TAnswersProgress;
};
