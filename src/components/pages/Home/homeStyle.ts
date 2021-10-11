import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";
import { colours } from "../../../styles/colours";

export const HomeBottomContainer = styled.div`
  margin: 34px 0;
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-top: 144px;
    justify-content: right;
    padding-right: 5vw;
  }
`;

export const StartButton = styled.button`
  width: 55%;
  height: 55px;
  background-color: transparent;
  border: 1px solid ${colours.greenDarkMoss};
  border-radius: 5px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 233px;
  }

  :hover {
    background-color: ${colours.greenDarkMoss};
    cursor: pointer;
  }

  :disabled {
    cursor: not-allowed;
  }

  :hover:disabled::before {
    content: "Select category to ";
  }
`;
