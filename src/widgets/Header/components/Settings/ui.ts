import styled, { css } from 'styled-components'

export const StyledWrapper = styled.div`
  position: relative;
`

export const StyledToggle = styled.button`
  min-width: 2.2rem;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.3rem;
  border: none;
  background-color: transparent;
  transition: var(--animation-duration);

  &:hover {
    // change icon color
    --text-muted-soft: var(--links);
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
  border: 1px solid var(--border);
  box-shadow: 0 0 1rem var(--color-shadow-1);
  backdrop-filter: blur(2px);
  background-color: var(--background-soft);

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
`
