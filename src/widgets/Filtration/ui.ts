import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.8rem 1.2rem;
  border-radius: 0.6rem;
  border: 1px solid var(--border);
  background-color: var(--background);
`

export const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
`

const commonStyles = `
  height: 2.4rem;
  line-height: 2.4rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.4rem;
  border: 1px solid var(--border);
  background-color: var(--background-body);
  color: inherit;
`

export const StyledSelect = styled.select`
  ${commonStyles}
  margin-right: 0.7rem;
  padding: 0 30px 0 10px;
`

export const StyledInputDate = styled.input`
  ${commonStyles}
  padding: 0 0.6rem;
`
