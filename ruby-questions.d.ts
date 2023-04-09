declare module 'ruby-questions' {
  type TImportedChoices = {
    [key: string]: string;
  };

  type TTag =
    | 'beginner-level'
    | 'intermediate-level'
    | 'advanced-level'
    | string;

  type TImportedRubyQueistion = {
    answer: string;
    choices: TImportedChoices;
    explanation: string;
    id: string;
    question: string;
    tags: TTag[];
    type: 'mc' | 'ma';
  };

  export const ruby: TImportedRubyQueistion[];
  export const rails: TImportedRubyQueistion[];
}
