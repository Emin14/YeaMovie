import { Outlet } from "react-router";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <ContentWrapper className={styles.wrapper}>
          <Outlet />
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
