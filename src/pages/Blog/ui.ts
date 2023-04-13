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
  display: flex;

  > * {
    flex: 1;

    &:not(:last-child) {
      margin-right: 10px;
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
