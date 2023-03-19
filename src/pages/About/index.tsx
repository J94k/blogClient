import { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'
import config from 'config'
import { LinkEmail } from 'shared/components/Link'
import { StyledWrapper, StyledSocialBlock } from './ui'

const About = (): ReactElement => {
  return (
    <StyledWrapper>
      <Helmet>
        <title>Что такое Ratcloud и о чем этот сайт?</title>
      </Helmet>
      <h2>Что за место и зачем?</h2>
      <p>
        Место, которое появилось и, надеюсь, продолжит существовать для
        выражения персональных мыслей. Мыслей и мнений на определенные темы.
        Неясно какие темы будут затронуты в будущем. На данный момент это
        рассуждения о жизни и пережитом опыте, об IT сфере, о новостях.
      </p>
      <p>
        Если затрагивать личные навыки участвующие в создании и публикации
        контента, то это помогает работать с информацией, развивать разговорные
        навыки, прокачивает умение контролировать мысли и фокусироваться,
        помогает эффективнее использовать твой словарный запас. Поддержание и
        освоение технических навыков требуемых для создания всего что ты видишь
        также присутствует. В конце концов распространение, для кого-то,
        полезной информации. Хотя не стоит отрицать вероятность абсолютно
        бесполезного и мусорного контента. Всем ведь не угодишь.
      </p>
      <p>
        Почему крысы в основе центре событий? Честно говоря - это дело (моего)
        субъективного вкуса. Мне лично нравятся крысы. Не мыши, а крысы. Которые
        на улицах, в полях, в домах и прочих местах, где люди мягко говоря не
        приветливы к ним. Неизвестно направление их мыслей и через какую жизнь
        проходит каждая из них. Их недолюбливают, стараются держаться подальше
        или просто избавляются.
      </p>
      <p>
        Возможно все просто сводится к нездоровому желанию сделать поперек
        общественного мнения и выделиться. Но думаю это все равно никого не
        волнует 😶.
      </p>

      <StyledSocialBlock>
        Можешь связаться по почте:
        <LinkEmail to={config.CONNECTION_EMAIL}>Rat email</LinkEmail>
      </StyledSocialBlock>
    </StyledWrapper>
  )
}

export default About
