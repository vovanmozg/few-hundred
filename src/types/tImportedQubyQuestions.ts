export type TImportedChoice = {
  [key: string]: string;
};

export type TTag = 'beginner-level' | 'intermediate-level' | 'advanced-level';

export type TImportedRubyQueistion = {
  question: string;
  type: 'mc' | 'ma';
  choices: TImportedChoice;
  answer: 'string';
  tags: TTag[];
};
