export function objectFilter<Q extends object, K extends keyof Q>(
  questions: Q,
  predicate: (value: Q[K]) => boolean,
): Q {
  const filter = (key: string): boolean => {
    const q = questions[key as K];
    return predicate(q);
  };
  const keys = Object.keys(questions);

  return keys.filter(filter).reduce((res: Q, key) => {
    res[key as K] = questions[key as K];
    return res;
  }, {} as Q);
}
