import styled from 'styled-components'

export const StyledWrapper = styled.div<{ hideFor: string }>`
  @media ${({ hideFor }) => hideFor} {
    display: none;
  }
`
