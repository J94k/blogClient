import styled from 'styled-components'
import { VIEWPORT } from 'shared/ui/mixins/viewport'

export const StyledWrapper = styled.nav`
  .navigation-list {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    align-items; center;
    list-style: none;
  }

  .navigation-list__item {
    &:not(:last-child) {
      margin-right: 1.4rem;
    }
  }
`

export const StyledRouteLink = styled.span`
  font-size: 1.4rem;

  @media ${VIEWPORT.MOBILE} {
    font-size: 1.2rem;
  }
`
