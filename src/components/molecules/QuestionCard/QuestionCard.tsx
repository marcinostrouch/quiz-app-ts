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

// TODO: Add content loader
export const QuestionCard = ({ question }: QuestionCardProps) => {
  console.log("question ===", question);
  return (
    <QuestionCardContainer>
      <QuestionParagraph>{question}</QuestionParagraph>
    </QuestionCardContainer>
  );
};
