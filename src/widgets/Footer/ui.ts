import styled from 'styled-components'
import { VIEWPORT } from 'shared/ui/mixins/viewport'

export const StyledWrapper = styled.footer`
  position: relative;
  max-width: var(--rc-max-width-content);
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--rc-color-secondary);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.3rem;
    background: linear-gradient(
      90deg,
      transparent,
      var(--rc-color-button-background-2-hover) 22%,
      var(--rc-color-button-background-2) 50%,
      var(--rc-color-button-background-2-hover) 78%,
      transparent
    );
  }
`

export const StyledCopyright = styled.p`
  margin: 0 0 0.6rem;
`

export const StyledPrivacy = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`

export const StyledInfo = styled.button`
  padding: 0.2rem 0.4rem;
  border: none;
  background-color: transparent;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  @media ${VIEWPORT} {
    padding: 0.6rem 0.4rem;
  }
`
