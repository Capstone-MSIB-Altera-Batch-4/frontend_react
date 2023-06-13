import axios from 'axios';

const token = 'your-bearer-token';

axios.interceptors.request.use(
  (config) => {

    config.headers.Authorization = {token};
    console.log('Interceptor - Permintaan: ', config);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
