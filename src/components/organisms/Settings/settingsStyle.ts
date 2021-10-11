import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";

export const SettingsIcon = styled.img`
  height: 1.6rem;
  filter: invert(100%);

  :hover {
    cursor: pointer;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    height: 2.1rem;
  }
`;
