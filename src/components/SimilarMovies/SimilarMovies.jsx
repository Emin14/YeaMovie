import React, { useState } from 'react'
import { useFetchMoviesByGenre } from './useFetchMoviesByGenre'
import { movies } from './delete'
import MoviesList from '../MoviesList/MoviesList'
import styles from './SimilarMovies.module.css'
import DotPagination from '../dotPagination/dotPagination'

export default function SimilarMovies({genres}) {
   const [activePage, setActivePage] = useState(1)
   // const {movies, pageInfo} =  useFetchMoviesByGenre(genres, 4, activePage)
   const pageInfo = {
    "page": 1,
    "pages": 87
}
   console.log(movies)
   console.log(pageInfo)

  return (
   <div className={styles.similarMovies}>
      <h3 className={styles.title}>Возможно, вам понравится</h3>
      <MoviesList movies={movies}/>
      <DotPagination currentPage={pageInfo.page} totalPages={pageInfo.pages} setActivePage={setActivePage}/>
   </div>
  )
}
