import { useEffect, useState } from "react"
const API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY

export function useFetchSearchMovies(movieTitle) {
   const [movies, setMovie] = useState([])
   const [error, setError] = useState([])
   const [loading, setLoading] = useState(false)
      useEffect(() => {
         if (!movieTitle) {
            return
         }
         
         async function fetchData() {
            try {
            setLoading(true)
            const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${movieTitle}`, {
               method: 'GET',
               headers: {
               'X-API-KEY': API_KEY,
               accept: 'application/json'
               }
            })
               setLoading(false)
               if(!response.ok) {
                  const data = await response.json()
                  throw new Error(data)
               }
               const data = await response.json()
               setMovie(data.docs)
            }
            catch(e) {
               console.log(e)
               console.log(e.message)
               setLoading(false)
               setError(e)
            }
         }

      fetchData()
      }, [movieTitle])
   
   return {movies, loading, error}
}
