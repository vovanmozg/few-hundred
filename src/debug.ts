export const DEBUG = true;

export function bg(color = 'secondary.300') {
  return DEBUG ? color : null;
}
