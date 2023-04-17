import { format } from 'date-fns'

// convert milliseconds to a string with the format "<day>.<month>.<year>"
export const msToLocalDate = (ms: number | string): string => {
  return format(Number(ms), 'dd.MM.yyyy')
}
