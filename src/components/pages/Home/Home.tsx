import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { setSelectedCategory } from "../../../redux/selectedCategorySlice";
import { useAppDispatch } from "../../../redux/store";
import { QuizCategory } from "../../../types/global";
import { Categories } from "../../organisms/Categories/Categories";

export type OnSelect = (selectedCategory: QuizCategory) => void;

export const Home = () => {
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const history = useHistory();
  const dispatch = useAppDispatch();

  const handleSelectCategory = useCallback<OnSelect>((selectedCategory: QuizCategory) => {
    setIsCategorySelected(true);
    dispatch(setSelectedCategory(selectedCategory));
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
