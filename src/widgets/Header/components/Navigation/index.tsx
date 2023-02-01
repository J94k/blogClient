import { FC } from 'react'
import { StyledWrapper } from './ui'
import RouteLink from './RouteLink'

type Props = {
  links: Header.Links
}

const Navigation: FC<Props> = ({ links }) => {
  return !links.length ? null : (
    <StyledWrapper>
      <ul className="navigation-list">
        {links.map(({ route, name }, i) => (
          <li className="navigation-list__item" key={i}>
            <RouteLink to={route}>{name}</RouteLink>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  )
}

export default Navigation
