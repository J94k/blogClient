/* @refresh reload */
import { render } from 'solid-js/web'
import { Router } from 'solid-app-router'
import App from './app/App'
import './index.css'

import locales from './locales'
import config from './config.json'

import { I18nContext, createI18nContext, useI18n } from "@solid-primitives/i18n";

window.document.title = config.name

const i18Context = createI18nContext(locales.dictionary, locales.defaultLangKey);

render(
  () => (
    <I18nContext.Provider value={i18Context}>
      <Router>
        <App />
      </Router>
    </I18nContext.Provider>
  ),
  document.getElementById('root') as HTMLElement
)
