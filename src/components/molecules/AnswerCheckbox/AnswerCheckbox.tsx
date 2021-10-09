import React from "react";
import { HandleAnswerClick } from "./types";

type AnswerCheckboxProps = {
  answerValue: string;
  handleAnswerClick: HandleAnswerClick;
};

export const AnswerCheckbox = ({ answerValue, handleAnswerClick }: AnswerCheckboxProps) => {
  return <button onClick={() => handleAnswerClick(answerValue)}>{answerValue}</button>;
};
