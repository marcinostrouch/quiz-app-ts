import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = string;
type Payload = SliceState;

export const selectedDifficultySlice = createSlice({
  name: "selectedDifficulty",
  initialState: "" as SliceState,
  reducers: {
    setSelectedDifficulty: (state, { payload }: PayloadAction<Payload>) => payload,
  },
});

export const { setSelectedDifficulty } = selectedDifficultySlice.actions;
export default selectedDifficultySlice.reducer;
