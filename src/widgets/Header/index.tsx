import { FC } from 'react'
import images from 'shared/assets/images'
import { StyledWrapper, StyledItem, StyledLogo, StyledTitle, StyledMarginRight } from './ui'
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
      <StyledLogo>
        <img className="main-logo" src={images.MainLogo} alt={`${name} логотип`} />
        <StyledTitle>Ratcloud</StyledTitle>
      </StyledLogo>

      <StyledItem>
        <StyledMarginRight>
          <Navigation links={links} />
        </StyledMarginRight>
        <Settings themes={themes} onThemeChange={onThemeChange} />
      </StyledItem>
    </StyledWrapper>
  )
}

export default Header
