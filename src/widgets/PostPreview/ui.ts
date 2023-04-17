import styled from 'styled-components'
import { VIEWPORT } from 'shared/ui/mixins/viewport'

export const StyledPostPreview = styled.section`
  padding: 20px;
  border-radius: 0.6rem;
  border: 1px solid var(--border);
  background-color: var(--background);
  transition: var(--animation-duration);

  &:hover {
    border-color: var(--border);
  }
`

export const StyledTitle = styled.h3`
  width: fit-content;
  margin: 0;
  font-size: 1.4rem;
  transition: var(--animation-duration);

  @media ${VIEWPORT.MOBILE} {
    font-size: 1.2rem;
  }

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`

export const StyledDescription = styled.p`
  margin: 0;
  padding: 0.7rem 0;
  font-size: 1rem;
  color: var(--text-muted-soft);

  @media ${VIEWPORT.MOBILE} {
    font-size: 1rem;
  }
`

export const StyledBottom = styled.div`
  margin: 8px 0 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media ${VIEWPORT.MOBILE} {
    flex-direction: column;
    align-items: start;
  }
`

export const StyledMetadata = styled.div`
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  color: var(--text-muted);
  opacity: 0.6;

  > *:not(:last-child) {
    margin-right: 10px;
  }

  @media ${VIEWPORT.MOBILE} {
    flex-direction: column;

    .author {
      margin-bottom: 4px;
    }
  }
`
