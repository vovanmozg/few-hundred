import { isCorrect } from 'app/domain/isCorrect';
import { useStore as useAppStore } from 'app/store/appState';
import { useStore as useQuizStore } from 'app/store/quizState';
import { TQuizState } from 'app/types/TQuizState';

export function useSelectAnswer() {
  const chooseAnswer = useQuizStore((state: TQuizState) => state.chooseAnswer);
  const saveAnswerProgress = useAppStore(state => state.saveAnswerProgress);

  return ({ choice, quizItem }) => {
    chooseAnswer({ choice, quizItem });

    saveAnswerProgress(quizItem, isCorrect(choice));
  };
}
