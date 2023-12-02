import { createAsyncThunk } from '@reduxjs/toolkit';

import { usersApi } from 'src/api/users';
import { setIsUserCreated, setUserFormErrors, setUsersListMetaData } from './users.slice';
import { apiClient } from 'src/api/apiClient';

export const fetchUsersList = createAsyncThunk('users/fetch-users-list', async (data, thunkApi) => {
  try {
    const response = await usersApi.getUsersList(data);

    const payload = {
      page: response.data.page,
      total_pages: response.data.total_pages,
      total_users: response.data.total_users
    };

    thunkApi.dispatch(setUsersListMetaData(payload));

    return response.data.users;
  } catch (err) {
    console.warn(err);
  }
});

export const fetchMoreUsers = createAsyncThunk('users/fetch-more-users', async (data, thunkApi) => {
  try {
    const response = await usersApi.getUsersList(data);

    const payload = {
      page: response.data.page,
      total_pages: response.data.total_pages,
      total_users: response.data.total_users
    };

    thunkApi.dispatch(setUsersListMetaData(payload));

    return response.data.users;
  } catch (err) {
    console.warn(err);
  }
});

export const fetchUserPositions = createAsyncThunk('users/fetch-user-positions', async () => {
  try {
    const response = await usersApi.getUserPositions();

    return response.data.positions;
  } catch (err) {
    console.warn(err);
  }
});

export const createUser = createAsyncThunk('users/create-user', async (data, thunkApi) => {
  try {
    const { form, setFormData } = data;

    const tokenResponse = await usersApi.getUserToken();

    apiClient.setAuthToken(tokenResponse.data.token);

    await usersApi.createUser(form);

    setFormData({});
    thunkApi.dispatch(setUserFormErrors({}));
    thunkApi.dispatch(fetchUsersList({ page: 1, count: 6 }));
    thunkApi.dispatch(setIsUserCreated(true));
  } catch (err) {
    console.warn('createUser[err]', err.response.data.fails);

    thunkApi.dispatch(setUserFormErrors(err.response.data.fails ?? {}));
  }
});
