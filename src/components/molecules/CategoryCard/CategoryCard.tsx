import React from "react";
import styled from "styled-components";

const CategoryCardContainer = styled.div`
  height: 150px;
  width: 200px;
  background-color: black;
  color: white;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 5px white;
  transition: transform 50ms ease;
`;

export const CategoryCard = () => {
  return (
    <CategoryCardContainer>
      <h3>Category Card</h3>
    </CategoryCardContainer>
  );
};
