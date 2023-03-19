import { useStore } from 'app/store/quizState';
import type { TQuizState } from 'app/types/TQuizState';

function composeResult(number?: number, isAnswerSelected?: boolean) {
  return { number, isAnswerSelected };
}

export function useCurrentQuizItem() {
  return useStore((state: TQuizState) => {
    const { answers, quizItems, current } = state;

    if (!quizItems) {
      return composeResult();
    }

    const quizItem = quizItems[current];

    if (!quizItem) {
      return composeResult();
    }

    const isAnswerSelected = !!answers[quizItem.question];
    return composeResult(current, isAnswerSelected);

    //
    // return {
    //   number: state.current,
    //   isAnswerSelected: state.answers[state.quizItems[state.current].question],
    // };
    //
    // const { quizItems, current } = state;
    // if (!quizItems) {
    //   return null;
    // }
  });
}
