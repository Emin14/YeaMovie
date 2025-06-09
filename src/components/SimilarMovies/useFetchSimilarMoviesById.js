import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY;

export function useFetchSimilarMoviesById(id, limit, page) {
  const [movies, setMovies] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=${limit}&notNullFields=name&notNullFields=top250&notNullFields=description&notNullFields=year&notNullFields=countries.name&notNullFields=genres.name&notNullFields=ageRating&notNullFields=rating.kp&notNullFields=poster.url&rating.kp=8-10&similarMovies.id=${id}`,
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
        setPageInfo({ page: data.page, pages: data.pages });
      } catch (e) {
        setLoading(false);
        setError(e);
      }
    }

    fetchData();
  }, [id, limit, page]);

  return { movies, loading, error, pageInfo };
}
