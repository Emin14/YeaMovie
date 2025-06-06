import React from 'react'
import styles from './Footer.module.css'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import { navLink } from './data'
import Logo from '../Logo/Logo'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ContentWrapper className={styles.wrapper}>
        <Logo/>
        <nav className={styles.navLink}>
          {navLink.map(item => (
            <a href="#">{item}</a>
          ))}
        </nav>
      </ContentWrapper>
    </footer>
  )
}
