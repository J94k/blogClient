import { FC } from 'react'
import { StyledOverlay, StyledSnowFlake } from './ui'

export interface ShellProps {
  children?: React.ReactNode
}

const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const SnowFlakesBackground: FC = () => {
  const snowFlakes = Array.from(Array(50)).map((_, i) => {
    const size = random(1, 4) * 0.08

    return (
      <StyledSnowFlake
        key={i}
        size={size}
        opacity={random(10, 40)}
        left={random(1, 100)}
        animationTime={5 + random(1, 30)}
        animetionDelay={random(1, 10)}
      />
    )
  })

  return <StyledOverlay>{snowFlakes}</StyledOverlay>
}

export default SnowFlakesBackground
