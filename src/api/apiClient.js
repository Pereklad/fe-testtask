import axios from 'axios';

import { APP_API_URL } from 'src/constants';

const axiosClient = axios.create({
  baseURL: APP_API_URL
});

axiosClient.defaults.headers.common = {
  'Content-Type': 'application/json'
};

const get = async (URL, params) => {
  return await axiosClient.get(`${URL}`, { params }).then((response) => response);
};

const post = async (URL, payload) => {
  return await axiosClient.post(`${URL}`, payload).then((response) => response);
};

const postFormData = async (URL, payload) => {
  return await axiosClient
    .post(`${URL}`, payload, { headers: { 'Content-Type': 'multipart/form-data' } })
    .then((response) => response);
};

const patch = async (URL, payload) => {
  return await axiosClient.patch(`${URL}`, payload).then((response) => response);
};

const _delete = async (URL) => {
  return await axiosClient.delete(`${URL}`).then((response) => response);
};

const setAuthToken = (token) => {
  axiosClient.defaults.headers.common = {
    Token: `${token}`
  };
};

export const apiClient = {
  post,
  postFormData,
  get,
  patch,
  _delete,
  setAuthToken
};
