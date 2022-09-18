import { createSignal, createEffect, For } from 'solid-js'
import { useI18n } from '@solid-primitives/i18n'
import locales from '../../../locales'

export default function LangSwitch() {
  const [, { locale }] = useI18n()

  const [currentLang, setCurrentLang] = createSignal(locales.defaultLangKey)
  const [showLangs, setShowLangs] = createSignal(false)

  createEffect(() => {
    locale(currentLang())
  })

  const toggleLangs = () => setShowLangs((current) => !current)
  const changeLang = (event) => {
    if (event.target.value) {
      setCurrentLang(event.target.value)
    }
  }

  return (
    <div class="header__lang-switch">
      <button onClick={toggleLangs}>{currentLang}</button>

      <ul onClick={changeLang} class={`header__lang-list ${showLangs() ? 'active' : ''}`}>
        <For each={locales.keys}>
          {(langKey) => (
            <li>
              <button value={langKey} class={`language-button ${currentLang() === langKey ? 'active' : ''}`}>
                {langKey}
              </button>
            </li>
          )}
        </For>
      </ul>
    </div>
  )
}
