import { FC } from 'react'
import { StyledWrapper, StyledTitle, StyledDescription } from './ui'

const messages = {
  underConstruction: {
    title: '⚠️ В разработке',
    description:
      'Разработка идет полным ходом. Видишь проблему или баг? Происходят странности? Так и должно быть, все по плану. Все будет как надо через некоторое время!',
  },
}

type Props = {
  isVisible: boolean
  messageId: string
}

const Banner: FC<Props> = ({ messageId }) => {
  const message = messages[messageId as keyof typeof messages]

  return (
    <StyledWrapper>
      {message && (
        <>
          <StyledTitle>{message.title}</StyledTitle>
          <StyledDescription>{message.description}</StyledDescription>
        </>
      )}
    </StyledWrapper>
  )
}

export default Banner
