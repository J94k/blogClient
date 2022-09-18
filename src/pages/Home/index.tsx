import { For } from 'solid-js'
import { useI18n } from '@solid-primitives/i18n'
import Filter from '../../shared/components/Filter'
import PostDetails from '../../shared/components/PostDetails'

export default function Home(props) {
  const [t] = useI18n()

  return (
    <section>
      <Filter disabled={!props.posts.length} />

      {props.posts.length ? (
        <For each={props.posts}>
          {(post) => {
            return <PostDetails post={post} />
          }}
        </For>
      ) : (
        <h3>{t('inProgress')}</h3>
      )}
    </section>
  )
}
