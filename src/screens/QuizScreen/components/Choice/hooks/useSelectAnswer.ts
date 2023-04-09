import { isCorrect } from 'app/domain/isCorrect';
import { useStore as useAppStore } from 'app/store/appState';
import { useStore as useQuizStore } from 'app/store/quizState';
import type { TAppState } from 'app/types/TAppState';
import type { TQuizState, TSelectAnswer } from 'app/types/TQuizState';

export function useSelectAnswer() {
  const chooseAnswer = useQuizStore((state: TQuizState) => state.chooseAnswer);
  const saveAnswerProgress = useAppStore(
    (state: TAppState) => state.saveAnswerProgress,
  );

  return ({ choice, quizItem }: TSelectAnswer) => {
    chooseAnswer({ choice, quizItem });

    saveAnswerProgress(quizItem, isCorrect(choice));
  };
}
