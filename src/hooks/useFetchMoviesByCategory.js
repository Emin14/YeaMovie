import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY;
let cache = {};

export function useFetchMoviesByCategory(type, limit) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!type) {
      return;
    }
    if (cache[type]?.data && cache[type]?.limit === limit) {
      setMovies(cache[type].data);
      return;
    }
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=${limit}&sortField=rating.kp&sortType=-1&notNullFields=name&notNullFields=top250&notNullFields=description&notNullFields=year&notNullFields=countries.name&notNullFields=genres.name&notNullFields=ageRating&notNullFields=rating.kp&notNullFields=poster.url&type=${type}`,
          {
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
        setMovies(data.docs);
        cache[type] = { data: data.docs, limit };
        const timeoutId = setTimeout(() => {
          cache = {};
          clearTimeout(timeoutId);
        }, 600000);
      } catch (e) {
        setLoading(false);
        setError(e);
      }
    }

    fetchData();
  }, [type, limit]);

  return { movies, loading, error };
}
