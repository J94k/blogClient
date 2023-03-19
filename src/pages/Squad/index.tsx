import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { observer } from 'mobx-react-lite'
import store from 'app/store'
import Author from 'widgets/Author'
import { StyledWrapper, StyledTitle, StyledSquad } from './ui'

const Squad: FC = () => {
  const authors = store.blog.authors

  return (
    <StyledWrapper>
      <Helmet>
        <title>Кто в Ratcloud команде?</title>
      </Helmet>
      <StyledTitle>Кто в команде?</StyledTitle>

      <StyledSquad>
        {authors.map(({ nickname, story }, i) => (
          <Author key={i} nickname={nickname} story={story} />
        ))}
      </StyledSquad>
    </StyledWrapper>
  )
}

export default observer(Squad)
