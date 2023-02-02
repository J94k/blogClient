import styled from 'styled-components'

export const StyledOverlay = styled.div`
  position: fixed;
  z-index: -1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
`

export const StyledSnowFlake = styled.div<{
  size: number
  opacity: number
  left: number
  animationTime: number
  animetionDelay: number
}>`
  position: absolute;
  left: ${({ left }) => left}vw;
  width: ${({ size }) => size}rem;
  height: ${({ size }) => size}rem;
  border-radius: 50%;
  opacity: ${({ opacity }) => opacity}%;
  animation: snowfall ${({ animationTime }) => animationTime}s linear infinite;
  animationdelay: -${({ animetionDelay }) => animetionDelay}s;
  background-color: var(--rc-color-text-1);
`
