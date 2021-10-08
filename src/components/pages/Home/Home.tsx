import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { QuizCategory } from "../../../types/global";
import { Categories } from "../../organisms/Categories/Categories";

export type OnSelect = (selectedCategory: QuizCategory) => void;

export const Home = () => {
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const history = useHistory();

  const handleSelectCategory = useCallback<OnSelect>((selectedCategory: QuizCategory) => {
    console.log("selectedCategory ===", selectedCategory);
    setIsCategorySelected(true);
  }, []);

  const handleOnClick = useCallback(() => {
    history.push("/quiz");
  }, []);

  return (
    <>
      <Categories onSelect={handleSelectCategory} />
      <button onClick={handleOnClick}>Start Quiz</button>
    </>
  );
};
