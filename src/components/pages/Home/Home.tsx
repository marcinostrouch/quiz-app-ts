import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { PATH_QUIZ } from "../../../constants/constants";
import { resetSelectedCategory, setSelectedCategory } from "../../../redux/selectedCategorySlice";
import { RootState, useAppDispatch } from "../../../redux/store";
import { QuizCategory } from "../../../types/global";
import { Categories } from "../../organisms/Categories/Categories";
import { colours } from "../../../styles/colours";
import { breakpoints } from "../../../styles/breakpoints";

const HomeBottomContainer = styled.div`
  margin: 34px 0;
  padding-right: 5vw;
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-top: 144px;
    justify-content: right;
  }
`;

const StartButton = styled.button`
  width: 25%;
  height: 55px;
  background-color: transparent;
  border: 1px solid ${colours.greenDarkMoss};
  border-radius: 5px;

  :hover {
    background-color: ${colours.greenDarkMoss};
    cursor: pointer;
  }

  :disabled {
    cursor: not-allowed;
  }

  :hover:disabled::before {
    content: "Select category to ";
  }
`;

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
