import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY;
let cache = {};

export function useFetchMovieFrames(id) {
  const [images, setImages] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cache[id]) {
      setImages(cache[id]);
      return;
    }
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.kinopoisk.dev/v1.4/image?page=1&limit=6&movieId=${id}`,
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
        setImages(data.docs);
        cache[id] = data.docs;
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
  }, [id]);

  return { images, loading, error };
}
