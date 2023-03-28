export function nextQuizItem(set) {
  return () => {
    set(state => {
      const newCurrent = state.current + 1;
      if (state.quizItems && state.quizItems[newCurrent]) {
        return { current: state.current + 1 };
      } else {
        return { quizStatus: 'finished' };
      }
    });
  };
}
