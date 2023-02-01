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
}

const Modal: FC<Props> = ({ title, content, visible, onClose }) => {
  return visible ? (
    <StyledUnderlayer>
      <StyledModal>
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
