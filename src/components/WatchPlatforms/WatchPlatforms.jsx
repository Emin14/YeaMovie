import { Link } from "react-router";
import styles from "./WatchPlatforms.module.css";

export default function WatchPlatforms({ platforms }) {
  return (
    <div>
      <p className={styles.watchTitle}>Смотреть на:</p>
      <div className={styles.watchabilityLogos}>
        {platforms.map((item) => (
          <Link key={item.name} to={item.url} target="_blank">
            <img className={styles.watchabilityLogo} src={item.logo.url} />
          </Link>
        ))}
      </div>
    </div>
  );
}
