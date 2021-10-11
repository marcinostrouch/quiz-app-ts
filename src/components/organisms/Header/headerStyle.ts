import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  border-bottom: 1px solid rgba(72, 190, 255, 0.21);
  padding: 0 1rem;

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 0 5vw;
  }
`;

export const Logo = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none !important;

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 2.1rem;
  }
`;
