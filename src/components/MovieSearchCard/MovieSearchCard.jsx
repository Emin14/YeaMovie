import React from 'react'
import styles from './MovieSearchCard.module.css'
import Button from '../Button/Button'
import notPoster from '../../../public/notPoster.svg'
import { Link } from 'react-router'

export default function MovieSearchCard({movie}) {
   console.log(movie)

   let metadata = []
   if(movie) {
      metadata = [
      {data: movie.genres, ru: 'Жанр'},
      {data: movie.countries, ru: 'Страна'},
      {data: movie.year, ru: 'Год'},
      {data: movie.persons.find(item => item.enProfession === 'director')?.name, ru: 'Режисер'},
      {data: movie.persons.filter((item, index) => item.enProfession === 'actor' && index < 5), ru: 'В главных ролях'},
      ]
   }

   const poster = movie.poster.previewUrl || notPoster

  return (
      <Link to={`/film/${movie.id}`} className={styles.movieSearchCard}>
      <div className={styles.leftBlock}>
         <img src={poster} className={styles.banner} alt="" />
      </div>
      <div className={styles.rightBlock}>
         <div className={styles.header}>
            <h1 className={styles.title}>{movie.name}</h1>
            <div className={styles.ratings}>
               <p>
                  <span>Кинопоиск </span>
                  <span className={styles.ratingCount}>{(movie.rating.kp).toFixed(1)}/10</span>
               </p>
               <p>
                  <span>HMI </span>
                  <span className={styles.ratingCount}>{(movie.rating.imdb).toFixed(1)}/10</span>
               </p>
            </div>
         </div>
         <p className={styles.description}>{movie.description}</p>
         <MovieMetadataTable metadata={metadata}/>
         <div className={styles.footer}>
         <Button className={styles.watchBtn}>Смотреть</Button>
         <Button className={styles.favoritesBtn}>В избранное</Button>
         </div>
      </div>
   </Link>
  )
}
