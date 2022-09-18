import { createSignal } from 'solid-js'
import { NavLink } from 'solid-app-router'
import { useI18n } from '@solid-primitives/i18n'
import { FaSolidSun } from 'solid-icons/fa'
import { BsMoonStarsFill } from 'solid-icons/bs'
import { NAME } from '../../../shared/constants'
import { LOGO } from '../../assets'
import './index.css'
import LangSwitch from './LangSwitch'
import Navigation from './Navigation'

enum Theme {
  dark = 'dark',
  light = 'light',
}

export default function Header() {
  const [t, { add, locale, dict }] = useI18n()

  const [theme, setTheme] = createSignal(
    document.body.dataset?.scheme === 'dark' ? Theme.dark : Theme.light
  )

  const changeTheme = () => {
    const dataset = document.body.dataset

    if (!dataset?.scheme || dataset?.scheme === '') {
      dataset.scheme = 'dark'
      setTheme(Theme.dark)
    } else {
      dataset.scheme = ''
      setTheme(Theme.light)
    }
  }

  return (
    <header class="header">
      <div class="header__top">
        <NavLink href="/">
          <div class="header__logo-container">
            <img
              class="header__logo"
              src={theme() === Theme.dark ? LOGO.dark : LOGO.light}
              alt={`${NAME} logo`}
            />
            {NAME}
          </div>
        </NavLink>

        <div class="header__actions-wrapper">
          <LangSwitch />
          <button class="theme-button" onClick={changeTheme}>
            {theme() === Theme.dark ? (
              <FaSolidSun color="var(--text-color)" size={24} />
            ) : (
              <BsMoonStarsFill color="var(--text-color)" size={24} />
            )}
          </button>
        </div>
      </div>

      <Navigation />
    </header>
  )
}
