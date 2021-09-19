import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuth: false,
    user: null,
  },
  reducers: {
    auth: state => {
      state.isAuth = true;
    },
    logout: state => {
      state.isAuth = false;
      state.user = null;
    },
    setUser: (state, {payload}) => {
      state.user = payload;
    },
  },
});

const userReducer = userSlice.reducer;
export const {auth, logout, setUser} = userSlice.actions;
export default userReducer;
