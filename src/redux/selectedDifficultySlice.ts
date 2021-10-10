import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DIFFICULTY_EASY } from "../constants/constants";

type SliceState = string;
type Payload = SliceState;

export const selectedDifficultySlice = createSlice({
  name: "selectedDifficulty",
  initialState: DIFFICULTY_EASY as SliceState,
  reducers: {
    setSelectedDifficulty: (state, { payload }: PayloadAction<Payload>) => payload,
  },
});

export const { setSelectedDifficulty } = selectedDifficultySlice.actions;
export default selectedDifficultySlice.reducer;
