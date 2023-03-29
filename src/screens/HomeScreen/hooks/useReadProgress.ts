import { rubyQuestions } from 'app/lib/rubyQuestions';
import { useStore as useAppStore } from 'app/store/appState';
import { TAnswerCorrectnessFlag, TAppState } from 'app/types/TAppState';

type TCorrectAnswersCount = 0 | 1 | 2 | 3;

function countCorrectAnswers(
  answerCorrectnessFlags: TAnswerCorrectnessFlag[],
): TCorrectAnswersCount {
  return answerCorrectnessFlags.reduce((acc, value) => acc + value, 0);
}

function calculateAnswerWeight(
  answerCorrectnessFlags: TAnswerCorrectnessFlag[],
): number {
  const weightsMap = [0, 0.3, 0.6, 1];
  return weightsMap[countCorrectAnswers(answerCorrectnessFlags)];
}

export function useReadProgress(): number {
  const progress = useAppStore((state: TAppState) => state.answersProgress);

  const answerCorrectnessFlagsList = Object.values(progress);

  const weights = answerCorrectnessFlagsList.map(answerCorrectnessFlags => {
    return calculateAnswerWeight(answerCorrectnessFlags);
  });

  const allQuestionsCount = rubyQuestions().length;
  const answeredQuestionsCount = answerCorrectnessFlagsList.length;
  const unansweredQuestionsCount = allQuestionsCount - answeredQuestionsCount;
  const paddedWeight = weights.concat(Array(unansweredQuestionsCount).fill(0));

  // calculate average value of paddedWeight
  const averageWeight =
    paddedWeight.reduce((acc, value) => acc + value, 0) / paddedWeight.length;

  return averageWeight;
}
