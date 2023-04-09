import type { TAnswerCorrectnessFlag, TAppState } from 'app/types/TAppState';
import type { TQuizItem } from 'app/types/TQuizItem';

export function saveAnswerProgress(
  set: (partial: (state: TAppState) => Partial<TAppState>) => void,
) {
  return (quizItem: TQuizItem, isCorrect: boolean) => {
    set((state: TAppState) => {
      const bit: TAnswerCorrectnessFlag = isCorrect ? 1 : 0;
      const { answersProgress } = state;
      const progress = answersProgress[quizItem.id] || [];
      const newProgress = [...progress, bit].slice(-3);

      return {
        answersProgress: { ...answersProgress, [quizItem.id]: newProgress },
      };
    });
  };
}
