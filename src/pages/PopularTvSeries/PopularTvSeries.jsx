import { useFetchPopularMoviesByCategory } from '../PopularMovies/useFetchPopularMoviesByCategory'
import styles from './PopularTvSeries.module.css'

export default function PopularTvSeries() {
  
  const {movies, error, loading} = useFetchPopularMoviesByCategory('tv-series', 20)

  return (
    <div className={styles.movieSearchCards}>{movies.map(movie => (
      <MovieSearchCard movie={movie}/>
      ))}
    </div>
  )
}