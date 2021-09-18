import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
  },
  reducers: {
    auth: state => {
      state.isAuth = true;
    },
  },
});

const userReducer = userSlice.reducer;
export const { auth } = userSlice.actions;
export default userReducer;
