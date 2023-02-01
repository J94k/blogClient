import { FC } from 'react'
import { StyledAuthor, StyledNickname, StyledStory } from './ui'

type Props = {
  nickname: string
  story?: string
}

const Author: FC<Props> = ({ nickname, story = '-' }) => {
  return (
    <StyledAuthor>
      <StyledNickname>{nickname}</StyledNickname>
      <StyledStory>
        <strong>История:</strong> {story}
      </StyledStory>
    </StyledAuthor>
  )
}

export default Author
