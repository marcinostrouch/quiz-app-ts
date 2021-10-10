import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const quizScoreSlice = createSlice({
  name: "quizScore",
  initialState: 0,
  reducers: {
    increaseScore: (state, { payload }: PayloadAction<undefined>) => state + 1,
  },
});

export const { increaseScore } = quizScoreSlice.actions;
export default quizScoreSlice.reducer;
