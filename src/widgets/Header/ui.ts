import styled from 'styled-components'
import { VIEWPORT } from 'shared/ui/mixins/viewport'

export const StyledWrapper = styled.header`
  position: relative;
  padding: 0.5rem 1rem;
  max-width: var(--rc-max-width-content);
  width: 100%;
  max-height: 4rem;
  margin: 1rem auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.6rem;
  box-shadow: 0 0 1rem var(--rc-color-shadow-1);
  border: 1px solid var(--rc-color-border-3);
  background-color: var(--rc-color-background-2);
`

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledLogo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .main-logo {
    max-width: 3.4rem;
    width: 100%;
    margin-right: 10px;
  }

  @media ${VIEWPORT.MOBILE} {
    .main-logo {
      max-width: 2.6rem;
      margin-right: 6px;
    }
  }
`

export const StyledTitle = styled.h2`
  margin: 0.3rem 1rem 0 0;
  font-size: 2.3rem;
  font-family: 'ArgosGeorge';
  letter-spacing: 0.1rem;
  color: var(--rc-color-text-1);
  opacity: 0.9;

  @media ${VIEWPORT.MOBILE} {
    font-size: 2rem;
  }
`

export const StyledMarginRight = styled.div`
  margin-right: 26px;

  @media ${VIEWPORT.MOBILE_MD} {
    margin-right: 16px;
  }
`
