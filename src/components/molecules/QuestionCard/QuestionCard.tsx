import React, { useMemo } from "react";
import styled from "styled-components";
import PulseLoader from "react-spinners/PulseLoader";
import { breakpoints } from "../../../styles/breakpoints";
import { colours } from "../../../styles/colours";

const QuestionCardContainer = styled.div`
  height: 34vh;
  width: 90vw;
  background: ${colours.blackRichFograWithAlpha};
  margin-top: 1rem;
  padding: 1.6rem;
  overflow: scroll;

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 70vw;
  }
`;

const QuestionParagraph = styled.p`
  line-height: 2.1rem;
  text-align: left;

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 1.4rem;
    text-align: center;
    line-height: 3.4rem;
  }
`;

const PulseLoaderContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type QuestionCardProps = {
  question: string;
  isLoading: boolean;
};

// TODO:
//  Add content loader
export const QuestionCard = ({ question, isLoading }: QuestionCardProps) => {
  return (
    <QuestionCardContainer>
      <QuestionParagraph>{question}</QuestionParagraph>
      <PulseLoaderContainer>
        <PulseLoader loading={isLoading} size={13} color={colours.blueDarkCornflower} />
      </PulseLoaderContainer>
    </QuestionCardContainer>
  );
};
