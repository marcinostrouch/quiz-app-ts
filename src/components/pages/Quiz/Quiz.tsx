import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import sampleSize from "lodash-es/sampleSize";
import { decode } from "html-entities";
import { useGetCategoryQuestionsQuery } from "../../../api/api";
import { RootState } from "../../../redux/store";
import { breakpoints } from "../../../styles/breakpoints";
import { colours } from "../../../styles/colours";
import { QuestionCard } from "../../molecules/QuestionCard/QuestionCard";
import { Answers } from "../../organisms/Answers/Answers";
import { QuizQuestion } from "../../../types/global";
import { Progress } from "../../organisms/Progress/Progress";
import {
  NEXT_QUESTION_SET_TIMEOUT_DELAY,
  QUESTIONS_FROM_API_AMOUNT,
  QUIZ_QUESTIONS_TOTAL_NUM,
} from "../../../constants/constants";

const QuizContainer = styled.div`
  height: 90vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CategoryName = styled.div`
  font-size: 1.6rem;
  margin-bottom: 2.1rem;

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 2.1rem;
  }
`;

const ProgressToNextQuestion = styled.div<{ isProgress: boolean; timeoutDuration: number }>`
  width: 90vw;
  height: 1px;
  display: inline-block;
  visibility: ${({ isProgress }) => (isProgress ? "visible" : "hidden")};
  background-size: 200% 200%;
  transition-property: background-position;
  transition-duration: ${({ timeoutDuration }) => {
    console.log("timeoutDuration ===", timeoutDuration);
    return timeoutDuration + "ms";
  }};

  background-image: linear-gradient(to right, ${colours.yellowGamboge} 50%, ${colours.blackRichFograWithAlpha} 0);
  background-position: ${({ isProgress }) => (isProgress ? "left" : "right")};

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 70vw;
  }
`;

//------------------------------------------                                   -

type QuizQuestions = QuizQuestion[] | null;

// TODO:
//  add content loader and error handling
//  fix progress/score (perhaps: because currentQUestionNum jest nieaktualny ??????)

export const Quiz = () => {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestions>(null);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [currentQuestionText, setCurrentQuestionText] = useState("");
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
  const [isNewQuestion, setIsNewQuestion] = useState(false);
  const [isProgressToNextQuestion, setIsProgressToNextQuestion] = useState(false);
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
    if (categoryQuestions) {
      const randomSampleQuestions: QuizQuestions = sampleSize(categoryQuestions, QUIZ_QUESTIONS_TOTAL_NUM);

      setQuizQuestions(randomSampleQuestions);
    }
  }, [categoryQuestions]);

  useEffect(() => {
    if (quizQuestions) {
      setCurrentQuestionText(quizQuestions[currentQuestionNum]?.question);
      setCorrectAnswer(quizQuestions[currentQuestionNum]?.correct_answer);

      // Refresh Answers component
      setIsNewQuestion(true);
      setIsProgressToNextQuestion(false);
    }
  }, [quizQuestions, currentQuestionNum]);

  const handleAnswerClick = useCallback(
    (answer: string) => {
      setIsProgressToNextQuestion(true);
      // Prepare Answers rerender
      setIsNewQuestion(false);

      if (answer === correctAnswer) {
        console.log("correctAnswer ===", correctAnswer);
        setScore((prev) => prev + 1);
      }

      // set new current question
      if (currentQuestionNum < QUIZ_QUESTIONS_TOTAL_NUM) {
        setTimeout(() => setCurrentQuestionNum((prev) => prev + 1), NEXT_QUESTION_SET_TIMEOUT_DELAY);
      }
    },
    [currentQuestionNum, correctAnswer]
  );

  return (
    <QuizContainer>
      <CategoryName>{categoryName}</CategoryName>
      <QuestionCard question={decode(currentQuestionText)} />
      <Answers {...{ handleAnswerClick, correctAnswer, isNewQuestion }} />
      <Progress {...{ currentQuestionNum }} />
      <ProgressToNextQuestion isProgress={isProgressToNextQuestion} timeoutDuration={NEXT_QUESTION_SET_TIMEOUT_DELAY} />
    </QuizContainer>
  );
};
