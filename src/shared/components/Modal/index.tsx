import { FC, ReactNode } from 'react'
import {
  StyledUnderlayer,
  StyledModal,
  StyledHeader,
  StyledTitle,
  StyledCloseButton,
  StyledContent,
} from './ui'

type Props = {
  title: ReactNode
  content: ReactNode
  visible: boolean
  onClose: VoidFunction
  maxWidth?: string
}

const Modal: FC<Props> = ({ title, content, visible, onClose, maxWidth }) => {
  return visible ? (
    <StyledUnderlayer>
      <StyledModal maxWidth={maxWidth}>
        <StyledHeader>
          <StyledTitle>{title}</StyledTitle>
          <StyledCloseButton title="закрыть окно" onClick={onClose}>
            X
          </StyledCloseButton>
        </StyledHeader>
        <StyledContent>{content}</StyledContent>
      </StyledModal>
    </StyledUnderlayer>
  ) : null
}

export default Modal
