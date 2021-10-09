import React from "react";
import styled from "styled-components";
import { AnswerCheckbox } from "../../molecules/AnswerCheckbox/AnswerCheckbox";
import { STR_TRUE, STR_FALSE } from "../../../constants/constants";
import { HandleAnswerClick } from "../../molecules/AnswerCheckbox/types";

const AnswersContainer = styled.div`
  height: 100px;
  width: 100%;
  background-color: #3c3e47;
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
  handleAnswerClick: HandleAnswerClick;
};

export const Answers = ({ handleAnswerClick }: AnswersProps) => {
  return (
    <AnswersContainer>
      <CheckboxesContainer>
        <AnswerCheckbox answerValue={STR_TRUE} {...{ handleAnswerClick }} />
        <AnswerCheckbox answerValue={STR_FALSE} {...{ handleAnswerClick }} />
      </CheckboxesContainer>
    </AnswersContainer>
  );
};
