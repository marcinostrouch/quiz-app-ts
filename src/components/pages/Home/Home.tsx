import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { setSelectedCategory } from "../../../redux/selectedCategorySlice";
import { RootState, useAppDispatch } from "../../../redux/store";
import { QuizCategory } from "../../../types/global";
import { Categories } from "../../organisms/Categories/Categories";

const HomeBottomContainer = styled.div`
  margin-top: 144px;
  padding-right: 5vw;
  display: flex;
  justify-content: right;
`;

const StartButton = styled.button`
  width: 25%;
  height: 55px;
  background-color: transparent;
  border: 1px solid #59632c;
  border-radius: 5px;
`;

export type OnSelect = (selectedCategory: QuizCategory) => void;

export const Home = () => {
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [isDifficultySelected, setIsDifficultySelected] = useState(false);

  const { selectedDifficulty } = useSelector((state: RootState) => state);

  const history = useHistory();
  const dispatch = useAppDispatch();

  const handleSelectCategory = useCallback<OnSelect>((selectedCategory: QuizCategory) => {
    setIsCategorySelected(true);
    dispatch(setSelectedCategory(selectedCategory));
  }, []);

  useEffect(() => {
    if (selectedDifficulty) {
      setIsDifficultySelected(true);
    }
  }, [selectedDifficulty]);

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
