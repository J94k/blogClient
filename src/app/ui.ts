import styled from 'styled-components'

export const AppLayout = styled.div`
  min-height: 100vh;
  padding: 90px 16px 0;
  display: grid;
  background: var(--rc-color-background-surface);
`

export const StyledOutlet = styled.div`
  max-width: var(--rc-max-width-content);
  width: 100%;
  margin: 0 auto;
`

export const StyledHeader = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 16px;
  right: 16px;
`

export const StyledMain = styled.main`
  margin-bottom: 32px;
`
