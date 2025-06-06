import React, { useEffect, useState } from 'react'
import styles from './SelectedMovies.module.css'
import MoviesList from '../MoviesList/MoviesList'
import { useFetchMoviesByCategory } from './useFetchMoviesByCategory'
import { useFetchFields } from './useFetchFields'
import Spinner from '../Spinner/Spinner'
import { types } from './dalete'
import { movies } from './dalete'

export default function SelectedMovies() {
   // console.log(categories)
   // console.log(categories[0].filter)

   const {data: types} = useFetchFields('type')
   const [activeCategory, setActiveCategory] = useState(null)

   useEffect(() => {
   if (!types.length) {
      return
    } 
   setActiveCategory(types[0].name);
  }, [types]);

   const {movies, error, loading} = useFetchMoviesByCategory(activeCategory, 8)
   // const loading = false

   console.log(movies)
   console.log(types)


  return (
    <div className={styles.selectedMovies}>
      <div className={styles.categories}>
         {types.map(type => {
            return (
            <button className={`${styles.btn} ${type.name === activeCategory && styles.active}`} onClick={() => setActiveCategory(type.name)}>
               {type.ruName}
            </button>
            )
         })}
      </div>
      <div className={styles.next}>
         <button>Смотреть все</button>
         <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-0.5" x2="9.21954" y2="-0.5" transform="matrix(0.650791 0.759257 -0.650791 0.759257 1 1)" stroke="#080423"/>
            <line y1="-0.5" x2="9.21954" y2="-0.5" transform="matrix(0.650791 -0.759257 0.650791 0.759257 1 15)" stroke="#080423"/>
         </svg>
      </div >
      {loading ?
      <Spinner /> :
      <MoviesList movies={movies} quantity={8} filters={activeCategory}/>}
    </div>
  )
}
