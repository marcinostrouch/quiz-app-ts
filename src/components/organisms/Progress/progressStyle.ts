import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";
import { colours } from "../../../styles/colours";

export const ProgressContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  height: 2rem;
  color: ${colours.white};
  font-size: 0.8rem;

  width: 90vw;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 70vw;
    height: 3.4rem;
  }
`;
