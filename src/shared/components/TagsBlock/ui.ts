import styled from 'styled-components'

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const StyledTag = styled.button`
  padding: 0;
  border: none;
  font-weight: 500;
  background-color: transparent;
  color: var(--rc-color-link-1);

  :not(:last-child) {
    margin-right: 10px;
  }
`
