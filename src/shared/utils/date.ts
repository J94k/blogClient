export const msToLocalDate = (ms: number | string): string => {
  return new Date(Number(ms))
    .toLocaleDateString()
    .replace(/\//g, '.')
    .split('.')
    .map((n) => (+n < 10 ? `0${n}` : n))
    .join('.')
}
