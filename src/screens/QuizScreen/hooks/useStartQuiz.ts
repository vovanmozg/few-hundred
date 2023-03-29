import { rubyQuestions } from 'app/lib/rubyQuestions';
import { useStore } from 'app/store/quizState';
import type { TQuizState } from 'app/types/TQuizState';

const QUESTIONS_COUNT = 10;

export function useStartQuiz(): () => void {
  const setQuizItems = useStore((state: TQuizState) => state.setQuizItems);

  return () =>
    setQuizItems(
      rubyQuestions()
        .sort(() => 0.5 - Math.random())
        .slice(0, QUESTIONS_COUNT),
    );
}
