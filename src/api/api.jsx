import axios from 'axios';

const baseAPI = (options) => {
  return axios.create({
    baseURL: `https://pre-onboarding-selection-task.shop/`,
    ...options,
  });
};

export const baseInstance = baseAPI();
