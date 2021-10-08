import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.div`
  height: 10vh;
  border-bottom: 1px solid orangered;
`;

export const Header = () => (
  <HeaderContainer>
    <h1>Quiz Mania</h1>

    <NavLink to="/">Home</NavLink>
  </HeaderContainer>
);
