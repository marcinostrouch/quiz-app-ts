import React, { useRef, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { colours } from "../../../styles/colours";
import { breakpoints } from "../../../styles/breakpoints";
import { Settings } from "../../organisms/Settings/Settings";

const HeaderContainer = styled.div`
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

const Logo = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none !important;

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 2.1rem;
  }

  :hover {
    color: ${colours.blueCapri};
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <Logo>Quiz Mania</Logo>
      </NavLink>
      <Settings />
    </HeaderContainer>
  );
};
