import { renderHook } from '@testing-library/react-hooks';

import { useQuestions } from '../useQuestions';

test('returns array', async () => {
  const { result } = renderHook(() => useQuestions());

  expect(Array.isArray(result.current)).toBe(true);
  expect(result.current.length).toBeGreaterThan(100);
});
