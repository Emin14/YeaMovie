import { useEffect, useState } from "react"
const API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY

export function useFetchMoviesById(id, state) {
   const [movie, setMovie] = useState(null)
   const [error, setError] = useState([])
   const [loading, setLoading] = useState(false)

      useEffect(() => {
         if(!id) {
            return
         }
         if(state) {
            setMovie(state)
            return
         }
         async function fetchData() {
            try {
               setLoading(true)
               const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie/${id}`, {
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
               setMovie(data)
            }
            catch(e) {
               setLoading(false)
               setError(e)
            }
         }

      fetchData()
      }, [id])
   
   return {movie, loading, error}
}
