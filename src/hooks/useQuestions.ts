import { useTopicsSettings } from 'app/hooks/useTopicsSettings';
import { getQuestions } from 'app/lib/getQuestions';
import type { TTopic } from 'app/types/TAppState';
import type { TQuizItem, TQuizItemsObject } from 'app/types/TQuizItem';

function questionsAsObject(questions: TQuizItem[]): TQuizItemsObject {
  return questions.reduce((acc, question) => {
    acc[question.id] = question;
    return acc;
  }, {} as TQuizItemsObject);
}

export function useQuestions(): TQuizItemsObject {
  const [topicsSettings] = useTopicsSettings();

  const classifiedQuestions = getQuestions();
  let result = {};

  const keys = Object.keys(topicsSettings) as TTopic[];
  keys.forEach((topic: TTopic) => {
    if (topicsSettings[topic].isEnabled) {
      result = Object.assign(
        result,
        questionsAsObject(classifiedQuestions[topic]),
      );
    }
  });

  return result;
}
