import Button from "../Button/Button";
import { Link } from "react-router";
import styles from "./Banner.module.css";
import { useFetch } from "../../hooks/useFetch";

export default function Banner() {
  const currentYear = new Date().getFullYear();
  let { data: movie = {} } = useFetch(
    `https://api.kinopoisk.dev/v1.4/movie/random?notNullFields=name&notNullFields=shortDescription&notNullFields=rating.kp&notNullFields=backdrop.url&status=completed&year=${currentYear}`,
    "random",
  );
  movie = movie ?? {};

  return (
    <Link to={`/film/${movie.id}`} className={styles.banner} state={movie}>
      <div className={styles.leftColumn}>
        <p className={styles.info}>УЖЕ В КИНО</p>
        <h3 className={styles.title}>
          {movie.name} ({movie.year})
        </h3>
        <p className={styles.description}>{movie.shortDescription}</p>
        <Button className={styles.button}>Смотреть</Button>
      </div>
      <div className={styles.rightColumn}>
        <img src={movie.backdrop?.url} alt="" />
      </div>
    </Link>
  );
}
