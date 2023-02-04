import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
// import store from 'app/store'
import blogService from 'shared/services/blogService'
import { log } from 'shared/utils/log'
import PostWidget from 'widgets/Post'
import NotFound from 'shared/components/NotFound'
import { StyledWrapper } from './ui'

type Props = {
  // post: Post.View
  id: string
}

const Post: FC<Props> = ({ /* post, */ id }) => {
  const [tmpPost, setTmpPost] = useState<undefined | Post.View>(undefined)

  useEffect(() => {
    const f = async () => {
      try {
        const p = await blogService.fetchPost(id)

        setTmpPost(p)
      } catch (error) {
        log('Error while loading the post', error)
      }
    }

    f()
  }, [id])

  return <StyledWrapper>{tmpPost ? <PostWidget {...tmpPost} /> : 'Загрузка...'}</StyledWrapper>
}

export default observer(() => {
  const { postId } = useParams()
  // const post = store.getPost(postId)

  return !postId ? <NotFound /> : <Post id={postId} /* post={post} */ />
})
