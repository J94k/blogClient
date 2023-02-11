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
import { sortNewOnesFirst, sortOldOnesFirst } from './utils'
import { StyledWrapper, StyledPosts, StyledOptions, StyledPreviewWrapper } from './ui'

type FilterState = {
  author: string
  date: string
}

type Props = {
  authors: string[]
  pages: number
  isPending: boolean
}

const Blog: FC<Props> = ({ authors, pages, isPending }) => {
  const navigate = useNavigate()
  const onSelectPost = (id: string) => navigate(`/post/${id}`)

  const postPreviews = sortNewOnesFirst(store.blog.postPreviews)
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

  const processedPostPreviews = useMemo(() => {
    if (filtrationState && postPreviews?.length) {
      let updated = postPreviews

      if (filtrationState.author) {
        updated = filterByObjectKey<Post.Preview>({
          list: [...updated],
          key: 'author',
          target: filtrationState.author,
        })
      }

      if (filtrationState.date) {
        updated = filterByObjectKey<Post.Preview>({
          list: [...updated],
          key: 'date',
          valueFormatter: (v: unknown) => msToLocalDate(v as string),
          target: filtrationState.date.replace(/-/g, '.'),
        })
      }

      return updated
    }

    return postPreviews?.length ? sortNewOnesFirst(postPreviews) : []
  }, [filtrationState, postPreviews])

  const sortedPostPreviews = useMemo(() => {
    if (sortingState && processedPostPreviews) {
      switch (sortingState) {
        case 'newOnesFirst':
          return sortNewOnesFirst(processedPostPreviews)
        case 'oldOnesFirst':
          return sortOldOnesFirst(processedPostPreviews)
      }
    }

    return processedPostPreviews
  }, [processedPostPreviews, sortingState])

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

          {!sortedPostPreviews?.length ? (
            <h3>Нет постов</h3>
          ) : (
            sortedPostPreviews.map(({ postId, title, description, author, date, tags = [] }) => (
              <StyledPreviewWrapper key={postId}>
                <PostPreview
                  postId={postId}
                  title={title}
                  description={description}
                  author={author}
                  date={date}
                  onContinue={onSelectPost}
                  tags={tags}
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
    authors={store.blog.authors.map(({ nickname }) => nickname)}
    pages={store.blog.pages}
    isPending={store.blog.isPending}
  />
))
