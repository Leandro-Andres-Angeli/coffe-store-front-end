import { useCallback, useEffect } from 'react';

const initialState = {
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

        if (!res.ok) {
          return;
        }

        dispatcherArg({
          type,
          payload: {
            ...initialState,

            data: result,
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

  useEffect(() => {
    fetchData(url, dispatcher);
    console.log('render');
  }, [url, dispatcher, fetchData]);
};

export default useFetch;
