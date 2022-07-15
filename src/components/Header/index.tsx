import { createSignal } from 'solid-js'
import { NAME } from '../../constants'
import { NavLink } from 'solid-app-router'
import { LOGO } from '../../assets'
import { FaSolidSun } from 'solid-icons/fa'
import { BsMoonStarsFill } from 'solid-icons/bs'
import './index.css'

enum Theme {
  dark = 'dark',
  light = 'light',
}

export default function Header() {
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
        <button class="theme-button" onClick={changeTheme}>
          {theme() === Theme.dark ? (
            <FaSolidSun color="var(--text-color)" size={24} />
          ) : (
            <BsMoonStarsFill color="var(--text-color)" size={24} />
          )}
        </button>
      </div>

      <div class="header__navigation-container">
        <nav class="navigation">
          <ul class="navigation__list">
            <li class="navigation__item">
              <NavLink href="/">Home</NavLink>
            </li>
            <li class="navigation__item">
              <NavLink href="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
