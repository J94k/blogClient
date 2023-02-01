import styled from 'styled-components'
import { VIEWPORT } from 'shared/ui/mixins/viewport'

export const AppLayout = styled.div`
  min-height: 100vh;
  padding: 0 1rem;
  display: grid;
  grid-template-rows: 10rem 1fr 10rem;
  grid-template-columns: 1fr;

  @media ${VIEWPORT.MOBILE} {
    grid-template-rows: 11rem 1fr 14rem;
  }
`

export const StyledOutlet = styled.div`
  max-width: var(--rc-max-width-content);
  width: 100%;
  margin: 0 auto;
`
