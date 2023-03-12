import styled from 'styled-components'

export const StyledAuthor = styled.div`
  padding: 0.7rem;
  border-radius: 0.6rem;
  border: 1px solid var(--rc-color-border-2);
  background-color: var(--rc-color-background-2);

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }
`

export const StyledNickname = styled.h3`
  margin: 0;
`

export const StyledStory = styled.p`
  margin: 1rem 0 0;
  opacity: 0.8;
`
