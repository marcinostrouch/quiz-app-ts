import React from "react";
import styled from "styled-components";

const QuestionCardContainer = styled.div`
  height: 21vh;
  width: 70vw;
  background: #6f6f6f;
  margin-top: 1rem;
`;

const QuestionParagraph = styled.p`
  font-size: 1.6rem;
`;

type QuestionCardProps = {
  question: string | undefined;
};

// TODO:
//  Add content loader
//  Move Answer buttons/checkboxes in here
export const QuestionCard = ({ question }: QuestionCardProps) => {
  return (
    <QuestionCardContainer>
      <QuestionParagraph>{question}</QuestionParagraph>
    </QuestionCardContainer>
  );
};
