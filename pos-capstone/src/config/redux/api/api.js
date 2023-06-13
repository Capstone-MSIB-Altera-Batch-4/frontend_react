import axios from 'axios';

const api = axios.create({
  baseURL: 'http://128.199.206.32:8000/api/v1/admin'
});

export default api;