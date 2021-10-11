import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";

export const CategorySelectContainer = styled.div`
  margin: 2rem 0;

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
    h1 {
      font-size: 2.1rem;
      margin: 3.4rem 0;
    }
  }
`;

export const CategoryCardsContainer = styled.div`
  min-height: 34vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (min-width: ${breakpoints.tablet}) {
    justify-content: center;
  }
`;
