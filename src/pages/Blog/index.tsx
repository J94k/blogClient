import { FC, useState, useMemo } from 'react'
import { useNavigate } from 'react-router'
import { observer } from 'mobx-react-lite'
import store from 'app/store'
import { filterByObjectKey } from 'shared/utils/filtration'
import { msToLocalDate } from 'shared/utils/date'
import Filtration from 'widgets/Filtration'
import PostPreview from 'widgets/PostPreview'
import Pagination from 'widgets/Pagination'
import { StyledWrapper, StyledPosts, StyledFiltration, StyledPreviewWrapper } from './ui'

type FilterState = {
  author: string
  date: string
}

type Props = {
  posts?: Post.View[]
  authors: string[]
  pages: number
  isPending: boolean
}

const Blog: FC<Props> = ({ posts, authors, pages, isPending }) => {
  const navigate = useNavigate()
  const onSelectPost = (id: string) => navigate(`/post/${id}`)

  const [filtrationState, setFiltrationState] = useState<FilterState | undefined>(undefined)

  const onFiltrationChange = (state: FilterState) => {
    setFiltrationState(state)
  }

  const onPageChange = (newPage: number) => {
    store.setCurrentPage(newPage)
  }

  const processedPosts = useMemo(() => {
    if (filtrationState && posts) {
      let updated = posts

      if (filtrationState.author) {
        updated = filterByObjectKey<Post.View>({
          list: Object.values(posts),
          key: 'author',
          target: filtrationState.author,
        })
      }

      if (filtrationState.date) {
        updated = filterByObjectKey<Post.View>({
          list: [...updated],
          key: 'date',
          valueFormatter: (v: unknown) => msToLocalDate(v as string),
          target: filtrationState.date.replace(/-/g, '.'),
        })
      }

      return updated
    }

    return posts
  }, [filtrationState, posts])

  return (
    <StyledWrapper>
      {isPending ? (
        <div>Ожидание...</div>
      ) : (
        <StyledPosts>
          <StyledFiltration>
            <Filtration onChange={onFiltrationChange} authors={authors} />
          </StyledFiltration>

          {!processedPosts?.length ? (
            <h3>Нет постов</h3>
          ) : (
            processedPosts.map(({ postId, title, description, author, date }) => (
              <StyledPreviewWrapper key={postId}>
                <PostPreview
                  postId={postId}
                  title={title}
                  description={description}
                  author={author}
                  date={date}
                  onContinue={onSelectPost}
                />
              </StyledPreviewWrapper>
            ))
          )}

          {pages > 1 && <Pagination max={pages} onChange={onPageChange} />}
        </StyledPosts>
      )}
    </StyledWrapper>
  )
}

export default observer(() => (
  <Blog
    posts={store.blog.postsList}
    authors={store.blog.authors.map(({ nickname }) => nickname)}
    pages={store.blog.pages}
    isPending={store.blog.isPending}
  />
))
