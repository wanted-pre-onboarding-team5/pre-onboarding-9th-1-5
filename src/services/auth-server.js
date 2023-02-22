import axios from 'axios';

const authInstance = axios.create({
  baseURL: process.env.REACT_APP_AUTH_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

authInstance.interceptors.request.use(setTokenConfig);

function setTokenConfig(config) {
  const token = localStorage.getItem('AUTH_TOKEN');
  config.headers.Authorization = token ? `Bearer ${token}` : null;
  return config;
}

export default authInstance;
