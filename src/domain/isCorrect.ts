import { TChoice } from 'app/types/TQuizItem';

export function isCorrect(choice: TChoice) {
  return choice.index === '1';
}
