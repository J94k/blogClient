import styled from 'styled-components'
import { VIEWPORT } from 'shared/ui/mixins/viewport'

export const StyledWrapper = styled.div``

export const StyledPreviewWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const StyledPosts = styled.div``

export const StyledOptions = styled.div`
  margin-bottom: 0.8rem;
  padding: 0.4rem;
  display: flex;
  border: 1px solid var(--rc-color-border-3);
  border-radius: 0.6rem;
  backdrop-filter: blur(10px);

  > * {
    flex: 1;

    &:not(:last-child) {
      margin-right: 0.6rem;
    }
  }

  @media ${VIEWPORT.TABLET} {
    flex-direction: column;

    > * {
      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: 0.3rem;
      }
    }
  }
`
