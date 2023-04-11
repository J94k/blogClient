import styled from 'styled-components'

export const StyledAuthor = styled.div`
  padding: 0.7rem;
  border-radius: 0.6rem;
  border: 1px solid var(--border);
  background-color: var(--background);

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
