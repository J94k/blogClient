import { createResource } from 'solid-js'
import { useParams } from 'solid-app-router'
import './index.css'
import { fetchPost } from '../../shared/utils/posts'
import Loader from '../../shared/components/Loader'

export default function Post() {
  const { author, date } = useParams()
  const [post, { mutate: mutatePost, refetch: refetchPost }] = createResource(
    () => fetchPost(author, date)
  )

  return (
    <article class="post-container">
      {post() ? (
        <>
          <h2 class="post__title">{post().title}</h2>
          <p class="post__content">{post().content}</p>
        </>
      ) : (
        <Loader />
      )}
    </article>
  )
}
