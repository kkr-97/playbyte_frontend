import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questionsSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    questions: questionReducer,
    user: userReducer,
  },
});

export default store;
