import { createSelector } from '@reduxjs/toolkit';

const getState = (state) => state.users;

export const usersListSelector = createSelector(getState, (state) => state.usersList);
export const usersListMetaDataSelector = createSelector(
  getState,
  (state) => state.usersListMetaData
);
export const isLoadingUsersListSelector = createSelector(
  getState,
  (state) => state.isLoadingUsersList
);

export const userPositionsSelector = createSelector(getState, (state) => state.userPositions);
export const isLoadingUserPositionsSelector = createSelector(
  getState,
  (state) => state.isLoadingUserPositions
);

export const userFormErrorsSelector = createSelector(getState, (state) => state.userFormErrors);
export const isLoadingCreateUserSelector = createSelector(
  getState,
  (state) => state.isLoadingCreateUser
);

export const isUserCreatedSelector = createSelector(getState, (state) => state.isUserCreated);
