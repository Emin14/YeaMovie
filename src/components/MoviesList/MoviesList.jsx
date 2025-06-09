import MovieCard from "../MovieCard/MovieCard";
import styles from "./MoviesList.module.css";

export default function MoviesList({ movies }) {
  return (
    <div className={styles.movies}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.name}
          img={movie.poster.url}
          release={movie.year}
          rating={movie.rating.kp}
        />
      ))}
    </div>
  );
}
