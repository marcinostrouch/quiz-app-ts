import { configureStore } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import { openTdbApi } from "../api/api";
import quizCategoriesReducer from "./quizCategoriesSlice";
import selectedCategoryReducer from "./selectedCategorySlice";
import setSelectedDifficultyReducer from "./selectedDifficultySlice";

const store = configureStore({
  reducer: {
    quizCategories: quizCategoriesReducer,
    selectedCategory: selectedCategoryReducer,
    resetSelectedCategory: setSelectedDifficultyReducer,
    selectedDifficulty: setSelectedDifficultyReducer,
    [openTdbApi.reducerPath]: openTdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(openTdbApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
