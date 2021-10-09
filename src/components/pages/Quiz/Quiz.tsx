import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useGetCategoryQuestionsQuery } from "../../../api/api";
import { RootState } from "../../../redux/store";

const QuizContainer = styled.div`
  height: 80vh;
  margin: 0 auto;
  //max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #383838;
`;

const QUESTIONS_AMOUNT = 20;

export const Quiz = () => {
  const {
    selectedCategory: { id: categoryId, name: categoryName },
    selectedDifficulty,
  } = useSelector((state: RootState) => state);

  // TODO: Add error and isLoading handling
  const {
    data: { results: categoryQuestions } = {},
    error,
    isLoading,
  } = useGetCategoryQuestionsQuery({
    questionsAmount: QUESTIONS_AMOUNT,
    categoryId,
    difficulty: selectedDifficulty.toLowerCase(),
  });

  useEffect(() => {
    if (categoryQuestions) {
      console.log("categoryQuestions ===", categoryQuestions);
    }
  }, [categoryQuestions]);

  const question = useMemo(() => categoryQuestions && categoryQuestions[0]?.question, [categoryQuestions]);
  console.log("question ===", question);

  return (
    <QuizContainer>
      <h1>{categoryName}</h1>
      <p>{question}</p>
    </QuizContainer>
  );
};
