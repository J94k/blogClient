import { FC } from 'react'
import parsingService from 'shared/services/parsingService'
import { msToLocalDate } from 'shared/utils/date'
import AuthorLabel from 'shared/components/AuthorLabel'
import DateLabel from 'shared/components/DateLabel'
import Button from 'shared/components/Button'
import { StyledPost, StyledTitle, StyledDescription, StyledContent, StyledFooter } from './ui'

const Post: FC<Post.View> = ({ title, description, content, author, date }) => {
  console.log("🚀 ~ file: index.tsx:10 ~ content", content)
  const goBack = () => window.history.back()

  const readableContent = parsingService.parseMarkdownToHtml(content)

  return (
    <StyledPost>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledContent>{readableContent}</StyledContent>

      <StyledFooter>
        <AuthorLabel>{author}</AuthorLabel>
        <DateLabel>{msToLocalDate(date)}</DateLabel>
        <Button onClick={goBack}>Назад</Button>
      </StyledFooter>
    </StyledPost>
  )
}

export default Post
