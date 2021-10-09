import { configureStore } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import quizCategoriesReducer from "./quizCategoriesSlice";
import selectedCategoryReducer from "./selectedCategorySlice";
import setSelectedDifficultyReducer from "./selectedDifficultySlice";

const store = configureStore({
  reducer: {
    quizCategories: quizCategoriesReducer,
    selectedCategory: selectedCategoryReducer,
    selectedDifficulty: setSelectedDifficultyReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
