import { FC, useState } from 'react'
import Modal from 'shared/components/Modal'
import icons from 'shared/assets/icons'
import {
  StyledWrapper,
  StyledCopyright,
  StyledPrivacy,
  StyledInfo,
  StyledHeader,
  StyledIcon,
} from './ui'

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
      <StyledHeader>
        <StyledIcon>
          <icons.Rat2 />
        </StyledIcon>
        <StyledCopyright>
          © {currentYear} {name}
        </StyledCopyright>
      </StyledHeader>

      <StyledPrivacy>
        <StyledInfo onClick={showToS}>Условия обслуживания</StyledInfo>
        <StyledInfo onClick={showPP}>Конфиденциальность</StyledInfo>
      </StyledPrivacy>

      <Modal
        visible={displayToS}
        maxWidth="40rem"
        title={<>Условия обслуживания</>}
        onClose={hideToS}
        content={<>Нет условий. Мы не обслуживаем.</>}
      />
      <Modal
        visible={displayPP}
        maxWidth="40rem"
        onClose={hidePP}
        title={<>Политика конфиденциальности</>}
        content={
          <>
            Не используем cookies, но есть некоторые метрики для проверки и
            улучшения работы приложения. К примеру, как быстро загружается
            главная страница или сколько времени занимают запросы к DNS. Также,
            возможно, хостинг и(или) люди &apos;посередине&apos; собирают
            какую-то информацию. И мы не можем отвечать за логи вашего интернет
            провайдера, конечно.
          </>
        }
      />
    </StyledWrapper>
  )
}

export default Footer
