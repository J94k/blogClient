import { FC, useState } from 'react'
import Theme from '../Theme'
import Toggle from './Toggle'
import { StyledWrapper, StyledSettings, StyledLabel, StyledItem } from './ui'

type Props = {
  themes: Header.Themes
  onThemeChange: (value: Store.Theme) => void
}

const Settings: FC<Props> = ({ themes, onThemeChange }) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleMenu = () => setIsVisible(!isVisible)

  return (
    <StyledWrapper>
      <Toggle onClick={toggleMenu} />

      <StyledSettings isVisible={isVisible}>
        <StyledItem>
          <StyledLabel>Тема</StyledLabel>
          <Theme themes={themes} onChange={onThemeChange} />
        </StyledItem>
      </StyledSettings>
    </StyledWrapper>
  )
}

export default Settings
