import axios from 'axios';


const api = axios.create({
  baseURL: 'http://128.199.206.32:8000/api/v1/admin'
});

api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    config.headers.Authorization = token ;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {

      if (error.response.status === 401) {

        console.log('Token expired atau Unauthorized');
        alert('Token expired atau Unauthorized');
        sessionStorage.removeItem("token");
        window.location.href = '/login';

      }
    } else if (error.request) {
      console.log('Tidak ada respons dari server');
    } else {
      console.log('Terjadi kesalahan saat mengirim permintaan', error.message);
    }
    return Promise.reject(error);
  }
);


export default api;