import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import config from 'config'
import store from 'app/store'
import Author from 'widgets/Author'
import Accordion from 'shared/components/Accordion'
import { LinkEmail } from 'shared/components/Link'
import { StyledWrapper, StyledTitle, StyledDescription, StyledSquad } from './ui'

const Squad: FC = () => {
  const authors = store.blog.authors

  return (
    <StyledWrapper>
      <StyledTitle>Кто в команде</StyledTitle>

      <StyledDescription>
        <Accordion
          title={'Хочешь стать автором?'}
          content={
            <>
              Заполнить форму или отправить требуемую информацию на почту (
              <LinkEmail to={config.CONNECTION_EMAIL}>Rat email</LinkEmail>). Данные проверяются в
              ручную, обмануть не получиться. Что и в какой форме нужно:
              <ol>
                <li>
                  Никнейм (обязательно). Что тебе угодно, не включающее твои данные. Там не должно
                  быть имен, фамилий, и тд.
                </li>
                <li>
                  История (опционально). Слово, предложение или абзац о тебе. На любую тему. Главное
                  чтобы там также не было твоих данных. Возможно просто указать какую-то любимую
                  цитату.
                </li>
                <li>
                  Интересы (обязательно). Коротко о том, что интересно и чем увлекаешься. О чем
                  собираешься писать.
                </li>
              </ol>
            </>
          }
        />
      </StyledDescription>

      <StyledSquad>
        {authors.map(({ nickname, story }, i) => (
          <Author key={i} nickname={nickname} story={story} />
        ))}
      </StyledSquad>
    </StyledWrapper>
  )
}

export default observer(Squad)
