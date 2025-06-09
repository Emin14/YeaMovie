import { useSearchParams } from "react-router";
import { useFetchSearchMovies } from "./useFetchSearchMovies";
import MovieSearchCard from "../../components/MovieSearchCard/MovieSearchCard";
import styles from "./MoviesSearch.module.css";
import Spinner from "../../components/Spinner/Spinner";
import NotFindMovies from "../../components/NotFindMovies/NotFindMovies";

export default function MoviesSearch() {
  const [searchParams] = useSearchParams();
  const movieTitle = searchParams.get("q");
  const { movies, loading } = useFetchSearchMovies(movieTitle);

  if (loading) {
    return <Spinner />;
  }

  if (!movies.length) {
    return <NotFindMovies movieTitle={movieTitle} />;
  }

  return (
    <div className={styles.movieCards}>
      {movies.map((movie) => (
        <MovieSearchCard movie={movie} />
      ))}
    </div>
  );
}
