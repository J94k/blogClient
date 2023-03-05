import { FC } from 'react'
import { StyledWrapper, StyledOption } from './ui'

type Props = {
  themes: Header.Themes
  onChange: (value: Store.Theme) => void
}

const Theme: FC<Props> = ({ themes, onChange }) => {
  const onSelect = (v: string) => onChange(v as Store.Theme)

  return (
    <StyledWrapper>
      {themes.map(({ label, icon, value }, i) => (
        <StyledOption key={i} onClick={() => onSelect(value)}>
          <span className="label">{label}</span>{' '}
          <span className="icon">{icon}</span>
        </StyledOption>
      ))}
    </StyledWrapper>
  )
}

export default Theme
