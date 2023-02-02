import styled, { css } from 'styled-components'
import { VIEWPORT } from 'shared/ui/mixins/viewport'

export const StyledWrapper = styled.div`
  position: relative;
`

export const StyledToggle = styled.button`
  min-width: 2.6rem;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.3rem;
  border: none;
  background-color: transparent;
  transition: 0.1s;

  &:hover {
    // change icon color
    --rc-color-secondary: var(--rc-color-link-1);
  }

  @media ${VIEWPORT.MOBILE} {
    min-width: 2.4rem;
  }
`

export const StyledSettings = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 2.8rem;
  right: 4px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  border-radius: 0.4rem;
  border: 1px solid var(--rc-color-border-3);
  box-shadow: 0 0 1rem var(--rc-color-shadow-1);
  background-color: var(--rc-color-background-2);

  ${({ isVisible }) =>
    !isVisible &&
    css`
      display: none;
    `}
`

export const StyledItem = styled.div`
  padding: 0.5rem 0.6rem;
  border-radius: inherit;

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }
`

export const StyledLabel = styled.span`
  display: inline-block;
  margin-bottom: 0.3rem;
  /* opacity: 0.6; */
`