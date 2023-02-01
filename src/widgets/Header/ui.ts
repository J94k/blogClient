import styled from 'styled-components'

export const StyledWrapper = styled.header`
  max-width: var(--rc-max-width-content);
  width: 100%;
  margin: 0 auto;
`

export const StyledTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledBottom = styled.div`
  position: relative;
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.6rem;
  box-shadow: 0 0 1rem var(--rc-color-shadow-1);
  background-color: var(--rc-color-background-2);
`

export const StyledLogo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .main-logo {
    max-width: 5rem;
    width: 100%;
  }
`

export const StyledWinterHat = styled.img`
  position: absolute;
  left: 2.6rem;
  top: 0.9rem;
  width: 1.6rem;
`

export const StyledTitle = styled.h2`
  margin: 0.3rem 1rem 0 0;
  font-size: 2.3rem;
  font-family: 'ArgosGeorge';
  letter-spacing: 0.1rem;
  color: var(--rc-color-text-3);
`
