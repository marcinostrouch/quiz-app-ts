import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";
import { colours } from "../../../styles/colours";

export const CategoryCardContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  //justify-content: center;
  align-items: center;
  height: 144px;
  width: 100%;
  background-color: ${({ isSelected }) => (isSelected ? colours.redRoseWood : colours.blackRichFogra)};
  color: white;
  font-size: 1.4rem;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(255, 255, 255, 0.38);
  transition: transform 50ms ease;

  :hover {
    cursor: pointer;
    background-color: ${colours.redBarnRed};
    box-shadow: 0 0 5px rgb(255, 255, 255);
    transform: scale(1.05);
  }

  h2 {
    font-size: 1.4rem;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    //width: 40%;
    width: 340px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    max-width: 340px;
  }
`;

export const CategoryName = styled.h2`
  padding-left: 1.4rem;
`;
