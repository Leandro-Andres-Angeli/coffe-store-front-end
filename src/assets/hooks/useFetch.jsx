import { useCallback, useEffect } from 'react';

const initialState = {
  result: [],
  loading: false,
  success: false,
  done: false,
};
const useFetch = async (url, dispatcher, type) => {
  //   const [data, setData] = useState(initialState);

  const fetchData = useCallback(
    async (url, dispatcherArg) => {
      dispatcher({ type: 'loading' });
      try {
        const res = await fetch(url);
        const result = await res.json();
        console.log(result);
        if (!res.ok) {
          return;
        }
        console.log(result);
        dispatcherArg({
          type,
          payload: {
            ...initialState,

            result: result.categories,
            success: true,
            done: true,
            error: false,
            loading: false,
          },
        });
      } catch (error) {
        dispatcherArg({
          type: 'error',
          payload: {
            ...initialState,
            result: [],
            done: true,
            success: false,
            error: true,
            loading: false,
          },
        });
      }
    },
    [dispatcher, type]
  );
  // const cachedFetchData = useMemo((url, dispatcher) => {
  //    fetchData(url, dispatcher);
  // }, [fetchData]);
  // const memoizedFetch = useMemo(
  //   (url, dispatcher) => fetchData(url, dispatcher),
  //   [fetchData]
  // );
  // const cachedFetchData = useCallback(
  //   (url, dispatcher) => {
  //     memoizedFetch(url, dispatcher);
  //   },
  //   [memoizedFetch]
  // );

  // useEffect(() => {
  //   cachedFetchData(url, dispatcher);
  // }, [cachedFetchData, url, dispatcher]);
  useEffect(() => {
    fetchData(url, dispatcher);
    console.log('render');
  }, [url, dispatcher, fetchData]);
};

export default useFetch;
