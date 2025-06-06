import styles from './PopularMovies.module.css'
import { useFetchPopularMoviesByCategory } from './useFetchPopularMoviesByCategory'

export default function PopularMovies() {
  const {movies, error, loading} = useFetchPopularMoviesByCategory('movie', 20)

  return (
    <div className={styles.movieSearchCards}>{movies.map(movie => (
      <MovieSearchCard movie={movie}/>
      ))}
    </div>
  )
}
