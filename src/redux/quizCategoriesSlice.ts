import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuizCategory } from "../types/global";

type SliceState = QuizCategory[];
type Payload = SliceState;

export const quizCategoriesSlice = createSlice({
  name: "quizCategories",
  initialState: [] as SliceState,
  reducers: {
    addQuizCategories: (state, { payload }: PayloadAction<Payload>) => {
      return [...state, ...payload];
    },
  },
});

export const { addQuizCategories } = quizCategoriesSlice.actions;
export default quizCategoriesSlice.reducer;
