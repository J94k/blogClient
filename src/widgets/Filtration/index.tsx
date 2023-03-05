import { FC, useState, useEffect, ChangeEvent } from 'react'
import { StyledWrapper, StyledItem, StyledSelect, StyledInputDate } from './ui'

const lastNumRegExp = /(\d+)(?!.*\d)/
const firstNumRegExp = /\d+/
const todaysDate = new Date().toLocaleDateString().replace(/\//g, '-')

// 'month-day-year' -> 'year-month-day'
const toFiltrationDate = (date: string): string => {
  if (!date) return ''

  const year = date.match(lastNumRegExp)?.[0] || ''
  const withoutYear = date.slice(
    0,
    year ? date.length - year.length - 1 : undefined
  )

  return `${year}-${withoutYear}`
}

// 'year-month-day' -> 'month-day-year'
const fromFiltrationDate = (date: string): string => {
  if (!date) return ''

  const year = date.match(firstNumRegExp)?.[0] || ''
  const withoutYear = date.slice(year ? year.length + 1 : 0)

  return `${withoutYear}-${year}`
}

type DefaultOptionState = ''

interface FiltrationState {
  author: string | DefaultOptionState
  date: string | DefaultOptionState
}

type Props = {
  authors: string[]
  onChange: (state: FiltrationState) => void
}

const Filtration: FC<Props> = ({ authors, onChange }) => {
  const [author, setAuthor] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    onChange({
      author,
      date: fromFiltrationDate(date),
    })
  }, [author, date])

  const selectAuthor = (event: ChangeEvent<HTMLSelectElement>) => {
    setAuthor(event?.target.value)
  }

  const selectDate = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event?.target.value)
  }

  return (
    <StyledWrapper>
      <StyledItem>
        Автор
        <StyledSelect name="author" onChange={selectAuthor}>
          <option value="">-</option>
          {authors.map((author, i) => (
            <option key={i} value={author}>
              {author}
            </option>
          ))}
        </StyledSelect>
      </StyledItem>
      <StyledItem>
        Дата
        <StyledInputDate
          type="date"
          min="2022-12-07"
          max={toFiltrationDate(todaysDate)}
          name="post date"
          onChange={selectDate}
        />
      </StyledItem>
    </StyledWrapper>
  )
}

export default Filtration
