import styled, { css } from 'styled-components'

export const StyledPagination = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  list-style: none;
  border-radius: 0.6rem;
  border: 1px solid var(--border);
  font-family: ArgosGeorge;
  font-size: 1.9rem;
  background-color: var(--background);
`

export const StyledPageItem = styled.li<{ active: boolean }>`
  cursor: pointer;
  padding: 0.4rem 1rem;
  border: 1px solid var(--border);

  &:first-child {
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }

  &:hover,
  &:focus {
    ${({ active }) =>
      !active && 'background-color: var(--rc-color-background-brand-1-soft);'}
  }

  ${({ active }) =>
    active &&
    css`
      cursor: unset;
      color: var(--rc-color-background-brand-1-soft);
      border-color: var(--rc-color-background-brand-1-soft);

      &:hover,
      &:focus {
        color: var(--rc-color-background-brand-1-soft);
        border-color: var(--rc-color-background-brand-1-soft);
      }
    `}
`
