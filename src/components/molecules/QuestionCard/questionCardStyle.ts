import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";
import { colours } from "../../../styles/colours";

export const QuestionCardContainer = styled.div`
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

export const QuestionParagraph = styled.p`
  line-height: 2.1rem;
  text-align: left;

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 1.4rem;
    text-align: center;
    line-height: 3.4rem;
  }
`;

export const PulseLoaderContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
