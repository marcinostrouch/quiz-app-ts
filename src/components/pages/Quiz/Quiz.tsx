import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import sampleSize from "lodash-es/sampleSize";
import { decode } from "html-entities";
import { useGetCategoryQuestionsQuery } from "../../../api/api";
import { RootState } from "../../../redux/store";
import { QuestionCard } from "../../molecules/QuestionCard/QuestionCard";
import { Answers } from "../../organisms/Answers/Answers";
import { QuizQuestion } from "../../../types/global";
import { Progress } from "../../organisms/Progress/Progress";
import { QUESTIONS_FROM_API_AMOUNT, QUIZ_QUESTIONS_TOTAL_NUM } from "../../../constants/constants";

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

// TODO:
//  add content loader and error handling
//  fix progress/score

export const Quiz = () => {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestions>(null);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [currentQuestionText, setCurrentQuestionText] = useState("");
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
  const [isNewQuestion, setIsNewQuestion] = useState(false);
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
      setCurrentQuestionText(quizQuestions[currentQuestionNum]?.question);
      setCorrectAnswer(quizQuestions[currentQuestionNum]?.correct_answer);

      // Refresh Answers component
      setIsNewQuestion(true);
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
      // Prepare Answers rerender
      setIsNewQuestion(false);

      if (answer === correctAnswer) {
        setScore((prev) => prev + 1);
      }

      // set new current question
      if (currentQuestionNum < QUIZ_QUESTIONS_TOTAL_NUM) {
        setTimeout(() => setCurrentQuestionNum((prev) => prev + 1), 3000);
      }
    },
    [currentQuestionNum, correctAnswer]
  );

  return (
    <QuizContainer>
      <h1>{categoryName}</h1>
      <QuestionCard question={decode(currentQuestionText)} />
      <Answers {...{ handleAnswerClick, correctAnswer, isNewQuestion }} />
      <Progress {...{ score }} />
    </QuizContainer>
  );
};
