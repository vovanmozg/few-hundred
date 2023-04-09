import { renderHook } from '@testing-library/react-hooks';
import { isObject } from 'app/lib/isObject';
import { useSelectAnswer } from 'app/screens/QuizScreen/components/Choice/hooks/useSelectAnswer';
import { TChoice } from 'app/types/TQuizItem';

import { useReadProgress } from '../useReadProgress';

test('returns array', async () => {
  const hook1 = await renderHook(() => useSelectAnswer());

  const selectAnswer = hook1.result.current;

  // TODO: разобраться с дичью
  const type = 'mc' as 'mc' | 'ma';
  const quizItem = {
    id: '0cf7ca09-cf6b-4e5f-a8a2-ec4d445fd20a',
    question: '',
    type,
    choices: [
      { index: '1', value: '1' },
      { index: '2', value: '7' },
      { index: '3', value: 'nil' },
      { index: '4', value: 'Error' },
    ],
    answer: '1',
    tags: ['intermediate-level', 'p'],
    explanation: '',
  };

  const choice: TChoice = { index: '1', value: '1' };
  selectAnswer({ choice, quizItem });

  const { result } = renderHook(() => useReadProgress());

  expect(isObject(result.current)).toBe(true);
  expect(result.current.averageWeight).toBeGreaterThan(0);
});
