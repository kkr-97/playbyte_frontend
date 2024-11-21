import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: null,
    isAuthenticated: false,
  },
  reducers: {
    onSuccessfulLogin: (state, action) => {
      state.username = action.payload;
      state.isAuthenticated = true;
      console.log("Login Success");
    },
  },
});

export const { onSuccessfulLogin } = userSlice.actions;

export default userSlice.reducer;
