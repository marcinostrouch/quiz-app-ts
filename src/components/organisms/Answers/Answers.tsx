import React, { MutableRefObject, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { colours } from "../../../styles/colours";
import { AnswerCheckbox } from "../../molecules/AnswerCheckbox/AnswerCheckbox";
import { STR_TRUE, STR_FALSE } from "../../../constants/constants";
import { HandleAnswerClick } from "../../molecules/AnswerCheckbox/types";

const AnswersContainer = styled.div`
  margin-top: 1.6rem;
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CheckboxesContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type AnswersProps = {
  correctAnswer: string;
  handleAnswerClick: HandleAnswerClick;
  isNewQuestion: boolean;
};

export const Answers = ({ correctAnswer, handleAnswerClick, isNewQuestion }: AnswersProps) => {
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [colorForTrue, setColorForTrue] = useState("");
  const [colorForFalse, setColorForFalse] = useState("");

  useEffect(() => {
    setIsAnswerChecked(false);
    setColorForTrue("");
    setColorForFalse("");
  }, [isNewQuestion]);

  useEffect(() => {
    if (isAnswerChecked && correctAnswer === STR_TRUE) {
      setColorForTrue(colours.greenDarkMoss);
      setColorForFalse("red");
    } else if (isAnswerChecked && correctAnswer === STR_FALSE) {
      setColorForTrue(colours.redRufous);
      setColorForFalse("green");
    }
  }, [isAnswerChecked]);

  const handleChecked = useCallback((checkboxVal) => {
    setIsAnswerChecked(true);
    handleAnswerClick(checkboxVal);
  }, []);

  // TODO: replace the buttons with checkboxes
  return (
    <AnswersContainer>
      <CheckboxesContainer>
        <AnswerCheckbox answerValue={STR_TRUE} {...{ handleChecked }} color={colorForTrue} />
        <AnswerCheckbox answerValue={STR_FALSE} {...{ handleChecked }} color={colorForFalse} />
      </CheckboxesContainer>
    </AnswersContainer>
  );
};
