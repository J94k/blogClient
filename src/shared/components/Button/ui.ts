import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  padding: 0.5rem 0.9rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-muted);
  background-color: transparent;
  letter-spacing: 1.4px;
  transition: var(--animation-duration);

  &:hover {
    color: var(--text-bright);
    background-color: var(--brand-soft);
    border-color: var(--brand);
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
    border-color: var(--border);
    transition: inherit;
  }

  &:hover::after {
    border-color: var(--text-bright);
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
    border-color: var(--border);
    transition: inherit;
  }

  &:hover::after {
    border-color: var(--text-bright);
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
