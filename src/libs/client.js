import axios from 'axios';
import config from '../config';
const { token } = config;

const client = axios.create({
  baseURL: config.baseURL,
  transformResponse: [
    /**
     * Fail safe
     */
    (data) => {
      let response;

      if (data) {
        try {
          response = JSON.parse(data);
        } catch {
          return data;
        }
      }

      return response;
    },
  ],
})

client.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.token = token;
    }

    return config;
  },
  err => Promise.reject(err),
);

export default client;