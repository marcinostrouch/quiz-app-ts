import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";
import { colours } from "../../../styles/colours";

export const QuizContainer = styled.div`
  height: 90vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CategoryName = styled.div`
  font-size: 1.6rem;
  margin-bottom: 2.1rem;

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 2.1rem;
  }
`;

export const ProgressToNextQuestion = styled.div<{ isProgress: boolean; timeoutDuration: number }>`
  width: 90vw;
  height: 1px;
  display: inline-block;
  visibility: ${({ isProgress }) => (isProgress ? "visible" : "hidden")};
  background-size: 200% 200%;
  transition-property: background-position;
  transition-duration: ${({ isProgress, timeoutDuration }) => (isProgress ? timeoutDuration + "ms" : 0)};
  background-image: linear-gradient(to right, ${colours.yellowGamboge} 50%, ${colours.blackRichFograWithAlpha} 0);
  background-position: ${({ isProgress }) => (isProgress ? "left" : "right")};

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 70vw;
  }
`;
