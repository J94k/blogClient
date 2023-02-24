import { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import icons from 'shared/assets/icons'
import { StyledWrapper, StyledMenuWrapper, StyledCloseButton } from './ui'
import RouteLink from './RouteLink'
import Toggle from './Toggle'

type Props = {
  links: Header.Links
}

const Navigation: FC<Props> = ({ links }) => {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(closeMenu, [pathname])

  return !links.length ? null : (
    <StyledWrapper>
      <Toggle onClick={toggleMenu} />
      <StyledMenuWrapper isOpen={isOpen}>
        <ul className="navigation-list">
          {links.map(({ route, name }, i) => (
            <li className="navigation-list__item" key={i}>
              <RouteLink to={route}>{name}</RouteLink>
            </li>
          ))}
        </ul>
        <StyledCloseButton onClick={closeMenu}>
          <icons.Close />
        </StyledCloseButton>
      </StyledMenuWrapper>
    </StyledWrapper>
  )
}

export default Navigation
