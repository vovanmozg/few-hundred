import type { TImportedChoices, TImportedRubyQueistion } from 'ruby-questions';
import rq from 'ruby-questions';
import type { TChoice, TQuizItem } from 'app/types/TQuizItem';

function transformChoices(choices: TImportedChoices): TChoice[] {
  const entries = Object.entries(choices);

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
  questions: TImportedRubyQueistion[],
): TQuizItem[] {
  return questions.map(transformRubyQuestion);
}

export function getQuestions(): TQuizItem[] {
  return transformRubyQuestions(rq.ruby.concat(rq.rails));
}
