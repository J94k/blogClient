import { For } from 'solid-js'
import './index.css'
import { FaBrandsTelegramPlane } from 'solid-icons/fa'
import { FaBrandsRedditAlien } from 'solid-icons/fa'
import { BsDiscord } from 'solid-icons/bs'
import { AiOutlineMedium } from 'solid-icons/ai'
import { BiLogoInstagramAlt } from 'solid-icons/bi'
import { AiFillYoutube } from 'solid-icons/ai'
import { BiLogoFacebook } from 'solid-icons/bi'
import { AiTwotoneMail } from 'solid-icons/ai'
import { NAME, DESCRIPTION, SOCIAL_LINKS } from '../../constants'

const socialLink = (source: string) => {
  const SIZE = 30

  if (source.match(/t\.me/)) return <FaBrandsTelegramPlane size={SIZE} />
  if (source.match(/reddit/)) return <FaBrandsRedditAlien size={SIZE} />
  if (source.match(/discord/)) return <BsDiscord size={SIZE} />
  if (source.match(/medium/)) return <AiOutlineMedium size={SIZE} />
  if (source.match(/instagram/)) return <BiLogoInstagramAlt size={SIZE} />
  if (source.match(/youtube/)) return <AiFillYoutube size={SIZE} />
  if (source.match(/facebook/)) return <BiLogoFacebook size={SIZE} />
  if (source.match(/mail/)) return <AiTwotoneMail size={SIZE} />

  return null
}

export default function About() {
  return (
    <section class="about-container">
      <div class="about__content">
        {NAME && <h2 class="about__title">{NAME}</h2>}
        {DESCRIPTION && <p class="about__description">{DESCRIPTION}</p>}
      </div>

      {SOCIAL_LINKS.length && (
        <div class="about__social-links-container">
          <For each={SOCIAL_LINKS}>
            {({ name, source }) => {
              return (
                <a
                  class="footer__social-link"
                  href={source}
                  target="_blank"
                  rel="noopener"
                  title={name}
                >
                  {socialLink(source) || name}
                </a>
              )
            }}
          </For>
        </div>
      )}
    </section>
  )
}
