// convert milliseconds to a string with the format "<day>.<month>.<year>"
export const msToLocalDate = (ms: number | string): string => {
  const parts = new Date(Number(ms))
    .toLocaleDateString()
    .split('/')
    .map((n) => (n.length === 1 ? `0${n}` : n))

  return `${parts[1]}.${parts[0]}.${parts[2]}`
}
