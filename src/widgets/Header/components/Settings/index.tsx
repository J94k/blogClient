import { FC, useState, useRef } from 'react'
import useOnClickOutside from 'shared/hooks/useOnClickOutside'
import Theme from '../Theme'
import Toggle from './Toggle'
import { StyledWrapper, StyledSettings, StyledLabel, StyledItem } from './ui'

type Props = {
  themes: Header.Themes
  onThemeChange: (value: Store.Theme) => void
}

const Settings: FC<Props> = ({ themes, onThemeChange }) => {
  const [isVisible, setIsVisible] = useState(false)
  const settingsNode = useRef(null)

  const toggleMenu = () => setIsVisible(!isVisible)

  useOnClickOutside(settingsNode, isVisible ? toggleMenu : undefined)

  return (
    <StyledWrapper ref={settingsNode}>
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
