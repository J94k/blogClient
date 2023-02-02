import { FC } from 'react'
import images from 'shared/assets/images'
// import store from 'app/store'
import { StyledWrapper, StyledTop, StyledBottom, StyledLogo, StyledTitle } from './ui'
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
          <img className="main-logo" src={images.MainLogo} alt={`${name} логотип`} />
          <StyledTitle>Ratcloud</StyledTitle>
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
