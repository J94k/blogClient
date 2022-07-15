/* @refresh reload */
import { render } from 'solid-js/web'
import { Router } from 'solid-app-router'
import App from './App'
import './index.css'
import config from './config.json'

window.document.title = config.name

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root') as HTMLElement
)
