import { FC, MouseEvent, useState } from 'react'
import { StyledPagination, StyledPageItem } from './ui'

type Props = {
  min?: number
  max: number
  onChange: (currentPage: number) => void
  simpleMode?: boolean
}

const Pagination: FC<Props> = ({ min = 1, max, onChange }) => {
  const [currentPage, setCurrentPage] = useState(min)

  const selectPage = (event: MouseEvent<HTMLUListElement>) => {
    event.preventDefault()

    const pageItem = event.target as HTMLLIElement

    if (pageItem.value !== currentPage) {
      setCurrentPage(pageItem.value)
      onChange(pageItem.value)
    }
  }

  return (
    <StyledPagination onClick={selectPage}>
      {[...Array(max).keys()].map((i) => {
        const p = i + 1

        return (
          <StyledPageItem key={p} value={p} active={p === currentPage}>
            {p}
          </StyledPageItem>
        )
      })}
    </StyledPagination>
  )
}

export default Pagination
