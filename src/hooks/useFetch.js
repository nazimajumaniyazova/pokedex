import { useState, useEffect } from 'react';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon-species';

function useFetch(initialUrl) {
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [isError, setIsError] = useState();

  useEffect(() => {
    setIsError(undefined);
    setIsLoading(true);
    setData(undefined);
    const fetchData = async () => {
      const result = await fetch(url);
      const data = await result.json();
      if (result.ok) {
        setData(data.results);
      } else {
        setIsError(data);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, isLoading, isError, setUrl };
}

export default useFetch;
