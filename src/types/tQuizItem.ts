import { TImportedRubyQueistion } from 'app/types/tImportedQubyQuestions';

export type TChoice = {
  index: string;
  value: string;
};

export type TQuizItem = Omit<TImportedRubyQueistion, 'choices'> & {
  choices: TChoice[];
};
