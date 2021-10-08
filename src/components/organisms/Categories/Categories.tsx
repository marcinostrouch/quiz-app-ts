import React from "react";
import styled from "styled-components";
import { CategoryCard } from "../../molecules/CategoryCard/CategoryCard";

const CategoriesContainer = styled.div`
  height: 30vh;
  background-color: #313131;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Categories = () => {
  return (
    <>
      <h1>Quiz Categories</h1>
      <CategoriesContainer>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </CategoriesContainer>
    </>
  );
};
