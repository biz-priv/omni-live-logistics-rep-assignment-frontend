import axios from "axios"
import { fetchAuthSession } from "@aws-amplify/auth";

async function getUser() {
  const {
      tokens: { idToken = "" },
  } = await fetchAuthSession();
  return idToken.toString()
}

const fetchClient = async() => {
  const defaultOptions = {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers:{
      Authorization: await getUser(),
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers": "Content-Type", 
    }
  };
  let instance = axios.create(defaultOptions);
  return instance;
};

export const apiConfig = {
  get: async (path) => await (await fetchClient()).get(path),
  post: async (path,body) => await (await fetchClient()).post(path, body)
}