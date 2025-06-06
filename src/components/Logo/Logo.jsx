import styles from './Logo.module.css'
import { Link } from 'react-router'
export default function Logo() {
  return (
      <Link to="/" className={styles.logo}>KinoMonster</Link>
  )
}
