import React from "react";
import { QUIZ_QUESTIONS_TOTAL_NUM } from "../../../constants/constants";
import { ProgressContainer } from "./progressStyle";

type ProgressProps = {
  currentQuestionIdx: number;
};

export const Progress = ({ currentQuestionIdx }: ProgressProps) => {
  const questionNum = currentQuestionIdx < QUIZ_QUESTIONS_TOTAL_NUM ? currentQuestionIdx + 1 : currentQuestionIdx;

  return <ProgressContainer>{`Question: ${questionNum} / ${QUIZ_QUESTIONS_TOTAL_NUM}`}</ProgressContainer>;
};
