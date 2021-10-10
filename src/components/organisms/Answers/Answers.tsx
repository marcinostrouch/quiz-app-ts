import React, { MutableRefObject, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { increaseScore } from "../../../redux/quizScoreSlice";
import { useAppDispatch } from "../../../redux/store";
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
  const [colorForTrueBtn, setColorForTrueBtn] = useState("");
  const [colorForFalseBtn, setColorForFalseBtn] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsAnswerChecked(false);
    setColorForTrueBtn("");
    setColorForFalseBtn("");
  }, [isNewQuestion]);

  useEffect(() => {
    if (isAnswerChecked && correctAnswer && correctAnswer === STR_TRUE) {
      setColorForTrueBtn(colours.greenDarkMoss);
      setColorForFalseBtn(colours.redRufous);
    } else if (isAnswerChecked && correctAnswer && correctAnswer === STR_FALSE) {
      setColorForTrueBtn(colours.redRufous);
      setColorForFalseBtn(colours.greenDarkMoss);
    }
  }, [isAnswerChecked, correctAnswer]);

  // TODO: rename all checkbox-related functions and variables -> buttons
  const handleChecked = useCallback(
    (checkboxVal) => {
      console.log({ correctAnswer, checkboxVal });
      setIsAnswerChecked(true);

      if (checkboxVal === correctAnswer) {
        dispatch(increaseScore());
      }

      handleAnswerClick(checkboxVal);
    },
    [correctAnswer]
  );

  // TODO: replace the buttons with checkboxes
  return (
    <AnswersContainer>
      <CheckboxesContainer>
        <AnswerCheckbox answerValue={STR_TRUE} {...{ handleChecked }} color={colorForTrueBtn} />
        <AnswerCheckbox answerValue={STR_FALSE} {...{ handleChecked }} color={colorForFalseBtn} />
      </CheckboxesContainer>
    </AnswersContainer>
  );
};
