import { FC } from 'react'
import { StyledLabel, StyledWrapper, StyledLetter } from './ui'

type Props = {
  children: string
}

const NeonLabel: FC<Props> = ({ children }) => {
  return (
    <StyledLabel>
      <StyledWrapper>
        {children.split('').map((l, i) => (
          <StyledLetter key={i}>{l}</StyledLetter>
        ))}
      </StyledWrapper>
    </StyledLabel>
  )
}

export default NeonLabel
