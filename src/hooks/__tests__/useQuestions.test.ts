import { renderHook } from '@testing-library/react-hooks';
import { isObject } from 'app/lib/isObject';

import { useQuestions } from '../useQuestions';

test('returns array', async () => {
  const { result } = renderHook(() => useQuestions());

  expect(isObject(result.current)).toBe(true);
  expect(Object.keys(result.current).length).toBeGreaterThan(100);
});
