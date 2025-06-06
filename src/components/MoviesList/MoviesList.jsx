import MovieCard from '../MovieCard/MovieCard'
import styles from './MoviesList.module.css'

export default function MoviesList({movies}) {

   console.log(movies)

   // const filteredMovies = movies.filter(movie => {
   //    let keys = Object.keys(filters)
   //    keys = keys.filter(key => filters[key])
   //    console.log(keys)

   //    return keys.every(key => {
   //       if(Array.isArray(movie[key])) {
   //          console.log(movie[key])
   //          console.log(filters[key])
   //          console.log(movie[key].includes(filters[key]))
   //          return movie[key].includes(filters[key])
   //       }
   //       else if(key === 'rating') {
   //          console.log(movie[key])
   //          console.log(filters[key])
   //          return movie[key] >= filters[key]
   //       }
   //       else if(key === 'release') {
   //          return movie[key] === +filters[key]
   //       }
   //       else {
   //          console.log(key)
   //          console.log(movie[key])
   //          console.log(filters[key])
   //          return movie[key] === filters[key]
   //       }
   //    })

   // })

   // console.log(filteredMovies)

  return (
   <div className={styles.movies}>
      {movies.map((movie) => (
         <MovieCard key={movie.id} id={movie.id} title={movie.name} img={movie.poster.url} release={movie.year} rating={movie.rating.kp}/>
      ))}
   </div>
  )
}
