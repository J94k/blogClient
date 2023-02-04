import { marked } from 'marked'
import { log } from 'shared/utils/log'

const parseMarkdownToHtml = (markdown: string): string => {
  if (!markdown) return ''

  try {
    return marked.parse(markdown)
  } catch (error) {
    log('Error while parsing markdown', error)
  }

  return ''
}

export default {
  parseMarkdownToHtml,
}
