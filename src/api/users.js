import { apiClient } from './apiClient';

const getUserToken = async () => {
  return await apiClient.get('/token');
};

const createUser = async (payload) => {
  return await apiClient.postFormData('/users', payload);
};

const getUsersList = async (params) => {
  return await apiClient.get('/users', params);
};

const getUserPositions = async () => {
  return await apiClient.get('/positions');
};

export const usersApi = {
  createUser,
  getUsersList,
  getUserPositions,
  getUserToken
};
