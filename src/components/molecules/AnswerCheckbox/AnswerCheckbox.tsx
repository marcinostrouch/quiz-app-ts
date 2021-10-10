import React from "react";
import styled from "styled-components";
import { colours } from "../../../styles/colours";
import { HandleAnswerClick } from "./types";

const Checkbox = styled.button<{ color: string }>`
  background-color: ${({ color }) => color || "transparent"};
  border: 1px solid ${colours.blueOxfordWithAlpha};
  border-radius: 5px;
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
  return (
    <Checkbox onClick={() => handleChecked(answerValue)} {...{ color }}>
      {answerValue}
    </Checkbox>
  );
};
