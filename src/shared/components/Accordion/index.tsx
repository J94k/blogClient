import { FC, ReactNode, useState } from 'react'
import { StyledAccordion, StyledButton, StyledContent } from './ui'

type Props = {
  title: string
  content: ReactNode
}

const Accordion: FC<Props> = ({ title, content }) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleContentVisibility = () => setIsVisible((prevState) => !prevState)

  return (
    <StyledAccordion isActive={isVisible}>
      <StyledButton isActive={isVisible} onClick={toggleContentVisibility}>
        {title}
      </StyledButton>
      <StyledContent isVisible={isVisible}>{content}</StyledContent>
    </StyledAccordion>
  )
}

export default Accordion
