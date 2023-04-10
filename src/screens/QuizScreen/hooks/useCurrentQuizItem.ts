import { useStore } from 'app/store/quizState';
import type { TQuizItem } from 'app/types/TQuizItem';
import type { TQuizState } from 'app/types/TQuizState';

function composeResult(
  currentQuizItem?: TQuizItem,
  isAnswerSelected?: boolean,
): { currentQuizItem?: TQuizItem; isAnswerSelected?: boolean } {
  return { currentQuizItem, isAnswerSelected };
}

export function useCurrentQuizItem(): {
  currentQuizItem?: TQuizItem;
  isAnswerSelected?: boolean;
} {
  return useStore((state: TQuizState) => {
    const { quizAnswers, quizItems, current } = state;

    if (!quizItems) {
      return composeResult();
    }

    const currentQuizItem = quizItems[current];

    if (!currentQuizItem) {
      return composeResult();
    }

    const isAnswerSelected = !!quizAnswers[currentQuizItem.id];
    return composeResult(currentQuizItem, isAnswerSelected);
  });
}
