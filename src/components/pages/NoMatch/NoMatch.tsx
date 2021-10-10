import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { colours } from "../../../styles/colours";

const NoMatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 90vh;
  width: 100vw;
  background: ${colours.blackRichFograWithAlpha};

  h1 {
    margin: 13vh 1rem;
  }

  p {
    font-size: 1.4rem;
  }
`;

export const NoMatch = () => {
  return (
    <NoMatchContainer>
      <h1>404: There seems to be no such place...</h1>
      <p>
        How about going back <Link to="/">Home</Link>?
      </p>
    </NoMatchContainer>
  );
};
