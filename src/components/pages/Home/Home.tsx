import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { PATH_QUIZ } from "../../../constants/constants";
import { resetSelectedCategory, setSelectedCategory } from "../../../redux/selectedCategorySlice";
import { RootState, useAppDispatch } from "../../../redux/store";
import { QuizCategory } from "../../../types/global";
import { Categories } from "../../organisms/Categories/Categories";
import { HomeBottomContainer, StartButton } from "./homeStyle";

export type OnSelect = (selectedCategory: QuizCategory) => void;

export const Home = () => {
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [isDifficultySelected, setIsDifficultySelected] = useState(false);

  const { selectedDifficulty } = useSelector((state: RootState) => state);

  const history = useHistory();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetSelectedCategory({} as QuizCategory));
  }, []);

  useEffect(() => {
    if (selectedDifficulty) {
      setIsDifficultySelected(true);
    }
  }, [selectedDifficulty]);

  const handleSelectCategory = useCallback<OnSelect>((selectedCategory: QuizCategory) => {
    setIsCategorySelected(true);
    dispatch(setSelectedCategory(selectedCategory));
  }, []);

  const handleOnStartClick = useCallback(() => {
    if (isCategorySelected) {
      history.push(PATH_QUIZ);
    }
  }, [isCategorySelected, isDifficultySelected]);

  return (
    <>
      <Categories onSelect={handleSelectCategory} />
      <HomeBottomContainer>
        <StartButton disabled={!isCategorySelected} onClick={handleOnStartClick}>
          Start Quiz
        </StartButton>
      </HomeBottomContainer>
    </>
  );
};
