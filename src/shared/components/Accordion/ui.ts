import styled, { css } from 'styled-components'

export const StyledAccordion = styled.div<{ isActive: boolean }>`
  border-radius: 0.6rem;

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
    `}
`

export const StyledButton = styled.button<{ isActive: boolean }>`
  position: relative;
  width: 100%;
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border-radius: inherit;
  border: 2px solid transparent;
  background-color: var(--background);
  transition: var(--animation-duration);

  :hover {
    border-color: var(--rc-color-background-brand-1);
  }
  ${({ isActive }) =>
    isActive && 'border-color: var(--rc-color-background-brand-1);'}

  ::after {
    position: absolute;
    content: '';
    right: 1rem;
    top: 35%;
    transform: rotateZ(135deg);
    width: 0.5rem;
    height: 0.5rem;
    border-right: 2px solid var(--text-bright);
    border-top: 2px solid var(--text-bright);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      &::after {
        top: 45%;
        transform: rotateZ(-45deg);
      }
    `}
`

export const StyledContent = styled.div<{ isVisible: boolean }>`
  margin-top: 8px;
  visibility: hidden;
  opacity: 0;
  position: absolute;

  ${({ isVisible }) =>
    isVisible &&
    css`
      position: relative;
      visibility: visible;
      opacity: 1;
    `}
`
