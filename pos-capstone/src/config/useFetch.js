import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, method = 'GET', body = null) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request({
          url,
          method,
          data: body
        });

        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, body]);

  return { data, isLoading, error };
};

export default useFetch;