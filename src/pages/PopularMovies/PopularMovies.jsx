import MovieSearchCard from "../../components/MovieSearchCard/MovieSearchCard";
import { useFetchMoviesByCategory } from "../../hooks/useFetchMoviesByCategory";
import styles from "./PopularMovies.module.css";

export default function PopularMovies() {
  const { movies } = useFetchMoviesByCategory("movie", 20);

  return (
    <div className={styles.movieCards}>
      {movies.map((movie) => (
        <MovieSearchCard movie={movie} />
      ))}
    </div>
  );
}
