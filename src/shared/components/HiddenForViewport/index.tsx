import { FC, ReactNode } from 'react'
import { StyledWrapper } from './ui'

type Props = {
  children: ReactNode
  viewport: string
}

const HiddenForViewport: FC<Props> = ({ children, viewport }) => {
  return <StyledWrapper hideFor={viewport}>{children}</StyledWrapper>
}

export default HiddenForViewport
