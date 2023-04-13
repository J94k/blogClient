import styled, { css } from 'styled-components'

export const StyledAccordion = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  border-radius: 10px;

  ${({ isActive }) =>
    isActive &&
    css`
      border-color: var(--brand-soft);
    `}
`

export const StyledButton = styled.button<{ isActive: boolean }>`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 12px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border-radius: inherit;
  border: 2px solid transparent;
  background-color: var(--background-body);
  transition: var(--animation-duration);

  :hover {
    background-color: var(--brand-soft);
  }
  ${({ isActive }) => isActive && 'background-color: var(--brand-soft);'}

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
