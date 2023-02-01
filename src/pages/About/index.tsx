import { ReactElement } from 'react'
import config from 'config'
import { LinkEmail } from 'shared/components/Link'
import { StyledWrapper, StyledSocialBlock } from './ui'

const About = (): ReactElement => {
  return (
    <StyledWrapper>
      <h2>Что за место. Зачем?</h2>
      <p>
        Просто так. Хотя может и не просто. Вся эта тема помогает в развитии разговорных навыков,
        умений контролировать мысли и фокусироваться. Поддержание и освоение технических навыков
        требуемых для создания всего что ты видишь также присутствует. В конце концов
        распространение &quot;полезной&quot; информации (все относительно, возможно эта инфа просто
        мусор). Вроде написал достаточно много, чтобы раздел не выглядел сильно пустым.
      </p>
      <p>
        Почему крысы? Потому что они крутые. Маленькие и хитрые. Не выделяются. Если этого не
        достаточно, то можешь в поисковой строке написать <b>&quot;почему крысы&quot;</b> или
        <b>&quot;why rats&quot;</b>.
      </p>
      <p>Но думаю это все равно никого не волнует 😶.</p>

      <StyledSocialBlock>
        Можешь связаться по почте:
        <LinkEmail to={config.CONNECTION_EMAIL}>Rat email</LinkEmail>
      </StyledSocialBlock>
    </StyledWrapper>
  )
}

export default About
