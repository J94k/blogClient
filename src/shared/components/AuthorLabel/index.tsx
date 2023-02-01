import { FC, ReactNode } from 'react'
import { StyledAuthorLabel } from './ui'

type Props = {
  children: ReactNode
}

const AuthorLabel: FC<Props> = ({ children }) => {
  return <StyledAuthorLabel>{children}</StyledAuthorLabel>
}

export default AuthorLabel
