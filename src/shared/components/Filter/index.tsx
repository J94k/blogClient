import { createSignal, For } from 'solid-js'
import './index.css'

enum DateFlow {
  fromPresentToPast = 'fromPresentToPast',
  fromPastToPresent = 'fromPastToPresent',
}

export default function Filter(props) {
  const [dateFilter, setDateFilter] = createSignal(DateFlow.fromPresentToPast)

  const onChange = (event) => setDateFilter(event.target.value)

  return (
    <form class={`filter-container ${props.disabled ? 'disabled' : ''}`}>
      <select class="filter__date-select" onChange={onChange}>
        <option value="fromPresentToPast" selected>
          Newest first
        </option>
        <option value="fromPastToPresent">Oldest first</option>
      </select>

      {!!props.authors?.length && (
        <select class="filter__author-select" onChange={onChange}>
          <For each={props.authors}>
            {({ name }: { name: string }) => {
              return <option value={name}>{name}</option>
            }}
          </For>
        </select>
      )}
    </form>
  )
}
