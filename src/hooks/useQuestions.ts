import { getQuestions } from 'app/lib/getQuestions';
import type { TQuizItem } from 'app/types/TQuizItem';

export function useQuestions(): TQuizItem[] {
  return getQuestions();
}
