import { useEffect, useState } from "react"
const API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY

export function useFetchMoviesByGenre(genres, limit, page) {
   const [movies, setMovies] = useState([])
   const [pageInfo, setPageInfo] = useState({})
   const [error, setError] = useState([])
   const [loading, setLoading] = useState(false)
   const genrePath = genres.map(item => `&genres.name=${item.name}`).join('')
   
      useEffect(() => {
         async function fetchData() {
            try {
               setLoading(true)
               const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=${limit}&notNullFields=name&notNullFields=top250&notNullFields=description&notNullFields=year&notNullFields=countries.name&notNullFields=genres.name&notNullFields=ageRating&notNullFields=rating.kp&notNullFields=poster.url&rating.kp=8-10${genrePath}`, {
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
               setPageInfo({page: data.page, pages: data.pages})
            }
            catch(e) {
               setLoading(false)
               setError(e)
            }
         }

      fetchData()
      }, [genrePath, limit, page])

   return {movies, loading, error, pageInfo}
}
