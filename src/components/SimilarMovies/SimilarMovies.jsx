import { useState } from "react";
import { useFetchSimilarMoviesById } from "./useFetchSimilarMoviesById";
import MoviesList from "../MoviesList/MoviesList";
import DotPagination from "../DotPagination/DotPagination";
import styles from "./SimilarMovies.module.css";


export default function SimilarMovies({ id }) {
  const [activePage, setActivePage] = useState(1);
  const { movies, pageInfo } = useFetchSimilarMoviesById(id, 4, activePage);

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
