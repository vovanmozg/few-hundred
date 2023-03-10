export const DEBUG = false;

export function bg(color = 'secondary.300') {
  return DEBUG ? color : null;
}
