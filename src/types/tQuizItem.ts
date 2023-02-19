import { TImportedRubyQueistion } from 'app/types/tImportedQubyQuestions';

export type TChoice = {
  index: string;
  value: string;
};

// type TTag = 'beginner-level' | 'intermediate-level' | 'advanced-level';

export type TQuizItem = TImportedRubyQueistion & {
  choices: TChoice[];
};
