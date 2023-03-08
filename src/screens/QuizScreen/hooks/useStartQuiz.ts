import rq from 'ruby-questions';
import { TQuizState, useStore } from 'app/store/quizState';
import {
  TImportedChoices,
  TImportedRubyQueistion,
} from 'app/types/tImportedQubyQuestions';
import { TChoice, TQuizItem } from 'app/types/tQuizItem';

function transformChoices(choices: TImportedChoices): TChoice[] {
  const entries = Object.entries(choices);
  // return entries.map(transformChoice);
  return entries.map(([index, value]) => ({ index, value }));
}

function transformRubyQuestion(
  rubyQuestion: TImportedRubyQueistion,
): TQuizItem {
  return {
    ...rubyQuestion,
    choices: transformChoices(rubyQuestion.choices),
  } as TQuizItem;
}

function transformRubyQuestions(
  rubyQuestions: TImportedRubyQueistion[],
): TQuizItem[] {
  return rubyQuestions.map(transformRubyQuestion);
}

export function useStartQuiz(): () => void {
  const setQuizItems = useStore((state: TQuizState) => state.setQuizItems);

  return () =>
    setQuizItems(
      transformRubyQuestions(rq.ruby)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3),
    );
}
