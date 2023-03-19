import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { log } from 'shared/utils/log'

marked.setOptions({
  silent: import.meta.env.PROD,
  smartypants: true,
  headerIds: false,
})

const parseMarkdownToHtml = (markdown: string): string => {
  if (!markdown) return ''

  try {
    return DOMPurify.sanitize(marked.parse(markdown))
  } catch (error) {
    log('Error while parsing markdown', error)
  }

  return ''
}

export default {
  parseMarkdownToHtml,
}
