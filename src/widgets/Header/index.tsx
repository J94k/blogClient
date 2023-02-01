import { FC } from 'react'
import images from 'shared/assets/images'
import store from 'app/store'
import { VIEWPORT } from 'shared/ui/mixins/viewport'
import NeonLabel from 'shared/components/NeonLabel'
import HiddenForViewport from 'shared/components/HiddenForViewport'
import {
  StyledWrapper,
  StyledTop,
  StyledBottom,
  StyledLogo,
  StyledWinterHat,
  StyledTitle,
} from './ui'
import Navigation from './components/Navigation'
import Settings from './components/Settings'

type Props = {
  name: string
  links: Header.Links
  themes: Header.Themes
  onThemeChange: (value: Store.Theme) => void
}

const Header: FC<Props> = ({ name, links, themes, onThemeChange }) => {
  return (
    <StyledWrapper>
      <StyledTop>
        <StyledLogo>
          <StyledWinterHat src={images.WinterHat} />
          <img
            className="main-logo"
            src={store.theme === 'dark' ? images.MainLogoDark : images.MainLogoLight}
            alt={`${name} логотип`}
          />
          <StyledTitle>Ratcloud</StyledTitle>
          <HiddenForViewport viewport={VIEWPORT.MOBILE}>
            <NeonLabel>V1</NeonLabel>
          </HiddenForViewport>
        </StyledLogo>

        <Settings themes={themes} onThemeChange={onThemeChange} />
      </StyledTop>
      <StyledBottom>
        <Navigation links={links} />
      </StyledBottom>
    </StyledWrapper>
  )
}

export default Header
