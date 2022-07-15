import { NAME, SOCIAL_LINKS } from '../../constants'
import './index.css'


export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer class="footer">
      <span class="footer__copyright">
        Copyright © {currentYear} {NAME}
      </span>
    </footer>
  )
}
