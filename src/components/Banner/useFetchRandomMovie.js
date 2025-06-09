import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY;
let cache = null;

export function useFetchRandomMovie() {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    if (cache) {
      setMovie(cache);
      return;
    }
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.kinopoisk.dev/v1.4/movie/random?notNullFields=name&notNullFields=shortDescription&notNullFields=rating.kp&notNullFields=backdrop.url&status=completed&year=${currentYear}`,
          {
            // const response = await fetch('https://api.kinopoisk.dev/v1.4/movie/random', {
            method: "GET",
            headers: {
              "X-API-KEY": API_KEY,
              accept: "application/json",
            },
          },
        );
        setLoading(false);
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data);
        }
        const data = await response.json();
        setMovie(data);
        cache = data;
        const timeoutId = setTimeout(() => {
          cache = null;
          clearTimeout(timeoutId);
        }, 120000);
      } catch (e) {
        setLoading(false);
        setError(e);
      }
    }

    fetchData();
  }, [currentYear]);

  return { movie, loading, error };
}
