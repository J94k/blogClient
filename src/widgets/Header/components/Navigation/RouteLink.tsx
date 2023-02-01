import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { StyledRouteLink } from './ui'

type Props = {
  children: string
  to: string
}

const RouteLink: FC<Props> = ({ children, to }) => {
  return (
    <StyledRouteLink>
      <NavLink to={to}>{children}</NavLink>
    </StyledRouteLink>
  )
}

export default RouteLink
