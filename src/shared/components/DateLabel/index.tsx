import { FC, ReactNode } from 'react'
import { StyledDateLabel } from './ui'

type Props = {
  children: ReactNode
}

const DateLabel: FC<Props> = ({ children }) => {
  return <StyledDateLabel>{children}</StyledDateLabel>
}

export default DateLabel
