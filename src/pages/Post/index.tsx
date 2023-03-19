import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import blogService from 'shared/services/blogService'
import { log } from 'shared/utils/log'
import PostWidget from 'widgets/Post'
import NotFound from 'shared/components/NotFound'
import { StyledWrapper } from './ui'

type Props = {
  id: string
}

const Post: FC<Props> = ({ id }) => {
  const [tmpPost, setTmpPost] = useState<undefined | string>(undefined)

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

  return (
    <StyledWrapper>
      {tmpPost ? <PostWidget postContent={tmpPost} /> : 'Загрузка...'}
    </StyledWrapper>
  )
}

export default observer(() => {
  const { postId } = useParams()

  return !postId ? <NotFound /> : <Post id={postId} />
})
