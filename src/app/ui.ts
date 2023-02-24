import styled from 'styled-components'
import { VIEWPORT } from 'shared/ui/mixins/viewport'

export const AppLayout = styled.div`
  min-height: 100vh;
  padding: 0 16px;
  display: grid;
  grid-template-rows: 6rem 1fr 10rem;
  grid-template-columns: 1fr;
  background: var(--rc-color-background-surface);

  @media ${VIEWPORT.MOBILE} {
    grid-template-rows: 6rem 1fr 11rem;
  }
`

export const StyledOutlet = styled.div`
  max-width: var(--rc-max-width-content);
  width: 100%;
  margin: 0 auto;
`
