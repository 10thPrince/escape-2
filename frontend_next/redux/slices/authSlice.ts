import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  // define the properties of userInfo, for example:
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  userInfo: User | null;
}

const initialState: AuthState = {
  userInfo: null
};





const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: { payload: User }) => {
      state.userInfo = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('userInfo', JSON.stringify(action.payload));
      }
    },
    logout: (state) => {
      state.userInfo = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('userInfo');
      }
    }
  }
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
