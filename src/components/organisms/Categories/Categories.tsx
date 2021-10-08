import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../redux/store";
import { QuizCategory } from "../../../types/global";
import { CategoryCard } from "../../molecules/CategoryCard/CategoryCard";
import { OnSelect } from "../../pages/Home/Home";

const CategoriesContainer = styled.div`
  height: 30vh;
  background-color: #313131;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

type Categories = {
  onSelect: OnSelect;
};

export const Categories = ({ onSelect }: Categories) => {
  const { quizCategories } = useSelector((state: RootState) => state);

  return (
    <>
      <h1>Quiz Categories</h1>
      <CategoriesContainer>
        {quizCategories.map((category: QuizCategory, idx) => (
          <CategoryCard {...{ category, onSelect, idx }} />
        ))}
      </CategoriesContainer>
    </>
  );
};
