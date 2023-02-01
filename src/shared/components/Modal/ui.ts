import styled from 'styled-components'

export const StyledUnderlayer = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--rc-color-background-1);
`

export const StyledModal = styled.div`
  max-width: 50rem;
  padding: 2rem;
  border-radius: 0.6rem;
  border: 1px solid var(--rc-color-border-3);
  font-family: Old-Soviet;
  background-color: var(--rc-color-background-2);
  color: var(--rc-color-text-1);
`

export const StyledHeader = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledTitle = styled.h3`
  margin: 0;
`

export const StyledCloseButton = styled.button`
  background-color: transparent;
  border: none;
`

export const StyledContent = styled.p`
  margin: 0;
  opacity: 0.8;
`
