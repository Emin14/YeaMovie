import React from 'react'
import {useSearchParams } from 'react-router'
import { useFetchSearchMovies } from './useFetchSearchMovies'
import { movies } from './delete'
import MovieSearchCard from '../../components/MovieSearchCard/MovieSearchCard'
import styles from './MoviesSearch.module.css'
import Spinner from '../../components/Spinner/Spinner'

export default function MoviesSearch() {
  const [searchParams] = useSearchParams()
  const movieTitle = searchParams.get('q')
  console.log(movieTitle)
  //  const {movies, loading} = useFetchSearchMovies(movieTitle)
  
  console.log(movies)
  const loading = false

  if(loading) {
    return <Spinner />
  }
  return (
    <div className={styles.movieSearchCards}>{movies.map(movie => (
      <MovieSearchCard movie={movie}/>
    ))}</div>
  )
}

// Доделать, показывать что то, если фильмы не найдены
// Спиннер когда фильмы грузятся