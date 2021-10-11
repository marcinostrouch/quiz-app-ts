import React from "react";
import { Link } from "react-router-dom";
import { NoMatchContainer } from "./noMatchStyle";

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
