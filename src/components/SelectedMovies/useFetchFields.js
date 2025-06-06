import { useEffect, useState } from "react"
const API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY
let cache = null

export function useFetchFields(field) {
   const [data, setData] = useState([])
   const [error, setError] = useState([])
   const [loading, setLoading] = useState(false)

      useEffect(() => {
         if(cache) {
            setData(cache)
            return
         }
         async function fetchData() {
            try {
               setLoading(true)
               const response = await fetch(`https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=${field}`, {
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
               let res = await response.json()
               res = res.map(item => {
                  if(item.name === 'animated-series') {
                     item.ruName = 'Мультсериал'
                  }
                  if(item.name === 'anime') {
                     item.ruName = 'Аниме'
                  }
                  if(item.name === 'cartoon') {
                     item.ruName = 'Мультфильм'
                  }
                  if(item.name === 'movie') {
                     item.ruName = 'Фильм'
                  }
                  if(item.name === 'tv-series') {
                     item.ruName = 'Tелесериал'
                  }
                  return item
               })
               setData(res)
               cache = res
            }
            catch(e) {
               setLoading(false)
               setError(e)
            }
         }

      fetchData()
      }, [field])
   
   return {data, loading, error}
}
