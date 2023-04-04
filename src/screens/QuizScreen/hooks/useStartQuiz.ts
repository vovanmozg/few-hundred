import { useReadProgress } from 'app/hooks/useReadProgress';
import { rubyQuestions } from 'app/lib/rubyQuestions';
import { useStore } from 'app/store/quizState';
import type { TQuizState } from 'app/types/TQuizState';

const QUESTIONS_COUNT = 10;

export function useStartQuiz(): () => void {
  const setQuizItems = useStore((state: TQuizState) => state.setQuizItems);
  const { progressWeights } = useReadProgress();

  const unansweredQuestions = rubyQuestions().filter(
    question => progressWeights[question.id] !== 1,
  );

  return () =>
    setQuizItems(
      unansweredQuestions
        .sort(() => 0.5 - Math.random())
        .slice(0, QUESTIONS_COUNT),
    );
}
