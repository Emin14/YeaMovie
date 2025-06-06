import { useEffect, useState } from "react"
const API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY
let cache = {}

export function useFetchMoviesByFilters({year, rating, genre, country}, limit) {
   const [movies, setMovies] = useState([])
   const [error, setError] = useState([])
   const [loading, setLoading] = useState(false)
   
      useEffect(() => {
         const yearPath = year ? `&year=${year}` : ''
         const ratingPath = rating ? `&rating.kp=${rating}-10` : ''
         const genrePath = genre ? `&genres.name=${genre}` : ''
         const countryPath = country ? `&countries.name=${country}` : ''
         const attribute = yearPath + ratingPath + genrePath + countryPath
         if(cache[attribute]?.data && cache[attribute]?.limit === limit) {
            setMovies(cache[attribute].data)
            return
         }
         // console.log(year)
         // console.log(rating)
         // console.log(genres)
         // console.log(country)
         async function fetchData() {
            try {
               setLoading(true)
               const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie?page=1&limit=${limit}&notNullFields=name&notNullFields=top250&notNullFields=description&notNullFields=year&notNullFields=countries.name&notNullFields=genres.name&notNullFields=ageRating&notNullFields=rating.kp&notNullFields=poster.url${yearPath}${ratingPath}${genrePath}${countryPath}`, {
               method: 'GET',
               headers: {
               'X-API-KEY': API_KEY,
               accept: 'application/json'
               }
            })
               setLoading(false)
               if(!response.ok) {

                  throw new Error(`HTTP Error! status: ${response.status}`)
               }
               const data = await response.json()
               setMovies(data.docs)
               cache[attribute] = {data: data.docs, limit}
               const timeoutId = setTimeout(() => {
                  cache = null
                  clearTimeout(timeoutId)
               }, 300000);

               if(Object.keys(cache) > 10) {
                  cache = null
               }
            }
            catch(e) {
               setLoading(false)
               setError(e)
            }
         }

      fetchData()
      }, [year, rating, genre, country, limit])
   
   return {movies, loading, error}
}
