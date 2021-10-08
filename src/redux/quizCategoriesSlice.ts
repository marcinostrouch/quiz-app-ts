import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuizCategory } from "../types/global";

type TPayload = QuizCategory[];

type SliceState = QuizCategory[];

export const quizCategoriesSlice = createSlice({
  name: "quizCategories",
  initialState: [] as SliceState,
  reducers: {
    addQuizCategories: (state, { payload }: PayloadAction<TPayload>) => {
      return [...state, ...payload];
    },
  },
});

export const { addQuizCategories } = quizCategoriesSlice.actions;
export default quizCategoriesSlice.reducer;
