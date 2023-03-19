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
  position: relative;
  margin-bottom: 32px;

  ::before {
    position: fixed;
    z-index: -1;
    content: '';
    top: -10%;
    left: 50%;
    transform: translateX(-50%);
    width: 1200px;
    height: 800px;
    border-radius: 50%;
    opacity: 0.15;
    mix-blend-mode: normal;
    filter: blur(80px);
    will-change: filter;
    background: conic-gradient(
      from 180deg at 50% 50%,
      var(--rc-color-background-brand-3) 0deg,
      var(--rc-color-background-brand-2) 180deg,
      var(--rc-color-background-brand-1) 1turn
    );
  }
`
