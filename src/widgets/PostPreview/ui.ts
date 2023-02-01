import styled from 'styled-components'
import { VIEWPORT } from 'shared/ui/mixins/viewport'

export const StyledPostPreview = styled.section`
  padding: 1rem;
  border-radius: 0.6rem;
  border: 1px solid var(--rc-color-border-2);
  background-color: var(--rc-color-background-2);
  transition: 0.1s;

  &:hover {
    border-color: var(--rc-color-border-2);
  }
`

export const StyledTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`

export const StyledDescription = styled.p`
  margin: 0;
  padding: 0.7rem 0;
  font-size: 1.1rem;
  opacity: 0.8;
`

export const StyledBottom = styled.div`
  margin-top: 0.8rem;
  display: flex;
  align-items: center;

  @media ${VIEWPORT.MOBILE} {
    flex-direction: column;
    align-items: start;
  }
`

export const StyledMetadata = styled.div`
  font-size: 0.8em;
  opacity: 0.8;

  @media ${VIEWPORT.MOBILE} {
    margin-top: 1rem;
  }
`
