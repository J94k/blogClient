import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  border-radius: 0.4rem;
  background-color: transparent;
  outline: none;
  transition: var(--animation-duration);
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
  transition: var(--animation-duration);

  &:hover,
  &:focus {
    color: var(--links);
    background-color: var(--background-body);
  }

  .label {
    margin-right: 1rem;
  }

  .icon {
    min-width: 1rem;
  }
`
