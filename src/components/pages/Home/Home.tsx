import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { setSelectedCategory } from "../../../redux/selectedCategorySlice";
import { useAppDispatch } from "../../../redux/store";
import { QuizCategory } from "../../../types/global";
import { Categories } from "../../organisms/Categories/Categories";
import { DifficultyLevelSelect } from "../../organisms/DifficultyLevelSelect/DifficultyLevelSelect";

export type OnSelect = (selectedCategory: QuizCategory) => void;

export const Home = () => {
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [isDifficultySelected, setIsDifficultySelected] = useState(false);

  const history = useHistory();
  const dispatch = useAppDispatch();

  const handleSelectCategory = useCallback<OnSelect>((selectedCategory: QuizCategory) => {
    setIsCategorySelected(true);
    dispatch(setSelectedCategory(selectedCategory));
  }, []);

  const handleSelectDifficulty = useCallback(() => {
    setIsDifficultySelected(true);
  }, []);

  const handleOnStartClick = useCallback(() => {
    console.log({ isCategorySelected, isDifficultySelected });
    if (!isCategorySelected) {
      // Add UI element
      console.log("Please select quiz category");
    }

    if (!isDifficultySelected) {
      // Add UI element
      console.log("Please select difficulty level");
    }

    if (isCategorySelected && isDifficultySelected) {
      history.push("/quiz");
    }
  }, [isCategorySelected, isDifficultySelected]);

  return (
    <>
      <Categories onSelect={handleSelectCategory} />
      <DifficultyLevelSelect onDifficultySelect={handleSelectDifficulty} />
      <button onClick={handleOnStartClick}>Start Quiz</button>
    </>
  );
};
