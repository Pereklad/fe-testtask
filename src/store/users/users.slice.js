import { createSlice } from '@reduxjs/toolkit';
import { createUser, fetchMoreUsers, fetchUserPositions, fetchUsersList } from './users.actions';

const initialState = {
  usersList: [],
  usersListMetaData: {},
  isLoadingUsersList: false,

  userPositions: [],
  isLoadingUserPositions: false,

  isLoadingCreateUser: false,
  userFormErrors: {},

  isUserCreated: false
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsersListMetaData: (state, action) => {
      state.usersListMetaData = action.payload;
    },

    setUserFormErrors: (state, action) => {
      state.userFormErrors = action.payload;
    },

    setIsUserCreated: (state, action) => {
      state.isUserCreated = action.payload;
    },

    clearUsersState: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsersList.pending, (state) => {
      state.isLoadingUsersList = true;
    });
    builder.addCase(fetchUsersList.fulfilled, (state, action) => {
      state.usersList = action.payload;
      state.isLoadingUsersList = false;
    });
    builder.addCase(fetchUsersList.rejected, (state) => {
      state.isLoadingUsersList = false;
    });

    builder.addCase(fetchMoreUsers.pending, (state) => {
      state.isLoadingUsersList = true;
    });
    builder.addCase(fetchMoreUsers.fulfilled, (state, action) => {
      state.usersList = [...state.usersList, ...action.payload];
      state.isLoadingUsersList = false;
    });
    builder.addCase(fetchMoreUsers.rejected, (state) => {
      state.isLoadingUsersList = false;
    });

    builder.addCase(fetchUserPositions.pending, (state) => {
      state.isLoadingUserPositions = true;
    });
    builder.addCase(fetchUserPositions.fulfilled, (state, action) => {
      state.userPositions = action.payload;
      state.isLoadingUserPositions = false;
    });
    builder.addCase(fetchUserPositions.rejected, (state) => {
      state.isLoadingUserPositions = false;
    });

    builder.addCase(createUser.pending, (state) => {
      state.isLoadingCreateUser = true;
    });
    builder.addCase(createUser.fulfilled, (state) => {
      state.isLoadingCreateUser = false;
    });
    builder.addCase(createUser.rejected, (state) => {
      state.isLoadingCreateUser = false;
    });
  }
});

export const { setUsersListMetaData, setUserFormErrors, setIsUserCreated, clearUsersState } =
  usersSlice.actions;

export default usersSlice.reducer;
