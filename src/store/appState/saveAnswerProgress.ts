import { TAppState } from 'app/types/TAppState';

export function saveAnswerProgress(set) {
  return (quizItem, isCorrect) => {
    set((state: TAppState) => {
      const bit = isCorrect ? 1 : 0;
      const { answersProgress } = state;
      const progress = answersProgress[quizItem.id] || [];
      const newProgress = [...progress, bit].slice(-3);

      return {
        answersProgress: { ...answersProgress, [quizItem.id]: newProgress },
      };
    });
  };
}
