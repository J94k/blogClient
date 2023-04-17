import styled from 'styled-components'

export const AppLayout = styled.div`
  min-height: 100vh;
  padding: 90px 16px 0;
  display: flex;
  flex-direction: column;
  background-color: var(--background-body);
`

export const StyledOutlet = styled.div`
  max-width: var(--rc-max-width-content);
  width: 100%;
  margin: 0 auto;
`

export const StyledBanner = styled.div`
  width: 100%;
  max-width: var(--rc-max-width-content);
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
  position: relative;
  margin-bottom: 32px;
`

export const StyledFooter = styled.div`
  margin-top: auto;
`
