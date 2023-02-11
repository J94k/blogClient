import { FC } from 'react'
import { StyledWrapper, StyledTag } from './ui'

const noop = () => undefined

type Props = {
  tags: string[]
  onSelectTag?: (t: string) => void
}

const TagsBlock: FC<Props> = ({ tags, onSelectTag = noop }) => {
  return (
    <StyledWrapper>
      {tags.map((tag) => (
        <StyledTag key={tag} onClick={() => onSelectTag(tag)}>
          #{tag}
        </StyledTag>
      ))}
    </StyledWrapper>
  )
}

export default TagsBlock
