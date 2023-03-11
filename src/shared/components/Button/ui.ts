import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  padding: 0.5rem 0.8rem;
  border: 2px solid var(--rc-color-border-3);
  border-radius: 0.3rem;
  color: var(--rc-color-button-text-3);
  background-color: transparent;
  letter-spacing: 1.6px;
  transition: 0.1s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: var(--rc-color-button-background-1-hover);
    border-color: var(--rc-color-button-background-1-hover);
    box-shadow: 0 4px 8px var(--rc-color-shadow-1);
  }
`

export const StyledButtonContinue = styled(StyledButton)`
  position: relative;
  padding-right: 2rem;

  &::after {
    position: absolute;
    content: '';
    right: 0.9rem;
    top: 50%;
    transform: translateY(-50%) rotateZ(45deg);
    width: 0.5rem;
    height: 0.5rem;
    border-top: 2px solid;
    border-right: 2px solid;
    border-color: var(--rc-color-border-1);
  }

  &:hover::after {
    border-color: var(--rc-color-button-background-1-hover);
  }
`

export const StyledButtonArrow = styled(StyledButton)<{
  direction: string
}>`
  position: relative;
  padding: 1.2rem;
  border-color: transparent;

  &::after {
    position: absolute;
    content: '';
    left: 50%;
    top: 50%;
    width: 0.5rem;
    height: 0.5rem;
    border-top: 2px solid;
    border-right: 2px solid;
    border-color: var(--rc-color-border-1);
  }

  &:hover::after {
    border-color: var(--rc-color-button-background-1-hover);
  }

  ${({ direction }) => {
    if (direction === 'right')
      return css`
        &::after {
          transform: translate(-50%, -50%) rotateZ(45deg);
        }
      `
    if (direction === 'left')
      return css`
        &::after {
          transform: translate(-50%, -50%) rotateZ(225deg);
        }
      `
    if (direction === 'up')
      return css`
        &::after {
          transform: translate(-50%, -50%) rotateZ(-45deg);
        }
      `
    if (direction === 'down')
      return css`
        &::after {
          transform: translate(-50%, -50%) rotateZ(135deg);
        }
      `
  }}
`
