import React, { useMemo } from "react";
import styled from "styled-components";
import PulseLoader from "react-spinners/PulseLoader";
import { breakpoints } from "../../../styles/breakpoints";
import { colours } from "../../../styles/colours";
import { QuestionCardContainer, QuestionParagraph, PulseLoaderContainer } from "./questionCardStyle";

type QuestionCardProps = {
  question: string;
  isLoading: boolean;
};

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
