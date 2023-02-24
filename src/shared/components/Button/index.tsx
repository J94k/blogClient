import { FC, ReactNode } from 'react'
import { StyledButton, StyledButtonContinue, StyledButtonArrow } from './ui'

type Props = {
  children: ReactNode
  onClick: VoidFunction
}

export const ButtonContinue: FC<Props> = ({ children, ...rest }) => {
  return <StyledButtonContinue {...rest}>{children}</StyledButtonContinue>
}

export const ButtonArrow: FC<{
  direction: 'left' | 'right' | 'up' | 'down'
  onClick: VoidFunction
}> = ({ ...rest }) => {
  return <StyledButtonArrow {...rest} />
}

const Button: FC<Props> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>
}

export default Button
