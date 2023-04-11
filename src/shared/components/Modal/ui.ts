import styled from 'styled-components'
import { VIEWPORT } from 'shared/ui/mixins/viewport'

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
  background-color: var(--background-soft);

  @media ${VIEWPORT.MOBILE} {
    align-items: flex-end;
    padding-bottom: 4%;
  }
`

export const StyledModal = styled.div<{ maxWidth?: string }>`
  max-width: ${({ maxWidth }) => maxWidth || '50rem'};
  width: 94vw;
  padding: 2rem;
  border-radius: 0.6rem;
  border: 1px solid var(--border);
  font-family: Old-Soviet;
  background-color: var(--background);
  color: var(--text-bright);

  @media ${VIEWPORT.MOBILE} {
    min-height: 240px;
  }
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
