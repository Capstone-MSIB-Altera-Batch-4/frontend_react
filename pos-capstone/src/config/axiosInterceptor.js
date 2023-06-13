// import axios from 'axios';
import api from "./redux/api/api";

// request interceptor
api.interceptors.request.use(
  (config) => {
    console.log("kepanggil")
    const token = sessionStorage.getItem("token");
    config.headers.Authorization = { token };
    console.log('Interceptor - Permintaan: ', config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// // response interceptor
// api.interceptors.response.use(
//   (response) => {
//     // Tangani respons yang berhasil
//     return response;
//   },
//   (error) => {
//     // Tangani kesalahan pada respons
//     return Promise.reject(error);
//   }
// );
