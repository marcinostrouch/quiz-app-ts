import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Categories } from "../../organisms/Categories/Categories";

export const Home = () => {
  const history = useHistory();

  const handleOnClick = useCallback(() => {
    history.push("/quiz");
  }, []);

  return (
    <>
      <Categories />
      <button onClick={handleOnClick}>Start Quiz</button>
    </>
  );
};
