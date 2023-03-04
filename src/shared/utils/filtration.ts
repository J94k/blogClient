export const filterByObjectKey = <T>({
  list,
  key,
  valueFormatter,
  target,
}: {
  list: T[]
  key: keyof T
  valueFormatter?: (value: unknown) => unknown
  target: string
}): T[] => {
  return list.filter(
    (item: T) =>
      (valueFormatter ? valueFormatter(item[key]) : item[key]) === target
  )
}
