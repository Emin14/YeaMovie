import { useEffect, useState } from "react";
import MoviesList from "../MoviesList/MoviesList";
import Spinner from "../Spinner/Spinner";
import { useFetch } from "../../hooks/useFetch";
import { addTranslationIntoRussian } from "./utils";
import styles from "./SelectedMovies.module.css";

export default function SelectedMovies() {
  let { data: types = [] } = useFetch(
    "https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=type",
    "type",
  );
  types = types ?? [];
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    if (!types.length) {
      return;
    }
    types = addTranslationIntoRussian(types);
    setActiveCategory(types[0].slug);
  }, [types]);

  let { data: movies = [], loading } = useFetch(
    `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=8&sortField=rating.kp&sortType=-1&notNullFields=name&notNullFields=top250&notNullFields=description&notNullFields=year&notNullFields=countries.name&notNullFields=genres.name&notNullFields=ageRating&notNullFields=rating.kp&notNullFields=poster.url&type=${activeCategory}`,
    activeCategory,
  );
  movies = movies ?? [];

  return (
    <div className={styles.selectedMovies}>
      <div className={styles.categories}>
        {types.map((type) => {
          return (
            <button
              key={type.slug}
              className={`${styles.btn} ${type.slug === activeCategory && styles.active}`}
              onClick={() => setActiveCategory(type.slug)}
            >
              {type.ruName}
            </button>
          );
        })}
      </div>
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
      {loading ? (
        <Spinner />
      ) : (
        <MoviesList movies={movies} quantity={8} filters={activeCategory} />
      )}
    </div>
  );
}
