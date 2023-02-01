import styled from 'styled-components'

export const StyledLink = styled.a`
  text-decoration: underline;
  color: var(--rc-color-link-1);

  &:hover {
    color: var(--rc-color-link-1-hover);
  }
`

export const StyledLinkEmail = styled(StyledLink)``
