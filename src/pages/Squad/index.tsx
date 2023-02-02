import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import store from 'app/store'
import Author from 'widgets/Author'
import { StyledWrapper, StyledTitle, StyledSquad } from './ui'

const Squad: FC = () => {
  const authors = store.blog.authors

  return (
    <StyledWrapper>
      <StyledTitle>Кто в команде</StyledTitle>

      <StyledSquad>
        {authors.map(({ nickname, story }, i) => (
          <Author key={i} nickname={nickname} story={story} />
        ))}
      </StyledSquad>
    </StyledWrapper>
  )
}

export default observer(Squad)
