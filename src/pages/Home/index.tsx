import { For } from 'solid-js'
import Filter from '../../shared/components/Filter'
import PostDetails from '../../shared/components/PostDetails'

export default function Home(props) {
  return (
    <section>
      <Filter disabled={props.posts.length === 0} />

      {props.posts.length ? (
        <For each={props.posts}>
          {(post) => {
            return <PostDetails post={post} />
          }}
        </For>
      ) : (
        <h3>No posts</h3>
      )}
    </section>
  )
}
