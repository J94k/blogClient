import styled from 'styled-components'

export const StyledButton = styled.button`
  margin-right: 1.2rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--rc-color-button-background-2);
  border-radius: 0.3rem;
  font-size: 0.9em;
  color: var(--rc-color-button-text-3);
  background-color: var(--rc-color-button-background-3);

  &:hover {
    color: var(--rc-color-button-text-3-hover);
    background-color: var(--rc-color-button-background-3-hover);
  }
`

export const StyledButtonContinue = styled(StyledButton)`
  position: relative;
  padding-right: 2rem;

  &::after {
    position: absolute;
    content: '';
    right: 0.8rem;
    top: 50%;
    transform: translateY(-50%) rotateZ(45deg);
    width: 0.5rem;
    height: 0.5rem;
    border-top: 2px solid var(--rc-color-button-text-2);
    border-right: 2px solid var(--rc-color-button-text-2);
  }

  &:hover::after {
    border-color: var(--rc-color-button-text-2-hover);
  }
`
