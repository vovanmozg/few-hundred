import isEmpty from 'lodash/isEmpty';
import { useQuestions } from 'app/hooks/useQuestions';
import { useStore as useAppStore } from 'app/store/appState';
import type {
  TAnswerCorrectnessFlag,
  TAnswersProgress,
  TAppState,
} from 'app/types/TAppState';
import type { TQuizItemsObject } from 'app/types/TQuizItem';

type TCorrectAnswersCount = 0 | 1 | 2 | 3;

function countCorrectAnswers(
  answerCorrectnessFlags: TAnswerCorrectnessFlag[],
): TCorrectAnswersCount {
  return answerCorrectnessFlags.reduce(
    (acc: TCorrectAnswersCount, value): TCorrectAnswersCount =>
      (acc + value) as TCorrectAnswersCount,
    0,
  );
}

function calculateAnswerWeight(
  answerCorrectnessFlags: TAnswerCorrectnessFlag[],
): number {
  const weightsMap = [0, 0.3, 0.6, 1];
  return weightsMap[countCorrectAnswers(answerCorrectnessFlags)];
}

function getAnsweredWeights(
  progress: TAppState['answersProgress'],
  questionsObject: TQuizItemsObject,
) {
  return Object.fromEntries(
    Object.entries(progress)
      .filter(([k, _v]) => !isEmpty(questionsObject[k]))
      .map(([k, v]) => [k, calculateAnswerWeight(v)]),
  );
}

export function useReadProgress(): {
  averageWeight: number;
  progressWeights: Record<string, number>;
} {
  const questions = useQuestions();
  const progressAll = useAppStore((state: TAppState) => state.answersProgress);

  if (isEmpty(questions) || isEmpty(progressAll)) {
    return { averageWeight: 0, progressWeights: {} };
  }

  // const progress = objectFilter(progressAll, v => !isEmpty(v));
  const progress = Object.keys(progressAll).reduce(
    (acc, key): TAnswersProgress => {
      if (!isEmpty(questions[key])) {
        acc[key] = progressAll[key];
      }
      return acc;
    },
    {} as TAnswersProgress,
  );

  const answeredWeights = getAnsweredWeights(progress, questions);

  const answerCorrectnessFlagsList = Object.values(progress);

  const weights = answerCorrectnessFlagsList.map(answerCorrectnessFlags => {
    return calculateAnswerWeight(answerCorrectnessFlags);
  });

  const allQuestionsCount = Object.keys(questions).length;
  const answeredQuestionsCount = answerCorrectnessFlagsList.length;
  const unansweredQuestionsCount = allQuestionsCount - answeredQuestionsCount;
  const paddedWeight = weights.concat(Array(unansweredQuestionsCount).fill(0));

  // calculate average value of paddedWeight
  const averageWeight =
    paddedWeight.reduce((acc, value) => acc + value, 0) / paddedWeight.length;

  const progressWeights = Object.fromEntries(
    Object.keys(questions).map(id => {
      return [id, answeredWeights[id] || 0];
    }),
  );

  return { averageWeight, progressWeights };
}
