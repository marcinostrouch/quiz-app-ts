import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { QuizCategory } from "../../../types/global";
import { CategoryCard } from "../../molecules/CategoryCard/CategoryCard";
import { OnSelect } from "../../pages/Home/Home";
import { CategorySelectContainer, CategoryCardsContainer } from "./categoriesStyle";

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
