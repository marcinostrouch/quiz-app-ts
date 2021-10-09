import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { HandleAnswerClick } from "./types";

const Checkbox = styled.button<{ color: string }>`
  background-color: ${({ color }) => color || "yellow"};
  height: 3rem;
  width: 5rem;
  margin: 1rem;
`;

type AnswerCheckboxProps = {
  answerValue: string;
  handleChecked: HandleAnswerClick;
  color: string;
};

export const AnswerCheckbox = ({ answerValue, handleChecked, color }: AnswerCheckboxProps) => {
  console.log("color ===", color);
  return (
    <Checkbox onClick={() => handleChecked(answerValue)} {...{ color }}>
      {answerValue}
    </Checkbox>
  );
};
