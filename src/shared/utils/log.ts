export const log = (title: string, content: unknown): void => {
  console.group(`%c ${title}`, 'color: brown')
  console.log(content)
  console.groupEnd()
}
