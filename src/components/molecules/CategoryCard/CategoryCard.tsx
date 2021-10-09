import React from "react";
import styled from "styled-components";
import { QuizCategory } from "../../../types/global";

const CategoryCardContainer = styled.div<{ isSelected: boolean }>`
  height: 150px;
  width: 200px;
  background-color: ${({ isSelected }) => (isSelected ? "#930000" : "black")};
  color: white;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 5px white;
  transition: transform 50ms ease;

  :hover {
    cursor: pointer;
    background-color: #930000;
    transform: scale(1.05);
  }
`;

type CategoryCardProps = {
  category: QuizCategory;
  idx: number;
  onSelect: (category: QuizCategory) => void;
  selectedCategoryId: number;
};

export const CategoryCard = ({ category, idx, onSelect, selectedCategoryId }: CategoryCardProps) => {
  const { id, name } = category;

  return (
    <CategoryCardContainer onClick={() => onSelect(category)} isSelected={id === selectedCategoryId}>
      <h2>{`${idx + 1}. ${name}`}</h2>
    </CategoryCardContainer>
  );
};
