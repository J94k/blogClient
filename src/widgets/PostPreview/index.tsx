import { FC } from 'react'
import AuthorLabel from 'shared/components/AuthorLabel'
import DateLabel from 'shared/components/DateLabel'
import { msToLocalDate } from 'shared/utils/date'
import {
  StyledPostPreview,
  StyledTitle,
  StyledBottom,
  StyledButtonContinue,
  StyledMetadata,
  StyledDescription,
} from './ui'

const PostPreview: FC<
  PostPreview.View & {
    maxDescriptionLength?: number
  }
> = ({ postId, title, description, author, date, onContinue, maxDescriptionLength = 150 }) => {
  const handleContinue = () => onContinue(postId)

  return (
    <StyledPostPreview>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>
        {description.slice(0, maxDescriptionLength + 1)}
        {description.length > maxDescriptionLength ? '...' : null}
      </StyledDescription>
      <StyledBottom>
        <StyledButtonContinue onClick={handleContinue}>Продолжить</StyledButtonContinue>
        <StyledMetadata>
          <AuthorLabel>{author}</AuthorLabel> <DateLabel>{msToLocalDate(date)}</DateLabel>
        </StyledMetadata>
      </StyledBottom>
    </StyledPostPreview>
  )
}

export default PostPreview
