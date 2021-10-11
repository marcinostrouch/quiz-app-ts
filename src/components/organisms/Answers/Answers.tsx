import React, { useCallback, useEffect, useState } from "react";
import { increaseScore } from "../../../redux/quizScoreSlice";
import { useAppDispatch } from "../../../redux/store";
import { colours } from "../../../styles/colours";
import { AnswerButton } from "../../atoms/AnswerButton/AnswerButton";
import { STR_TRUE, STR_FALSE } from "../../../constants/constants";
import { HandleAnswerClick } from "../../atoms/AnswerButton/types";
import { AnswersContainer, CheckboxesContainer } from "./answersStyle";

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

  const handleOnClick = useCallback(
    (answerValue) => {
      setIsAnswerChecked(true);

      if (answerValue === correctAnswer) {
        dispatch(increaseScore());
      }

      handleAnswerClick(answerValue);
    },
    [correctAnswer]
  );

  // TODO: replace the buttons with checkboxes
  return (
    <AnswersContainer>
      <CheckboxesContainer>
        <AnswerButton answerValue={STR_TRUE} {...{ handleOnClick }} color={colorForTrueBtn} />
        <AnswerButton answerValue={STR_FALSE} {...{ handleOnClick }} color={colorForFalseBtn} />
      </CheckboxesContainer>
    </AnswersContainer>
  );
};
