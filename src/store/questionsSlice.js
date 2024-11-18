import { createSlice } from "@reduxjs/toolkit";
import { questions } from "./data";

const questionSlice = createSlice({
  name: "questions",
  initialState: {
    questions,
    currentQuestion: {},
  },
  reducers: {
    onSelectQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
  },
});

export const { onSelectQuestion } = questionSlice.actions;

export default questionSlice.reducer;
