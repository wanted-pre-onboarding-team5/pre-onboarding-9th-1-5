import axios from 'axios';

const todoInstance = axios.create({
  baseURL: process.env.REACT_APP_TODO_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

todoInstance.interceptors.request.use(setTokenConfig);

function setTokenConfig(config) {
  const token = localStorage.getItem('AUTH_TOKEN');
  config.headers.Authorization = token ? `Bearer ${token}` : null;
  return config;
}

export default todoInstance;
