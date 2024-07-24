import { useCallback, useEffect, useState } from 'react';

const initialState = {
  result: [],
  loading: false,
  success: false,
  done: false,
};
const useFetch = async (url, dispatcher) => {
  //   const [data, setData] = useState(initialState);
  const fetchData = async (url, dispatcher) => {
    try {
      const res = await fetch(url);
      const result = await res.json();

      if (!res.ok) {
        return;
      }

      dispatcher({ ...initialState, result, success: true });
    } catch (error) {
      dispatcher((prev) => ({ ...prev, success: false, error: true }));
    } finally {
      dispatcher((prev) => ({ ...prev, done: true, loading: false }));
    }
  };
  const cachedFetchData = useCallback(
    (url) => {
      fetchData(url, dispatcher);
    },
    [dispatcher]
  );

  useEffect(() => {
    cachedFetchData(url);
    console.log('render');
  }, [cachedFetchData, url]);
};

export default useFetch;
