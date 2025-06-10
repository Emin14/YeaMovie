import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY;
let cache = {};

export function useFetch(url, option, state) {
  const [data, setData] = useState(null);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageInfo, setPageInfo] = useState({});

  useEffect(() => {
    if (!option) {
      return;
    }
    if (state) {
      setData(state);
      return;
    }
    if (cache[option]) {
      setData(cache[option]);
      return;
    }
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(`${url}`, {
          method: "GET",
          headers: {
            "X-API-KEY": API_KEY,
            accept: "application/json",
          },
        });
        setLoading(false);
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data);
        }
        let data = await response.json();
        if (data.docs) {
          data = data.docs;
          setPageInfo({ page: data.page, pages: data.pages });
        }
        setData(data);
        cache[option] = data;
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
  }, [url, option, state]);

  return { data, loading, error, pageInfo };
}
