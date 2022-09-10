import { NAME } from '../../../shared/constants'
import './index.css'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer class="footer">
      <span class="footer__copyright">
        Copyright © {currentYear} {NAME}
      </span>
    </footer>
  )
}
