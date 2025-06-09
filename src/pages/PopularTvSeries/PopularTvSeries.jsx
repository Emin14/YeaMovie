import MovieSearchCard from "../../components/MovieSearchCard/MovieSearchCard";
import { useFetchMoviesByCategory } from "../../hooks/useFetchMoviesByCategory";
import styles from "./PopularTvSeries.module.css";

export default function PopularTvSeries() {
  const { movies } = useFetchMoviesByCategory("tv-series", 20);

  return (
    <div className={styles.movieCards}>
      {movies.map((movie) => (
        <MovieSearchCard movie={movie} />
      ))}
    </div>
  );
}
