/* eslint-disable indent */
import { FC, useState, useMemo } from 'react'
import { useNavigate } from 'react-router'
import { observer } from 'mobx-react-lite'
import store from 'app/store'
import { filterByObjectKey } from 'shared/utils/filtration'
import { msToLocalDate } from 'shared/utils/date'
import Filtration from 'widgets/Filtration'
import Sorting from 'widgets/Sorting'
import PostPreview from 'widgets/PostPreview'
import Pagination from 'widgets/Pagination'
import { StyledWrapper, StyledPosts, StyledOptions, StyledPreviewWrapper } from './ui'

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

  const [sortingState, setSortingState] = useState<string | undefined>(undefined)

  const onSortingChange = (value: string) => {
    setSortingState(value)
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

  const sortedPosts = useMemo(() => {
    if (sortingState && processedPosts) {
      switch (sortingState) {
        case 'newOnesFirst':
          return processedPosts
        case 'oldOnesFirst':
          return [...processedPosts].sort((p1, p2) => +p1.date - +p2.date)
      }
    }

    return processedPosts
  }, [processedPosts, sortingState])

  return (
    <StyledWrapper>
      {isPending ? (
        <div>Ожидание...</div>
      ) : (
        <StyledPosts>
          <StyledOptions>
            <Filtration onChange={onFiltrationChange} authors={authors} />
            <Sorting onChange={onSortingChange} />
          </StyledOptions>

          {!sortedPosts?.length ? (
            <h3>Нет постов</h3>
          ) : (
            sortedPosts.map(({ postId, title, description, author, date }) => (
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

          {pages > 1 && false && <Pagination max={pages} onChange={onPageChange} />}
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
