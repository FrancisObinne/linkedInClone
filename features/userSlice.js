import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  }
});

// Actions
export const { login, logout } = userSlice.actions;

// Selectors
export const selectUser = (state) => state.user.user;

// Reducer
export default userSlice.reducer;
