import axios from "axios";
import React, { useEffect } from "react";
import "./App.css";
import { Routes } from "./routes/Routes";
import { GlobalStyle } from "./styles/globalStyles";

const OPEN_TDB_API_CATEGORY_URL = "https://opentdb.com/api_category.php";

const App = () => {
  useEffect(() => {
    const fetchCategories = async () => {
      const {
        data: { trivia_categories: triviaCategories },
      } = await axios.get(OPEN_TDB_API_CATEGORY_URL);

      console.log("triviaCategories ===", triviaCategories);
    };

    fetchCategories();
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
    </div>
  );
};

export default App;
