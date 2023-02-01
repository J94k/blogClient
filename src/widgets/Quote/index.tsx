import { FC } from 'react'
import { StyledQuote } from './ui'

const defaultQuote = 'Об этом и о том. В общем то не о чём.'

type Props = {
  quote?: string
}

const Quote: FC<Props> = ({ quote = defaultQuote }) => {
  return <StyledQuote>&gt; {quote}</StyledQuote>
}

export default Quote
