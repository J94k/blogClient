import { RefObject, useState } from 'react'
import useEventListener from './useEventListener'
import useDebounce from './useDebounce'

type Coordinate = number | undefined

function useMouseMove<T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T>,
  delay = 300
): { absoluteX: Coordinate; absoluteY: Coordinate } {
  const [absoluteX, setAbsoluteX] = useState<Coordinate>()
  const [absoluteY, setAbsoluteY] = useState<Coordinate>()

  const dAbsoluteX = useDebounce(absoluteX, delay)
  const dAbsoluteY = useDebounce(absoluteY, delay)

  const handleMouseMove = (event: MouseEvent) => {
    setAbsoluteX(event.clientX)
    setAbsoluteY(event.clientY)
  }

  document.addEventListener('mousemove', handleMouseMove)

  useEventListener('mousemove', handleMouseMove, elementRef)

  return { absoluteX: dAbsoluteX, absoluteY: dAbsoluteY }
}

export default useMouseMove
