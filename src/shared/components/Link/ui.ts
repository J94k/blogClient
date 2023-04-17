import styled from 'styled-components'

export const StyledLink = styled.a`
  text-decoration: underline;
  color: var(--links);

  &:hover {
    color: var(--links-hover);
  }
`

export const StyledLinkEmail = styled(StyledLink)``
