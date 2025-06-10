import { useState } from "react";
import MoviesList from "../MoviesList/MoviesList";
import DotPagination from "../DotPagination/DotPagination";
import styles from "./SimilarMovies.module.css";
import { useFetch } from "../../hooks/useFetch";

export default function SimilarMovies({ id }) {
  const [activePage, setActivePage] = useState(1);
  let { data: movies = [], pageInfo } = useFetch(
    `https://api.kinopoisk.dev/v1.4/movie?page=${activePage}&limit=4&notNullFields=name&notNullFields=top250&notNullFields=description&notNullFields=year&notNullFields=countries.name&notNullFields=genres.name&notNullFields=ageRating&notNullFields=rating.kp&notNullFields=poster.url&rating.kp=8-10&similarMovies.id=${id}`,
    `similar-${id}`,
  );

  movies = movies ?? [];

  return (
    <div className={styles.similarMovies}>
      <h3 className={styles.title}>Возможно, вам понравится</h3>
      <MoviesList movies={movies} />
      <DotPagination
        currentPage={pageInfo.page}
        totalPages={pageInfo.pages}
        setActivePage={setActivePage}
      />
    </div>
  );
}
