import { FC } from 'react'
import parsingService from 'shared/services/parsingService'
import Button from 'shared/components/Button'
import { StyledPost, StyledFooter } from './ui'

type Props = {
  postContent: string
}

const Post: FC<Props> = ({ postContent }) => {
  const goBack = () => window.history.back()

  const readableContent = parsingService.parseMarkdownToHtml(postContent)

  return (
    <StyledPost>
      {/* rome-ignore lint/security/noDangerouslySetInnerHtml: it is what is it */}
      <div dangerouslySetInnerHTML={{ __html: readableContent }} />

      <StyledFooter>
        <Button onClick={goBack}>Назад</Button>
      </StyledFooter>
    </StyledPost>
  )
}

export default Post
