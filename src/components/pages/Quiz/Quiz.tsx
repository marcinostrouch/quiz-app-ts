import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import sampleSize from "lodash-es/sampleSize";
import { useGetCategoryQuestionsQuery } from "../../../api/api";
import { RootState } from "../../../redux/store";
import { QuestionCard } from "../../molecules/QuestionCard/QuestionCard";
import { Answers } from "../../organisms/Answers/Answers";
import { QUESTIONS_FROM_API_AMOUNT, QUIZ_QUESTIONS_TOTAL_NUM } from "../../../constants/constants";
import { QuizQuestion } from "../../../types/global";

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

type QuizQuestions = QuizQuestion[] | null;
type CurrentQuestion = QuizQuestion | null;

// TODO: add content loader and error handling
export const Quiz = () => {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestions>(null);
  const [currentQuestion, setCurrentQuestion] = useState<CurrentQuestion>(null);
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
  const [score, setScore] = useState(0);

  const {
    selectedCategory: { id: categoryId, name: categoryName },
    selectedDifficulty,
  } = useSelector((state: RootState) => state);

  // TODO: handle isLoading and error
  const {
    data: { results: categoryQuestions } = {},
    error,
    isLoading,
  } = useGetCategoryQuestionsQuery({
    questionsAmount: QUESTIONS_FROM_API_AMOUNT,
    categoryId,
    difficulty: selectedDifficulty.toLowerCase(),
  });

  useEffect(() => {
    if (quizQuestions) {
      setCurrentQuestion(quizQuestions[currentQuestionNum]);
    }
  }, [quizQuestions, currentQuestionNum]);

  useEffect(() => {
    if (categoryQuestions) {
      const randomSampleQuestions: QuizQuestions = sampleSize(categoryQuestions, QUIZ_QUESTIONS_TOTAL_NUM);

      setQuizQuestions(randomSampleQuestions);
    }
  }, [categoryQuestions]);

  const handleAnswerClick = useCallback(
    (answer: string) => {
      // process score
      // const correctAnswer = currentQuestion?.correct_answer;
      const { correct_answer: correctAnswer } = currentQuestion || {};

      if (answer === correctAnswer) {
        setScore((prev) => prev + 1);
      }

      // set new current question
      if (currentQuestionNum < QUIZ_QUESTIONS_TOTAL_NUM) {
        setCurrentQuestionNum((prev) => prev + 1);
      }
    },
    [currentQuestion]
  );

  return (
    <QuizContainer>
      <h1>{categoryName}</h1>
      <QuestionCard question={currentQuestion?.question} />
      <Answers {...{ handleAnswerClick }} />
    </QuizContainer>
  );
};
