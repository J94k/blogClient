import styled from 'styled-components'

export const StyledLabel = styled.div`
  padding: 0 0.5rem;
  display: inline-flex;
  border-radius: 0.7rem;
  border: 2px solid var(--rc-color-border-3);
  transform: rotate(-6deg);
  box-shadow: inset 0 0 1rem var(--rc-color-link-1), 0 0 7px var(--rc-color-link-1),
    0 0 1rem var(--rc-color-link-1), 0 0 1rem var(--rc-color-link-1);
  opacity: 0.7;
`

export const StyledWrapper = styled.span`
  letter-spacing: 0.2rem;
  color: var(--rc-color-text-1);
`

export const StyledLetter = styled.span`
  font-size: 0.9rem;
`
