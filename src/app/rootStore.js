import { configureStore } from '@reduxjs/toolkit';

import usersReducer from 'src/store/users';

export const rootStore = configureStore({
  reducer: {
    users: usersReducer
  }
});
