import axios from 'axios';

const api = axios.create({
  baseURL: 'http://18.191.111.54:1337',
});

export default api;
