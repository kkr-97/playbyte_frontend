import { createSlice } from "@reduxjs/toolkit";
import { questions } from "./data";

const questionSlice = createSlice({
  name: "questions",
  initialState: {
    questions,
    selectedQuestion: {},
  },
  reducers: {
    onSelectQuestion: (state, action) => {
      state.selectedQuestion = action.payload;
    },
  },
});

export const { onSelectQuestion, onAddAnswers } = questionSlice.actions;

export default questionSlice.reducer;
