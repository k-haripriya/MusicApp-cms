import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User } from '../../Types/Types';

const initialState: AuthState={
    isAuthenticated:false,
    authToken:null,
    refreshToken:null,
    user:null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      loginSuccess: (state, action: PayloadAction<AuthState>) => {
        state.isAuthenticated = true;
        state.authToken = action.payload.authToken;
        state.refreshToken = action.payload.refreshToken;
        state.user = action.payload.user;
      },
      logoutSuccess: (state) => {
        state.isAuthenticated = false;
        state.authToken = null;
        state.refreshToken = null;
        state.user = null;
      },
    },
  });

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;