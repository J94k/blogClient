import { FC } from 'react'
import DateLabel from 'shared/components/DateLabel'
import TagsBlock from 'shared/components/TagsBlock'
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
> = ({
  postId,
  title,
  description,
  date,
  onContinue,
  tags,
  maxDescriptionLength = 150,
}) => {
  const handleContinue = () => onContinue(postId)
  const localDate = msToLocalDate(date)

  return (
    <StyledPostPreview>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>
        {description.slice(0, maxDescriptionLength + 1)}
        {description.length > maxDescriptionLength ? '...' : null}
      </StyledDescription>
      <StyledBottom>
        <StyledButtonContinue onClick={handleContinue}>
          Продолжить
        </StyledButtonContinue>
        <StyledMetadata>
          <div>
            <DateLabel>{localDate}</DateLabel>
          </div>
        </StyledMetadata>
      </StyledBottom>
      <TagsBlock tags={tags} />
    </StyledPostPreview>
  )
}

export default PostPreview
