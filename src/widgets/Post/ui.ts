import styled from 'styled-components'

export const StyledPost = styled.article``

export const StyledTitle = styled.h2`
  margin: 0 0 1rem;
  padding: 8px 0;
  line-height: 36px;
`

export const StyledDescription = styled.blockquote`
  position: relative;
  margin: 0;
  padding: 0.6rem 0.9rem 0.6rem 1.4rem;
  border-radius: 0.5rem;
  background-color: var(--background-body);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 100%;
    background-color: var(--border);
    border-radius: 1rem;
  }
`

export const StyledContent = styled.p``

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.9rem;
`
