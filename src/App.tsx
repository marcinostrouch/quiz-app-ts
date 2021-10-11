import axios from "axios";
import React, { useEffect } from "react";
import "./App.css";
import { ENTERTAINMENT_BOOKS, ENTERTAINMENT_FILM, ENTERTAINMENT_MUSIC, GENERAL_KNOWLEDGE } from "./constants/constants";
import { addQuizCategories } from "./redux/quizCategoriesSlice";
import { useAppDispatch } from "./redux/store";
import { Routes } from "./routes/Routes";
import { GlobalStyle } from "./styles/globalStyles";
import { QuizCategory } from "./types/global";

const OPEN_TDB_API_CATEGORY_URL = "https://opentdb.com/api_category.php";

const appCategoriesNames = [GENERAL_KNOWLEDGE, ENTERTAINMENT_BOOKS, ENTERTAINMENT_FILM, ENTERTAINMENT_MUSIC];

type AppCategoriesNames = string[];

const getQuizCategories = (categories: QuizCategory[], appCategoriesNames: AppCategoriesNames) => {
  return categories.filter(({ name }) => appCategoriesNames.includes(name));
};

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      const fetchCategories = async () => {
        const {
          data: { trivia_categories: triviaCategories },
        } = await axios.get(OPEN_TDB_API_CATEGORY_URL);

        dispatch(addQuizCategories(getQuizCategories(triviaCategories, appCategoriesNames)));
      };

      fetchCategories();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
    </div>
  );
};

export default App;
