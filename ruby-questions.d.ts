declare module 'ruby-questions' {
  type TImportedChoices = {
    [key: string]: string;
  };

  type TTag = 'beginner-level' | 'intermediate-level' | 'advanced-level';

  type TImportedRubyQueistion = {
    explanation: string;
    question: string;
    type: 'mc' | 'ma';
    choices: TImportedChoices;
    answer: 'string';
    tags: TTag[];
  };

  export const ruby: TImportedRubyQueistion[];
}
