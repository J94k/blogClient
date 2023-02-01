import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import store from 'app/store'
import PostWidget from 'widgets/Post'
import NotFound from 'shared/components/NotFound'
import { StyledWrapper } from './ui'

type Props = {
  post: Post.View
}

const Post: FC<Props> = ({ post }) => {
  return (
    <StyledWrapper>
      <PostWidget {...post} />
    </StyledWrapper>
  )
}

export default observer(() => {
  const { postId } = useParams()
  const post = store.getPost(postId)

  return !post ? <NotFound /> : <Post post={post} />
})
