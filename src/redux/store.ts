import { configureStore } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import { openTdbApi } from "../api/api";
import quizCategoriesReducer from "./quizCategoriesSlice";
import selectedCategoryReducer from "./selectedCategorySlice";
import setSelectedDifficultyReducer from "./selectedDifficultySlice";
import increaseScoreReducer from "./quizScoreSlice";

const store = configureStore({
  reducer: {
    [openTdbApi.reducerPath]: openTdbApi.reducer,
    quizCategories: quizCategoriesReducer,
    quizScore: increaseScoreReducer,
    selectedCategory: selectedCategoryReducer,
    selectedDifficulty: setSelectedDifficultyReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(openTdbApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
