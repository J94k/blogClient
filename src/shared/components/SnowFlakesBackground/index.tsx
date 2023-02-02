import { FC } from 'react'
import { StyledOverlay, StyledSnowFlake } from './ui'

export interface ShellProps {
  children?: React.ReactNode
}

const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const sizes: {
  size: number
  opacity: number
  left: number
  animationTime: number
  animetionDelay: number
}[] = Array.from(Array(50)).map(() => ({
  size: random(1, 4) * 0.08,
  opacity: random(10, 40),
  left: random(1, 100),
  animationTime: 8 + random(2, 30),
  animetionDelay: random(1, 11),
}))

const SnowFlakesBackground: FC = () => {
  const snowFlakes = sizes.map(({ size, opacity, left, animationTime, animetionDelay }, i) => (
    <StyledSnowFlake
      key={i}
      size={size}
      opacity={opacity}
      left={left}
      animationTime={animationTime}
      animetionDelay={animetionDelay}
    />
  ))

  return <StyledOverlay>{snowFlakes}</StyledOverlay>
}

export default SnowFlakesBackground
