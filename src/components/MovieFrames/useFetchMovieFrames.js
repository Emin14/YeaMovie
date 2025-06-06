import { useEffect, useState } from "react"
const API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY

export function useFetchMovieFrames(id) {
   const [images, setImages] = useState([])
   const [error, setError] = useState([])
   const [loading, setLoading] = useState(false)

      useEffect(() => {
         async function fetchData() {
            try {
               setLoading(true)
            const response = await fetch(`https://api.kinopoisk.dev/v1.4/image?page=1&limit=6&movieId=${id}`, {
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
               setImages(data.docs)
            }
            catch(e) {
               setLoading(false)
               setError(e)
            }
         }

      fetchData()
      }, [id])
   
   return {images, loading, error}
}
