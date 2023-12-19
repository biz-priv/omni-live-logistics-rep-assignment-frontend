import axios from "axios"

const fetchClient = () => {
  const defaultOptions = {
    baseURL: process.env.REACT_APP_BASE_URL,
  };
  let instance = axios.create(defaultOptions);
  return instance;
};

export const apiConfig = {
  get: async (path) => await fetchClient().get(path),
  post: async (path,body) => await fetchClient().post(path, body)
}