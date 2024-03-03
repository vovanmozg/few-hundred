import { useQuestions } from 'app/hooks/useQuestions';
import { useReadProgress } from 'app/hooks/useReadProgress';
import { objectFilter } from 'app/lib/objectFilter';
import { useStore } from 'app/store/quizState';
import type { TQuizState } from 'app/types/TQuizState';
import { useAnalytics } from '@segment/analytics-react-native';

const QUESTIONS_COUNT = 10;

export function useStartQuiz(): () => void {
  const { track } = useAnalytics();
  const setQuizItems = useStore((state: TQuizState) => state.setQuizItems);
  const { progressWeights } = useReadProgress();
  const questions = useQuestions();

  const unansweredQuestions = objectFilter(
    questions,
    question => progressWeights[question.id] !== 1,
  );

  const selectedQuestions = Object.values(unansweredQuestions)
    .sort(() => 0.5 - Math.random())
    .slice(0, QUESTIONS_COUNT);

  track('Start Quiz', {
    questions: selectedQuestions.map(q => q.id),
  });

  return () => setQuizItems(selectedQuestions);
}
