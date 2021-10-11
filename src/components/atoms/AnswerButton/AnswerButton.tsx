import React from "react";
import { Button } from "./answerButtonStyle";
import { AnswerCheckboxProps } from "./types";

export const AnswerButton = ({ answerValue, handleOnClick, color }: AnswerCheckboxProps) => {
  return (
    <Button onClick={() => handleOnClick(answerValue)} {...{ color }}>
      {answerValue}
    </Button>
  );
};
