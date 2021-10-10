import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { setSelectedCategory } from "../../../redux/selectedCategorySlice";
import { useAppDispatch } from "../../../redux/store";
import { QuizCategory } from "../../../types/global";
import { Categories } from "../../organisms/Categories/Categories";

const HomeBottomContainer = styled.div`
  margin-top: 144px;
  display: flex;
  justify-content: center;
`;

const StartButton = styled.button`
  width: 25%;
  background-color: transparent;
`;

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

  // TODO: Add UI elements for handling missing input
  const handleOnStartClick = useCallback(() => {
    if (!isCategorySelected) {
      console.log("Please select quiz category");
    }

    if (!isDifficultySelected) {
      console.log("Please select difficulty level");
    }

    if (isCategorySelected && isDifficultySelected) {
      history.push("/quiz");
    }
  }, [isCategorySelected, isDifficultySelected]);

  return (
    <>
      <Categories onSelect={handleSelectCategory} />
      <HomeBottomContainer>
        <StartButton onClick={handleOnStartClick}>Start Quiz</StartButton>
      </HomeBottomContainer>
    </>
  );
};
