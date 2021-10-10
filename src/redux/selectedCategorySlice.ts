import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuizCategory } from "../types/global";

type SliceState = QuizCategory;
type Payload = SliceState;

export const selectedCategorySlice = createSlice({
  name: "selectedCategory",
  initialState: {} as SliceState,
  reducers: {
    setSelectedCategory: (state, { payload }: PayloadAction<Payload>) => ({ ...state, ...payload }),
    resetSelectedCategory: (state, { payload }: PayloadAction<Payload>) => payload,
  },
});

export const { setSelectedCategory, resetSelectedCategory } = selectedCategorySlice.actions;
export default selectedCategorySlice.reducer;
