import styled, { css } from 'styled-components'

export const StyledAccordion = styled.div<{ isActive: boolean }>`
  border-radius: 0.6rem;
  background-color: var(--rc-color-background-2);
  opacity: 0.7;

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
  border: none;

  &:hover {
    background-color: var(--rc-color-button-background-1);
  }

  &::after {
    position: absolute;
    content: '';
    right: 1rem;
    top: 50%;
    transform: translateY(-50%) rotateZ(135deg);
    width: 0.5rem;
    height: 0.5rem;
    border-top: 2px solid var(--rc-color-button-text-1);
    border-right: 2px solid var(--rc-color-button-text-1);
  }

  &:hover::after {
    border-color: var(--rc-color-button-text-1-hover);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      &::after {
        transform: translateY(-50%) rotateZ(-45deg);
      }
    `}
`

export const StyledContent = styled.div`
  padding: 0.7rem;
  margin-top: 1rem;
`
