import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";
import { colours } from "../../../styles/colours";

export const Button = styled.button<{ color: string }>`
  background-color: ${({ color }) => color || "transparent"};
  border: 1px solid ${colours.blueOxfordWithAlpha};
  border-radius: 5px;
  height: 3rem;
  width: 8rem;
  margin: 0.5rem;

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin: 1rem;
  }
`;
