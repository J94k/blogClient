import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  border-radius: 0.4rem;
  color: var(--rc-color-text-4);
  background-color: transparent;
  outline: none;
  transition: 0.1s;
`

export const StyledOption = styled.button`
  min-width: 8rem;
  padding: 0.6rem;
  border-radius: 8px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background: inherit;
  transition: 0.1s;

  &:hover,
  &:focus {
    color: var(--rc-color-link-1);
    background-color: var(--rc-color-background-1);
  }

  .label {
    margin-right: 1rem;
  }

  .icon {
    min-width: 1rem;
  }
`
