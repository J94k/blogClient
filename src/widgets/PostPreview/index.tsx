import { FC } from 'react'
import DateLabel from 'shared/components/DateLabel'
import TagsBlock from 'shared/components/TagsBlock'
import { ButtonContinue } from 'shared/components/Button'
import { msToLocalDate } from 'shared/utils/date'
import {
  StyledPostPreview,
  StyledTitle,
  StyledBottom,
  StyledMetadata,
  StyledDescription,
} from './ui'

const PostPreview: FC<
  PostPreview.View & {
    maxDescriptionLength?: number
  }
> = ({
  postId,
  title,
  author,
  description,
  date,
  onContinue,
  tags,
  maxDescriptionLength = 150,
}) => {
  const handleContinue = () => onContinue(postId)

  const formatedDate = msToLocalDate(date)

  return (
    <StyledPostPreview>
      <StyledTitle onClick={handleContinue}>{title}</StyledTitle>
      <StyledMetadata>
        <span className="author">Автор: {author}</span>
        <DateLabel>{formatedDate}</DateLabel>
      </StyledMetadata>
      <StyledDescription>
        {description.slice(0, maxDescriptionLength + 1)}
        {description.length > maxDescriptionLength ? '...' : null}
      </StyledDescription>
      <StyledBottom>
        <ButtonContinue onClick={handleContinue}>Продолжить</ButtonContinue>
      </StyledBottom>
      <TagsBlock tags={tags} />
    </StyledPostPreview>
  )
}

export default PostPreview
