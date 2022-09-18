import { createResource } from 'solid-js'
import { useParams } from 'solid-app-router'
import './index.css'
import { fetchPost } from '../../shared/services/blog'
import Loader from '../../shared/components/Loader'

export default function Post() {
  const { id } = useParams()
  const [post, { mutate: mutatePost, refetch: refetchPost }] = createResource(
    () => fetchPost(Number(id) || -1)
  )

  return (
    <article class="post-container">
      {post() ? (
        <>
          <h2 class="post__title">{post().attributes.title}</h2>
          <p class="post__content">{post().attributes.content}</p>
        </>
      ) : (
        <Loader />
      )}
    </article>
  )
}
