// TODO: remove type duplication (in d.ts file)
export type TImportedChoices = {
  [key: string]: string;
};

export type TTag = 'beginner-level' | 'intermediate-level' | 'advanced-level';

export type TImportedRubyQueistion = {
  question: string;
  type: 'mc' | 'ma';
  choices: TImportedChoices;
  answer: 'string';
  tags: TTag[];
};
