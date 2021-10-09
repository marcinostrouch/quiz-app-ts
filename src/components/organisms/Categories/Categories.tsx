import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../redux/store";
import { breakpoints } from "../../../styles/breakpoints";
import { QuizCategory } from "../../../types/global";
import { CategoryCard } from "../../molecules/CategoryCard/CategoryCard";
import { OnSelect } from "../../pages/Home/Home";

const CategorySelectContainer = styled.div`
  margin: 2rem 0;
  height: 40vh;

  h1 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    h1 {
      font-size: 2.1rem;
    }
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    //margin: 3.4rem;
    h1 {
      font-size: 3.4rem;
    }
  }
`;

const CategoryCardsContainer = styled.div`
  height: 30vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

type CategoriesProps = {
  onSelect: OnSelect;
};

export const Categories = ({ onSelect }: CategoriesProps) => {
  const {
    quizCategories,
    selectedCategory: { id: selectedCategoryId },
  } = useSelector((state: RootState) => state);

  return (
    <CategorySelectContainer>
      <h1>Quiz Categories</h1>
      <CategoryCardsContainer>
        {quizCategories.map((category: QuizCategory, idx) => (
          <CategoryCard {...{ category, idx, onSelect, selectedCategoryId }} />
        ))}
      </CategoryCardsContainer>
    </CategorySelectContainer>
  );
};
