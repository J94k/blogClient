import { FC, ChangeEvent } from 'react'
import { StyledWrapper, StyledItem, StyledSelect } from './ui'

const sortTypes = {
  newOnesFirst: {
    label: 'Сначала новые',
    value: 'newOnesFirst',
  },
  oldOnesFirst: {
    label: 'Сначала старые',
    value: 'oldOnesFirst',
  },
}

type Props = {
  onChange: (value: string) => void
}

const Sorting: FC<Props> = ({ onChange }) => {
  const setSortType = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event?.target.value)
  }

  return (
    <StyledWrapper>
      <StyledItem>
        Сортировка
        <StyledSelect onChange={setSortType}>
          {Object.values(sortTypes).map(({ label, value }, i) => (
            <option key={i} value={value}>
              {label}
            </option>
          ))}
        </StyledSelect>
      </StyledItem>
    </StyledWrapper>
  )
}

export default Sorting
