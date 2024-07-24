import { useCallback, useEffect } from 'react';

const initialState = {
  result: [],
  loading: false,
  success: false,
  done: false,
};
const useFetch = async (url, dispatcher) => {
  //   const [data, setData] = useState(initialState);
  const fetchData = async (url, dispatcherArg) => {
    try {
      const res = await fetch(url);
      const result = await res.json();

      if (!res.ok) {
        return;
      }
      console.log('ok');
      dispatcherArg({
        type: 'init',
        payload: {
          ...initialState,
          result,
          success: true,
          done: true,
          error: false,
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
        },
      });
    }
  };
  const cachedFetchData = useCallback((url, dispatcher) => {
    console.log(dispatcher);
    fetchData(url, dispatcher);
  }, []);

  useEffect(() => {
    cachedFetchData(url, dispatcher);
    console.log('render');
  }, [cachedFetchData, url, dispatcher]);
};

export default useFetch;
