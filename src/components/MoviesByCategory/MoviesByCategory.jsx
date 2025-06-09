import styles from "./MoviesByCategory.module.css";
import Filters from "../Filters/Filters";
import MoviesList from "../MoviesList/MoviesList";
import { useState } from "react";
import { useFetchFields } from "../SelectedMovies/useFetchFields";
import { useFetchMoviesByFilters } from "./useFetchMoviesByFilters";

export default function MoviesByCategory() {
  const { data: genres } = useFetchFields("genres.name");
  const { data: countries } = useFetchFields("countries.name");

  const filtersData = {
    years: Array(46)
      .fill(null)
      .map((__, index) => index + 1980),
    rating: Array(9)
      .fill(null)
      .map((__, index) => index + 1),
    genres,
    countries,
  };
  const [selectedFilters, setSelectedFilters] = useState({
    genre: "",
    country: "",
    year: "",
    rating: "",
  });

  const { movies } = useFetchMoviesByFilters(selectedFilters, 8);

  return (
    <div className={styles.moviesByCategory}>
      <button className={styles.btn}>Фильмы по категориям</button>
      <Filters
        filtersData={filtersData}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <div className={styles.next}>
        <button>Смотреть все</button>
        <svg
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="-0.5"
            x2="9.21954"
            y2="-0.5"
            transform="matrix(0.650791 0.759257 -0.650791 0.759257 1 1)"
            stroke="#080423"
          />
          <line
            y1="-0.5"
            x2="9.21954"
            y2="-0.5"
            transform="matrix(0.650791 -0.759257 0.650791 0.759257 1 15)"
            stroke="#080423"
          />
        </svg>
      </div>
      <MoviesList movies={movies} quantity={4} filters={selectedFilters} />
    </div>
  );
}
