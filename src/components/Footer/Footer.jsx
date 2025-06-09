import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { navLink } from "./data";
import Logo from "../Logo/Logo";
import { Link } from "react-router";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ContentWrapper className={styles.wrapper}>
        <Logo />
        <nav className={styles.navLink}>
          {navLink.map((item) => (
            <Link key={item.name} to={item.path}>
              {item.name}
            </Link>
          ))}
        </nav>
      </ContentWrapper>
    </footer>
  );
}
