import styled from 'styled-components'
import { VIEWPORT } from 'shared/ui/mixins/viewport'
import { ButtonContinue } from 'shared/components/Button'

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
  font-size: 1.4rem;

  @media ${VIEWPORT.MOBILE} {
    font-size: 1.2rem;
  }
`

export const StyledDescription = styled.p`
  margin: 0;
  padding: 0.7rem 0;
  font-size: 1.1rem;
  color: var(--rc-color-secondary);

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

export const StyledButtonContinue = styled(ButtonContinue)`
  margin-right: 14px;
`

export const StyledMetadata = styled.div`
  color: var(--rc-color-secondary);

  @media ${VIEWPORT.MOBILE} {
    margin-top: 1rem;
  }
`
