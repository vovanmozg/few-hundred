import type { TImportedRubyQueistion } from 'ruby-questions';

export type TChoice = {
  index: string;
  value: string;
};

export type TQuizItem = Omit<TImportedRubyQueistion, 'choices'> & {
  choices: TChoice[];
};

export type TQuizItemsObject = { [key: string]: TQuizItem };
