export function isObject(value: object | null): boolean {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}
