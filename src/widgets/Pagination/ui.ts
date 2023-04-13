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
      !active && 'background-color: var(--brand-soft);'}
  }

  ${({ active }) =>
    active &&
    css`
      cursor: unset;
      color: var(--brand-soft);
      border-color: var(--brand-soft);

      &:hover,
      &:focus {
        color: var(--brand-soft);
        border-color: var(--brand-soft);
      }
    `}
`
