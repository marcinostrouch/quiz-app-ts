import React from "react";
import styled from "styled-components";
import { QUIZ_QUESTIONS_TOTAL_NUM } from "../../../constants/constants";
import { breakpoints } from "../../../styles/breakpoints";
import { colours } from "../../../styles/colours";

const ProgressContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  height: 2rem;
  color: ${colours.white};
  font-size: 0.8rem;

  width: 90vw;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 70vw;
    height: 3.4rem;
  }
`;

type ProgressProps = {
  currentQuestionNum: number;
};

export const Progress = ({ currentQuestionNum }: ProgressProps) => {
  return <ProgressContainer>{`Question: ${currentQuestionNum + 1} / ${QUIZ_QUESTIONS_TOTAL_NUM}`}</ProgressContainer>;
};
