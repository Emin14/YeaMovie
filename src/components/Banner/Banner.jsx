import Button from "../Button/Button";
import { useFetchRandomMovie } from "./useFetchRandomMovie";
import { Link } from "react-router";
import styles from "./Banner.module.css";

export default function Banner() {
  const { movie } = useFetchRandomMovie();

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
