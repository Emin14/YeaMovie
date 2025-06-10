import Button from "../Button/Button";
import notPoster from "../../../public/notPoster.svg";
import { Link } from "react-router";
import MovieMetadataTable from "../MovieMetadataTable/MovieMetadataTable";
import styles from "./MovieSearchCard.module.css";
import { getMovieMetadata } from "../../utils/getMovieMetadata";

export default function MovieSearchCard({ movie }) {
  const metadata = getMovieMetadata(movie);
  const poster = movie.poster?.previewUrl || notPoster;

  return (
    <Link to={`/film/${movie.id}`} className={styles.movieSearchCard}>
      <div className={styles.leftBlock}>
        <img src={poster} className={styles.banner} alt="" />
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.header}>
          <h1 className={styles.title}>{movie.name}</h1>
          <div className={styles.ratings}>
            <p>
              <span>Кинопоиск </span>
              <span className={styles.ratingCount}>
                {movie.rating.kp.toFixed(1)}/10
              </span>
            </p>
            <p>
              <span>HMI </span>
              <span className={styles.ratingCount}>
                {movie.rating.imdb.toFixed(1)}/10
              </span>
            </p>
          </div>
        </div>
        <p className={styles.description}>{movie.description}</p>
        <MovieMetadataTable metadata={metadata} className={styles.table} />
        <div className={styles.footer}>
          <Button className={styles.watchBtn}>Смотреть</Button>
          <Button className={styles.favoritesBtn}>В избранное</Button>
        </div>
      </div>
    </Link>
  );
}
