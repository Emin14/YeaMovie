import MovieSearchCard from "../../components/MovieSearchCard/MovieSearchCard";
import { useFetch } from "../../hooks/useFetch";
import styles from "./PopularTvSeries.module.css";

export default function PopularTvSeries() {
  let { data: movies } = useFetch(
    `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=20&sortField=rating.kp&sortType=-1&notNullFields=name&notNullFields=top250&notNullFields=description&notNullFields=year&notNullFields=countries.name&notNullFields=genres.name&notNullFields=ageRating&notNullFields=rating.kp&notNullFields=poster.url&type=tv-series`,
    "tv-series",
  );
  movies = movies ?? [];

  return (
    <div className={styles.movieCards}>
      {movies.map((movie) => (
        <MovieSearchCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
