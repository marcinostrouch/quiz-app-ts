import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colours } from "../../../styles/colours";
import { breakpoints } from "../../../styles/breakpoints";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 10vh;
  border-bottom: 1px solid rgba(72, 190, 255, 0.21);
`;

const Logo = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  padding-left: 1rem;
  text-decoration: none !important;

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 2.1rem;
  }

  :hover {
    color: ${colours.blueCapri};
  }
`;

export const Header = () => (
  <HeaderContainer>
    <NavLink to="/" style={{ textDecoration: "none" }}>
      <Logo>Quiz Mania</Logo>
    </NavLink>
  </HeaderContainer>
);
