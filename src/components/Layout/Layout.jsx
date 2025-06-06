import React from 'react'
import { Outlet } from 'react-router'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import styles from './Layout.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
         <ContentWrapper className={styles.wrapper}>
            <Outlet />
         </ContentWrapper>
      </main>
      <Footer/>
    </>
  )
}

