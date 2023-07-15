import { useState, useEffect, useRef } from 'react';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon-species';

function useFetch(initialUrl) {
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [isError, setIsError] = useState();
  const mounted = useRef(false);

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

    if (mounted.current) {
      fetchData();
    }
    mounted.current = true;
  }, [url]);

  return { data, isLoading, isError, setUrl };
}

export default useFetch;
