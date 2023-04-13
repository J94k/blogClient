import styled, { css } from 'styled-components'
import { VIEWPORT } from 'shared/ui/mixins/viewport'

export const StyledWrapper = styled.nav`
  .navigation-list {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    list-style: none;
  }

  .navigation-list__item {
    &:not(:last-child) {
      margin-right: 1.4rem;
    }
  }

  @media ${VIEWPORT.MOBILE_MD} {
    .navigation-list {
      flex-direction: column;
    }

    .navigation-list__item {
      margin-right: 0;
      margin-bottom: 1.4rem;
      padding: 8px;
    }
  }
`

export const StyledToggle = styled.button`
  min-width: 2.2rem;
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: 0.3rem;
  border: none;
  background-color: transparent;
  transition: var(--animation-duration);

  &:hover {
    // change icon color
    --text-muted-soft: var(--links);
  }

  @media ${VIEWPORT.MOBILE_MD} {
    display: flex;
  }
`

export const StyledMenuWrapper = styled.div<{ isOpen: boolean }>`
  @media ${VIEWPORT.MOBILE_MD} {
    position: fixed;
    z-index: 1;
    top: -40%;
    left: 0;
    max-width: var(--rc-max-width-content);
    width: 92vw;
    height: 96vh;
    padding: 18px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 0.6rem;
    opacity: 0;
    visibility: hidden;
    transition: var(--animation-duration);
    box-shadow: 0 0 1rem var(--color-shadow-1);
    background-color: var(--background);
    border: 1px solid var(--border);

    ${({ isOpen }) =>
      isOpen &&
      css`
        visibility: visible;
        opacity: 1;
        top: 0;
      `}
  }
`

export const StyledRouteLink = styled.span`
  font-size: 18px;

  @media ${VIEWPORT.MOBILE_MD} {
    font-size: 22px;
  }
`

export const StyledCloseButton = styled.button`
  display: none;
  width: 42px;
  padding: 0;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;

  @media ${VIEWPORT.MOBILE_MD} {
    display: flex;
  }
`
