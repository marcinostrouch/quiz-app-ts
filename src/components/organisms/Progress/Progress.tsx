import React from "react";
import styled from "styled-components";
import { QUIZ_QUESTIONS_TOTAL_NUM } from "../../../constants/constants";
import { colours } from "../../../styles/colours";

const ProgressContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  height: 100px;
  //background-color: #2b2d32;
  color: ${colours.white};

  width: 70vw;
`;

type ProgressProps = {
  currentQuestionNum: number;
};

export const Progress = ({ currentQuestionNum }: ProgressProps) => {
  return <ProgressContainer>{`Question: ${currentQuestionNum + 1} / ${QUIZ_QUESTIONS_TOTAL_NUM}`}</ProgressContainer>;
};
