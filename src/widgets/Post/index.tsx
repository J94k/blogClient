import { FC } from 'react'
import AuthorLabel from 'shared/components/AuthorLabel'
import DateLabel from 'shared/components/DateLabel'
import Button from 'shared/components/Button'
import { msToLocalDate } from 'shared/utils/date'
import { StyledPost, StyledTitle, StyledDescription, StyledContent, StyledFooter } from './ui'

const Post: FC<Post.View> = ({ title, description, content, author, date }) => {
  const goBack = () => window.history.back()

  return (
    <StyledPost>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledContent>{content}</StyledContent>

      <StyledFooter>
        <AuthorLabel>{author}</AuthorLabel>
        <DateLabel>{msToLocalDate(date)}</DateLabel>
        <Button onClick={goBack}>Назад</Button>
      </StyledFooter>
    </StyledPost>
  )
}

export default Post
