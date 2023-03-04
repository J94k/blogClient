import { FC, useState } from 'react'
import Modal from 'shared/components/Modal'
import { StyledWrapper, StyledCopyright, StyledPrivacy, StyledInfo } from './ui'

const currentYear = new Date().getFullYear()

type Props = {
  name: string
}

const Footer: FC<Props> = ({ name }) => {
  const [displayToS, setDisplayToS] = useState(false)
  const [displayPP, setDisplayPP] = useState(false)

  const showToS = () => setDisplayToS(true)
  const showPP = () => setDisplayPP(true)

  const hideToS = () => setDisplayToS(false)
  const hidePP = () => setDisplayPP(false)

  return (
    <StyledWrapper>
      <StyledCopyright>
        © {currentYear} {name}
      </StyledCopyright>
      <StyledPrivacy>
        <StyledInfo onClick={showToS}>Условия обслуживания</StyledInfo>
        <StyledInfo onClick={showPP}>Политика конфиденциальности</StyledInfo>
      </StyledPrivacy>

      <Modal
        visible={displayToS}
        title={<>Условия обслуживания</>}
        onClose={hideToS}
        content={<>Нет условий. Мы не обслуживаем.</>}
      />
      <Modal
        visible={displayPP}
        onClose={hidePP}
        title={<>Политика конфиденциальности</>}
        content={
          <>
            Нет логов или сбора данных. Не используем cookies. Но возможно
            хостинг и(или) люди &apos;посередине&apos; собирают какую-то
            информацию. Также мы не можем отвечать за логи вашего интернет
            провайдера.
          </>
        }
      />
    </StyledWrapper>
  )
}

export default Footer
