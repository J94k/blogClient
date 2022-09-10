import { NavLink } from 'solid-app-router'
import { useI18n } from '@solid-primitives/i18n'

export default function Navigation() {
  const [t] = useI18n()

  return (
    <div class="header__navigation-container">
      <nav class="navigation">
        <ul class="navigation__list">
          <li class="navigation__item">
            <NavLink href="/">{t('home')}</NavLink>
          </li>
          <li class="navigation__item">
            <NavLink href="/about">{t('about')}</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
