import { useSearchParams } from "react-router";
import MovieSearchCard from "../../components/MovieSearchCard/MovieSearchCard";
import Spinner from "../../components/Spinner/Spinner";
import NotFindMovies from "../../components/NotFindMovies/NotFindMovies";
import { useFetch } from "../../hooks/useFetch";
import styles from "./MoviesSearch.module.css";

export default function MoviesSearch() {
  const [searchParams] = useSearchParams();
  const movieTitle = searchParams.get("q");
  let { data: movies = [], loading } = useFetch(
    `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${movieTitle}`,
    movieTitle,
  );
  movies = movies ?? [];

  if (loading) {
    return <Spinner />;
  }

  if (!movies.length) {
    return <NotFindMovies movieTitle={movieTitle} />;
  }

  return (
    <div className={styles.movieCards}>
      {movies.map((movie) => (
        <MovieSearchCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
