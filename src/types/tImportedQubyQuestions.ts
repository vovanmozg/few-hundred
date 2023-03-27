// TODO: remove type duplication (in d.ts file)
export type TImportedChoices = {
  [key: string]: string;
};

export type TTag = 'beginner-level' | 'intermediate-level' | 'advanced-level';

export type TImportedRubyQueistion = {
  answer: 'string';
  choices: TImportedChoices;
  explanation: string;
  id: string;
  question: string;
  tags: TTag[];
  type: 'mc' | 'ma';
};
