import { FC, ReactNode } from 'react'
import { StyledLink, StyledLinkEmail } from './ui'

type Props = {
  children: ReactNode
  to: string
}

export const LinkEmail: FC<Props> = ({ to, children }) => {
  return <StyledLinkEmail href={`mailto:${to}`}>{children}</StyledLinkEmail>
}

const Link: FC<Props> = ({ children, ...rest }) => {
  return <StyledLink {...rest}>{children}</StyledLink>
}

export default Link
