import React from "react";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();

  return (
    <>
      <div>Homepage</div>
      <button onClick={() => history.push("/quiz")}>Click here</button>
    </>
  );
};
