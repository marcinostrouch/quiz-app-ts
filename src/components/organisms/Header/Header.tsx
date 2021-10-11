import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { PATH_QUIZ } from "../../../constants/constants";
import { Settings } from "../Settings/Settings";
import { HeaderContainer, Logo } from "./headerStyle";

export const Header = () => {
  const [isQuizOn, setIsQuizOn] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes(PATH_QUIZ)) {
      setIsQuizOn(true);
    } else {
      setIsQuizOn(false);
    }
  }, [pathname]);

  return (
    <HeaderContainer>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <Logo>Quiz Mania</Logo>
      </NavLink>
      {!isQuizOn && <Settings />}
    </HeaderContainer>
  );
};
