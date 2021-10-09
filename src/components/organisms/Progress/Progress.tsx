import React from "react";
import styled from "styled-components";
import { QUIZ_QUESTIONS_TOTAL_NUM } from "../../../constants/constants";

const ProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: #2b2d32;
  color: orangered;
`;

type ProgressProps = {
  score: number;
};

export const Progress = ({ score }: ProgressProps) => {
  return <ProgressContainer>{`Score: ${score} / ${QUIZ_QUESTIONS_TOTAL_NUM}`}</ProgressContainer>;
};
