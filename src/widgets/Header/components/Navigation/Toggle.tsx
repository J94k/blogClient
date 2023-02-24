import { FC } from 'react'
import icons from 'shared/assets/icons'
import { StyledToggle } from './ui'

type Props = {
  onClick: VoidFunction
}

const Toggle: FC<Props> = ({ onClick }) => {
  return (
    <StyledToggle onClick={onClick}>
      <icons.Menu />
    </StyledToggle>
  )
}

export default Toggle
