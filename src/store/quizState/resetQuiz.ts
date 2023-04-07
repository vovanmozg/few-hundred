export function resetQuiz(set) {
  return () => {
    set(() => ({
      quizItems: null,
      quizStatus: 'notStarted',
      current: 0,
      quizAnswers: {},
    }));
  };
}
