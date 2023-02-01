import { FC, ReactNode } from 'react'
import { StyledButton, StyledButtonContinue } from './ui'

type Props = {
  children: ReactNode
  onClick: VoidFunction
}

export const ButtonContinue: FC<Props> = ({ children, ...rest }) => {
  return <StyledButtonContinue {...rest}>{children}</StyledButtonContinue>
}

const Button: FC<Props> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>
}

export default Button
