import styled from 'styled-components'

export const StyledQuote = styled.blockquote`
  position: relative;
  margin: 1rem 0;
  padding: 0.3rem 0.8rem;
  background-image: linear-gradient(
    90deg,
    var(--rc-color-text-3) 0%,
    var(--rc-color-text-4) 56%,
    var(--rc-color-text-2) 100%
  );
  color: transparent;
  -webkit-background-clip: text;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.6rem;
  }
`
